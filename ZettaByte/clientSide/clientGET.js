const request=require('request');

var payload={
	"username":"anjali",
    "email":"anjali.rai@gmail.com"
    
}
var connOpt={
	url: "http://localhost:4000/anjali",
	method:'GET'
}
request(connOpt,(err,res,body)=>{

	console.log(JSON.parse(body));
	 rec=JSON.parse(body);
	 if(rec.success)
		console.log(rec.user);
	 else {
	 	console.log(rec.msg);		
	 }			
});
