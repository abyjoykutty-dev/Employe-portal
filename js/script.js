(function () {
  var search = document.getElementById('portal-search');
  var cards = document.querySelectorAll('#quick-access-grid .link-card');
  var empty = document.getElementById('search-empty');

  if (!search) return;

  function filterCards() {
    var q = search.value.trim().toLowerCase();
    var visible = 0;

    cards.forEach(function (card) {
      var text = (card.textContent + ' ' + (card.getAttribute('data-search') || '')).toLowerCase();
      var show = !q || text.indexOf(q) !== -1;
      card.classList.toggle('is-hidden', !show);
      if (show) visible++;
    });

    empty.classList.toggle('visible', q.length > 0 && visible === 0);
  }

  search.addEventListener('input', filterCards);

  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
})();
