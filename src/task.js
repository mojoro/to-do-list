const allTasks = [];
import { saveData } from './memoryManagement.js';
import { generateID } from './utils.js';

class Task {
  constructor(name = 'title', desc = 'description', dueDate = '11/04/2024', priority = 'high', parentTopic = null, notes = '', subTasks = [], ) {
    this.name = name;
    this.desc = desc;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.notes = notes;
    this.subTasks = subTasks;
    this.completed = false;
    this.ID = generateID('TASK-');
    this.parentTopic = parentTopic;
    allTasks.push(this);
  }

  toggleComplete() {
    this.completed = this.completed ? false : true;
  }

  addSubTask(task){
    this.subTasks.push(task);
  }
  
  delete() {
    const index = allTasks.indexOf(this);
    if (index !== -1) {
      allTasks.splice(index, 1);
    }

    const topicIndex = this.parentTopic.tasks.indexOf(this);
    if (topicIndex !== -1) {
      this.parentTopic.tasks.splice(topicIndex, 1);
    }
    
    saveData();
  }
}

export { Task, allTasks };