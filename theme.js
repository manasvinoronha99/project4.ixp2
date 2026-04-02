(function () {
  var html = document.documentElement;
  var saved = localStorage.getItem('btl-theme');
  if (saved) html.setAttribute('data-theme', saved);

  var btn = document.getElementById('darkToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('btl-theme', next);
    });
  }
})();
