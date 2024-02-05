
const navIcon = document.getElementById("navIcon");
const navRes = document.getElementById('navRes');
const navItem = document.getElementById('navItem');
const form = document.getElementById('form')
const name_ = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');



navIcon.addEventListener('click',(e)=>{
    e.preventDefault()
    navRes.className = navRes.className === "nav-list-responsive" ? "xxx":"nav-list-responsive"
    
})

//navItem.addEventListener('click',(e)=>{
//    //e.preventDefault()
//    //navRes.className = navRes.className === "xxx" ? "xxx":"nav-list-responsive"
//    alert("ss")
//})



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    sendMail();
})


async function sendMail(){
    if (name_.value ==="" || message.value ==="" ) return
    try {
        
        console.log([name_.value,email.value,subject.value,message.value])
        alert("You are Connected!")
       
    } catch (error) {
        console.log(error);
    }
}

AOS.init();