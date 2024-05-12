// //FUNCTION DEFINITION
// function print(){
//     console.log("Sonu Thapa")
// }

// //FUNCTION CALLING
// print();



// // FUNCTION WITH PARAMETERS & ARGUEMENTS
// function parameters(a,b,msg){ // called parameter
//     console.log("sum= ",(a+b))
//     console.log(msg)
// }

// parameters(100,300,"this is my parameter wala example") //called arguement



// // FUNCTION WITH RETURN TYPE
// function sum3num(x,y,z){
//     console.log("before return")
//     let ans = (x+y+z)
//     return ans
//     console.log("after return") // code will not run after return
// }

// console.log(sum3num(100,150,200)) //print ans without making variable
// //OR
// let val= sum3num(500,200,100) 
// console.log(val) //print ans by making variable


// //ARROW FUNCTION
// /*

// let/const/var function_name= () => {
//     //do some work
// }

// */

// const mulof2num= (a,b) => {
//     console.log("Ans of 2 mul number through arrow function: ",a*b)
// }

// mulof2num(100,2)


// PRINT NUMBER OF VOWELS WITH THE HELP OF FUNCTION
function numofvowels(msg){
    let vowels=0
    console.log(msg[0])
    for(i=0; i<msg.length; i++){
        if(msg[i]=="a"){
            vowels++
        } else if(msg[i]=="e"){
            vowels++
        }else if(msg[i]=="i"){
            vowels++
        }else if(msg[i]=="o"){
            vowels++
        }else if(msg[i]=="u"){
            vowels++
        }
    }
    console.log(vowels)
    //or we can use OR ||

}

numofvowels("mnjgjrhjerth")