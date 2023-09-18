//initialization
operation=document.querySelectorAll('.operation')
displayscreen=document.querySelector('.displayscreen')
deleteallbtn=document.querySelector('.deleteall')
deletecharbtn=document.querySelector('.deletechar')
resultbtn=document.querySelector('.result')

text=displayscreen.textContent

function deleteall(){
    text = ''
    update()
}

function deletechar(){
    //avoid type error
    text = displayscreen.textContent.slice(0, -1)
    update()
}

function calc(){
    //by custom fun

    //intialize variable
    let num1,num2,operator
    //loop all char till fount operation char
    for (let i in text) {
        if(text[i]=='/' || text[i]=='*' || text[i]=='+' || text[i]=='-'){
            //update variable

            //save operator
            operator=text[i]
            //spilt string to 2 parts
            //num1 num2
            text = text.split(text[i])
            num1=text[0]
            num2=text[1]
            break;
        }
      }
    //do mathimatical
    if(operator == '/'){
        text = Number(num1) / Number(num2) 
    }
    else if(operator == '*'){
        text = Number(num1) * Number(num2) 
    }
    else if(operator == '+'){
        text = Number(num1) + Number(num2) 
    }
    else if(operator == '-'){
        text = Number(num1) - Number(num2) 
    }
 
    //check logic and throw error
    if(num1=="" || num2=="" || isNaN(text) || text=="Infinity"){
        alert("Check you insert correct operation");
        //retern to initial mode
        text = "0"
    }
    //update 
    update()
}

//another way
function calc2(){
    //or using eval directly
    text = eval(text)
    
    //update 
    update()
}

function update(){
    displayscreen.textContent = text;
}

operation.forEach( (btn) => {
    btn.addEventListener('click',()=>{
        if(text == "0"){
            text = btn.textContent
        }
        else{
            text += btn.textContent
        }
        update()
    })
});

deleteallbtn.addEventListener('click' , ()=>{
    deleteall()
})

deletecharbtn.addEventListener('click' , ()=>{
    deletechar()
})

resultbtn.addEventListener('click' , ()=>{
    calc2()
})
