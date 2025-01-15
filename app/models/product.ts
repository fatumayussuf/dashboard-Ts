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
// get product by id
 export async function getProductById(id:string):Promise<Product[]>{
 return collection.find({ _id: new ObjectId(id) }).toArray();
 }


