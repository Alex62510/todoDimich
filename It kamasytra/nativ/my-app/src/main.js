// let students = [
//     {
//         name: 'Bob',
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: 'Alex',
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: 'Nick',
//         age: 22,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: 'John',
//         age: 22,
//         isMarried: false,
//         scores: 100
//     }
// ]
// const getName = (array)=>{
//     const resalt=[]
//     const getName=st=>st.name
//     for (let i = 0; i <array.length ; i++) {
// const newValue=getName(array[i])
//         resalt[i]=newValue
//     }
//     return resalt
// }
// //[85,89,120,100]
// const getName = (array)=>{
//     const resalt=[]
//     const getName=st=>st.scores
//     for (let i = 0; i <array.length ; i++) {
//         const newValue=getName(array[i])
//         resalt[i]=newValue
//     }
//     return resalt
// }
// const getName = (array, func)=>{
//     const resalt=[]
//
//     for (let i = 0; i <array.length ; i++) {
//         const newValue=func(array[i])
//         resalt[i]=newValue
//     }
//     return resalt
// }
// const sFilter =(array, func)=>{
//     const resalt=[]
//     for (let i = 0; i <array.length ; i++) {
//         if(func(array[i])===true)
//             resalt.push.array[i]
//     }
//
// }
//
// const sPop=(array)=>{
//   let  lastElement=array[array.length-1]
//     const resalt=[]
//     for (let i = 0; i <array.length-1 ; i++) {
//         resalt[i] = array[i]
//     }
//     return lastElement
// }
const sUnShift=(array, a)=>{
    let resalt = [a,...array]
    return resalt
}
console.log(sPush([1,2,3,4],5))