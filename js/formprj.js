	/*
	*Javascript File
	*/
	var submitMessage = "Your form is submitted"

	/*
	*
	*/
	function init(){
		console.log("init()");

		/*Initializing Page*/
		initPage();

		
	}

	/*
	*
	*/
	function submitForm1(formName){
		console.log("submitForm1()" + formName);
		//call business logic functions here
		renderForms(formName);

	}

	/*
	*
	*/
	function submitForm2(formName){
		console.log("submitForm2()");
		//call business logic functions here
		renderForms(formName);
	}


	/*
	*
	*/
	function submitForm3(formName){
		console.log("submitForm3()");
		//call business logic functions here
		renderForms(formName);
		showPopup(submitMessage);
	}

	/*******************************************************/

	
	function showPopup(message){
		console.log("popup " + message);
		document.getElementById("forms").innerHTML = getPopupHTML(message);
	}

	var popupHTML = "<div id=\"popup\" class=\"popup\"><input type=\"button\" class=\"btnPopupOK\" value=\"OK\" onclick=\"popupOK()\">##message##</div>";
	function getPopupHTML(message){
		var html = popupHTML;
		return html.replace('##message##', message);
	}

	function popupOK(){
		var elem = document.getElementById("popup");
		elem.parentNode.removeChild(elem);
	}

	function renderForms(formName){

		if(formName == "form1"){
			document.getElementById("form1").style.display = "none";
			document.getElementById("form2").style.display = "block";
		}else if(formName == "form2"){
			document.getElementById("form2").style.display = "none";
			document.getElementById("form3").style.display = "block";
		}else if(formName == "form3"){
			document.getElementById("form3").style.display = "none";
		}

	}

	function initPage(){
		document.getElementById("form1").style.display = "block";
		document.getElementById("form2").style.display = "none";
		document.getElementById("form3").style.display = "none";
	}