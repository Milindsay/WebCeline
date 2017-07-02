function myMove(elemId, nouvelleTaille)
{
	var elem = document.getElementById(elemId);   
    //alert("elem  :" + elem);
    //alert("elemelemIdelemId  :" + elemId);
	var currentHeight = elem.offsetHeight;
	var diff = nouvelleTaille - currentHeight;
	//alert("nouvelleTaille : " + nouvelleTaille);
	//alert("currentHeight : " + currentHeight);
	//alert("diff : " + diff);
	var diffAbs = Math.abs(diff);
	//alert("diff abs: " + Math.abs(diff)); 
	//if(Math.abs(diff) == -1){ aler("diff négatif"); } else {alert("diff positif");}
	
	var id = setInterval(move, 0);
	
	function move()
	{	
		if (diffAbs == 0 /*&& elem.height == nouvelleTaille*/) {
			//alert("stop");
			//elem.style.margin = nouvelleTaille + 'px';
			clearInterval(id);
		}
		else
		{
			diffAbs--;
			//alert("diffAbs : " + diffAbs);
			if(Math.sign(diff) == -1)
			{
				//alert("diff négatif");
				elem.height = currentHeight - 1;
			}
			else
			{
				//alert("diff positif");
				elem.height = currentHeight + 1;
			}
			//alert("elem.height : " + elem.height);
			elem.style.height = elem.height + 'px';
			//alert("elem.style.height : " + elem.style.height);
			currentHeight = elem.height;
			//alert("currentHeight : " + currentHeight);
		}
	}
}


//$("div").animate({height:'150'}); // Permet de redimensionner un élément (ex: div) avec une animation slideDown/Up

//hidden en jquery //# -> id . -> class
$(document).ready(function()
{
	$("#fullDescr").hide();
	$("#arevaImg").click(function()
		{
			$("#arevaDescr").fadeOut();  //fideIn() pour faire apparaitre.
			// $("#fullDescr").fadeIn(1000);
			// $("#fullDescr").slideToggle("slow", "swing"); //descend puis monte
			$("#fullDescr").slideDown("slow", "linear");  //descend juste
			$("#heredis").fadeOut();
			$("#impika").fadeOut();
		}
	);
	/*$("#arevaImg").click(function(){
		$("#arevaDescr").fadeIn();
	});*/
});