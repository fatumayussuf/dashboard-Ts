import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING;

if (!uri) {
  throw new Error("Please define the MONGODB_CONNECTION_STRING environment variable");
}

const client = new MongoClient(uri);

export default client;
