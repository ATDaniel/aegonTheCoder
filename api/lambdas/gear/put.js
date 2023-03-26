const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const gearTableName = process.env.GEAR_TABLE_NAME;

exports.handler = async (event) => {

  const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const lambdaResponse = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE"
    },
    body: '',
  }

  try {
    const requestBody = JSON.parse(event.body);
    const gearId = uuid();

    const results = await docClient.put({
      TableName: gearTableName,
      Item: {
        "id": gearId,
        "content": requestBody,
      }
    }).promise();
    lambdaResponse.body = results;
  } catch (e) {
    lambdaResponse.statusCode = 400;
    lambdaResponse.body = e.message
  } finally {
    lambdaResponse.body = JSON.stringify(lambdaResponse.body);
  }

  return lambdaResponse;
}