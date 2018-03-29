var express = require('express');
var router = express.Router();
const Users = require('../models/users');
//to add new device if  it is not present 

router.post('/post', (req, res, next) => {      //checking for already existing device
    var newUser = req.body;
    var Id = newUser.username;
    Users.getUserbyId(Id,(err,user)=>{
        if (user.length != 0){
            res.json({
                status:false,
                msg:"User already Present"
            });
        }else{
            Users.addUser(newUser,(err,user)=>{
                if (err){
                    console.error(err);
                    res.json({
                        success: false,
                        msg: "Some Error"
                    });
                } else {
                    res.json({
                        success:true,
                        msg:"User registered successfully",
                        user:user
                    })
                }
            });
        }
    })
    
});

router.put('/update', (req, res, next) => {           //checking for existance
    var newUser = req.body;
    console.log(newUser)
    var Id = newUser.username;
    Users.getUserbyId(Id,(err,user)=>{
        if (user.length == 0){
            res.json({
                status:false,
                msg:"User Does Not Exist"
            });
        }else{
            Users.updateUser(newUser,{},(err,user)=>{
                if (err){
                    console.error(err);
                    res.json({
                        success: false,
                        msg: "Some Error"
                    });
                } else {
                    res.json({
                        success:true,
                        msg:"User updated successfully....",
                        user:user
                    })
                }
            });
        }
});
});

router.delete('/del', (req, res, next) => {           //checking for existance
    var newUser = req.body;
    var Id = newUser.username;
    Users.getUserbyId(Id,(err,user)=>{
        console.log(user);
        if (user.length == 0){
            res.json({
                status:false,
                msg:"User Does Not Exist"
            });
        }else{
            Users.removeUser(Id, (err,user)=>{
                if (err){
                    console.error(err);
                    res.json({
                        success: false,
                        msg: "Some Error"
                    });
                } else {
                    res.json({
                        success:true,
                        msg:"Device removed successfully....",
                        user:user
                    })
                }
            });
        }
    });
});


router.get('/get',(req,res,next)=>{
    Users.getUser((err,users)=>{
        console.log(users);
        if (err){
            console.error(err);
            res.json({
                success:false,
                msg:"Some Error"
            })
        }else{
            res.json({
                success:true,
                users:users
            })
        }
    });
});


router.get('/:_id', (req, res) => {
    Users.getUserById(req.params._id, (err, user) => {
      if (err) {
        console.log("Some Error");
        res.send(
          '<h1>User Not found</h1><h2>Id not registered</h2>'
        );
      } else res.json(user);
    });
  });



module.exports = router;
