const { Stack, StackProps } = require('aws-cdk-lib');
const { Construct } = require('constructs');
const { Table, AttributeType } = require('aws-cdk-lib').aws_dynamodb;
const iam = require('aws-cdk-lib').aws_iam;
const lambda = require('aws-cdk-lib').aws_lambda;
const { RestApi, LambdaIntegration } = require('aws-cdk-lib').aws_apigateway;


class ApiStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const table = new Table(this, 'GearTable', {
      tableName: 'GearTable',
      partitionKey: { name: 'id', type: AttributeType.STRING },
    });

    const getGearFunction = new lambda.Function(this, 'getGearFunction)', {
      functionName: 'getGearFunction',
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'get.handler',
      code: lambda.Code.fromAsset('./lambdas/gear')
    });

    const putGearFunction = new lambda.Function(this, 'putGearFunction', {
      functionName: 'putGearFunction',
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'put.handler',
      code: lambda.Code.fromAsset('./lambdas/gear')
    });

    const delGearFunction = new lambda.Function(this, 'delGearFunction', {
      functionName: 'delGearFunction',
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'del.handler',
      code: lambda.Code.fromAsset('./lambdas/gear')
    });

    table.grantFullAccess(getGearFunction);
    table.grantFullAccess(putGearFunction);
    table.grantFullAccess(delGearFunction);

    getGearFunction.addEnvironment('GEAR_TABLE_NAME', table.tableName);
    putGearFunction.addEnvironment('GEAR_TABLE_NAME', table.tableName);
    delGearFunction.addEnvironment('GEAR_TABLE_NAME', table.tableName);

    const gearApi = new RestApi(this, 'gearApi', {
      restApiName: 'gearApi',
      proxy: false,
      policy: new iam.PolicyDocument({
        statements: [
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: [
              'execute-api:Invoke',
            ],
            resources: [
              '*',
            ],
            principals: [
              new iam.AnyPrincipal(),
            ],
          }),
        ],
      }),
    });

    //  /gear
    const gear = gearApi.root.addResource('gear');

    // Add lambda functions to API resources
    gear.addMethod('PUT', new LambdaIntegration(putGearFunction));
    gear.addMethod('GET', new LambdaIntegration(getGearFunction));
    gear.addMethod('DELETE', new LambdaIntegration(delGearFunction));
  }
}

module.exports = { ApiStack }
