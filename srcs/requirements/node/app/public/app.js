document.getElementById("myH1").textContent = "Transend!";

let x = "This is the transendence project!";
let y = "42 is in London.";
let z = "But, I'm study remotely in L.A." 

let firstName = "Skyy";
let lastName = "Moore";
let name = `${firstName} ${lastName}`;

let online = false;

if (online)
{
	document.getElementById("p1").textContent = x;
	document.getElementById("p2").textContent = y;
	document.getElementById("p3").textContent = z;
}
else
{
	z = `${name} is not here right now`;
	document.getElementById("p3").textContent = z;
}
