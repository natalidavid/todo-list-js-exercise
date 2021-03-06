// Implement OO
function newTask(title, description) {

  const task = {
    title,
    description,
    complete: false,

    logState: function () {
      // Print the provided task's details
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function () {
      // Mark a task as completed
      this.complete = true;
    }
  };
  return task;

}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "Sort clothes and wash");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

