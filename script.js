
var certificateImages = document.querySelectorAll(".certificate-container .certificate-img ");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the modal image and caption elements
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Attach onclick event handlers to all the certificate images
for (var i = 0; i < certificateImages.length; i++) {
  certificateImages[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
