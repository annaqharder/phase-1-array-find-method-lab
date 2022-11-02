// code your solution here

// function superbowlWin(collection){ 
//     for (const record of collection) { 
//         if(record.result === "W"){
//             console.log(record.year)
//         } else {
//             console.log('undefined')
//         }
//     }
// }
// superbowlWin.find(record); 

// function superbowlWin(record){ 
//     for (const collection of record) { 
//         if(record.result === "W"){
//             console.log(record.year)
//         } else {
//             console.log('undefined')
//         }
//     }
// }
// superbowlWin(record); 


// record.find(record.results === 'W')

function superbowlWin(record) {
    const result = record.find(record => record.result === 'W')
    return !!result ? result.year : undefined
}


