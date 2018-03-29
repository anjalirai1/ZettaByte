const mongoose  = require('mongoose');
const Picture = require('../models/picture');
module.exports = function() {
    return {
       
        getAll : function(req, res){
            var query = Picture.find({});
            query.exec(function(err, picture){
                if(err) res.send(err)
                res.json(picture);
            });
        },
      
        post: function(req, res){
            var newPicture= new Picture(req.body);
            newPicture.save(function(err){
                if(err) res.send(err);
                res.json(req.body);
            });
        },
        getOne: function(req, res){
            Picture.findById(req.params.id, function(err, picture){
                if(err) res.send(err);
                res.json(picture);
            });     
        },

    }
};  
