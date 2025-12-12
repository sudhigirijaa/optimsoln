// Shared site script: mobile nav, form handler, year and active nav highlight
(function () {
  // Insert current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = mainNav.getAttribute('data-open') === 'true';
      mainNav.setAttribute('data-open', expanded ? 'false' : 'true');
      mainNav.style.display = expanded ? '' : 'block';
      navToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // Highlight current page link
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Contact form handler (client-side)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  // Replace this with your real endpoint (Formspree, Netlify, your API)
  // Examples:
  // - Formspree: https://formspree.io/f/YOUR_FORM_ID
  // - If using Netlify forms, remove action or leave as-is and Netlify will capture the submission on deploy
  // - For a custom endpoint, set the 'action' attribute on the form to your endpoint
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Honeypot check (Netlify-style bot-field)
      const botField = form.querySelector('[name="bot-field"]');
      if (botField && botField.value) {
        // silently ignore
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      if (status) status.textContent = 'Sending...';

      try {
        // Prepare form data
        const formData = new FormData(form);

        // Use the form's action attribute as the endpoint
        const endpoint = form.getAttribute('action') || window.location.href;

        // Send using fetch. Many form services accept form-encoded bodies with Accept: application/json
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        if (response.ok) {
          if (status) status.textContent = 'Message sent. Thank you — we will contact you soon.';
          form.reset();
        } else {
          // Try to parse JSON error (some services return JSON with error messages)
          let msg = 'Submission failed. Please try again later.';
          try {
            const data = await response.json();
            if (data && data.error) msg = data.error;
          } catch (_) {}
          if (status) status.textContent = msg;
        }
      } catch (err) {
        if (status) status.textContent = 'Network error. Please check your connection and try again.';
        console.error('Form submission error', err);
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
})();