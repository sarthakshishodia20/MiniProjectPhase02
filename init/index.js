const dotenv=require("dotenv");
dotenv.config({path:'./.env'});
console.log(process.env.MONGO_URI ? "MONGO_URI is loaded" : "MONGO_URI is not loaded");


const mongoose = require("mongoose");
// const initData = require("./data");
// const BookListing = require("../models/listing");

const MONGO_URL = process.env.MONGO_URI;

async function main() {
    try {
        // Establish MongoDB connection
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to Database");

        // Initialize the database with sample data
        await initDB();
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

// Initialize the database with sample data
// const initDB = async () => {
//     try {
//         // Delete existing documents and insert new ones
//         await BookListing.deleteMany({});
//         await BookListing.insertMany(initData.data);
//         console.log("Data was initialized");
//     } catch (error) {
//         console.error("Error initializing data:", error);
//     }
// };

main();
