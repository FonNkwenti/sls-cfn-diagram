const { DynamoDB } = require("aws-sdk");
const dynamo = new DynamoDB();
const docClient = new DynamoDB.DocumentClient();

// const createTable = async (params) => {
//   const { TableName, KeySchema, AttributeDefinitions, ProvisionedThroughput } =
//     params;
//   return await dynamo.createTable({
//     TableName,
//     KeySchema,
//     AttributeDefinitions,
//     ProvisionedThroughput,
//   }).promise;
// };

const createPost = async (TableName, Item) =>
  await docClient.put({ TableName, Item }).promise();

module.exports = {
  createPost,
  createTable,
};
