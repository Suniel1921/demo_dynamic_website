const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// mongoose.connect('mongodb://127.0.0.1:27017/form')
mongoose.connect('mongodb+srv://anil:anil1921@cluster0.634sltj.mongodb.net/?retryWrites=true&w=majority')

.then(()=>{
    console.log("Mongodb is connected !");
}).catch((error)=>{
    console.log("Mongodb is not connected !")
})
