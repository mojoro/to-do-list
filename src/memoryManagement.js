import { Category, categories } from "./category";
import { List, lists } from "./list";
import { Topic, topics } from "./topic";
import { Task, allTasks } from "./task";
import { findCategory, findList, findTopic } from "./utils";

function saveData() {
  const [categoryStorage, listStorage, topicStorage, taskStorage] = extractConstructors();

  // localStorage.setItem('categories', JSON.stringify(categoryStorage));
  // localStorage.setItem('lists', JSON.stringify(listStorage));
  // localStorage.setItem('topics', JSON.stringify(topicStorage));
  // localStorage.setItem('allTasks', JSON.stringify(taskStorage));

  console.log(JSON.stringify(categoryStorage));
  console.log(JSON.stringify(listStorage));
  console.log(JSON.stringify(topicStorage));
  console.log(JSON.parse(JSON.stringify(taskStorage)));
}

// returns category, list, topic, and task constructor arrays as an array
function accessData() {
  const categoryStorage = JSON.parse(localStorage.getItem('categories'));
  const listStorage = JSON.parse(localStorage.getItem('listStorage'));
  const topicStorage = JSON.parse(localStorage.getItem('topicStorage'));
  const taskStorage = JSON.parse(localStorage.getItem('taskStorage'));
  
  return [categoryStorage, listStorage, topicStorage, taskStorage];
}

// read json and convert into objects.
function writeData() {
  const [categoryStorage, listStorage, topicStorage, taskStorage] = accessData();

  for (const category of categoryStorage) {
    const readCategory = new Category(category.name);
  }

  for (const list of listStorage) {
    const readList = new List(list.name, list.description, findCategory(list.parent));
  }

  for (const topic of topicStorage) {
    const readTopic = new Topic(topic.name, findList(topic.parent));
  }

  for (const task of taskStorage) {
    const readTask = new Task(task.name, task.description, task.dueDate, task.priority, findTopic(task.parent))
  }

  organizeObjects();
}

// adds objects to the appropriate parent based on the listed parent inside.
function organizeObjects() {
  for (const list of lists) {
    if (list.parentCategory.lists.includes(list)) continue;

    list.parentCategory.addList(list);
  }

  for (const topic of topics) {
    if (topic.parentList.topics.includes(topic)) continue;

    topic.parentList.addTopic(topic);
  }

  for (const task of allTasks) {
    if (task.parentTopic.tasks.includes(task)) continue;

    task.parentTopic.addTask(task);
  }
}

function extractConstructors() {
  const categoryStorage = [];
  for (const category of categories){
    const categoryConstructor = {
      name: category.name
    }
    categoryStorage.push(categoryConstructor);
  }

  const listStorage = [];
  for (const list of lists) {
    const listConstructor = {
      name: list.name,
      description: list.description,
      parent: list.parentCategory ? list.parentCategory.name : null,
    }
    listStorage.push(listConstructor);
  }

  const topicStorage = [];
  for (const topic of topics) {
    const topicConstructor = {
      name: topic.name,
      parent: topic.parentList ? topic.parentList.name : null,
    }
    topicStorage.push(topicConstructor);
  }

  const taskStorage = [];
  for (const task of allTasks){
    const taskConstructor = {
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      parent: task.parentTopic ? task.parentTopic.name : null,
      notes: task.notes,
    }
    taskStorage.push(taskConstructor);
  }

  return [categoryStorage, listStorage, topicStorage, taskStorage];
}

export { saveData }