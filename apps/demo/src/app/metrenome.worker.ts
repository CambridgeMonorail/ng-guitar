/// <reference lib="webworker" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let timerID: any;
let interval = 500;

addEventListener('message', ({ data }) => {
  if (data == 'start') {
    console.log('starting');
    timerID = setInterval(function () {
      postMessage('tick');
    }, interval);
  } else if (data.interval) {
    console.log('setting interval');
    interval = data.interval;
    console.log('interval=' + interval);
    if (timerID) {
      clearInterval(timerID);
      timerID = setInterval(function () {
        postMessage('tick');
      }, interval);
    }
  } else if (data == 'stop') {
    console.log('stopping');
    clearInterval(timerID);
    timerID = null;
  }
});
