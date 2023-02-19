const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const uuid = require('uuid');

const gearTableName = process.env.GEAR_TABLE_NAME;

exports.handler = async (event) => {
  const lambdaResponse = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE"
    },
    body: '',
  }

  const gearId = event.queryStringParameters.id;

  try {
    const params = {
      TableName: gearTableName,
      Key: {
        "id": gearId,
      },
    };

    const results = await docClient.delete(params)

    lambdaResponse.body = results;
  } catch (e) {
    lambdaResponse.statusCode = 400;
    lambdaResponse.body = e.message;
  }

  return lambdaResponse;
}