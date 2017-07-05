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
	$(".invisible").hide();  //Les éléments qui contiennent la class 'invisible' sont masqués.

	timeline();
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
		$("#fullDescr .contentDescription").text(
			$("#heredisDescr").text()
		);
		//alert($("#arevaDescr").text());
	}
	else if(elemId == "impikaImg"){
		$("h4.h4title").text("1ère expérience professionnelle"); //Changement du contenu de la balise <h4>
		$("#fullDescr .contentDescription").text(
			$("#impikaDescr").text()
		);
	}
	else if(elemId == "arevaImg"){
		$("h4.h4title").text("Stage de 2ème année d'études"); //Changement du contenu de la balise <h4>
		$("#fullDescr .contentDescription").text(
			$("#arevaDescr").text()
		);
	}
}

function timeline()
{
	var contentText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

	// dataRoot : '/'
	var myMappedObject = [
			{
				"isSelected": "true",
				"taskTitle": "My First Point 1",
				"taskSubTitle": "January 16th, 2014",
				"assignDate": "16/01/2014",
				"taskShortDate": "16 Jan",
				"taskDetails": "hi <span style=\"color:red\">my html content</span> other text"
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 2",
				"taskSubTitle": "February 28th, 2014",
				"assignDate": "28/02/2014",
				"taskShortDate": "28 Feb",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 3",
				"taskSubTitle": "March 20th, 2014",
				"assignDate": "20/04/2014",
				"taskShortDate": "20 Apr",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 4",
				"taskSubTitle": "May 20th, 2014",
				"assignDate": "20/05/2014",
				"taskShortDate": "20 May",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 5",
				"taskSubTitle": "July 9th, 2014",
				"assignDate": "09/07/2014",
				"taskShortDate": "09 July",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 6",
				"taskSubTitle": "August 30th, 2014",
				"assignDate": "30/08/2014",
				"taskShortDate": "30 Aug",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 7",
				"taskSubTitle": "September 15th, 2014",
				"assignDate": "15/09/2014",
				"taskShortDate": "15 Sep",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 8",
				"taskSubTitle": "November 1st, 2014",
				"assignDate": "01/11/2014",
				"taskShortDate": "01 Nov",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 9",
				"taskSubTitle": "December 10th, 2014",
				"assignDate": "10/12/2014",
				"taskShortDate": "10 Dec",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 10",
				"taskSubTitle": "January 19th, 2015",
				"assignDate": "19/01/2015",
				"taskShortDate": "29 Jan",
				"taskDetails": contentText
			},
			{
				"isSelected": "",
				"taskTitle": "My Point 11",
				"taskSubTitle": "March 3rd, 2015",
				"assignDate": "03/03/2015",
				"taskShortDate": "3 Mar",
				"taskDetails": contentText
			}
	];

	var jtLine = $('#myjtline').jTLine({
		callType: 'jsonObject',
		structureObj: myMappedObject,
		map: {
			"dataRoot": "/",
			"title": "taskTitle",
			"subTitle": "taskSubTitle",
			"dateValue": "assignDate",
			"pointCnt": "taskShortDate",
			"bodyCnt": "taskDetails"
		},
		distanceMode: 'fixDistance', // 'fixDistance' 'auto' 'predefinedDistance'
		eventsMinDistance: 60,       // Consider It as Distance Unit "by Pixel"
		fixDistanceValue: 2,         // if eventsMinDistance = 60 & fixDistanceValue= 2 then the value is: (60*2) = 120 px
		firstPointMargin: 1          // First Point Margin from the left
	});
}