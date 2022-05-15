/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Social media links
    const socialMediaButton = document.querySelectorAll('.scm-btn');
    const socialMediaLink = [
        'https://github.com/mesayusriana12',
        'https://gitlab.com/mesayusriana12',
        'https://www.linkedin.com/in/mesayusriana/',
        'https://wa.me/+6282118207806',
        'https://t.me/mesayusriana12git',
        'https://www.instagram.com/mesayusriana12/',
        'mailto:mesayusriana12@gmail.com'
    ];
    
    socialMediaButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            button.setAttribute('href', socialMediaLink[index]);
            setTimeout(() => {
                button.removeAttribute('href');
            }, 1000);
        });
    });

    // Splides
    Splide.defaults = {
        snap: true,
        autoplay: true,
        height     : '10rem',
        perPage    : 4,
        breakpoints: {
            700: {
                perPage: 2,
            },
        },
        rewind     : true,
    }

    const splideFE = new Splide( '#skill-frontend', {}).mount();
    const splideBE = new Splide( '#skill-backend', {}).mount();
});
