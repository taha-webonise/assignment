function draw(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = canvas.width;	
	context.translate(50,600);
	context.scale(1,-1);
	context.moveTo(0, 0);
	context.lineTo(0, 550);
	context.moveTo(0, 0);
	context.lineTo(550, 0);
	context.stroke();

	var equation = document.getElementById("equation").value;
	var start = parseInt(document.getElementById("start").value);
	var end = parseInt(document.getElementById("end").value);
	var step = parseInt(document.getElementById("step").value);

	splitarray = equation.split("=");
	
	var x = '';
	var y = '';
	var c = '';
	
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
					x = parseInt(coeff.replace( /[^\d]/g, ''));
					if (isNaN(x))
						x = 1;
				}
				else if(!isNaN(parseInt(coeff)))
					c = parseInt(coeff);				
			});
		}
		if (value.contains("y") && y.length == 0)
		{
			y = parseInt(value.replace( /[^\d]/g, ''));
			if (isNaN(y))
				y = 1;
		}
		else if (value.contains("x") && x.length == 0)
		{
			x = parseInt(value.replace( /[^\d]/g, ''));
			if (isNaN(y))
				x = 1;
		}
		else if (c.length == 0)
				c = parseInt(value);
	});

	if (y != 1)
	{
		x /= y;
		c /= y;
	}
	
	var y1 = (x * start) + c;
	var y2 = x * (end - start) + y1;

	context.moveTo(start, y1);
	context.lineTo(end, y2);
	context.stroke();

	for (var i=start;i<=end;i+=step)
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
