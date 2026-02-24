// EmailJS Configuration
// Zamenite ove vrednosti sa vašim EmailJS podacima

const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'haQDBn8VisEgJ9CQm', // Vaš Public Key iz EmailJS Account -> General
    SERVICE_ID: 'service_gtzgogg',  // Vaš Service ID iz EmailJS -> Email Services
    TEMPLATE_ID: 'template_sn2u752' // Vaš Template ID iz EmailJS -> Email Templates
};

// Funkcija za inicijalizaciju EmailJS
function initEmailJS() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        return true;
    }
    return false;
}

