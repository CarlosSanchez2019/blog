const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://carlos_sanchez:43543071Dd$@cluster0-hddky.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(function(db){
        console.log('DateBase is conected')
    })