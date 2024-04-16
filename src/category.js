import { addItem, removeItem, printItems, generateID } from './utils.js';

const categories = [];

class Category {
  constructor(name) {
    this.name = name;
    this.lists = [];
    this.addList = addItem.bind(this.lists);
    this.removeList = removeItem.bind(this.lists);
    this.printLists = printItems.bind(this.lists);
    this.ID = generateID('CATE-');
    categories.push(this)
  }
}

export { Category, categories };