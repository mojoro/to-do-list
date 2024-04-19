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

  deleteTopics() {
    const topicCopy = [...this.topics];
    for (const topic of topicCopy) {
      topic.delete();
    }
  }
}

export { List, lists };