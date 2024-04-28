import './styles.css';
import { Category, categories } from './category.js';
import { List, lists } from './list.js';
import { Topic, topics } from './topic.js';
import { Task, allTasks } from './task.js';
import { findCategory, findList, findTopic } from './utils.js';
import { handleListForm, handleTaskForm } from './eventHandlers.js'
import { printList, printSidebar } from './DOM.js';
import { saveData, writeData, clearData } from './memoryManagement.js';
import { updateDefaults } from './defaultLists.js';


handleListForm();
handleTaskForm();


// const exampleCategory = new Category('General');
// const exampleList = new List('Exercise', 'Exercises to do', exampleCategory);
// const exampleList2 = new List('Exercises', 'Exercises to do', exampleCategory);
// const exampleTopic = new Topic('Legs', exampleList);
// const task1 = new Task('Squats', '', '', '', exampleTopic);
// const task2 = new Task('Deadlift', '', '', '', exampleTopic);
// const task3 = new Task('Leg Press', '', '', '', exampleTopic);

// exampleTopic.addTask(task1)
// exampleTopic.addTask(task2)
// exampleTopic.addTask(task3)
// exampleList.addTopic(exampleTopic);
// exampleCategory.addList(exampleList);
// exampleCategory.addList(exampleList2);

// saveData();
writeData();
updateDefaults();
printList(lists[0]);
printSidebar();

// clearData();
window.Category = Category;
window.List = List;
window.Topic = Topic;
window.Task = Task;
window.categories = categories;
window.allTasks = allTasks;