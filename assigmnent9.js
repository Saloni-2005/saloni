// function checkPrime(a){
//     if(a<2){
//         return false
//     }
//     if(a==2){
//         return true
//     }
//          for(let i=2;i<=a/2;i++){
//             if(a%i==0){
//                 return false
//             }
//          }
//          return true
// }
//     for(let a=1;a<=30;a++){
//         if(checkPrime(a)){
//             console.log(a)
//         }
//     }



    // let arr=[1,2,3,5,4,8]
    // function checkNumber(num) {   
    //     for (let i = 0; i < arr.length; i++) {       
    //       if (arr[i] === num) {
    //         return true;
    //       }
    //     }      
    //     return false;
    // }
    //     let res = checkNumber(8)
    //       console.log(res)
   

// function rank(percentStd1, percentStd2, percentStd3) {
//     let percentages = [
//         { student: 1, percentage: percentStd1 },
//         { student: 2, percentage: percentStd2 },
//         { student: 3, percentage: percentStd3 }
//     ];

//     // Sort students based on percentage in descending order
//     percentages.sort((a, b) => b.percentage - a.percentage);

//     // Print the ranks
//     return `Student ${percentages[0].student} has rank 1, Student ${percentages[2].student} has rank 3, Student ${percentages[1].student} has rank 2.`;

// }
//   let result=rank(56,90,78)
//     console.log(result)
      
    
// function rank(percentStd1, percentStd2, percentStd3) {
//     let percentages = [percentStd1, percentStd2, percentStd3];
//     let ranks = [1,1,1]; 
//     for (let i = 0; i < percentages.length; i++) {
//         for (let j = 0; j < percentages.length; j++) {
//             if (percentages[i] < percentages[j]) {
//                 ranks[i]++;  
//             }
//         }
//     }

//     // Output the ranks of each student
//     return `Student 1 has rank ${ranks[0]}, Student 2 has rank ${ranks[1]}, Student 3 has rank ${ranks[2]}`;
// }
//     let result = rank(78,89,98)
//       console.log(result)





// function checkPrime(num){
    //   if(num<2){ return false}      
    //   if(num==2){ return true}
    //    for(let i=2;i<=num/2;i++){
    //     if(num%i==0){ return false}
    // }  return true
    
// }
//     for(a=1;a<=30;a++){
//          if(checkPrime(a)){
//             console.log(a)
//          }
//     }


// let arr=[1,2,3,5,4,8]
// function checkNumber(num){
//      for(let i=0;i<arr.length;i++){
//           if(arr[i]===num){
//             return true
//           }
//      }  return false
// }
//     let result = checkNumber(0)
//       console.log(result)


//   function rank(percentstd1,percentStd2,percentStd3){
//       let percentages=[percentstd1,percentStd2,percentStd3]
//        let rank=[1,1,1]
//          for(let i=0;i<percentages.length;i++){
//             for(let j=0;j<percentages.length;j++){
//                 if(percentages[i]<percentages[j]){
//                     rank[i]++
//                 }
//             }
//          }  return`student1 has rank ${rank[0]}, student2 has rank ${rank[1]}, student3 has rank ${rank[2]}`
//   }
//      let result=rank(56,98,67)
//        console.log(result)

