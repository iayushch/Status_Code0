// // // Get the form and popup elements
const form = document.getElementById('bloodDonationForm');
const popup = document.getElementById('popup');

// // Function to show the popup and hide the form
function showPopup() {
       // Hide the form
    form.style.display = 'none';
   // Show the popup with the thank-you message
       const popupMessage = document.querySelector('.thank-you');    
        popupMessage.classList.add('active'); // Add the 'active' class to display the message
      popupMessage.style.display = 'block';
    popup.style.display = 'block';
}

function submitForm() {
    var form = document.getElementById("bloodDonationForm");

    // Check if the form is valid before submitting
    if (form.checkValidity()) {
        // Disable the button to prevent multiple submissions
        document.querySelector(".btn").disabled = true;

        // Show the popup
        showPopup();
    } else {
        // If the form is not valid, display validation messages
        form.reportValidity();
    }
}

// function showPopup() {
//     var popup = document.getElementById("popup");
//     popup.style.display = "block";
// }

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    // Reset the form and re-enable the button
    document.getElementById("bloodDonationForm").reset();
    document.querySelector(".btn").disabled = false;
    //  function hidePopup() {
    const popupMessage = document.querySelector('.thank-you');
   popupMessage.classList.remove('active'); // Remove the 'active' class to hide the message
   popup.style.display = 'none';
   // reset the form
  form.reset()
//Show the form
  form.style.display = 'block';

//  }
}

