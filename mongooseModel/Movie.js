var schema = new Schema({
    name: String,
    image: String,
    year: Number,
    rating: Number,
    views: { type: Number, default: 0 },
    // views: [
    //     {
    //         type: undefined
    //     }
    // ],
    director: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Person"
        }
    ],
    description: String,
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre"
    },
    actor: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Person"
        }
    ]
})
export default mongoose.model("Movie", schema)
