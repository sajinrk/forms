	/*
	*Javascript File
	* Project Name
	* Description
	*@author Sajin R
	*/
	

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

	function popupOK(){
		var elem = document.getElementById("popup");
		elem.parentNode.removeChild(elem);
	}

	
	/**********Helper Functions*********************************************/

	var submitMessage = "Your form is submitted"
	
	function showPopup(message){
		console.log("popup " + message);
		document.getElementById("forms").appendChild(getPopup(message));
	}	

	
	var popupInnerHTML = "<input type=\"button\" class=\"btnPopupOK\" value=\"OK\" onclick=\"popupOK()\">##message##";
	function getPopup(message){
		var html = popupInnerHTML;
		html = html.replace("##message##", message);
		var popup = document.createElement('div');
		popup.id="popup";
		popup.className ="popup"
		popup.innerHTML = html;
		return popup;
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