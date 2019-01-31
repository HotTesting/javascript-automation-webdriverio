import { resolveCname } from "dns";

function asyncLog(toLog, timeout) {
  //console.log("in function");
  return new Promise(function(resolve, reject) {
    //console.log("in promise");
    setTimeout(function log() {
      if (toLog == "TWO") {
        reject("ERROR");
      }
      console.log(toLog);
      resolve("SUCCESS " + toLog);
    }, timeout);
  });
}

async function run() {
  try {
    await asyncLog("ONE", 10);
    await asyncLog("TWO", 0);
    await asyncLog("THREE", 5);
  } catch (err) {
    console.log("Got error:", err);
  }
  return "ALL DONE!";
}
async function test() {
  let res = await run();
  console.log(res);
}
console.log(test());
