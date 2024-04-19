import { lists } from './list'
import { allTasks } from './task';

const addItem = function(item) {
  this.push(item);
}

const removeItem = function(item) {
  const index = this.indexOf(item);
  if (index !== -1) {
    this.splice(index, 1);
  }
  else console.log('Not found in list');
}

const printItems = function() {
  for(const item of this){
    console.log(item.name);
  }
}

const generateID = function(prefix) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 7; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return prefix + id;
}



function findCategory(catName) {
  for (const category of categories) {
    if (category.name === catName) {
      return category;
    }
  }
  const newCat = new Category(catName);
  return newCat;
}

function findList(listName) {
  for (const list of lists) {
    if(list.name === listName){
      return list
    }
  }
}

function findTopic(list, topicName) {
  for (const topic of list.topics) {
    if (topic.name === topicName) {
      return topic;
    }
  }
  const newTopic = new Topic(topicName)
  return newTopic;
}


export { addItem, removeItem, printItems, generateID, findCategory, findList, findTopic, };