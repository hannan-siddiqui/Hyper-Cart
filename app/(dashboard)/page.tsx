
import SalesChart from "@/components/custom ui/SalesChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  getSalesPerMonth,
  getTotalCustomers,
  getTotalSales,
} from "@/lib/actions/action";
import { CircleDollarSign, ShoppingBag, UserRound } from "lucide-react";

export default async function Home() {
  const totalRevenue = await getTotalSales().then((data) => data.totalRevenue);
  const totalOrders = await getTotalSales().then((data) => data.totalOrders);
  const totalCustomers = await getTotalCustomers();

  const graphData = await getSalesPerMonth();

  return (
    <div className=" px-8 py-10">
      <p className="text-5xl font-bold text-neutral-300">Dashboard</p>
      <Separator className="bg-grey-1 my-5" />

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-10">

        <Card className="bg-[#121212] text-neutral-400 border border-neutral-300">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-3xl">Total Revenue</CardTitle>
            <CircleDollarSign className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-extrabold">$ {totalRevenue}</p>
          </CardContent>
        </Card>

        <Card className="bg-[#121212] text-neutral-400 border border-neutral-300">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-3xl">Total Orders</CardTitle>
            <ShoppingBag className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-extrabold">{totalOrders}</p>
          </CardContent>
        </Card>


        <Card className="bg-[#121212] text-neutral-400 border border-neutral-300">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-3xl" >Total Customer</CardTitle>
            <UserRound className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-extrabold">{totalCustomers}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-10 bg-[#121212]">
        <CardHeader>
          <CardTitle className="text-neutral-300 text-3xl font-extrabold" >Sales Chart ($)</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart data={graphData} />
        </CardContent>
      </Card>
    </div>
  );
}