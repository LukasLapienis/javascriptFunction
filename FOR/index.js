'use strict'

// 1)

function printAll(begin,end) {
    for (let i = begin; i <= end; i ++) {
        console.log(i)
    }
}
printAll(1,10)

// 2)

function printAllFromEnd(begin,end) {
    for (let i = begin; i > end; i --) {
        console.log(i)
    }
}
printAllFromEnd(10,0)

// 3)

function printEverySecond(begin,end) {
    for (let i = begin; begin < end; begin += 2) {
        console.log(begin)
    }
}
printEverySecond(1,10)

// 4)

function printx2(begin,end) {
    for (begin; begin < end; begin ++) {
        console.log(begin*2)
    }
}
printx2(1,11)

// 6)

function printAllExcept7(begin,end) {
    for (let i = begin; i <= end; i ++) {
        if (i === 7) {
            continue;
        } 
        console.log(i)
    }
}
printAllExcept7(1,10)




