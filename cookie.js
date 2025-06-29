// cookie.js

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'hcw_cookie_consent';
  const banner      = document.getElementById('cookie-banner');
  const acceptBtn   = document.getElementById('cookie-accept');

  // Only show the banner if consent hasn't already been given
  if (!localStorage.getItem(STORAGE_KEY)) {
    banner.classList.add('show');
  }

  // When the user clicks "Accept", store their choice and hide the banner
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, 'agreed');
    banner.classList.remove('show');
  });
});
