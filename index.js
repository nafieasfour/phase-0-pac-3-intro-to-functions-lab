function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
    }

function logWhisper(string) {
    console.log(string.toLowerCase());
    }

    str == str.toUpperCase(); 
    
function sayHiToHeadphonedRoommate(string) {
    if (string == string.toLowerCase()) {
        return "I can't hear you!";
      } else if (string == string.toUpperCase()) {
        return "YES INDEED!";
      } else if (string == "Let's have dinner together!"){
        return "I would love to!";
      }
    console.log(string.toLowerCase());
    }
    


//     1) sayHiToHeadphonedRoommate(string)
//        returns "I can't hear you!" if `string` is lowercase:
//      ReferenceError: sayHiToHeadphonedRoommate is not defined
//       at Context.<anonymous> (test/indexTest.js:42:5)
//       at process.processImmediate (node:internal/timers:476:21)

//   2) sayHiToHeadphonedRoommate(string)
//        returns "YES INDEED!" if `string` is uppercase:
//      ReferenceError: sayHiToHeadphonedRoommate is not defined
//       at Context.<anonymous> (test/indexTest.js:46:5)
//       at process.processImmediate (node:internal/timers:476:21)

//   3) sayHiToHeadphonedRoommate(string)
//        returns "I would love to!" if `string` is "Let's have dinner together!"`:
//      ReferenceError: sayHiToHeadphonedRoommate is not defined
//       at Context.<anonymous> (test/indexTest.js:50:5)
//       at process.processImmediate (node:internal/timers:476:21)
