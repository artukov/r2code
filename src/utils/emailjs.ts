import { init } from '@emailjs/browser';

// EmailJS configuration with hardcoded values
// These are public keys that will be exposed to the client browser anyway
export const initEmailJS = () => {
  init('DaAHzgsVwNFG0K54o');
};

// Export service and template IDs as constants
export const EMAILJS_SERVICE_ID = 'service_mnf2zoh';
export const EMAILJS_TEMPLATE_ID = 'template_ao1b9qm'; 