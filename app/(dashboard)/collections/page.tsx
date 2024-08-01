"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { columns } from "@/components/layout/collections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";


import Loader from "@/components/custom ui/Loader";

const Collections = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await res.json();
     
      setCollections(data);
      setLoading(false);
    } catch (err) {
      console.log("[collections_GET]", err);
    }
  };

  useEffect(() => {
    getCollections();
    
  }, []);





  return loading?<Loader/>:(
    <div className="px-10 py-5 text-neutral-500 bg-bg-[#0f0f0f] ">
    <div className="flex items-center justify-between">
      <p className="text-2xl font-bold">Collections</p>
      <Button className="bg-neutral-500 hover:bg-[#0f0f0f] text-white" onClick={() => router.push("/collections/new")}>
        <Plus className="h-4 w-4 mr-2 " />
        Create Collection
      </Button>
      
    </div>
    <Separator className="bg-grey-300 my-4" />

    <DataTable  columns={columns} data={collections} searchKey="title" />

  </div>
  );
};

export default Collections;
