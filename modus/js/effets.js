/*Notes sur le jQuery : 
	$(# -> id 
	$(. -> class
*/

/* --------------------------------- JQUERY --------------------------------*/
/*Appeler au chargement du html.*/
$(document).ready(function()
{
	$("#entreprise").hide(); //Le div qui contient l'image de l'entreprise en grand est caché.
	$("#fullDescr").hide();  //Le div qui contient la description complète de l'exp en entreprise est caché.
	$("#rowDescr").hide();   //La row complète qui contient les deux div du dessus est cachée.
});

/* -------------------------------- JAVASCRIPT -------------------------------*/

/*	Fonction appelé lorsque l'on clique n'importe où dans le div des expériences professionnelles.
	Cette fonction 'réinitialise' l'affichage du div. Fait disparaître la rowDescr et réapparaître les éléments qui ont les class 'image' et 'description'.
	Param : aucun.
	Retour : aucun.
 */
function resetAffichage()
{
	$("#entreprise").fadeOut(); //Disparition de l'élément 'entreprise' avec un effet fadeOut (disparition en jouant sur l'opacité de manière progressive).
	$("#fullDescr").fadeOut(350, "linear"); //Disparition de l'élément 'fullDescr' avec un effet fadeOut (disparition en jouant sur l'opacité de manière progressive).
	$("#rowDescr").slideUp("slow", "linear"); //Disparition de toute la 'rowDescr' avec un effet slideUp (effet en balayage de bas en haut).

	//Tous les éléments qui ont les class 'image' et 'description' vont apparaître.
	$(".image").show();
	$(".description").show();
}

/*  Fonction qui cache tous les éléments qui ont comme class 'image' et 'description'.
	Ça correspond aux images et descriptions (en miniatures) qui sont dans la catégorie "expériences professionnelle." 
	Param : aucun.
	Retour : aucun.
*/
function hideImagesAndDescr()
{
	//Tous les éléments qui ont les class 'image' et 'description' vont disparaitre.
	$(".image").fadeOut(300);
	$(".description").fadeOut(300);
}

/*  Fonction appelée lorsque l'on clique sur une des images des expériences professionnelles. 
	Param : 
		- elemeId : id de l'élément sur lequel l'événement onClick a été mis.
		- evenement : l'événement qui a appelé la fonction (ici : 'onClick').
	Return : aucun:
*/
function move(elemId, evenement)
{
	hideImagesAndDescr(); //Appel de la fonction hideImagesAndDescr().

	//Définition du nom de l'image que l'on va donner à la balise <img> contenue dans la rowDescr>entreprise>imageEntreprise cachée au démarrage.
	var imgSrc = 'img/job/'+ elemId +'.png';
 	$("#imageEntreprise").attr("src", imgSrc);
	 
	changeFullDescr(elemId); //Appel de la fonction changeFullDescr() pour changer le texte du div fullDescr.

	$("#entreprise").fadeIn("slow", "linear");	//Apparition de l'élément 'entreprise' avec un effet fadeIn (apparition en jouant sur l'opacité de manière progressive).
	$("#fullDescr").fadeIn("slow", "linear");  	//Apparition de l'élément 'fullDescr' avec un effet fadeIn (apparition en jouant sur l'opacité de manière progressive).
	$("#rowDescr").slideDown("slow", "linear"); //Apparition de toute la 'rowDescr' avec un effet slideDown (effet en balayage de haut en bas).
	
	evenement.stopPropagation(); //Arrêt de l'événement 'onClick' qui se propage aux parents. Ici, on ne veut pas que l'événement 'onClick' du div des expériences professionnelles 'works' soit appelé.
}


/*  Fonction appelée depuis la fonction move() (ci-dessus). 
	Elle change le contenu de la div '#fullDesc'
	Param : 
		- elemeId : id de l'élément pour savoir quel texte il faut charger.
	Return : aucun:
*/
function changeFullDescr(elemId)
{
	if(elemId == "heredisImg"){
		$("h4.h4title").text("Stage de fin d'études"); //Changement du contenu de la balise <h4>
	}
	else if(elemId == "impikaImg"){
		$("h4.h4title").text("1ère expérience professionnelle"); //Changement du contenu de la balise <h4>
	}
}
