import clientPromise from "~/db";

export async function loader() {
  const client = await clientPromise;
  const db = client.db("fatumayussuf");
  const users = await db.collection("users").find().toArray();

  return users.map((user) => ({
    id: user.id,
    email: user.email,
   phone:user.phone
  }));
}

export default function Customers({ loaderData }: { loaderData: any }) {
  return (
    <main className="px-6 xl:max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-8">Customers</h1>
      <ul className="space-y-4">
        {loaderData.map((user: any) => (
          <li key={user.id} className="p-4 border rounded-lg">
            <p>Email: {user.email}</p>
            <p>phone-number: {user.phone}</p>
           
          </li>
        ))}
      </ul>
    </main>
  );
}
