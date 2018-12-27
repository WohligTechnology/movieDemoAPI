export default {
    search(callback) {
        console.log("in search")
        User.find().exec(callback)
    },
    getOne(id, callback) {
        console.log("abc")
        User.findOne({
            _id: id
        }).exec(callback)
    },
    create(data, callback) {
        var user = User(data)
        user.save(callback)
    },
    edit(id, name, email, password, favourites, callback) {
        User.findOne({
            _id: id
        }).exec((err, data) => {
            data.name = name
            data.email = email
            data.password = password
            data.favourites = favourites
            data.save(callback)
        })
    },
    delete(id, callback) {
        Genre.deleteOne({
            _id: id
        }).exec(callback)
    }
}
