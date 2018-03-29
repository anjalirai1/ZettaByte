const request =require('request');
var payload={
    username:"anjali",
    email:"anjali.rai@gmail.com",

}

var connOpt={
    url:"http://localhost:4000/anjali",
    method:'POST',
    headers:{
        'content-Type':'application/json'
    },
    json:payload

}

request(connOpt,(err,res,body)=>{

    if(body.success)
        console.log(body.user);
    else {
        console.log(body.msg);	
    }	
});
