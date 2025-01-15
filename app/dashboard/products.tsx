import { Link } from "react-router";
import type { Route } from "./+types/products";
import { getProducts } from "~/models/product";

interface Product {
  _id?: string;
  image: string;
    title: string;
  description: string;
  price: number;
  quantity: string;
}



export async function loader() {
  let result = await getProducts();

  let results = result.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
  return results;
}

let ProductCard: React.FC<Product> = ({
  _id,
  image,
  title,
  description,
  price,
  quantity,
}) => {
  return (
    <div className="p-4 rounded-md  shadow-xl shadow-black hover:scale-[1.02] transition ease-in-out duration-500">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-lg mt-1">{description}</p>
      <p className="text-lg font-semibold mt-2 text-gray-400">Ksh {price}</p>
      <p className="text-gray-600 mt-1">{quantity}</p>
      <Link
        to={_id}
        className="inline-block mt-6 bg-blue-500 text-white py-1 px-7 rounded-md hover:bg-blue-900 transition ease-in-out duration-500"
      >
        Edit
      </Link>
    </div>
  );
};

export default function Products({ loaderData }: Route.ComponentProps) {
  let products = loaderData;
  console.log({ products });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
      {products?.map((product) => (
        <ProductCard
          _id={product._id}
          key={product._id}
          image={product.image}
          name={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
}