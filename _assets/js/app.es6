/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

// AnchorJS init
anchors.options = {
   visible: 'touch',
   icon: '\uf02e' // http://fontawesome.io/icon/bookmark/
}
anchors.add(
  '.page__content > h1,' +
  '.page__content > h2,' +
  '.page__content > h3,' +
  '.page__content > h4,' +
  '.page__content > h5,' +
  '.page__content > h6'
)

// particlesJS

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#f4f1da"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":10},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#f4f1da","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"right","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

// jQuery stuff

$(() => {

  // FitVids init
  $('main').fitVids()

  // init sticky sidebar
  $(".sticky").Stickyfill()

  var stickySideBar = function(){
    var windowWidth = $(window).width()
    if (windowWidth > 1024) {
      // fix
      Stickyfill.rebuild()
      Stickyfill.init()
    } else {
      // unfix
      Stickyfill.stop()
    }
  }

  stickySideBar()

  $(window).resize(function(){
    stickySideBar()
  })

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {})
    $(".author__urls-wrapper button").toggleClass("open")
  })

  // init smooth scroll
  $("a").smoothScroll({
    offset: -20,
    beforeScroll: function(opts) {
      // add browser history (improves UX with _includes/toc)
      history.pushState({}, document.title, opts.link.href)
    },
    afterScroll: function(opts) {
      // trigger anchor :hover transition momentarily (assume outline:0)
      var anchor = opts.scrollTarget + ' > a.anchorjs-link'
      document.querySelector(anchor).focus()
      window.setTimeout(function() {
        document.querySelector(anchor).blur()
      }, 1000)
    }
  })

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup")

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    disableOn: function() {
      if( $(window).width() < 500 ) {
        return false
      }
      return true
    },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim')
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  })

})
