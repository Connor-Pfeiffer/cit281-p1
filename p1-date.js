/*
    CIT 281 Project 1
    Name: Connor Pfeiffer
*/

function date(){
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date();
    let day = currentDay.getDay();
    console.log(weekday[day]);
}

date();