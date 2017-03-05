//window.onload =function(){
  //if (document.getElementById("other_id").value == ""){
	  //alert("lkkj");
	 // document.getElementById("other_id").disabled = false;
  //}
//}

function eliminate() {
	var selected_course = document.getElementsByTagName("select")[0].value;
	var array = new Array("Java SE", "Java EE", "C#", "Тестирование ПО",
			"Автоматизированное тестирование", "JavaScript");

	var sel = document.getElementsByTagName("select")[3];
	sel.innerHTML = "";
	array.forEach(function(item, i, array) {
		var option = document.createElement("option");
		var txt = document.createTextNode(item);
		option.appendChild(txt);
		if (item != selected_course) {
			sel.appendChild(option);
		}

	});

}

function set_enable() {
	if (document.getElementById("otherwise_id").checked == true) {
		document.getElementById("other_id").disabled = false;
	} else {
		document.getElementById("other_id").disabled = true;
		document.getElementById("other_id").value = "";
	}
}

function message() {
	if (document.getElementById("hidden_id").value == "true") {
		alert("Браво, честный человек! Смело отправляйся смотреть результат");
		return true;
	} else {

		if (document.getElementById("hidden_id").value == "false") {
			return (confirm("Вообще-то врать не хорошо, даже если не видят… Точно отправляем"));

		}

	}

}

function set_hidden(obj) {

	document.getElementById("hidden_id").value = obj;
	// alert(obj);
}