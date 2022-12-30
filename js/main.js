// fetch("/assets/files/test.json")
// 	.then((response) => response.text())
// 	.then((data) => nigga(data));

// // let nigga = (data) => (document.body.innerText = data);

// let fetchData = async () => {
// 	let request = await fetch("/assets/files/test.json");
// 	let response = await request.json();
// 	display(response);
// };

// let display = (data) => {
// 	let html = "";
// 	for (let value of data) {
// 		html += `<div><h4>${value.title}</h4>
//                  <p>${value.body}</p></div>
//                  `;
// 	}
// 	document.body.innerHTML = html;
// };

// fetchData();
let show = document.querySelector(".show");
let moviez = document.querySelector(".moviez");
let look = document.querySelector("#look");
// for (let i = 0; i < 5; i++) {
// 	show.insertAdjacentHTML("afterbegin", `<p>${i}</p>`);
// }

function recherche(product) {
	let myRequest = new Request(
		`http://www.omdbapi.com/?apikey=dc106a55&s=${product}`,
		{
			method: "GET",
		},
	);

	let fetchData = async () => {
		let request = await fetch(myRequest);
		let data = await request.json();
		display(data.Search);
	};

	let display = (data) => {
		const moviesHTML = [];
		const showHTML = [];
		for (const value of data) {
			if (value.Type === "movie") {
				console.log(value);
				moviesHTML.push(`<div class="imdb" id="${value.imdbID}">
				    <h3>${value.Title}</h3>
				    <img src="${value.Poster}" alt="poster">
				</div>`);
				// moviez.innerHTML = `<div class="imdb" id="${value.imdbID}">
				//     <h3>${value.Title}</h3>
				//     <img src="${value.Poster}" alt="poster">
				// </div>`;
			} else {
				showHTML.push(`<div class="imdb" id="${value.imdbID}">
				            <h3>${value.Title}</h3>
				            <img src="${value.Poster}" alt="poster">
				        </div>`);
			}
			if (value.Poster === "N/A") {
				let test = document.querySelector(`#${value.imdbID}`);
				test.remove();
			}
			// console.log(value.Title);
		}
		moviez.innerHTML = "<h2>Movies</h2>\n" + moviesHTML.join("\n");
		show.innerHTML = "<h2>Tv shows</h2>\n" + showHTML.join("\n");

		// show.insertAdjacentHTML("afterbegin", "<h2>Tv shows</h2>");
		// moviez.insertAdjacentHTML("afterbegin", "<h2>Movies</h2>");
	};

	fetchData();
}

function broadCast() {
	let results = look.value.trim();
	if (results.length < 3) {
		console.log(results);
	} else {
		recherche(results);
	}
}
// search.addEventListener("click", (event) => {
// 	event.preventDefault();
// 	let production = look.value;
// 	if (production === "") {
// 		alert("Write something bitch!");
// 	} else {
// 		recherche(production);
// 	}
// });
