const builCount = (i) => {
    debugger
    function displayCount() {
        debugger
        console.log({count})
        console.log(count++)
    }
    let count = i;
    return displayCount;
}

const myCount = builCount(1);
myCount();
myCount();
myCount();

const myOtherCount = builCount(10);
myOtherCount();
myOtherCount();
