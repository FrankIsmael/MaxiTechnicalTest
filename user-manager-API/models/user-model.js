const mongoose = require('mongoose')
//const PLM = require('passport-local-mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String,required:true},
    email: {type: String, required: true},
    birthdate: Date,
    status: String,
    favorite_sports:{
        type: String,
        enum: ["futbol","basquetbol","natacion"]
}
},
{
    timestamps: true
})

//userSchema.plugin(PLM,{ usernameField: 'email'})
module.exports = mongoose.model('User',userSchema)