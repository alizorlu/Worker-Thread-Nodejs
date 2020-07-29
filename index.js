
const { Worker } = require("worker_threads");
const path = require("path");

// create some big array
const elements = 1000000;
const bigArray = Array(elements)
    .fill()
    .map(() => Math.random());

// // // we get the path of the script
// // const workerScript = path.join(__dirname, "./sorter.js");

// // // create a new worker from our script
// // const worker = new Worker(workerScript, { workerData: bigArray });

// // // receive events from the worker
// // worker.on("message", (sortedArray) => console.log('message:', sortedArray[0]));
// // worker.on("error", (error) => console.error("error", error));
// // worker.on("exit", () => console.log("exit"));

// we get the path of the script
const worker1 = path.join(__dirname, "./worker1.js");
const worker2 = path.join(__dirname, "./worker2.js");
const worker3 = path.join(__dirname, "./worker3.js");
// create a new worker from our script
const w1 = new Worker(worker1);
const w2 = new Worker(worker2);
const w3 = new Worker(worker3);

// receive events from the worker
w1.on("message", (e) => console.log('message:', e));
w1.on("error", (error) => console.error("error", error));
w1.on("exit", () => console.log("exit"));


w2.on("message", (e) => console.log('message:', e));
w2.on("error", (error) => console.error("error", error));
w2.on("exit", () => console.log("exit"));


w3.on("message", (e) => console.log('message:', e));
w3.on("error", (error) => console.error("error", error));
w3.on("exit", () => console.log("exit"));
