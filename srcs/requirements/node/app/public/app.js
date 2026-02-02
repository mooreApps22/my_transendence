
function putElement(id, text)
{
	document.getElementById(id).textContent = text;
}

let num;
let filledOut = false;

putElement("myTextLabel", "Name:");
putElement("btn", "submit");

putElement("myH1", "Transendence");
putElement("p1", "By Skyy Moore");
putElement("p3", "Isn't it cool?");
document.getElementById("btn").onclick = function(){
	num = document.getElementById("user_input").value;	
	console.log(num);
	putElement("p2", `This is a ${num} Project.`);
}; 

