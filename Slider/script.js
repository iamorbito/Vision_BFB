let currentImageIndex = 0;

function startCamera() {
  const camera = document.getElementById('camera');
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      camera.srcObject = stream;
    })
    .catch((error) => {
      console.error('Error accessing camera:', error);
    });
}

function stopCamera() {
  const camera = document.getElementById('camera');
  const stream = camera.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(track => track.stop());
  camera.srcObject = null;
}

function displayImage(index) {
  const currentImage = document.getElementById('currentImage');
  const images = ['Cutouts/Hoodies/SH1.png', 'Cutouts/Hoodies/SH2.png', 'Cutouts/Hoodies/SH3.png','Cutouts/Hoodies/SH4.png' , 'Cutouts/Hoodies/SH5.png' , 'Cutouts/Shirts/SS1.png' ,];
  currentImage.src = images[index];
}

function showImage() {
  const currentImage = document.getElementById('currentImage');
  currentImage.style.display = 'block';
}

function hideImage() {
  const currentImage = document.getElementById('currentImage');
  currentImage.style.display = 'none';
}

function prevImage() {
  hideImage();
  currentImageIndex = (currentImageIndex - 1 + 3) % 3;
  displayImage(currentImageIndex);
  showImage();
}

function nextImage() {
  hideImage();
  currentImageIndex = (currentImageIndex + 1) % 3;
  displayImage(currentImageIndex);
  showImage();
}

function hoverButton(button) {
  button.style.backgroundColor = "#2980b9";
}

function unhoverButton(button) {
  button.style.backgroundColor = "#3498db";
}

document.addEventListener("DOMContentLoaded", function () {
  startCamera();
});
