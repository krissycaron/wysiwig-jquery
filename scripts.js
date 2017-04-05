$.ajax({
	url: ["people.json"]
}).done( function (data) {
	console.log(data);
}).fail( function (error) {
	console.log("error");
}).always( function (){
	// doSomething();
});

