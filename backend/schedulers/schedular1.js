// schedular1.js
import cron from "node-cron";

// Task function
const task = () => {
  console.log("Running a task at", new Date());
  // You can add your reminder logic here
};

// Schedule the task every minute
cron.schedule("* * * * *", task);

console.log("Scheduler started...");
