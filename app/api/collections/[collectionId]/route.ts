import { auth } from "@clerk/nextjs/server";
import connect from "@/lib/mongoDB";

import { NextRequest, NextResponse } from "next/server";
import Collection from "@/lib/models/Collection";
import Product from "@/lib/models/Product";



export const GET = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = auth();
  
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connect();
    
    const collection = await Collection.findById(params.collectionId);

    if (!collection) {
      return NextResponse.json({ error: "Collection not found" }, { status: 404 });
    }

    return NextResponse.json(collection, { status: 200 });
  } catch (err) {
    console.error("[collectionId_GET]", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
};


export const POST = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connect();
   
    let collection = await Collection.findById(params.collectionId);

    if (!collection) {
      return new NextResponse("Collection not found", { status: 404 });
    }

    const { title, description, image } = await req.json();

    if (!title || !image) {
      return new NextResponse("Title and image are required", { status: 400 });
    }

    collection = await Collection.findByIdAndUpdate(
      params.collectionId ,
      { title, description, image },
      { new: true }
    );


    await collection.save();

    return NextResponse.json(collection, { status: 200 });
  } catch (err) {
    console.log("[collectionId_POST]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};



export const DELETE = async (
    req: NextRequest,
    { params }: { params: { collectionId: string } }
  ) => {


    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      await connect();

      
      
  
  
      await Collection.findByIdAndDelete(params.collectionId);

      await Product.updateMany(
        { collections: params.collectionId },
        { $pull: { collections: params.collectionId } }
      );
    
      

      return new NextResponse("Collection is deleted", { status: 200 });

    } catch (err) {
      console.log("[collectionId_DELETE]", err);
      return new NextResponse("Internal error", { status: 500 });
    }
    
  };

