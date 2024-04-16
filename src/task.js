const allTasks = [];
import { generateID } from './utils.js';

class Task {
  constructor(name = 'title', desc = 'description', dueDate = '11/04/2024', priority = 'high', notes = '', subTasks = []) {
    this.name = name;
    this.desc = desc;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.notes = notes;
    this.subTasks = subTasks;
    this.completed = false;
    this.ID = generateID('TASK-');
    allTasks.push(this);
  }

  toggleComplete() {
    this.completed = this.completed ? false : true;
  }

  addSubTask(task){
    this.subTasks.push(task);
  }
}

export { Task, allTasks };