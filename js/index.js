//create a footer element
const footer = document.createElement ("footer");

document.body.appendChild(footer);

const today = new Date();

//get the current year

const thisYear = today.getFullYear();

//added footer element
const newFooter = document.querySelector("footer");

//copyright
const copyright = document.createElement("p");
const copyrightSymbol = "\u00A9";
const copyrightContent = `${copyrightSymbol} DariaPavlyuk ${thisYear}`;
copyright.append(copyrightContent);
footer.append(copyright);


// skills section
const skills =["JavaScript", "HTML",  "CSS", "GitHub"];


//skills + DOM
const skillsSection = document.querySelector("#skills-section");

const skillsList = skillsSection.getElementsByTagName("ul")[0];



for (let i = 0; i< skills.length; i++)
{
    const skill = document.createElement("LI");

    skill.innerText = skills[i];
    
    skillsList.appendChild(skill);
    
}
//find the leave messages form and add the callback for submit
const messageForms = document.getElementsByName("leave_message");
const messageForm= messageForms[0];

//Attach the listener
messageForm.addEventListener("submit", onFormSubmit);

//callback for remove button
function onRemoveButton(event) {
    const entry =event.target.parentNode;
    entry.remove();

    const messageSection = document.getElementById("messages");
    const messageList = messageSection. getElementsByTagName("li");
    if (messageList.length === 0){
        messageSection.hidden = true;

    }
}
//callback for submit
function onFormSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const userName = formData.get("usersName");
    const email = formData.get("usersEmail");
    const userMessage = formData.get("usersMessage");

    //display message beneath messages section
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");



//display the message section
messageSection.hidden = false;
const newMessage = document.createElement("li");
const newMessageContent = `<a href="mailto:${email}">${userName}</a>
<span>${userMessage}</span>`;
newMessage.innerHTML = newMessageContent;


//Add a remove button
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeButton.type ="button";
removeButton.classList.add("remove-button");
removeButton.name = "remove-button";
//removeButton.checkValiditylastName = "remove-button";

//add even listener
removeButton.addEventListener("click",(event)=>{
    const entry = event.target.parentNode;
    entry.remove();

    const messageSection = document.getElementById ("messages");
    const messageList = messageSection.getElementsByTagName("ul");
    if (messageList.children.length=== 0){
        messageSection.hidden =true;
    }
});


//Add remove Button
newMessage.appendChild(removeButton);
//add message
messageList.appendChild(newMessage);

//reset the form
event.target.reset();


//find the leave messages from and add callback for submit
//const messageForm = document.getElementsById("messageForm");
//messageForm.addEventListener("submit",onFormSubmit);

}