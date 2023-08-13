// Burger = document.querySelector(".Burger");
// Burger.onclick = function()
// {
//     navbar = document.querySelector(".nav-bar");
//     navbar.classList.toggle("active");
// }

/*document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementsByClassName('content');

    form.addEventListener('Submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.get('name').value;
        const email = document.getElementsByClassName('email').value;
        const blood = document.getElementsByClassName('blood').value;
        const state = document.getElementsByClassName('State').value;
        const gender = document.getElementsByClassName('gender-cat').value;
        

        // Do something with the values (e.g., validation, AJAX submission, etc.)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Blood:', blood);
        console.log('State:', state);
        console.log('Gender:', gender);
        // You can perform additional actions here
        
        // Reset the form after processing
        form.reset();
    });});*/

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('.form1'); // Get the form by class name
        const alertDiv = document.querySelector('.alert'); // Get the alert div by class name
    
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            const name = form.querySelector('[name="name"]').value;
            const email = form.querySelector('[name="email"]').value;
            const bloodGroup = form.querySelector('[name="blood"]').value;
            const state = form.querySelector('[name="State"]');
            const gender = form.querySelector('[name="gender-cat"]:checked');
    
            // Create an object to store the data
            const formData = {
                name: name,
                email: email,
                bloodGroup: bloodGroup,
                state: state,
                gender: gender
            };
    
            // Store the data, you can replace this with your desired storage mechanism
            console.log('Form Data:', formData);
    
            // Display a success message
            alertDiv.innerHTML = '<p>Data submitted successfully!</p>';
        });
    });
    