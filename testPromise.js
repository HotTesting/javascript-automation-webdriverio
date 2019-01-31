function asyncLog(toLog, timeout) {
    //console.log("in function");
    return new Promise(function(resolve, reject) {
      //console.log("in promise");
      setTimeout(function log() {
        if (toLog == "TWO") {
          reject('ERROR');
        }
        console.log(toLog)
        resolve('SUCCESS '+ toLog);
      }, timeout);
    });
  }
  asyncLog("ONE", 10).then(() => {
    return asyncLog("TWO", 0);
  }).then(() => {
    return asyncLog("THREE", 5);
  }).then(undefined, (err)=> {
      console.log('Got error:', err)
  })
  