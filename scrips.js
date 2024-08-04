document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajusta según la altura de tu navbar
                behavior: 'smooth'
            });
        });
    });

    // Handle touch for carousel
    $("#emprendedoresCarousel").on("touchstart", function(event) {
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function(event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $(this).carousel('next');
            } else if (Math.floor(xClick - xMove) < -5) {
                $(this).carousel('prev');
            }
        });
        $(this).on("touchend", function() {
            $(this).off("touchmove");
        });
    });

    // Prevent page scroll when clicking carousel controls
    document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(function(control) {
        control.addEventListener('click', function(event) {
            event.preventDefault();
            const carousel = document.querySelector('#entrepreneursCarousel');
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (this.classList.contains('carousel-control-prev')) {
                bsCarousel.prev();
            } else {
                bsCarousel.next();
            }
        });
    });

    // Close navbar on menu item click
    document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
        item.addEventListener('click', function () {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const collapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                collapse.hide();
            }
        });
    });

    // Back to top button
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Automatically hide navbar on menu item click
    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Automatically hide navbar when clicking the toggler
    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Circle container interactions
    document.querySelectorAll('.circle-container').forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            this.classList.add('show-detail');
        });
        container.addEventListener('mouseleave', function() {
            this.classList.remove('show-detail');
        });
        container.addEventListener('click', function() {
            alert('Más información sobre ' + this.getAttribute('data-type'));
        });
    });

    // Initialize carousel
    $('#entrepreneursCarousel').carousel({
        interval: 3000
    });
    $('.carousel').carousel('cycle');
});


