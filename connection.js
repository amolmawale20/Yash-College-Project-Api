const mongoose = require('mongoose')
//db connection
const db = 'mongodb://localhost:27017/College-Project'
mongoose.connect(db ,{useNewUrlParser:true, useUnifiedTopology:true}
).then(() => {
    console.log(`connection succesful`);

}).catch((err) => console.log(err));