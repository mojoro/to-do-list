import { addItem, removeItem, printItems, generateID } from './utils.js';

const lists = [];
class List {
  constructor(name, desc = '') {
    this.name = name;
    this.description = desc,
    this.topics = [];
    this.addTopic = addItem.bind(this.topics);
    this.removeTopic = removeItem.bind(this.topics);
    this.printTopics = printItems.bind(this.topics);
    this.ID = generateID('LIST-');
    lists.push(this);
  }
}

export { List, lists };