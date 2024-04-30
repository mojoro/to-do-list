import { Category, categories } from "./category";
import { List, lists } from "./list";
import { Topic, topics } from "./topic";
import { Task, allTasks } from "./task";
import { findCategory, findList, findTopic, findTopicByID } from "./utils";

function saveData() {
  const [categoryStorage, listStorage, topicStorage, taskStorage] = extractConstructors();

  localStorage.setItem('categories', JSON.stringify(categoryStorage));
  localStorage.setItem('lists', JSON.stringify(listStorage));
  localStorage.setItem('topics', JSON.stringify(topicStorage));
  localStorage.setItem('allTasks', JSON.stringify(taskStorage));

  // console.log(JSON.stringify(categoryStorage));
  // console.log(JSON.stringify(listStorage));
  // console.log(JSON.stringify(topicStorage));
  // console.log(JSON.parse(JSON.stringify(taskStorage)));
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
      ID: topic.ID,
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
      completed: task.completed,
      notes: task.notes,
    }
    taskStorage.push(taskConstructor);
  }

  return [categoryStorage, listStorage, topicStorage, taskStorage];
}



// returns category, list, topic, and task constructor arrays as an array
function accessData() {
  const categoryStorage = JSON.parse(localStorage.getItem('categories'));
  const listStorage = JSON.parse(localStorage.getItem('lists'));
  const topicStorage = JSON.parse(localStorage.getItem('topics'));
  const taskStorage = JSON.parse(localStorage.getItem('allTasks'));
  
  return [categoryStorage, listStorage, topicStorage, taskStorage];
}

// read json and convert into objects.
function writeData() {
  try {
    const [categoryStorage, listStorage, topicStorage, taskStorage] = accessData();

    for (const category of categoryStorage) {
      if (!categories.some(cat => cat.name === category.name)) {
        const readCategory = new Category(category.name);
      }
    }

    for (const list of listStorage) {
      if (!lists.some(lst => lst.name === list.name && lst.description === list.description)) {
        const readList = new List(list.name, list.description, findCategory(list.parent));
      }
    }

    for (const topic of topicStorage) {
      if (!topics.some(tpc => tpc.name === topic.name)) {
        const readTopic = new Topic(topic.name, findList(topic.parent));
      }
    }

    for (const task of taskStorage) {
      if (!allTasks.some(tsk => tsk.name === task.name)) {
        const readTask = new Task(task.name, task.description, task.dueDate, task.priority, findTopic(task.parent), task.completed)
      }
    }

    organizeObjects();
  }
  catch {
    firstLaunchData();
  }
}

// adds objects to the appropriate parent based on the listed parent inside.
function organizeObjects() {
  for (const list of lists) {
    if (!list.parentCategory || list.parentCategory.lists.includes(list)) continue;

    list.parentCategory.addList(list);
  }

  for (const topic of topics) {
    if (!topic.parentList || topic.parentList.topics.includes(topic)) continue;

    topic.parentList.addTopic(topic);
  }

  for (const task of allTasks) {
    if (!task.parentTopic || task.parentTopic.tasks.includes(task)) continue;

    task.parentTopic.addTask(task);
  }
}

function clearData() {
  // Clear localStorage
  localStorage.removeItem('categories');
  localStorage.removeItem('lists');
  localStorage.removeItem('topics');
  localStorage.removeItem('allTasks');

  // Clear arrays
  categories.length = 0;
  lists.length = 0;
  topics.length = 0;
  allTasks.length = 0;
}

function firstLaunchData(){
  if (!localStorage.getItem('categoryStorage')){
    const exampleCategory = new Category('General');
    const exampleList = new List('First Launch', 'Some things you might want to do!', exampleCategory);
    const exampleTopic = new Topic('My First Tasks', exampleList);
    const task1 = new Task('Create your own lists and categories', '', '', '', exampleTopic);
    const task2 = new Task('Create your own tasks and topics', '', '', '', exampleTopic);
    const task3 = new Task('Delete all this dummy content', '', '', '', exampleTopic);

    exampleTopic.addTask(task1)
    exampleTopic.addTask(task2)
    exampleTopic.addTask(task3)
    exampleList.addTopic(exampleTopic);
    exampleCategory.addList(exampleList);

    saveData();
  }
}

export { saveData, writeData, organizeObjects, clearData }