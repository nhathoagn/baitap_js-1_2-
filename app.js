setTimeout(() => {
    console.log('Hello!!!');
}, 1000);

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 3000) {
    endDate = new Date().getTime();
}