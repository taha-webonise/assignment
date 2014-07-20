/*
	Graph Assignment
	Using HTML5 Canvas
	Classical Inheritance Approach
*/

// Object Line {Constructor}
function Line(slope, intercept, start, end){
	this._slope = slope
	this._intercept = intercept
	this._start = start
	this._end = end
}

// Adding draw method to Line prototype
Line.prototype.draw = function(){
	var y1 = (this._slope * this._start) + this._intercept
	var y2 = this._slope * (this._end - this._start) + y1
	return [y1, y2, this._start, this._end];
}

// Parse function to parse the equation and create a new Line instance with calculated slope and intercept
function parse(){
	var equation = document.getElementById("equation").value;
	var start = parseInt(document.getElementById("start").value);
	var end = parseInt(document.getElementById("end").value);

	splitarray = equation.split("=");	
	var slope = '';
	var y = '';
	var intercept = '';
	
	splitarray.forEach(function(value)
	{
		if (value.contains("+"))
		{
			var coeffs = value.split("+");
		
			coeffs.forEach(function(coeff)
			{
				if (coeff.contains("y"))
				{
					y = parseInt(coeff.replace( /[^\d]/g, ''));
					if (isNaN(y))
						y = 1;
				}
				else if (coeff.contains("x"))
				{
					slope = parseInt(coeff.replace( /[^\d]/g, ''));
					if (isNaN(slope))
						slope = 1;
				}
				else if(!isNaN(parseInt(coeff)))
					intercept = parseInt(coeff);				
			});
		}
		if (value.contains("y") && y.length == 0)
		{
			y = parseInt(value.replace( /[^\d]/g, ''));
			if (isNaN(y))
				y = 1;
		}
		else if (value.contains("x") && slope.length == 0)
		{
			slope = parseInt(value.replace( /[^\d]/g, ''));
			if (isNaN(slope))
				slope = 1;
		}
		else if (intercept.length == 0)
				intercept = parseInt(value);
	});

	if (y != 1)
	{
		slope /= y;
		intercept /= y;
	}

	// graphLine: new instance of Line created using slope, intercept, start and end
	graphLine = new Line(slope, intercept, start, end);
}

// Function sketch()
// This function will be called on draw button click
// It will parse the equation, draw line and axis on canvas
function sketch(){

	parse()

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var step = parseInt(document.getElementById("step").value);

	canvas.width = canvas.width;	
	context.translate(50,600);
	context.scale(1,-1);
	context.moveTo(0, 0);
	context.lineTo(0, 550);
	context.moveTo(0, 0);
	context.lineTo(550, 0);
	context.stroke();

	// Calling graphLine's draw() method which will return x1, x2, y1, y2 and assign it to local variable "cordinates"
	var cordinates = graphLine.draw();

	var y1 = cordinates[0];
	var y2 = cordinates[1];
	var x1 = cordinates[2];
	var x2 = cordinates[3];

	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();

	for (var i=x1;i<=x2;i+=step)
	{
		context.moveTo(i, -5);
		context.lineTo(i, 5);
	}

	for (var i=y1;i<=y2;i+=step)
	{
		context.moveTo(-5, i);
		context.lineTo(5, i);
	}
	context.stroke();
}

// reset function for reset button
function reset(){
	var canvas = document.getElementById("canvas");
	canvas.width = canvas.width;
	var texts = document.getElementById("equation");
	texts.value = ""
	var texts = document.getElementById("start");
	texts.value = ""
	var texts = document.getElementById("end");
	texts.value = ""
	var texts = document.getElementById("step");
	texts.value = ""
}
