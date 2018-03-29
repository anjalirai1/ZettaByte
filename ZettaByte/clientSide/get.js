const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost');

client.on('connect',function(){
    client.subscribe('resFromServer');
    client.publish('getReq','Send me all devices');
});

// client.publish('getReq',' ');

client.on('message',function(topic,message){
    console.log("Topic: "+topic+" Message: ");
    if(topic == "resFromServer"){
        msg = JSON.parse(message);
        // msg = {};
        if(msg.type == 'GET'){const mqtt = require('mqtt');
        const client = mqtt.connect('mqtt://localhost');
        
        client.on('connect',function(){
            client.subscribe('resFromServer');
            client.publish('getReq','Send me all users');
        });
        
        // client.publish('getReq',' ');
        
        client.on('message',function(topic,message){
            console.log("Topic: "+topic+" Message: ");
            if(topic == "resFromServer"){
                msg = JSON.parse(message);
                // msg = {};
                if(msg.type == 'GET'){
                    if(msg.success){
                        console.log(msg.user);
                    }else{
                        console.log(msg.msg);
                    }
                }
            }
        });
            if(msg.success){
                console.log(msg.devices);
            }else{
                console.log(msg.msg);
            }
        }
    }
});
