// CVCC conversion tracking
// Fires GA4 events for the three actions that signal a real lead:
// clicking a registration form link, tapping the phone number, or
// starting an email. Registrations happen off-site (Google Forms /
// Stripe), so these outbound clicks are the closest measurable proxy.
//
// Events sent:
//   register_click  (param: form = after_school | summer_camp | sushi_slam | registration)
//   phone_click
//   email_click
//
// After deploying: in GA4 Admin -> Key events, add these three event
// names as key events, then import them into Google Ads
// (Tools -> Conversions -> New -> Import -> GA4).
(function () {
  function track(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params || {});
  }

  // Distinctive prefixes of each Google Form ID
  var FORM_LABELS = [
    { match: '1FAIpQLSdVZObine13tcW1bq5qtUl6tnpQ', label: 'after_school' },
    { match: '1FAIpQLSf-uJ_KOpxwd54iupvSs3w', label: 'summer_camp' },
    { match: '1FAIpQLSdJjHyYkt_KMhe8aD1VuxyZh4', label: 'sushi_slam' }
  ];

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';

    if (href.indexOf('tel:') === 0) {
      track('phone_click', { link_url: href, page_path: location.pathname });
    } else if (href.indexOf('mailto:') === 0) {
      track('email_click', { link_url: href.split('?')[0], page_path: location.pathname });
    } else if (href.indexOf('docs.google.com/forms') !== -1) {
      var label = 'registration';
      for (var i = 0; i < FORM_LABELS.length; i++) {
        if (href.indexOf(FORM_LABELS[i].match) !== -1) { label = FORM_LABELS[i].label; break; }
      }
      track('register_click', { form: label, page_path: location.pathname });
    }
  }, true); // capture phase so the event fires before navigation
})();
