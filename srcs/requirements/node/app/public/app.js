
function putElement(id, text)
{
	document.getElementById(id).textContent = text;
}

let num;

num = window.prompt("What is the name of the school?");

putElement("myH1", "Transendence");
putElement("p1", "By Skyy Moore");
putElement("p2", `This is a ${num} Project.`);
putElement("p3", "Isn't it cool?");

