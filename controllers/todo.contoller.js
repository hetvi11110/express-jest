const TodoModel = require('../model/todo.model');

/* 
* https://nodejs.org/docs/v20.12.1/api/modules.html#exports
*/
exports.createTodo = (req, res, next) => {
    console.log(req);
    console.log(res);
    console.log(next);
    //https://mongoosejs.com/docs/api/model.html#Model.create()
    TodoModel.create();
};