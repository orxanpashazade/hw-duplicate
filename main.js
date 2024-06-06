let n = Number(prompt("number of integers + 1:"))
let ourArray = []
let ourArrayLength = n + 1
for(let i = 0; ourArrayLength > i; i++){
    let enterNum = Number(prompt(`Enter a number between [1,${n}]`))
    if(enterNum>=1 && enterNum<=n){
        ourArray.push(enterNum)
    }
    else{
        i--
        alert(`Please enter a number between [1,${n}]`)
    }
}
let DuplicatesArr = []
ourArray.reduce((num1,num2)=>{
    if((num1-num2) === 0){
        DuplicatesArr.push(num1)
    }
})
console.log(ourArray)
console.log(DuplicatesArr)