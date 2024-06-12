const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
       "firstname":String,
            "lastname":String,
            "college":String,
            "dob":String,
            "course":String,
            "mobile":String,
            "email":String,
            "address":String
    }
)
let studentmodel =mongoose.model("student",schema);
module.exports={studentmodel}