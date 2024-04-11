import { addItem, removeItem, printItems } from './utils.js';

class Topic {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.addTask = addItem.bind(this.tasks);
    this.removeTask = removeItem.bind(this.tasks);
    this.printTasks = printItems.bind(this.tasks);
  }
}

export { Topic };