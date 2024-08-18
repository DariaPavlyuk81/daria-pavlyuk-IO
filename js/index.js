//create a footer element
const aFooter = document.createElement ("Footer");
aFooter.className = "footer";
aFooter.setAttribute("id","myfooter");
document.body.appendChild(aFooter);
console.log(aFooter);

//get the current year
const today = new Date();
const thisYear = today.getFullYear()
console.log(thisYear);

//added footer element
const newFooter = document.querySelector("footer");
console.log(newFooter);

//copyright
const aCopyright = document.createElement("P");
const copyrightSymbol = "\u00A9";
const copyrightText = copyrightSymbol + "DariaPavlyuk" + thisYear;
aCopyright.innerHTML=copyrightText;
console.log(aCopyright);

//append copyright to footer
newFooter.appendChild(aCopyright);
console.log(newFooter);

// skills section
const skills =["JavaScript", "HTML",  "CSS", "GitHUb"];
console.log(skills);

//sskills + DOM
const skillsSection = document.querySelector("#skills-section");
console.log(skillsSection);
const skillsList = document.getElementById("skills-list");
console.log(skillsList);

for (let i = 0; i< skills.length; i++)
{
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    console.log(skill);
    skillsList.appendChild(skill);
    console.log(skillsList);
}
//add new skill
const skillButton = document.getElementById("skill-button");
skillButton.addEventListener("click", ()=>{
    const newSkill = promt("Add a skill:");
    console.log("newSkill:", newSkill);
    const skillsList = document.querySelector(".skills");
    const li = document.createElement("li");
    li.innerText = newSkill;
    skillsList.appent(newSkill);
    console.log(skillsList);


})