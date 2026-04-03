/**
 * Website interaction logic for Chintal Dress
 */

document.addEventListener('DOMContentLoaded', () => {
    // Copy Phone Number Functionality
    const copyBtn = document.getElementById('copy-btn');
    const copyMsg = document.getElementById('copy-msg');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const phoneNumber = "9924670870";
            
            // Create temporary element to copy text
            const dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = phoneNumber;
            dummy.select();
            
            try {
                document.execCommand("copy");
                // Show success message
                copyMsg.style.opacity = "1";
                setTimeout(() => {
                    copyMsg.style.opacity = "0";
                }, 2000);
            } catch (err) {
                console.error('Failed to copy', err);
            }
            
            document.body.removeChild(dummy);
        });
    }

    // Mobile Menu toggle logic
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log("Mobile navigation menu requested.");
        });
    }
});