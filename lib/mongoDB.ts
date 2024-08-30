
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async ()=>{
  const connectionState = mongoose.connection.readyState;
     
  if(connectionState ===1){
    console.log("database connected");
    return
  }

  if (connectionState===2) {
    console.log("...connecting")
    return;
  }

  try{
    mongoose.connect(MONGODB_URI!,{
      dbName:"HYPERCART",
      bufferCommands:false,
    } )
    console.log("database connected ...");
    
  } catch(error){
    console.log(" error connecting databse", error);
    throw new Error("error connecting databse")
  }


}

export default connect;