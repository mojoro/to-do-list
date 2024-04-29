import { findCategory, findList, findTopic } from './utils.js';
import { printList, printSidebar } from './DOM.js';
import { List, lists } from './list.js';
import { Topic, topics } from './topic.js';
import { Task, allTasks } from './task.js';
import { saveData } from './memoryManagement.js';
import { updateDefaults } from './defaultLists.js';

function handleListForm() {
  const showList = document.getElementById('showListDialog');
  const listDialog = document.getElementById('listDialog');
  const listForm = document.getElementById('listForm');
  const listCancel = document.getElementById('listCancelBtn')
  
  listCancel.addEventListener("click", () => listDialog.close());
  showList.addEventListener("click", () => listDialog.showModal());
  listForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const category = findCategory(document.querySelector('#listCategoryInput').value);
    const list = new List(
      document.querySelector('#listNameInput').value,
      document.querySelector('#listDescriptionInput').value,
      category);
    
    category.addList(list);
  
    printSidebar();
    saveData();
  
    listDialog.close();
  });
}

function handleTaskForm(){
  const showTask = document.getElementById('showTaskDialog');
  const taskDialog = document.getElementById('taskDialog');
  const taskForm = document.getElementById('taskForm');
  const taskCancel = document.getElementById('taskCancelBtn');

  taskCancel.addEventListener("click", () => taskDialog.close());
  showTask.addEventListener("click", () => taskDialog.showModal());
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const currentList = findList(document.getElementById('currentList').textContent);
    const topic = findTopic(document.querySelector('#taskTopicInput').value, currentList);
    const task = new Task(
      document.querySelector('#taskNameInput').value,
      document.querySelector('#taskDescriptionInput').value,
      document.querySelector('#taskDueInput').value,
      document.querySelector('#taskPriorityInput').checked,
      topic,
    );
    
    topic.addTask(task);
    if (!currentList.topics.includes(topic)) currentList.addTopic(topic);

    console.log(document.querySelector('#taskPriorityInput').checked);

    printList(currentList);
    updateDefaults();
    saveData();

    taskDialog.close();
  });
}

function switchTasksCompleteLists(){
  for (const task of allTasks) {
    task.modifyParent();
  }
}

export { handleListForm, handleTaskForm, switchTasksCompleteLists }