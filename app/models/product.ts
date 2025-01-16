import { client } from "../mongoClient.server";
import { ObjectId } from "mongodb";

interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

let db = client.db("fatumayussuf");
let collection = db.collection("dashboard-products");

// Get all products from the database.
export async function getProducts(): Promise<Product[]> {
  return collection.find().toArray();
}

// Get a product by ID
export async function getProductById(id: string): Promise<Product | null> {
  return collection.findOne({ _id: new ObjectId(id) });
}

// Update a product in the database
export async function updateProduct(id: string, productData: Partial<Product>): Promise<void> {
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: productData }
  );
}
