import { Category, categories } from './category.js';
import { List, lists } from './list.js';
import { Topic, topics } from './topic.js';
import { Task, allTasks } from './task.js';
import { findCategory, findList, findTopic, } from './utils.js';
import { addWeeks, isBefore, isToday } from "date-fns";

const todayList = new List ('Today', 'Tasks of the day');
todayList.addTopic(new Topic('What are we getting done?', todayList));
todayList.update = function() {
  const today = new Date();
  for (const task of allTasks) {
    if ((isBefore(task.dueDate, today) || isToday(task.dueDate, today)) && !this.topics[0].tasks.includes(task)) this.topics[0].addTask(task);
    else if (!isBefore(task.dueDate, today) && !isToday(task.dueDate, today)) this.topics[0].removeTask(task);
  } 
};

const thisWeek = new List('This Week', 'Tasks for this week');
thisWeek.addTopic(new Topic("This Week's Tasks", thisWeek));
thisWeek.update = function() {
  const today = new Date();
  const nextWeek = addWeeks(today, 1);
  for (const task of allTasks) {
    if (isBefore(task.dueDate, nextWeek) && !this.topics[0].tasks.includes(task)) this.topics[0].addTask(task);
    else if (!isBefore(task.dueDate, nextWeek)) this.topics[0].removeTask(task);
  } 
};

const allTasksList = new List('All Tasks', 'Tasks collected from all lists');
allTasksList.addTopic(new Topic('All Tasks'));
allTasksList.update = function() {
  allTasksList.topics[0].tasks = allTasks;
}

const completed = new List('Completed', 'Past tasks');
completed.addTopic(new Topic('Completed Tasks', completed));
completed.update = function() {
  for (const task of allTasks) {
    if (task.completed && !this.topics[0].tasks.includes(task)) this.topics[0].addTask(task);
    else if (!task.completed) this.topics[0].removeTask(task);
  } 
};

todayList.update();
thisWeek.update();
allTasksList.update();
completed.update();

export { todayList, thisWeek, allTasksList, completed, }