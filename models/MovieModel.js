export default {
    search(callback) {
        Movie.find().exec(callback)
    },
    getOne(id, callback) {
        Movie.findOne({
            _id: id
        }).exec((err, data) => {
            data.views = data.views + 1
            data.save(callback)
        })
    },
    create(name, callback) {
        var movie = Movie({
            name: name
        })
        movie.save(callback)
    },
    edit(id, name, callback) {
        Movie.findOne({
            _id: id
        }).exec((err, data) => {
            data.name = name
            data.save(callback)
        })
    },
    delete(id, callback) {
        Movie.deleteOne({
            _id: id
        }).exec(callback)
    }
}
