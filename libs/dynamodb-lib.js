import AWS from "./aws-sdk";
import config from "../config";

const client = new AWS.DynamoDB.DocumentClient();

export default {
  get: (params) => client.get(updateTableName(params)).promise(),
  query: (params) => client.query(updateTableName(params)).promise(),
  put: (params) => client.put(updateTableName(params)).promise(),
  update: (params) => client.update(updateTableName(params)).promise(),
  delete: (params) => client.delete(updateTableName(params)).promise(),
};

function updateTableName(params) {
  return {
    ...params,
    TableName: `${config.resourcesStage}-${params.TableName}`,
  };
}

