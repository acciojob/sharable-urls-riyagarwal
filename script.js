// your code here
const handleBtnClick = () => {
	let name = document.getElementById("name").value

	let year = document.getElementById("year").value

	let str = `https://localhost:8080/?`

	if(name && year) {
		str += `name=${name}&year=${year}`
		
	}
	else if(name) {
		str += `name=${name}`
	}

	else if(year) {
		str += `year=${year}`
	}

	document.getElementById("url").textContent = str
}



