// JavaScript for mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// JavaScript for mobile departments dropdown toggle
document.getElementById('departments-menu-button-mobile').addEventListener('click', function() {
    const mobileDepartmentsDropdown = document.getElementById('mobile-departments-dropdown');
    const mobileDropdownArrow = document.getElementById('mobile-dropdown-arrow');
    mobileDepartmentsDropdown.classList.toggle('hidden');
    mobileDropdownArrow.classList.toggle('rotate-180');
});

// JavaScript for contact form validation and submission message
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const formMessageDiv = document.getElementById('form-message');

    let isValid = true;
    let errorMessage = '';

    // Validate Name
    if (nameInput.value.trim() === '') {
        isValid = false;
        errorMessage += 'Name is required.<br>';
        nameInput.classList.add('border-red-500');
    } else {
        nameInput.classList.remove('border-red-500');
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        isValid = false;
        errorMessage += 'Email is required.<br>';
        emailInput.classList.add('border-red-500');
    } else if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.<br>';
        emailInput.classList.add('border-red-500');
    } else {
        emailInput.classList.remove('border-red-500');
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        isValid = false;
        errorMessage += 'Message is required.<br>';
        messageInput.classList.add('border-red-500');
    } else {
        messageInput.classList.remove('border-red-500');
    }

    if (isValid) {
        formMessageDiv.classList.remove('text-red-700');
        formMessageDiv.classList.add('text-green-700');
        formMessageDiv.innerHTML = 'Thank you for your message! We will get back to you soon.';
        formMessageDiv.classList.remove('hidden');

        // Clear the form
        this.reset();
    } else {
        formMessageDiv.classList.remove('text-green-700');
        formMessageDiv.classList.add('text-red-700');
        formMessageDiv.innerHTML = errorMessage;
        formMessageDiv.classList.remove('hidden');
    }

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessageDiv.classList.add('hidden');
    }, 5000);
});