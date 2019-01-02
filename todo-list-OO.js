function newTask(title, description) {
    const task = {
      title: title,
      description: description,
      taskComplete: false,

      logState: function() {
        console.log(`${task.title} has ${task.taskComplete ? " " : "not"} completed`)      
      },

      completeTask: function() {
        task.taskComplete = true;      
      }
    };
    return task;
  }

// function logTaskState(task) {
//     console.log(`${task.title} has ${task.taskComplete ? " " : "not"} completed`)
// }

// function completeTask(task) {
//     task.taskComplete = true;
// }

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.completeTask();
task1.logState();