/// <reference lib="webworker" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let timerID: any;
let interval = 500;

addEventListener('message', ({ data }) => {
  if (data == 'start') {
    timerID = setInterval(function () {
      postMessage('tick');
    }, interval);
  } else if (data.interval) {
    interval = data.interval;
    if (timerID) {
      clearInterval(timerID);
      timerID = setInterval(function () {
        postMessage('tick');
      }, interval);
    }
  } else if (data == 'stop') {
    clearInterval(timerID);
    timerID = null;
  }
});
