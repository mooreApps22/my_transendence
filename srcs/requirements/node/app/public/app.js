console.log("app.js loaded");

let count = 0;

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	count++;
	console.log("Button clicked", count);
	btn.textContent = `Clicked ${count} times`;
});
