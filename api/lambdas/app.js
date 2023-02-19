const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentCluent({apiVersion: '2012-08-10'});

const secretTableName = process.env.SECRET_TABLE_NAME;

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
}
