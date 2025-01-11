const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(loginForm);
    const loginData = {
        email: formData.get('email'),
        password: formData.get('password'),
        remember: formData.get('remember') === 'on'
    };
    
    // Log the data (replace this with your actual login API call)
    console.log('Login attempt:', loginData);
    
    // Here you would typically make an API call to your backend
    // For now, we'll just simulate a successful login
    alert('Login successful!');
});
