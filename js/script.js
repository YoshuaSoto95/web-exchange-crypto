const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Form handling
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    
    // Log form data to console (you can replace this with your API call)
    console.log('Form Data:', formDataObject);
    
    // Clear form
    contactForm.reset();
    
    // Show success message with animation
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.classList.add('show');
    }, 10);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 300);
    }, 3000);
});