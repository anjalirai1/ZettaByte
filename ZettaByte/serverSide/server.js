const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost');
const mongoose = require('mongoose');
const db = mongoose.connection
mongoose.connect('mongodb://localhost/iotServer');

const Users = require('./users');

client.on('connect',function(){
    client.subscribe('getReq');
    client.subscribe('postReq');
    client.subscribe('delReq');
    client.subscribe('putReq');
    // client.subscribe('resFRomServer');
});

client.on('message',function(topic,message){
    
    if(topic=="getReq"){
        console.log("Topic: "+topic+" Message: "+message);
        Users.getUser((err,user)=>{
            console.log("in db function");
            if(err){
                console(err);
                client.publish("resFromServer",JSON.stringify({
                    success:false,
                    type:'GET',
                    msg:"Some Error"
                }));
            }else
            client.publish("resFromServer",JSON.stringify({
                success:true,
                type:'GET',
                user:user
            }));
        });
    }
    if(topic=="postReq"){
        console.log("Topic: "+topic+" Message: "+message);
        var Id = message.username;
        Users.getUserByUserID(Id,(err,user)=>{
            if (user.length != 0){                
                client.publish("resFromServer",JSON.stringify({
                    success:false,
                    type:'POST',
                    msg:"user already Present"
                }));
            }else{
                var newUser = JSON.parse(message);
                Users.addUser(newUser,(err,user)=>{
                    if (err){
                        console.error(err);                        
                        client.publish("resFromServer",JSON.stringify({
                            success:false,
                            type:'POST',
                            msg:"Some Error"
                        }));
                    } else {  
                        console.log("******************************8")
                        console.log(newUser)                      
                        console.log("******************************8")
                        client.publish("resFromServer",JSON.stringify({
                            success:true,
                            type:'POST',
                            msg:"User added successfully"
                        })); 
                    }
                });
            }
        })
    }
})
