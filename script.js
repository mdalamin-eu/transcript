// // Get all certificate photos
// const certificatePhotos = document.querySelectorAll('.certificate-container img');

// // Add click event listener to each certificate photo
// certificatePhotos.forEach(photo => {
//   photo.addEventListener('click', (event) => {
//     // Get the certificate photo's src and create a new img element
//     const src = event.target.src;
//     const newImg = document.createElement('img');
//     newImg.src = src;

//     // Create a div for the certificate photo and append the new img element
//     const certificatePhotoDiv = document.createElement('div');
//     certificatePhotoDiv.classList.add('certificate-photo');
//     certificatePhotoDiv.appendChild(newImg);

//     // Add click event listener to the certificate photo div to close it
//     certificatePhotoDiv.addEventListener('click', () => {
//       certificatePhotoDiv.remove();
//     });

//     // Append the certificate photo div to the body
//     document.body.appendChild(certificatePhotoDiv);
//   });
// });

// Get the modal
// Get all the images with class="myImg" inside the "certificate-container" div
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
