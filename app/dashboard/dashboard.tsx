import { ChartNoAxesColumnIncreasing, PersonStanding, Settings, ShoppingBasket } from "lucide-react";
import { NavLink, Outlet} from "react-router";
import {  requireUser } from "~/supabase.server";
import type { Route } from "./+types/dashboard";

export async function loader({request}:Route.LoaderArgs){
  await requireUser (request);
  return null;
}

export default function Dashboard() {
  let dashboardLinks = [
    {
      path: "/dashboard",
      text: "Dashboard",
      icon:<ChartNoAxesColumnIncreasing/>
    },
    {
      path:"/dashboard/products",
      text: "Products",
      icon:<ShoppingBasket/>,
    },
    {
      path: "/dashboard/customers",
      text: "Customers",
      icon:<PersonStanding/>,
    },
    {
      path: "/dashboard/settings",
      text: "Settings",
      icon:<Settings/>
    },
  ];
  return (
    <main className="flex">
      {/* side Navigation */}
      <nav className="w-96 bg-zinc-600 min-h-screen">
        <ul>
        {dashboardLinks.map((item)=>(
           
           <li className="p-2 list-style-type: none;" key={crypto.randomUUID()}>
             <NavLink
               to={item.path}
               className="bg-[#353b45] w-full  p-3 rounded-md flex gap-2 items-center hover:text-orange-500 transition ease-in-out duration-300"
             >
               <span>{item.icon}</span>
               <span>{item.text}</span>
             </NavLink>
           </li>
         

        ))}
       </ul>
      </nav>
      <div className="w-full"> 
        <Outlet/>
        </div>
    </main>
  );
}
