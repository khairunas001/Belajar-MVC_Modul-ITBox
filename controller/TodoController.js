const Todo = require('../model/Todo.js');
const TodoView = require('../view/TodoView.js');

class TodoController {
    static show(todo){
        // console.log ("Command Show");
        let todos = Todo.show();
        TodoView.show(todos);
    }
    static add(todo){
        Todo.add(todo); 

    }
    static delete(todo){ 
        Todo.delete(todo);

    }
    static update (todo){
        Todo.update(todo);

    }
    static message(msg){
        // console.log(msg);
        TodoView.message(msg);
    }
}
module.exports = TodoController;