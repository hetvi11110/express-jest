const TodoModel = require('../model/todo.model');
/* 
* https://nodejs.org/docs/v20.12.1/api/modules.html#exports
*/
exports.createTodo = (req, res, next) => {
    //https://mongoosejs.com/docs/api/model.html#Model.create()
    const createModel = TodoModel.create(req.body);
    //https://expressjs.com/en/4x/api.html#res.status
    res.status(201).json(createModel);
};