import { categories } from './category.js';
import { lists } from './list.js';
import { findCategory, findList, findTopic,  } from './utils.js';
import { todayList, thisWeek, allTasksList, completed, updateDefaults, } from './defaultLists.js';
import { switchTasksCompleteLists } from './eventHandlers.js';
import { formatDate } from 'date-fns/format';

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
    if (topic.tasks.length === 0) continue;

    const topicGroup = document.createElement('div');
    const topicWrapper = document.createElement('div');
    const h2Topic = document.createElement('h2');
    const buttonTopic = document.createElement('button');
    const tasks = document.createElement('div');


    topicGroup.className = 'topic';
    topicWrapper.className = 'topic-wrapper';
    h2Topic.className = 'topicName';
    tasks.className = 'tasks';

    buttonTopic.textContent = 'X';
    buttonTopic.classList.add('delete-button', 'hidden');
    h2Topic.textContent = topic.name;

    buttonTopic.addEventListener('click', () => {
      topic.delete();
      printList(list);
    });

    topicWrapper.appendChild(h2Topic);
    topicWrapper.appendChild(buttonTopic);

    topicGroup.appendChild(topicWrapper);
    topicGroup.appendChild(tasks);

    for (const task of topic.tasks) {
      const taskWrapper = document.createElement('div');
      const checkWrapper = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');
      const buttonTask = document.createElement('button');
      const priorityBtn = document.createElement('button');
      const dueDate = document.createElement('p');

      taskWrapper.className = 'task-wrapper';
      checkWrapper.className = 'check-wrapper';
      label.htmlFor = topic.name + '-' + task.name;
      input.type = 'checkbox';
      input.name = 'task';
      input.id = topic.name + '-' + task.name;
      label.textContent = task.name;
      label.classList = 'task-name';
      buttonTask.textContent = 'X';
      buttonTask.classList.add('delete-button', 'hidden');
      priorityBtn.classList.add('priority');
      try {
        dueDate.textContent = formatDate(task.dueDate, 'dd MMMM yyyy');
      }
      catch {
        dueDate.textContent = '';
      }

      if (task.priority) {
        priorityBtn.classList.add('important');
      } 
      else if (!task.priority) {
        priorityBtn.classList.add('hidden');
      }

      if (task.completed){
        label.classList.add('completed');
        input.checked = true;
      }

      input.addEventListener('click', () => {
        task.toggleComplete();
        completed.update();
        printList(list);
      })

      buttonTask.addEventListener('click', () => {
        task.delete();
        updateDefaults();
        printList(list);
      });

      priorityBtn.addEventListener('click', () => {
        task.togglePriority();
        printList(list);
      })

      checkWrapper.appendChild(input);
      checkWrapper.appendChild(label);
      checkWrapper.appendChild(priorityBtn);
      taskWrapper.appendChild(checkWrapper);
      taskWrapper.appendChild(buttonTask);
      taskWrapper.appendChild(dueDate);
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

  addSidebarListeners();

  today.appendChild(todayBtn);
  week.appendChild(weekBtn);
  allTasksDiv.appendChild(allTasksBtn);
  completedDiv.appendChild(completedBtn);

  defaultGroup.appendChild(today);
  defaultGroup.appendChild(week);
  defaultGroup.appendChild(allTasksDiv);

  aside.appendChild(defaultGroup);
  aside.appendChild(completedDiv);

  function addSidebarListeners() {
    todayBtn.addEventListener('click', () => {
      todayList.update();
      switchTasksCompleteLists();
      printList(todayList);
    });

    weekBtn.addEventListener('click', () => {
      thisWeek.update();
      switchTasksCompleteLists();
      printList(thisWeek);
    });

    allTasksBtn.addEventListener('click', (e) => {
      allTasksList.update();
      switchTasksCompleteLists();
      printList(allTasksList);
    });

    completedBtn.addEventListener('click', (e) => {
      completed.update();
      switchTasksCompleteLists();
      printList(completed);
    });
  }
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
    catDiv.style.cursor = 'default';

    const catDelete = document.createElement('button');
    catDelete.textContent = 'X';
    catDelete.classList.add('hidden', 'delete-button');
    catDelete.addEventListener('click', () => {
      category.delete();
      printSidebar();
    });

    catDiv.appendChild(catDelete);

    catGroup.appendChild(catDiv);
    for (const list of category.lists) {
      const listDiv = document.createElement('div');
      listDiv.classList.add('listAside', 'sub-cat');

      const listBtn = document.createElement('button');
      listBtn.textContent = list.name;
      listBtn.addEventListener('click', (e) => {
        const list = findList(e.target.textContent);
        switchTasksCompleteLists();
        printList(list);
      });

      const listDelete = document.createElement('button');
      listDelete.textContent = 'X';
      listDelete.classList.add('hidden', 'delete-button');
      listDelete.addEventListener('click', () => {
        list.delete();
        printSidebar();
        if (document.getElementById('currentList').textContent === list.name) printList(lists[0]);
      });

      listDiv.appendChild(listBtn);
      listDiv.appendChild(listDelete);
      catGroup.appendChild(listDiv);
    }
    aside.appendChild(catGroup);
  }
}
