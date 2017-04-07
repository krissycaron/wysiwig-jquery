
var input = document.getElementById("user-input");
var data;


$.ajax({
	url: ["people.json"]
}).done( function (data) {
	// console.log(data);
	doSomething(data);
}).fail( function (error) {
	// console.log("error");
});


function doSomething(data){
	console.log(data.people.length);			
	for (var i=0; i<data.people.length; i++){
		console.log("inside doSomething");
	var card = "";
		card += `<div id="person-${i}" class="person"><header class="child">`;
		card += `<h3 class="grandChild">${data.people[i].name}</h3><h6 class="grandChild">${data.people[i].title}</h6></header>`;
		card += `<section class="child"><p class="bioClass">${data.people[i].bio}</p><img class="grandChild" src="${data.people[i].image}"></section>`;
		card += `<footer class="child"><p class="grandChild">${data.people[i].lifespan.birth} to ${data.people[i].lifespan.death}</p></footer>`;
		card +=`</div>`;
	$("#peopleContainer").append(card);
	}
}

// function onFocusFunction(){
// 	$("body").click(function(){
// 	$("#user-input").focus();
// 	});
// }
// function (){
 $("#peopleContainer").click(function(data){
 		var clickedBio = data.target;
 	if (clickedBio.className === "bioClass"){
   		input.focus();
   		input.val(clickedBio.innerHTMl);
   		input.keydown(function(){
   			clickedBio.innerHTMl = input.val();
   			console.log("keypress");
   		});

   	}

 }); 













