import { saveData } from './memoryManagement.js';
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
    categories.push(this);
  }

  delete() {
    this.deleteLists();
    const index = categories.indexOf(this);
    if (index !== -1) {
      categories.splice(index, 1);
    }

    saveData();
  }

  deleteLists() {
    const listCopy = [...this.lists];
    for (const list of listCopy) {
      list.delete();
    }

    saveData();
  }
}

export { Category, categories };