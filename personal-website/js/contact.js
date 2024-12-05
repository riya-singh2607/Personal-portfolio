// Form validation and submission handling
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form elements
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const formGroups = form.querySelectorAll('.form-group');
    
    // Reset previous errors
    formGroups.forEach(group => {
        group.classList.remove('error');
        group.classList.remove('success');
    });

    // Validate form
    let isValid = true;
    
    // Name validation
    const name = form.name.value.trim();
    if (name.length < 2) {
        showError(form.name, 'Please enter your name');
        isValid = false;
    } else {
        showSuccess(form.name);
    }

    // Email validation
    const email = form.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(form.email, 'Please enter a valid email address');
        isValid = false;
    } else {
        showSuccess(form.email);
    }

    // Subject validation
    const subject = form.subject.value.trim();
    if (subject.length < 2) {
        showError(form.subject, 'Please enter a subject');
        isValid = false;
    } else {
        showSuccess(form.subject);
    }

    // Message validation
    const message = form.message.value.trim();
    if (message.length < 10) {
        showError(form.message, 'Please enter a message (at least 10 characters)');
        isValid = false;
    } else {
        showSuccess(form.message);
    }

    if (isValid) {
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Sending...';

        // Simulate form submission (replace with actual form submission)
        setTimeout(() => {
            // Hide loading state
            submitBtn.classList.remove('loading');
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';

            // Show success message
            const successMessage = document.getElementById('success-message');
            successMessage.classList.add('show');

            // Reset form
            form.reset();
            formGroups.forEach(group => {
                group.classList.remove('success');
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }, 1500);
    }

    return false;
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
}
