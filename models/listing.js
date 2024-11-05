const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Review = require("./Review");

const bookListingSchema = new Schema({
    title: {  
        type: String,
        required: true,
    },
    author: { 
        type: String,
        required: true,
    },
    genre: {  
        type: String,
        required: true,
    },
    publicationYear: {  
        type: Number,
        required: true,
    },
    coverImage: {  
        type: String,
        required: true,
    },
    description: { 
        type: String,
        required: true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        }
    ]
});
// bookListingSchema.post("findOneAndDelete", async (listing) => {
//     if (listing) {
//         await Review.deleteMany({ _id: { $in: listing.reviews } });
//     }
// });
const BookListing = mongoose.model("BookListing", bookListingSchema);
module.exports = BookListing;
