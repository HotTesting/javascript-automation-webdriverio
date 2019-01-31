function asyncLog(toLog, timeout, callback) {
    setTimeout(function log() {
      console.log(toLog);
      callback && callback(undefined, {a : "hello world"});
    }, timeout);
  }
  let myFinishCallback = function(err, data) {
    if (err) {
      console.log("Got error!", err.message);
    }
    console.log("got data!", data);
  };
  asyncLog("ONE", 10, myFinishCallback);
  // asyncLog("ONE", 10, (err) => {
  //   asyncLog("TWO", 0, (err) => {
  //     asyncLog("THREE", 5, myFinishCallback);
  //   });
  // });
  