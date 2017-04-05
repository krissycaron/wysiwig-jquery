
var input = document.getElementById("user-input");
var outputDiv = document.getElementById("output");
var data;


$.ajax({
	url: ["people.json"]
}).done( function (data) {
	console.log(data);
	doSomething(data);
}).fail( function (error) {
	console.log("error");
}).always( function (){
});


function doSomething(data){
	console.log(data.people.length);
	for (var i=0; i<data.length; i++){
	var card = `<div id="person-${i}" class="person"><header class="child">`;
		card += `<h3 class="grandChild">${data.people[i].name}</h3><h6 class="grandChild">${data.people[i].title}</h6></header>`;
		card += `<section class="child"><p class="grandChild">${data.people[i].bio}</p><img class="grandChild" src="${data.people[i].image}"></section>`
	}
}


// 
// 	
// 		<section class="child">
// 			<p class="grandChild">${data.people[i].bio}</p>
// 			<img class="grandChild" src="${famousPeople[i].image}">
// 		</section>
// 		<footer class="child">
// 			<p class="grandChild">${famousPeople[i].lifespan.birth} to ${famousPeople[i].lifespan.death}</p>
// 		</footer>