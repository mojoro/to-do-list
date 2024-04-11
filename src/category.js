import { addItem, removeItem, printItems } from './utils.js';

const categories = [];

class Category {
  constructor(name) {
    this.name = name;
    this.lists = [];
    this.addList = addItem.bind(this.lists);
    this.removeList = removeItem.bind(this.lists);
    this.printLists = printItems.bind(this.lists);
    categories.push(this)
  }
}

export { Category, categories };