/*var box1 = document.getElementById("slider");
		var box2 = document.getElementById("chatslider");
    var box3 = document.getElementById("map_canvas");
		
		// Function to make box2 longer
		function toggleSlider() {
      map_canvas.classList.add("shorter");
			chatslider.classList.add("longer");
		}*/
    var popup=document.getElementById("newgroup");
    function openPopup() {
      
    var popupscreen=document.getElementById("popup-container");
      popupscreen.style.display="block";
    }

    function exitPop(){
      var popupscreen=document.getElementById("popup-container");
      popupscreen.style.display="none";
    }

    function selected(id){
      var id=document.getElementById(id);
      id.style.color="#98DF94";
    }