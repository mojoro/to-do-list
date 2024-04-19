import { addItem, removeItem, printItems, generateID } from './utils.js';

const topics = []
class Topic {
  constructor(name, parentList = null) {
    this.name = name;
    this.tasks = [];
    this.addTask = addItem.bind(this.tasks);
    this.removeTask = removeItem.bind(this.tasks);
    this.printTasks = printItems.bind(this.tasks);
    this.ID = generateID('TOPI-');
    this.parentList = parentList;
    topics.push(this);
  }

  deleteTasks() {
    const tasksCopy = [...this.tasks];
    for (const task of tasksCopy) {
      task.delete();
    }
  }

  delete() {
    const index = topics.indexOf(this);
    if (index !== -1) {
      topics.splice(index, 1);
    }

    const listIndex = this.parentList.topics.indexOf(this);
    if (listIndex !== -1) {
      this.parentList.tasks.splice(listIndex, 1);
    }
  }
}

export { Topic, topics };