const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PictureSchema = new Schema({
    pic_name: {
		type: String, 
		required: true
	      }, 

    pic_type: {
		type: Schema.Types.Mixed, 
		required: true	
	      },
    pic_date:{
		 type: Date,
		 default: Date.now
	      },    
});

PictureSchema.pre('save', function(next){
    now = new Date();
    if (!this.pic_date) {
        this.pic_date = now;
    }
    next();
});

module.exports = mongoose.model('picture', PictureSchema);
