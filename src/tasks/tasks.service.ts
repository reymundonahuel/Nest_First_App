import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

export interface Task extends Document{
    id?:number,
    title:string,
    description:string,
    done:boolean
}
@Injectable()
export class TasksService {

constructor(@InjectModel('Task')private TaskModel: Model<Task>){}


async getTasks(){
  return await this.TaskModel.find();
}

async getTask(id:string){
return await this.TaskModel.findById(id)
}

async CreateTask(task: CreateTaskDto){
    const newtask = new this.TaskModel(task)
    return await newtask.save();
    
}

// task: Task[] = [
//     {
//         id: 1,
//         title: 'Testing',
//         description:"Descripcion",
//         done:true
//     },
//     {
//         id: 2,
//         title: 'Testing 2',
//         description:"Descripcion 2",
//         done:true
//     },
// ];
// getTasks(): Task[] {
//     return this.task
// }
// getTask(id:number): Task {
// return this.task.find(task  => task.id == id);
// }



}
