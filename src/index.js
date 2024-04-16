import './styles.css';
import { Category, categories } from './category.js';
import { List, lists } from './list.js';
import { Topic, topics } from './topic.js';
import { Task, allTasks } from './task.js';
import { findCategory, findList, findTopic } from './utils.js';
import { handleListForm, handleTaskForm } from './eventHandlers.js'

handleListForm();
handleTaskForm();

function printList(list) {
  const main =  document.querySelector('main');
  main.innerHTML = '';

  const listInformation = document.createElement('div');
  listInformation.classList.add('listInformation');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  h1.id = 'currentList';
  h2.id = 'listDescription';

  h1.textContent = list.name;
  h2.textContent = list.description;

  listInformation.appendChild(h1);
  listInformation.appendChild(h2);

  const topics = document.createElement('div');
  topics.className = 'topics';

  for (const topic of list.topics){
    const topicGroup = document.createElement('div')
    const topicWrapper = document.createElement('div');
    const h2Topic = document.createElement('h2');
    const buttonTopic = document.createElement('button');
    const tasks = document.createElement('div');
    

    topicGroup.className = 'topic'
    topicWrapper.className = 'topic-wrapper';
    h2Topic.className = 'topicName';
    tasks.className = 'tasks';

    buttonTopic.textContent = 'options';
    h2Topic.textContent = topic.name;

    topicWrapper.appendChild(h2Topic)
    topicWrapper.appendChild(buttonTopic);

    topicGroup.appendChild(topicWrapper);
    topicGroup.appendChild(tasks);

    for (const task of topic.tasks) {
      const taskWrapper = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');
      const buttonTask = document.createElement('button');

      taskWrapper.className = 'task-wrapper';
      label.htmlFor = task.name;
      input.type = 'checkbox';
      input.name = 'task';
      input.id = task.name;
      label.textContent = task.name;
      buttonTask.textContent = 'options';

      label.appendChild(input);
      taskWrapper.appendChild(label);
      taskWrapper.appendChild(buttonTask)
      tasks.appendChild(taskWrapper);
    }
    topics.appendChild(topicGroup);
  }

  main.appendChild(listInformation);
  main.appendChild(topics);
}

// Build function to write categories (sidebar) to DOM next, then write functions for default set-up
function printSidebar(){
  
}

const exampleList = new List('Exercise', 'Exercises to do');
const exampleTopic = new Topic('Legs');
const task1 = new Task('Squats');
const task2 = new Task('Deadlift');
const task3 = new Task('Leg Press');

exampleTopic.addTask(task1)
exampleTopic.addTask(task2)
exampleTopic.addTask(task3)
exampleList.addTopic(exampleTopic);

printList(exampleList);

window.Category = Category;
window.List = List;
window.Topic = Topic;
window.Task = Task;
window.categories = categories;
window.allTasks = allTasks;