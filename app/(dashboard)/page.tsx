// import SalesChart from "@/components/custom ui/SalesChart";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import {
//   getSalesPerMonth,
//   getTotalCustomers,
//   getTotalSales,
// } from "@/lib/actions/actions";
// import { CircleDollarSign, ShoppingBag, UserRound } from "lucide-react";

import LeftSideBar from "@/components/layout/LeftSideBar";
import { UserButton } from "@clerk/nextjs";

import "../globals.css";


export default async function Home() {
  // const totalRevenue = await getTotalSales().then((data) => data.totalRevenue);
  // const totalOrders = await getTotalSales().then((data) => data.totalOrders);
  // const totalCustomers = await getTotalCustomers();

  // const graphData = await getSalesPerMonth();

  return (
    <div className="px-8 py-10 ">
      
      <UserButton/>
     


    </div>
  );
}