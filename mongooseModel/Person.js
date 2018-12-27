var schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    dob: { type: Date }
})
export default mongoose.model("Person", schema)
