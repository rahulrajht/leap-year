var btn = document.getElementById("btn")
var output = document.getElementById("output")
btn.addEventListener("click",getUserName)
function getUserName(){
    var name = document.getElementById("userName")
    var userName = name.value
    var date = document.getElementById("birthday").value
    if(userName == null || userName == "" || date ==null || date==""){
       alert("Please enter all details")
    }else{        
        var isLeap = checkLeap(date)
        console.log(isLeap)
        if(isLeap){
            output.innerHTML = `Hurray!🎉 ${userName}, you are born in a leap year.`
        }else{
            output.innerHTML = `Oops! ${userName}, you are not born in a leap year.`
        }
    }
    
}

function checkLeap(date){
    var year = date.slice(0, 4);
    console.log(year)    
    if( year % 4 === 0){
        if( year % 100 === 0){
            if( year % 400 ===0){
                return true
            }else{
                return false
            }
        }else{
            return true
        }
    }else{
        return false
    }
}