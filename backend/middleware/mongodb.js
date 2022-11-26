const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://shmrmhmd:shameer123@cluster0.8w6ktgs.mongodb.net/LibraryApp?retryWrites=true&w=majority"', {
    useNewUrlParser: true,//to enable new features of mongidb
    useUnifiedTopology: true//to enable new features of mongidb
})
    .then(() => {
        console.log("mongodb is connected successfully");

    })
    .catch((err) => {
        console.log("mongodb not connected" + err);
    });
