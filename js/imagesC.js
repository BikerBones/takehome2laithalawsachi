// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get elements by their IDs
  var boxC = document.getElementById("boxC");
  var imageContainer = document.getElementById("imageContainer2");
  var hideResultBox = document.getElementById("hideResultBox2");

  // Flag to track whether the image is displayed
  var imageDisplayed = false;

  // Add a click event listener to "box C"
  boxC.addEventListener("click", function () {
    if (!imageDisplayed) {
      // Create an image element
      var image = document.createElement("img");

      // Set the image source
      image.src = "./img/css-letter-c.png"; // Replace with the actual image path

      // Center align the image
      image.style.textAlign = "center";

      // Append the image to the image container
      imageContainer.appendChild(image);

      // Display the "Hide Result" box
      hideResultBox.style.display = "block";

      // Update the flag to indicate that the image is displayed
      imageDisplayed = true;
    }
  });

  // Add a click event listener to the "Hide Result" box
  hideResultBox.addEventListener("click", function () {
    if (imageDisplayed) {
      // Hide the image by removing it from the container
      var image = imageContainer.querySelector("img");
      if (image) {
        imageContainer.removeChild(image);
        imageDisplayed = false;

        // Hide the "Hide Result" box again
        hideResultBox.style.display = "none";
      }
    }
  });
});
