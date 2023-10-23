//process argv : bisa mengambil input dari terminal
// command : show , add, delete, update

const command = process.argv[2];
const param = process.argv.slice(3);
const TodoController = require('./controller/TodoController');

switch (command){
    case 'show':
        // console.log("commandd  show");
        TodoController.show();
        break;
    case 'add':
        // console.log("commandd  add");
        TodoController.add(param);
        break;
    case 'delete':
        // console.log("commandd  delete");
        TodoController.delete(param);
        break;
    case 'update':
        // console.log("commandd  update");
        TodoController.update(param);
        break;
    default:
        // console.log("masukkan input dengan benar");
        TodoController.message("masukkan input dengan benar");
        break;
            
}