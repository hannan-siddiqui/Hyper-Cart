"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

// import { columns } from "@/components/collections/CollectionColumns";
// import { DataTable } from "@/components/custom ui/DataTable";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import Loader from "@/components/custom ui/Loader";

const Collections = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  const getCollections = async () => {
    
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Collections</p>
        {/* <Button className="bg-blue-1 text-white" onClick={() => router.push("/collections/new")}>
          <Plus className="h-4 w-4 mr-2" />
          Create Collection
        </Button> */}
      </div>
      
    </div>
  );
};

export default Collections;
