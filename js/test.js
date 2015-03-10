console.log('this is a test and it is working');
var testWidgets = document.querySelectorAll(".testWidget");

for (var i = 0; i< testWidgets.length; i++) {
	var div = testWidgets[i];
	div.innerHTML = 'this is a test ' + new Date();
}
// testWidgets.forEach(function (elt) {
// 	console.log(elt);
// });

//   
