var fonts = [
	"Georgia",
	"Palatino Linotype", "Book Antiqua", "Palatino",
	"Times New Roman", "Times",
	"Arial", "Helvetica",
	"Arial Black", "Gadget",
	"Comic Sans MS", "cursive",
	"Impact", "Charcoal",
	"Lucida Sans Unicode", "Lucida Grande",
	"Tahoma", "Geneva",
	"Trebuchet MS", "Helvetica",
	"Verdana", "Geneva",
	"Courier New", "Courier",
	"Lucida Console", "Monaco"
];

var colors = [
	"#A0C8DB",
	"#C99FB1",
	"#E39898",
	"#E6C6A3",
	"#C4C4C4"
];

function collision(obj1, obj2) {
	var x1 = obj1.offset().left;
	var y1 = obj1.offset().top;
	var h1 = obj1.outerHeight(true);
	var w1 = obj1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = obj2.offset().left;
	var y2 = obj2.offset().top;
	var h2 = obj2.outerHeight(true);
	var w2 = obj2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;

	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
		return false;
	} else {
		return true;
	}
}

function makeAsterisk() {
	var ast = $("<span>*</span>");

	ast.css("color",
		colors[Math.floor(Math.random() * (colors.length))]
	);

	ast.css("font-size", Math.random() * 100);
	ast.css("font-family", fonts[Math.floor(Math.random() * (fonts.length))]);
	
//	do {
		ast.css("top", Math.random() * $(document).height() - ast.height());
		ast.css("left", Math.random() * $(document).width() - ast.width());
//	} while (collision(ast, $('h1')));

	$("body").prepend(ast);
}

$(document).ready(function() {
	for (var i = 0; i < 250; i++) {
		makeAsterisk();
	}
});