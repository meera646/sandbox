document.addEventListener('DOMContentLoaded', () => {
    // Basic navigation interaction for sidebar
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add to clicked
            item.classList.add('active');
        });
    });

    // Run the email fetch function as soon as the page is ready
    getEmailCount();
});

// The new function to fetch GHL data from your Vercel API
async function getEmailCount() {
    try {
        // Calling your new Vercel Serverless Function here
        const response = await fetch('/api'); 
        const data = await response.json();
        
        // Update the HTML element with the count
        const emailDisplay = document.getElementById('email-count');
        
        // This check prevents an error if the ID isn't found in your HTML
        if (emailDisplay) {
            emailDisplay.innerText = data.count || "0";
        }
    } catch (error) {
        console.error("Error fetching email stats:", error);
    }
}