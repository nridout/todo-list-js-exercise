// Task Object contains properties
// calling the newTask while passing the title and description of the tasks
// will create a new task obejct with those values attached to the properties
// completed is set to false as the default state
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // prints out the provided task's details
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // marks the provided task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE

const task1 = newTask("Clean Cat Litter", "Take all the shit out of the litter box");
const task2 = newTask("Do Laundry", "Annoying");
// An array of the task objects, aka the "todo list"
const tasks =[task1, task2];

// task1.logState(task1);
// task1.markCompleted(task1);
// task1.logState(task1);

console.log(task1.title);
task1.markCompleted();
console.log(task1.complete);