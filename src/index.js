import './styles.css';
import { Category, categories } from './category.js';
import { List } from './list.js';
import { Topic } from './topic.js';
import { Task, allTasks } from './task.js';

function createSampleStructure(catName, listName, topName, taskName){
  const category = new Category(catName);
  const list = new List(listName);
  const topic = new Topic(topName);
  const task = new Task(taskName);

  category.addList(list);
  list.addTopic(topic);
  topic.addTask(task);

  return [category, list, topic, task];
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

const showList = document.getElementById('showListDialog');
const listDialog = document.getElementById('listDialog');
const listForm = document.getElementById('listForm');

showList.addEventListener("click", () => listDialog.showModal());
listForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const category = findCategory(document.querySelector('#listCategory').value);
  const list = new List(
    document.querySelector('#listName').value,
    document.querySelector('#listDescription').value);
  
  category.addList(list);

  console.log(category);

  listDialog.close();
})


window.Category = Category;
window.List = List;
window.Topic = Topic;
window.Task = Task;
window.categories = categories;
window.allTasks = allTasks;
window.createSampleStructure = createSampleStructure;