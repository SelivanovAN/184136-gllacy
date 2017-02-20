var openFeedbackAndOverlay = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var popupOverlay = document.querySelector(".feedback-overlay");
var closeFeedbackAndOverlay = popup.querySelector(".btn-modal-feedback-close");

	openFeedbackAndOverlay.addEventListener("click", function(event) {
		event.preventDefault();
	popup.classList.add("modal-content-show");
	popupOverlay.classList.add("modal-feedback-overlay");
	});
	
	closeFeedbackAndOverlay.addEventListener("click", function(event) {
		event.preventDefault();
	popup.classList.remove("modal-content-show");
	popupOverlay.classList.remove("modal-feedback-overlay");
	});
	
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-show")) {
		popup.classList.remove("modal-content-show");
			}
			if (popupOverlay.classList.contains("modal-feedback-overlay")) {
		popupOverlay.classList.remove("modal-feedback-overlay");
			}
		}
	}); 