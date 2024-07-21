"use client"

import { useEffect, useState } from "react"

import Loader from "@/components/custom ui/Loader"
import CollectionForm from "@/components/layout/collections/CollectionForm"


const CollectionDetails = ({ params }: { params: { collectionId: string }}) => {
  console.log(params.collectionId);
  
  const [loading, setLoading] = useState(true)
  const [collectionDetails, setCollectionDetails] = useState<CollectionType | null>(null)

  const getCollectionDetails = async () => {
    try { 
        console.log(params.collectionId);

      const res = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET"
      })

      console.log(res);

      const data = await res.json()
      setCollectionDetails(data)
      setLoading(false)
    } catch (err) {
      console.log("[collectionId_GET]", err)
    }
  }

  useEffect(() => {
    getCollectionDetails()
  }, [])


  return loading ? <Loader /> : (
    <CollectionForm initialData={collectionDetails} />
  )
}

export default CollectionDetails