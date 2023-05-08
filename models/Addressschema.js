const mongoose=require("mongoose");


const Addressschema=new mongoose.Schema({
    fname: String,
        email: String,
        mobile: String,
        address: String,
        state: String,
        city:String,
        zip:String,
});



const Address=new mongoose.model("Address",Addressschema);


module.exports=Address;
