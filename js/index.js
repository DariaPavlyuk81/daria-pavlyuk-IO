//create a footer element
const footer = document.createElement ("footer");
// footer.className = "footer";
// footer.setAttribute("id","myfooter");
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
const skills =["JavaScript", "HTML",  "CSS", "GitHUb"];


//skills + DOM
const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.getElementsByTagName("ul")[0];



for (let i = 0; i< skills.length; i++)
{
    const skill = document.createElement("li");

    skill.innerText = skills[i];
    
    skillsList.appendChild(skill);
    
}
//add new skill
// const skillButton = document.getElementById("skill-button");
// skillButton.addEventListener("click", ()=>{
//     const newSkill = promt("Add a skill:");
//     console.log("newSkill:", newSkill);
//     const skillsList = document.querySelector(".skills");
//     const li = document.createElement("li");
//     li.innerText = newSkill;
skillsList.appendChild(li);
//     skillsList.append(newSkill);
//     console.log(skillsList);

//}