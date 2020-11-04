import { ItemService } from './../item.service';
export class Model{

    user;
    item;

    constructor(){   
        this.user="MohammadAli";
        this.item=[
            {task:"coding", done:false},
            {task:"go ot bathroom", done:true},
            {task:"washing my car", done:false},
            {task:"cooking", done:false},
            {task:"cleaning my room", done:true},
            {task:"meet my friend", done:false},
            {task:"take a nap", done:true},
            {task:"drink water", done:false},];
    }
}

export class TodoItem{
    task;
    done;

    constructor(task, done){
        this.task=task;
        this.done=done;
    }
}