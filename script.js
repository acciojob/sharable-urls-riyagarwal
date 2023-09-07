// your code here
const handleBtClick = () => {
	let name = document.getElementById("name").value
	let year = document.getElementById("year").value

	document.getElementById("url").innerText = 
		`https://localhost:8080/?name=${name}&year={year}`
}