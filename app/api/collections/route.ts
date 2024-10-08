
import { NextRequest, NextResponse } from "next/server";

import Collection from "@/lib/models/Collection";
import connect from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";

export const POST = async (req: NextRequest) => {
  console.log("POST request received");

  try {

    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    console.log("Connecting to MongoDB...");
    await connect();
    console.log("MongoDB is connected bro");

    const { title, description, image } = await req.json();
    console.log("Request data parsed:", { title, description, image });

    const existingCollection = await Collection.findOne({ title });
    console.log("Checked for existing collection");

    if (existingCollection) {
      console.log("Collection already exists:", existingCollection);
      return new NextResponse("Collection already exists", { status: 400 });
    }

    if (!title || !image) {
      console.log("Title and image are required");
      return new NextResponse("Title and image are required", { status: 400 });
    }

    const newCollection = new Collection({
      title,
      description,
      image,
    });

    await newCollection.save();
    console.log("New collection saved:", newCollection);

    return NextResponse.json(newCollection, { status: 200 });
    
  } catch (err) {
    console.log("collections_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }

};


export const GET = async (req: NextRequest) => {
  try {
    await connect();

    const collections = await Collection.find();


    return NextResponse.json(collections, { status: 200 })

  } catch (error) {
    console.log("[collections_GET]", error);
   
  }
};

