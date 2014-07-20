/*
	Number Game
	JQuery Document
*/

$(new Document).ready(function(){

	// Mouse Over event    
	$('.child').hover(function()
    {
		console.log("inside div");
      $(this).css("border-color","yellow");
    },

    function()
    {
      $(this).css("border-color","gray");
    });
    
	// RadioButton Click Event and color selection
    $("#colordiv input:radio[name=color]").click(function() {
    color = $(this).val();
    });
    
	// Number div click Event and color change
    $('.child').click(function()
    {
        if (($(this).css("background-color")=="rgb(255, 255, 255)"))
            $(this).css("background-color",color);              
        else
            alert("Already Colored!!");
    });
    
	// Randomize function (called later in shuffle event), parent element calls with child element as an arguement and shuffles it.
	$.fn.randomize = function(childElem) {
		return this.each(function() {
		      var $this = $(this);
		      var elems = $this.children(childElem);
		      elems.sort(function() {
				return (Math.round(Math.random())-0.5); 
				});  

		$this.detach(childElem);
    	for(var i=0; i < elems.length; i++)
    		$this.append(elems[i]);      
  		});    
	}
    
	// Click event for SHUFFLE button. Calls randomize function for all 9 divs and shuffles them randomly.
    $('#shuffle').click(function()
    {
    $("div#parent").randomize("div.child");
    });

	// Click event for RESET button.
	$('#reset').click(function()                                                       
    { 
       $("#red").removeAttr("checked");
       $("#green").removeAttr("checked");
       $("#blue").removeAttr("checked");
       color = undefined;
       $(".child").css("background-color","white");
       $(".child").css("color","black");
       
       var x=1; 
       $(".child").each(function() 
       {
            if($(this).hasClass("child")) 
                $(this).text(x++);
       });       
    });    
});
