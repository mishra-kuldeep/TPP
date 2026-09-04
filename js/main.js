
  (function(){
    var els = document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){
      els.forEach(function(el){ el.classList.add('is-visible'); });
      return;
    }
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
    els.forEach(function(el){ obs.observe(el); });
  })();

  // ---------- Mobile menu ----------
  (function(){
    var toggle = document.getElementById('menuToggle');
    var menu = document.getElementById('mobileMenu');
    if(!toggle || !menu) return;
    function closeMenu(){
      toggle.classList.remove('is-open');
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function(){
      var isOpen = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeMenu();
    });
  })();

  // ---------- Testimonial slider ----------
  (function(){
    var track = document.getElementById('tsTrack');
    if(!track) return;
    var slides = track.querySelectorAll('.ts-slide');
    var dots = document.querySelectorAll('.ts-dot');
    var prevBtn = document.getElementById('tsPrev');
    var nextBtn = document.getElementById('tsNext');
    var index = 0;
    var total = slides.length;

    function render(){
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function(d, i){
        d.classList.toggle('is-active', i === index);
      });
    }
    function goTo(i){
      index = (i + total) % total;
      render();
    }
    if(prevBtn) prevBtn.addEventListener('click', function(){ goTo(index - 1); });
    if(nextBtn) nextBtn.addEventListener('click', function(){ goTo(index + 1); });
    dots.forEach(function(d){
      d.addEventListener('click', function(){ goTo(parseInt(d.getAttribute('data-index'), 10)); });
    });
    render();
  })();
