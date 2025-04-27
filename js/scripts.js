//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
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

    const projects = [
        {
            title: "HRIS (Human Resource Information System)",
            badge: "Laravel|jQuery|Bootstrap|MySQL",
            imgSrc: "hris1.png|hris2.png|hris3.png|hris4.png",
            thumbnail: "hris1.png",
            description: "Web Application designed for HR Department in a company. This application has many features that can make the job easier for HR to perform data processing on workers. <br> Some of the features in this application are employee payroll that has been integrated with holidays and leave, work agendas, employee performance appraisals including awards, etc."
        },
        {
            title: "Swakop Mini Market Digital",
            badge: "Laravel|InertiaJS|VueJS|Tailwind CSS|MySQL",
            imgSrc: "swakop1.png|swakop2.png|swakop3.png|swakop4.png|swakop5.png",
            thumbnail: "swakop1.png",
            description: "A web application for cashier in mini market. <br> This application provides cashier transactions, goods stock opname, income statement reporting, daily reporting, etc. All of the report can be downloaded or printed. The application also support handling transactions with barcode scanner for faster action."
        },
        {
            title: "Hybrid Power Plant Monitoring App",
            badge: "Laravel|jQuery|CoreUI|PostgreSQL",
            imgSrc: "hppmon1.png|hppmon2.png|hppmon3.png|hppmon4.png|hppmon5.png",
            thumbnail: "hppmon1.png",
            description: "Application designed to monitor hybrid power plants. <br> This application equipped with real time graphs in displaying data and also equipped with features for reporting and recording data from monitoring hybrid power plants such as generated voltage and current, etc."
        },
        {
            title: "E-Quality Management System",
            badge: "Laravel|InertiaJS|VueJS|Tailwind CSS|PostgreSQL",
            imgSrc: "qms1.png|qms2.png|qms3.png|qms4.png|qms5.png",
            thumbnail: "qms1.png",
            description: "A web application for quality checking that support administration and documentation of drug creation. <br> This application provides module of registered change control, document handling and risk management. Any action performed in this application also recorded in audit trail."
        },
        {
            title: "E-Batch Record",
            badge: "CodeIgniter|Laravel Eloquent|VueJS|jQuery|Bootstrap|Tailwind CSS|MySQL",
            imgSrc: "ebr1.png|ebr2.png|ebr3.png",
            thumbnail: "ebr1.png",
            description: "A web application for recording drug manufacture. <br> Starting from the document creation procedure, the manufacturing process until finally the delivery process."
        },
        {
            title: "Learning Management System",
            badge: "Laravel|InertiaJS|VueJS|Tailwind CSS|PostgreSQL",
            imgSrc: "lms1.png|lms2.png|lms3.png|lms4.png|lms5.png|lms6.png",
            thumbnail: "lms1.png",
            description: "A web application that includes self-learning module, training, and competency management of workers. <br> This application provides online training, presence, and worker evaluation. Any action performed in this application also recorded in audit trail."
        },
    ];

    const generateProjectGridItem = (container, data) => {
        const wrapper = document.getElementById(container);

        if (!wrapper) {
            console.error('Wrapper not found!');
            return;
        }

        // Clear any existing slides (in case of re-generating)
        wrapper.innerHTML = '';

        data.forEach(project => {
            const firstImage = project.imgSrc.split('|')[0]
            // Create the outermost div
            const colDiv = document.createElement('div');
            colDiv.className = container === 'projectLargeItemWrapper' ? 'col-md-6 col-lg-4 mb-3 d-none d-lg-block' : 'd-flex w-100 align-content-center justify-content-center'

            // Create the portfolio-item div
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item mx-auto';
            portfolioItem.setAttribute('data-bs-toggle', 'modal');
            portfolioItem.setAttribute('data-bs-target', '#projectModal');
            portfolioItem.setAttribute('data-title', project.title);
            portfolioItem.setAttribute('data-badge', project.badge);
            portfolioItem.setAttribute('data-picture', project.imgSrc);
            portfolioItem.setAttribute('data-description', project.description);

            // Create the caption div
            const captionDiv = document.createElement('div');
            captionDiv.className = 'portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100';

            // Create the caption content
            const captionContent = document.createElement('div');
            captionContent.className = 'portfolio-item-caption-content text-center text-white';
            captionContent.textContent = project.title;

            // Append captionContent to captionDiv
            captionDiv.appendChild(captionContent);

            // Create the image
            const img = document.createElement('img');
            img.className = 'img-fluid';
            img.src = `assets/img/project/${firstImage}`;
            img.alt = project.title;

            // Assemble everything
            portfolioItem.appendChild(captionDiv);
            portfolioItem.appendChild(img);
            colDiv.appendChild(portfolioItem);

            wrapper.appendChild(colDiv)
        })
    }

    generateProjectGridItem('projectLargeItemWrapper', projects);

    // Carousel Item HTML
    /**
     * @param {string} src
     * @param {string} alt
     * @returns {string}
     */
    const carouselItem = (src, active = false, alt = 'Image Project 1') =>
        `<div class="carousel-item ${active ? 'active' : ''}">
            <img src="${src}" class="d-block w-100 rounded" alt="${alt}">
        </div>`;

    // Carousel Indicator HTML
    /**
     * @param {string} target
     * @param {int} index
     * @returns {string}
     */
    const carouselIndicator = (target, index = 0) =>
        `<button type="button" data-bs-target="#${target}" data-bs-slide-to="${index}" aria-label="Slide ${index + 1}" ${index === 0 ? 'class="active" aria-current="true"' : ''} ></button>`;

    // Badge HTML
    /**
     * @param {string} text
     * @param {string} color
     * @returns {string}
     */
    const badgeItem = (text, color = 'info') =>
        `<span class="badge bg-${color} mx-2">${text}</span>`;

    // Social media links
    const socialMediaButton = document.querySelectorAll('.scm-btn');
    const socialMediaLink = [
        'https://github.com/mesayusriana12',
        'https://gitlab.com/mesayusriana12',
        'https://www.linkedin.com/in/mesayusriana/',
        'https://wa.me/+6282118207806',
        'https://t.me/mesayusriana12',
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

    // Splide Generator
    const generateSplideSlides = (containerId, data, folder) => {
        const container = document.getElementById(containerId);

        if (!container) {
            console.error('Container not found!');
            return;
        }

        // Clear any existing slides (in case of re-generating)
        container.innerHTML = '';

        // Loop through the data array and create the slides
        data.forEach((item, index) => {
            const slide = document.createElement('li');
            slide.classList.add('splide__slide');

            // Create the slide content
            let slideContent = ''
            if (folder === 'project') {
                slideContent = `
                    <div id="project-${index}" class="splide__slide__container text-center"></div>
                `;
            } else {
                slideContent = `
                    <div class="splide__slide__container text-center">
                        <img width="125" height="125" class="mb-3" src="./assets/img/${folder}/${item.thumbnail}" alt="${item.title}">
                        <h6>${item.title}</h6>
                    </div>
                `;
            }
            slide.innerHTML = slideContent;

            // Append the slide to the container
            container.appendChild(slide);

            if (folder === 'project') {
                generateProjectGridItem(`project-${index}`, data.slice(index, index + 1))
            }
        });
    }

    const frontendSkill = [
        { thumbnail: 'frontend/JavaScript.png', title: 'JavaScript' },
        { thumbnail: 'frontend/Vue.js.png', title: 'Vue.js' },
        { thumbnail: 'frontend/Nuxt JS.png', title: 'Nuxt JS' },
        { thumbnail: 'frontend/React.png', title: 'React' },
        { thumbnail: 'frontend/Next.js.png', title: 'Next.js' },
        { thumbnail: 'frontend/Vite.js.png', title: 'Vite.js' },
        { thumbnail: 'frontend/jQuery.png', title: 'jQuery' },
        { thumbnail: 'frontend/Figma.png', title: 'Figma' },
        { thumbnail: 'frontend/Tailwind CSS.png', title: 'Tailwind CSS' },
        { thumbnail: 'frontend/Bootstrap.png', title: 'Bootstrap' },
    ];

    const backendSkill = [
        { thumbnail: 'backend/TypeScript.png', title: 'TypeScript' },
        { thumbnail: 'backend/AdonisJS.png', title: 'AdonisJS' },
        { thumbnail: 'backend/PHP.png', title: 'PHP' },
        { thumbnail: 'backend/Laravel.png', title: 'Laravel' },
        { thumbnail: 'backend/Express.png', title: 'Express' },
        { thumbnail: 'backend/Flutter.png', title: 'Flutter' },
        { thumbnail: 'backend/Dart.png', title: 'Dart' },
        { thumbnail: 'backend/MongoDB.png', title: 'MongoDB' },
        { thumbnail: 'backend/PostgresSQL.png', title: 'PostgresSQL' },
        { thumbnail: 'backend/DBeaver.png', title: 'DBeaver' },
        { thumbnail: 'backend/Docker.png', title: 'Docker' },
        { thumbnail: 'backend/Google Cloud.png', title: 'Google Cloud' },
        { thumbnail: 'backend/GitHub.png', title: 'GitHub' },
        { thumbnail: 'backend/GitLab.png', title: 'GitLab' },
        { thumbnail: 'backend/Postman.png', title: 'Postman' },
        { thumbnail: 'backend/Jira.png', title: 'Jira' },
        { thumbnail: 'backend/VSCode.png', title: 'Code' },
        { thumbnail: 'backend/Visual Studio.png', title: 'Visual Studio' },
    ];

    // Splides
    const splideSkillOptions = {
        snap: true,
        autoplay: true,
        height: '10rem',
        perPage: 4,
        breakpoints: {
            768: {
                perPage: 2,
            },
        },
        rewind: true,
    }

    generateSplideSlides('splideFrontend', frontendSkill, 'skill');
    generateSplideSlides('splideBackend', backendSkill, 'skill');

    new Splide('#skillFrontend', splideSkillOptions).mount();
    new Splide('#skillBackend', splideSkillOptions).mount();

    if (window.innerWidth < 992) {
        const splideProjectOptions = {
            snap: true,
            autoplay: true,
            autoHeight: true,
            perPage: 1,
            wheel: true,
            pagination: true,
            rewind: true,
            padding: { left: 24, right: 24 },
            gap: '2rem',
            breakpoints: {
                768: {
                    perPage: 1,
                },
                992: {
                    perPage: 2,
                },
            },
        }

        generateSplideSlides('splideProject', projects, 'project');
        new Splide('#projectSmallViewport', splideProjectOptions).mount();
    }

    // Project Modal
    let projectModal = document.getElementById('projectModal');
    projectModal.addEventListener('show.bs.modal', function (event) {
        let htmlBadge = '';
        let htmlCarouselItem = '';
        let htmlCarouselIndicator = '';

        let related = event.relatedTarget;
        let modalTitle = document.getElementById('projectModalTitle');
        let modalPicture = document.getElementById('projectModalPicture');
        let modalCarouselIndicator = document.getElementById('projectModalCarouselIndicator');
        let modalBadge = document.getElementById('projectModalBadge');
        let modalDescription = document.getElementById('projectModalDescription');

        related.getAttribute('data-badge').split('|').forEach((badge) => {
            htmlBadge += badge ? badgeItem(badge) : '';
        });

        related.getAttribute('data-picture').split('|').forEach((src, iterator) => {
            htmlCarouselItem += src ? carouselItem(`./assets/img/project/${src}`, iterator === 0) : '';
            htmlCarouselIndicator += src ? carouselIndicator('projectModalCarousel', iterator) : '';
        });

        modalTitle.innerHTML = related.getAttribute('data-title');
        modalPicture.innerHTML = htmlCarouselItem;
        modalCarouselIndicator.innerHTML = htmlCarouselIndicator;
        modalBadge.innerHTML = htmlBadge;
        modalDescription.innerHTML = related.getAttribute('data-description');
    });

});
