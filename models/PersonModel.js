export default {
    search(callback) {
        Person.find().exec(callback)
    },
    getOne(id, callback) {
        Person.findOne({
            _id: id
        }).exec(callback)
    },
    create(data, callback) {
        var person = Person(data)
        person.save(callback)
    },
    edit(id, name, image, dob, callback) {
        Person.findOne({
            _id: id
        }).exec((err, data) => {
            data.name = name
            data.image = image
            data.dob = dob
            data.save(callback)
        })
    },
    delete(id, callback) {
        Person.deleteOne({
            _id: id
        }).exec(callback)
    }
}
