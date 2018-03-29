const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

const User = module.exports = mongoose.model('Users', userSchema);

module.exports.addUser = (user, callback) => {
    User.create(device, callback);
}
module.exports.getUser = (callback) => {
    User.find(callback);
}
module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.updateUser = (user,options,callback)=>{
    query = {
        username: user.username
    }

    var update = {
        email : user.email
    }

    User.findOneAndUpdate(query,update,options,callback);
}
module.exports.removeUser=(username,callback)=> {
    query={
        username: username
    };
    User.remove(query,callback);
}
