---
  layout: null
sitemap:
exclude: 'yes'
---
$('.post-list').load('/index.html #post-list-blog')

//blog
  $(document).ready(function () {
    {% if site.disable_landing_page != true %}
    let opened = false;
    $('a.blog-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
        $('.post-list').load('/index.html #post-list-blog')

      }
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.post-list').load('/index.html #post-list-blog')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.post-list').load('/index.html #post-list-blog')
        $('.content-wrapper').addClass('animated slideInRight')
        $('.panel-cover').animate({ 'max-width': '450px', 'width': '33%' }, 400, swing = 'swing', function () { })
      }
    })

    if (window.location.hash && window.location.hash == '#blog') {
      $('.post-list').load('/index.html #post-list-blog')
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
// projects
    $('a.projects-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')){
        $('.post-list').load('/index.html #post-list-projects')

      } 
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.post-list').load('/index.html #post-list-projects')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.post-list').load('/index.html #post-list-projects')
        $('.content-wrapper').addClass('animated slideInRight')
        $('.panel-cover').animate({'max-width': '450px', 'width': '33%'}, 400, swing = 'swing', function () {})
      }
    })
  
  if (window.location.hash && window.location.hash == '#Projects') {
      $('.post-list').load('/index.html #post-list-projects')
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
// resume
    $('a.resume-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
        $('.post-list').load('/index.html #post-list-resume')

      }
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.post-list').load('/index.html #post-list-resume')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.post-list').load('/index.html #post-list-resume')
        $('.content-wrapper').addClass('animated slideInRight')
        $('.panel-cover').animate({'max-width': '450px', 'width': '33%'}, 400, swing = 'swing', function () {})
        //$('.post-list').load('/index.html')
      }
    })
  
  if (window.location.hash && window.location.hash == '#Resume') {
      $('.post-list').load('/index.html #post-list-resume')
      $('.panel-cover').addClass('panel-cover--collapsed')
    }

    if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
    {% endif %}

    $('.btn-mobile-menu').click(function () {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    $('.navigation-wrapper .blog-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })
    $('.navigation-wrapper .projects-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })
    $('.navigation-wrapper .resume-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

  })
