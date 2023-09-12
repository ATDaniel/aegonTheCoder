const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const { compareSync } = require('bcryptjs');

const authTableName = process.env.AUTH_TABLE_NAME;

exports.handler = async (event) => {
  const lambdaResponse = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE"
    },
    body: {
      message: '',
      match: false,
    },
  }

  const { email, password } = JSON.parse(event.body);

  const userParams = {
    TableName: authTableName,
    Key: {
      email: email,
    }
  }

  try {
    const response = await docClient.get(userParams).promise();
    const user = response.Item;

    if (!user) {
      lambdaResponse.statusCode = 404;
      lambdaResponse.body.message = 'User not found'
      lambdaResponse.body = JSON.stringify(lambdaResponse.body);
      return lambdaResponse;
    }

    const isMatch = compareSync(password, user.password);

    if (!isMatch) {
      lambdaResponse.statusCode = 400;
      lambdaResponse.body.message = 'Passwords did not match'
      lambdaResponse.body = JSON.stringify(lambdaResponse.body);
      return lambdaResponse;
    }

    lambdaResponse.body.match = true;
    lambdaResponse.body.message = 'User logged in successfully!';

    lambdaResponse.body = JSON.stringify(lambdaResponse.body);
  } catch (e) {
    lambdaResponse.statusCode = 500;
    lambdaResponse.body.message = 'Something went wrong'
    lambdaResponse.body.error = e.message;
    lambdaResponse.body = JSON.stringify(lambdaResponse.body);
  } finally {
    console.log(`In Post endpoint: ${JSON.stringify(lambdaResponse)}`)
    return lambdaResponse;
  }
}