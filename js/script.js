var openFeedback = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var closeFeedback = popup.querySelector(".btn-modal-feedback-close");

    openFeedback.addEventListener("click", function(event) {
        event.preventDefault();
    popup.classList.add("modal-content-show");
      });

    closeFeedback.addEventListener("click", function(event) {
        event.preventDefault();
    popup.classList.remove("modal-content-show");
      });
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
          }
        }
      });  
/*var mapOpen = document.querySelector(".js-map-openk");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");
  mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
    mapPopup.classList.add("modal-content-show");
      });

    mapClose.addEventListener("click", function(event) {
        event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
      });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });*/
	