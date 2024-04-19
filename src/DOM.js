import { categories } from './category.js';
import { findCategory, findList, findTopic,  } from './utils.js';
import { todayList, thisWeek, allTasksList, completed, } from './defaultLists.js';

export function printList(list) {
  const main = document.querySelector('main');
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

  for (const topic of list.topics) {
    const topicGroup = document.createElement('div');
    const topicWrapper = document.createElement('div');
    const h2Topic = document.createElement('h2');
    const buttonTopic = document.createElement('button');
    const tasks = document.createElement('div');


    topicGroup.className = 'topic';
    topicWrapper.className = 'topic-wrapper';
    h2Topic.className = 'topicName';
    tasks.className = 'tasks';

    buttonTopic.textContent = 'delete';
    h2Topic.textContent = topic.name;

    buttonTopic.addEventListener('click', () => {
      topic.deleteTasks();
      list.removeTopic(topic);
      printList(list);
    });

    topicWrapper.appendChild(h2Topic);
    topicWrapper.appendChild(buttonTopic);

    topicGroup.appendChild(topicWrapper);
    topicGroup.appendChild(tasks);

    for (const task of topic.tasks) {
      const taskWrapper = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');
      const buttonTask = document.createElement('button');

      taskWrapper.className = 'task-wrapper';
      label.htmlFor = topic.name + '-' + task.name;
      input.type = 'checkbox';
      input.name = 'task';
      input.id = topic.name + '-' + task.name;
      label.textContent = task.name;
      buttonTask.textContent = 'delete';

      input.addEventListener('click', () => {
        task.toggleComplete();
        completed.update();
      })

      buttonTask.addEventListener('click', () => {
        task.delete();
        printList(list);
      });

      label.appendChild(input);
      taskWrapper.appendChild(label);
      taskWrapper.appendChild(buttonTask);
      tasks.appendChild(taskWrapper);
    }
    topics.appendChild(topicGroup);
  }

  main.appendChild(listInformation);
  main.appendChild(topics);
}

function printDefault(aside) {
  const defaultGroup = document.createElement('div');
  const today = document.createElement('div');
  const week = document.createElement('div');
  const allTasksDiv = document.createElement('div');
  const completedDiv = document.createElement('div');

  defaultGroup.classList.add('cat-group');
  today.classList.add('default', 'listAside');
  week.classList.add('default', 'listAside');
  allTasksDiv.classList.add('default', 'listAside');
  completedDiv.classList.add('default', 'listAside');

  const todayBtn = document.createElement('button');
  const weekBtn = document.createElement('button');
  const allTasksBtn = document.createElement('button');
  const completedBtn = document.createElement('button');

  todayBtn.textContent = 'Today';
  todayBtn.id = 'today';
  weekBtn.textContent = 'This Week';
  weekBtn.id = 'this-week';
  allTasksBtn.textContent = 'All Tasks';
  allTasksBtn.id = 'all-tasks';
  completedBtn.textContent = 'Completed';
  completedBtn.id = 'completed';

  todayBtn.addEventListener('click', () => {
    todayList.update();
    printList(todayList);
  })

  weekBtn.addEventListener('click', () => {
    thisWeek.update();
    printList(thisWeek);
  });
  
  allTasksBtn.addEventListener('click', (e) => {
    allTasksList.update();
    printList(allTasksList);
  });

  completedBtn.addEventListener('click', (e) => {
    completed.update();
    printList(completed);
  });

  today.appendChild(todayBtn);
  week.appendChild(weekBtn);
  allTasksDiv.appendChild(allTasksBtn);
  completedDiv.appendChild(completedBtn);

  defaultGroup.appendChild(today);
  defaultGroup.appendChild(week);
  defaultGroup.appendChild(allTasksDiv);

  aside.appendChild(defaultGroup);
  aside.appendChild(completedDiv);
}

// Build function to write categories (sidebar) to DOM next, then write functions for default set-up
export function printSidebar() {
  const aside = document.querySelector('aside');
  aside.innerHTML = '';

  printDefault(aside);

  for (const category of categories) {
    const catGroup = document.createElement('div');
    catGroup.classList.add('cat-group');

    const catDiv = document.createElement('div');
    catDiv.classList.add('category');
    catDiv.textContent = category.name;

    catGroup.appendChild(catDiv);
    for (const list of category.lists) {
      const listDiv = document.createElement('div');
      listDiv.classList.add('listAside', 'sub-cat');

      const listBtn = document.createElement('button');
      listBtn.textContent = list.name;
      listBtn.addEventListener('click', (e) => {
        const list = findList(e.target.textContent);
        printList(list);
      });

      listDiv.appendChild(listBtn);
      catGroup.appendChild(listDiv);
    }
    aside.appendChild(catGroup);
  }
}
