import { saveData } from './memoryManagement.js';
import { addItem, removeItem, printItems, generateID } from './utils.js';


const lists = [];
class List {
  constructor(name, desc = '', parentCategory = null) {
    this.name = name;
    this.description = desc,
    this.topics = [];
    this.addTopic = addItem.bind(this.topics);
    this.removeTopic = removeItem.bind(this.topics);
    this.printTopics = printItems.bind(this.topics);
    this.ID = generateID('LIST-');
    this.parentCategory = parentCategory;
    lists.push(this);
  }

  delete() {
    this.deleteTopics();
    const index = lists.indexOf(this);
    if (index !== -1) {
      lists.splice(index, 1);
    }

    const catIndex = this.parentCategory.lists.indexOf(this);
    if (catIndex !== -1) {
      this.parentCategory.lists.splice(catIndex, 1);
    }
    saveData();
  }

  deleteTopics() {
    const topicCopy = [...this.topics];
    for (const topic of topicCopy) {
      topic.delete();
    }
    saveData();
  }
}

export { List, lists };