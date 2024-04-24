/* 
* https://mongoosejs.com/docs/index.html
*
*/
// const mongoose = require('mongoose');

/* 
*
* Scemas : https://mongoosejs.com/docs/guide.html
*
* Validation: https://mongoosejs.com/docs/validation.html
*/
// can't use very latest sytanx
// import mongoose from 'mongoose';
// const { Schema } = mongoose;

/* 
*
* Getting Started: https://mongoosejs.com/docs/index.html
*
*/
const mongoose = require('mongoose');

const TodoScema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
  });

/*
* Models: https://mongoosejs.com/docs/models.html
* https://mongoosejs.com/docs/api/model.html#Model.create()
*/

// module.exports = mongoose.model('Todo',TodoScema);

const TodoModel = mongoose.model('Todo', TodoScema);
module.exports = TodoModel;