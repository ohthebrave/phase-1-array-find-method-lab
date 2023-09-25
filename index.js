// code your solution here

    
function superbowlWin(records) {
    const winningRecord = records.find((record) => record.result === "W");
  
    if (winningRecord) {
      return winningRecord.year;
    } else {
      return undefined;
    }
  }
  





