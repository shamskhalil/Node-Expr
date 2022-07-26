
const start = process.hrtime();
delay(5);


function delay(valSec) {
    setTimeout(() => {
        const end = process.hrtime(start);
        const time = end[0] * 1000 + end[1] / 1000000
        console.log(`done after ${time}ms`);
    }, valSec * 1000)
}