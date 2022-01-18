const mongoose = require('mongoose');
 

const TaskSchema = new mongoose.Schema({
    task:{
      type:String,
      trim:true,
      required:[true,'must provide Task Name']  
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Task', TaskSchema);
