const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/form')
.then(()=>{
    console.log("Mongodb is connected !");
}).catch((error)=>{
    console.log("Mongodb is not connected !")
})
