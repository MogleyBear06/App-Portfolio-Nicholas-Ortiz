const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const messageSchema = new Schema ({
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    serviceType:{
        type: String,
        enum: ['Business Development', 'Web Development', 'Digital Marketing'],
        required: true,
    },
    message:{
        type: String,
        required: true,
        default: ""
    },
})

const Message =mongoose.model('message', messageSchema);

module.exports = Message;
