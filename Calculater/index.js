const btn = document.getElementsByClassName('btn');
const inputValue = document.getElementById('inputValue');

let valueItems = "";
let memory = "";


// calculate values
function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}

document.addEventListener('click', (e)=>{
    const element = e.target;

    if(element.innerText === 'DEL'){
        // remove values

        let splitList = valueItems.split("")
        splitList.pop()
        valueItems = splitList.join("")
        inputValue.value = valueItems
        return
    }
    
    if(element.id ==='btn' && element.innerText != '='){

        //const spIcons = ["*","/","%","+","-"].includes(valueItems[valueItems.length-1])
    
        if(element.innerText === 'X'){
            valueItems = valueItems + '*'
        }else{
            valueItems = valueItems + element.innerText //!= 'X' ? element.innerText : '*'
        }            
    
    }

    inputValue.value = valueItems

    if(element.innerText === 'RESET'){
        // clear all
        inputValue.value = "0"
        valueItems = ""
    }
    
    if(element.innerText === '='){
        // calculate
        inputValue.value = parse(valueItems)
        valueItems = parse(valueItems).toString()
    }
    
});


