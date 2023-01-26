const { DynamoDB } = require("aws-sdk");
const dynamo = new DynamoDB();
const docClient = new DynamoDB.DocumentClient();

const createPost = async (TableName, Item) =>
  await docClient.put({ TableName, Item }).promise();

module.exports = {
  createPost,
};
