document.getElementById("button").addEventListener("click", submit);

function submit() {
	fetch("http://178.128.193.133:5050", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			body: document.getElementById("input_field").value,
		}),
	})
		.then((response) => response.text())
		.then((data) => {
			var doc = new DOMParser().parseFromString(data, "text/html");
			const html = doc.getElementById("markedTextField").innerHTML;

			const text = html.replace(/(<([^>]+)>)/gi, "");
			document.getElementById("output_field").value = text;
		})
		.catch((err) => {
			console.log("error");
			console.log(err);
		});
}
