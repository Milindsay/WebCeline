// function myMove(elemId, nouvelleTaille)
// {
// 	var elem = document.getElementById(elemId);   
//     //alert("elem  :" + elem);
//     //alert("elemelemIdelemId  :" + elemId);
// 	var currentHeight = elem.offsetHeight;
// 	var diff = nouvelleTaille - currentHeight;
// 	//alert("nouvelleTaille : " + nouvelleTaille);
// 	//alert("currentHeight : " + currentHeight);
// 	//alert("diff : " + diff);
// 	var diffAbs = Math.abs(diff);
// 	//alert("diff abs: " + Math.abs(diff)); 
// 	//if(Math.abs(diff) == -1){ aler("diff négatif"); } else {alert("diff positif");}
	
// 	var id = setInterval(move, 0);
	
// 	function move()
// 	{	
// 		if (diffAbs == 0 /*&& elem.height == nouvelleTaille*/) {
// 			//alert("stop");
// 			//elem.style.margin = nouvelleTaille + 'px';
// 			clearInterval(id);
// 		}
// 		else
// 		{
// 			diffAbs--;
// 			//alert("diffAbs : " + diffAbs);
// 			if(Math.sign(diff) == -1)
// 			{
// 				//alert("diff négatif");
// 				elem.height = currentHeight - 1;
// 			}
// 			else
// 			{
// 				//alert("diff positif");
// 				elem.height = currentHeight + 1;
// 			}
// 			//alert("elem.height : " + elem.height);
// 			elem.style.height = elem.height + 'px';
// 			//alert("elem.style.height : " + elem.style.height);
// 			currentHeight = elem.height;
// 			//alert("currentHeight : " + currentHeight);
// 		}
// 	}
// }


//hidden en jquery //# -> id . -> class
$(document).ready(function()
{
	$("#entreprise").hide();
	$("#fullDescr").hide();
	$("#rowDescr").hide();
});

function move(elemId, evenement)
{
	hideImagesAndDescr();

	var imgSrc = 'img/job/'+ elemId +'.png';
 	$("#imageEntreprise").attr("src", imgSrc);

	$("#entreprise").fadeIn("slow", "linear");	
	$("#fullDescr").fadeIn("slow", "linear");  //descend juste
	$("#rowDescr").slideDown("slow", "linear");
	evenement.stopPropagation();
}

function hideImagesAndDescr()
{
	//Toutes les classe "image" et "description" vont disparaitre.
	$(".image").fadeOut(300);
	$(".description").fadeOut(300);
}

function resetAffichage()
{
	$("#entreprise").fadeOut();
	$("#fullDescr").fadeOut(350, "linear");  
	$("#rowDescr").slideUp("slow", "linear"); //descend juste

	$(".image").show();
	$(".description").show();
}
