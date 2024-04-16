import { addItem, removeItem, printItems, generateID } from './utils.js';

const topics = []
class Topic {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.addTask = addItem.bind(this.tasks);
    this.removeTask = removeItem.bind(this.tasks);
    this.printTasks = printItems.bind(this.tasks);
    this.ID = generateID('TOPI-');
    topics.push(this);
  }
}

export { Topic, topics };