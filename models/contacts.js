const mongoose = require('mongoose');
//connect to mondb
//localhost
mongoose.connect('mongodb://localhost:27017/address', {useNewUrlParser: true});
mongoose.connection.on('connected',()=>{
console.log('connected');
})
//server
// mongoose.connect("mongodb+srv://test:test@address-kvpmm.mongodb.net/test?retryWrites=true&w=majority",
// { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log("connected to db"));
var conn =mongoose.Collection;
const addressSchema =new mongoose.Schema({
FirstName:String,
LastName:String,
DOB:String,
AnniversayDate:String,
Address:String,
Phone:String,
Email:String
});
var addressModel = mongoose.model('address', addressSchema);
module.exports=addressModel;