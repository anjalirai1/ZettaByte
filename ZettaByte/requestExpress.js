var request = require('request');
request.get({url:'http://192.168.77.88:3000/device'}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
  console.log(JSON.parse(body));
});