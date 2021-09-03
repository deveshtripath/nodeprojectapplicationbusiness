const mongoose=require('mongoose');

//creating a databade
const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then((con) => {
    console.log('connection successful');
}).catch((err) => {
    console.log("the error is "+err);
});
// module.exports = {
//     mongoose
// };

// mongodb://localhost:/thapadyanamic