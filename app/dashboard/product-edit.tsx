import { useLoaderData, Form, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "~/models/product";

export async function loader({ params }: Route.LoaderArgs) {
  const product = await getProductById(params.id);
  return product ? { ...product, _id: product._id.toString() } : null;
}

export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();
  const updatedProduct = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    quantity: formData.get("quantity"),
    image: formData.get("image"),
  };
  await updateProduct(params.id, updatedProduct);
  return null;
}

export default function EditProduct() {
  const product = useLoaderData();
  const navigate = useNavigate();

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <Form method="post" className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={product.title}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-semibold">Description</label>
          <textarea
            name="description"
            id="description"
            defaultValue={product.description}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="price" className="block font-semibold">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            defaultValue={product.price}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block font-semibold">Quantity</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            defaultValue={product.quantity}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="image" className="block font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={product.image}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/products")}
            className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}
