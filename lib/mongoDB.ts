import mongoose from 'mongoose';

// Tracks connection state
const connection:any = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log('Already connected to the database.');
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Use previous connection to the database.');
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect("mongodb+srv://mohdhannan774:Hannan@0079@hypercart.7fmsmo8.mongodb.net/?retryWrites=true&w=majority&appName=hypercart");
  console.log('New connection to the database.');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('Not disconnecting from the database.');
    }
  }
}

const db = { connectDb, disconnectDb };
export default db;

// import mongoose from "mongoose";

// let isConnected: boolean = false;

// export const connectToDB = async (): Promise<void> => {
//   mongoose.set("strictQuery", true)

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI || "", {
//       dbName: "hypercart"
//     })

//     isConnected = true;
//     console.log("MongoDB is connected");
//   } catch (err) {
//     console.log(err)
//   }
// }


