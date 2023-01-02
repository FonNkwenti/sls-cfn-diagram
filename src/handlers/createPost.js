"use strict";

const { createPost } = require("../helpers/dynamo");
const { randomUUID } = require("crypto");
const { buildResponse, errorResponse } = require("../helpers/response");
const TableName = process.env.DYNAMODB_TABLE_NAME;

const handler = async (event) => {
  try {
    const item = JSON.parse(event.body);
    const postId = randomUUpostId();
    const now = new Date().toISOString();
    const keySchema = { PK: "postId" };

    let Item = {
      [keySchema.PK]: postId,
      ...item,
      createAt: now,
      updatedAt: now,
    };
    await createPost(TableName, Item);
    return buildResponse(201, Item);
  } catch (error) {
    return errorResponse(error);
  }
};

module.exports = {
  handler,
};
