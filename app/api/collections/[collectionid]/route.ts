// import { auth } from "@clerk/nextjs/server";
import connect from "@/lib/mongoDB";

import { NextRequest, NextResponse } from "next/server";
import Collection from "@/lib/models/Collection";

export const DELETE = async (
    req: NextRequest,
    { params }: { params: { collectionId: string } }
  ) => {
    try {
      // const { userId } = auth();
  
      // if (!userId) {
      //   return new NextResponse("Unauthorized", { status: 401 });
      // }
  
      await connect();

      const collectionid = req.nextUrl.pathname.split('/').pop();
      
      console.log(collectionid);
  
      await Collection.findByIdAndDelete(collectionid);
  
    //   await Product.updateMany(
    //     { collections: params.collectionId },
    //     { $pull: { collections: params.collectionId } }
    //   );
      

      return new NextResponse("Collection is deleted", { status: 200 });

    } catch (err) {
      console.log("[collectionId_DELETE]", err);
      return new NextResponse("Internal error", { status: 500 });
    }
    
  };

