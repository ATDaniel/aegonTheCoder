const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const gearTableName = process.env.GEAR_TABLE_NAME;

exports.handler = async (event) => {
  const lambdaResponse = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE"
    },
    body: [],
  }

  const params = {
    TableName: gearTableName,
  }

  try {
    const gear = await docClient.scan(params).promise();
    console.log(gear.Items);
    
    gear.Items.forEach((item) => lambdaResponse.body.push(item));
  } catch (e) {
    lambdaResponse.statusCode = 400;
    lambdaResponse.body = e.message;
  } finally {
    lambdaResponse.body = JSON.stringify(lambdaResponse.body)
  }

  return lambdaResponse;
}