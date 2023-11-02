const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL , {    // Here the mongoose npm module connects with the mongoDB and creates a database named 'task-manager-api'
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify : false,   // Used to avoid the deprecation warning that pops up when we use the 'findByIdAndUpdate(...)' method
    useUnifiedTopology:true 
})



