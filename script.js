//your JS code here. If required.
(function (){
	const form = document.getElementById("login-form")
	const userName = document.getElementById("username")
	const pass = document.getElementById("password");
	const checkbox = document.getElementById("checkbox")
	const submit = document.getElementById("submit")
	const exist = document.getElementById("existing")

	function credExist() {
		return localStorage.getItem("username") && localStorage.getItem("password");
	}

	function updateExistingVisibility() {
		exist.style.display = credExist() ? "block" : "none"
	}

	window.addEventListener("DOMContentLoaded", ()=>{
		userName.value="";
		pass.value = "";
		checkbox.checked = false;
		updateExistingVisibility();
	})

	form.addEventListener("submit", (e)=>{
		e.preventDefault();

		const user = userName.value.trim();
		const password = pass.value;

		alert(`Logged in as ${user}`)

		if(checkbox.checked){
			localStorage.setItem("username", user);
			localStorage.setItem("password", password)
		}
		else{
			localStorage.removeItem("username");
			localStorage.removeItem("password")
		}
		updateExistingVisibility();
	})
	exist.addEventListener("click" , ()=>{
			const savedUsername = localStorage.getItem("username")
			if(savedUsername){
				alert(`Logged in as ${savedUsername}`)
		}
	})
})();
