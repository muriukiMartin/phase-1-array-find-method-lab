// code your solution here
function superbowlWin(record) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const win = record.find(record => record.result === 'W');
    if (win) {
        return win.year;
    }
    else {
        return undefined;
    }
}

