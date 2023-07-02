//Steps
 //step1: to assign the variables i.e inputtask, addbutton, and clearAllbtn, tasksList
 //step2: assign new variable to store the input data and put it in the tasksList
 //step3: add eventlistner to listen to when add btn is clicked, and add the input data in the tasks list
 //step4: add eventListner to clear all the items inside of taskList, when clearAll btn is clicked
   //This 4 steps alone will maake an functioning todo list with out local storage

   //Steps for using the local storage

//step1: assign an array to store all the input task value, and stringify it and store it in the localstorage
//step2: addEventListener to listen when the page is refreshed/reopened.
//step3: addEventListener to clearAll button, it should return localStorage.clear() method. this button should also delete the tasksList items.



const inputTask = document.querySelector("#input")
const addBtn = document.querySelector(".wrapper button")
const tasksList = document.getElementById("tasksList")
const clearAll = document.querySelector(".clearAllContainer button")

const arrayOfUserTasks = [] //for local storage

addBtn.addEventListener("click",()=>{

let userInput = inputTask.value

arrayOfUserTasks.push(userInput)
localStorage.setItem("tasks",JSON.stringify(arrayOfUserTasks)) //setting a key-value pair in localStorage, the value will be the array of userTasks

if(userInput){ //Using conditionals to avoid user to put empty values
    const li = document.createElement("li")
     li.textContent= userInput
     tasksList.appendChild(li)
     inputTask.value = ""

     li.addEventListener("click",()=>{ //single click to check the task
        li.style.textDecoration = "line-through"
    })

    li.addEventListener("dblclick",()=>{  //double click to uncheck the task
        li.style.textDecoration = "none"
    })
}
})

clearAll.addEventListener("click",()=>{
    tasksList.remove()   //removes all the elements 
})




//now, working on local storage!

window.addEventListener("DOMContentLoaded",()=>{
    const allTasks = localStorage.getItem("tasks") //allTasks is now an JSON array containing all the userInput tasks
    const tasks= JSON.parse(allTasks) //tasks is now an actual array
    tasks.forEach((eachTask)=>{
        const li = document.createElement("li")
     li.textContent= eachTask
     tasksList.appendChild(li)
      
       //SAME FEATURE(COPY/PASTE)
       li.addEventListener("click",()=>{ //single click to check the task
        li.style.textDecoration = "line-through"
    })

    li.addEventListener("dblclick",()=>{  //double click to uncheck the task
        li.style.textDecoration = "none"
    })

    })

    clearAll.addEventListener("click",()=>{
        localStorage.removeItem("tasks")   //deletes from the local storage 
    })
    
})


