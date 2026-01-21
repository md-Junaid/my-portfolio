$(function(){

  let $btns = $('.project-area .button-group button');

  $btns.on('click', function(e){
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;
  });
 
  $('.project-area .button-group #btn1').trigger('click');

  
  
  // Owl-Carousel 
  $('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive:{
      0: {
        items: 1
      },
      544: {
        items: 2
      }
    }
  });


  // Sticky Navbar
  let nav_offset_top = $('.header_area').height() + 450;

  function navbarFixed(){
    if($('.header_area').length){
      $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll >= nav_offset_top){
          $('.header_area .main-menu').addClass('navbar_fixed');
        } else {
          $('.header_area .main-menu').removeClass('navbar_fixed');
        }
      })
    }
  }

  navbarFixed();

  // ============== Project Modal Functionality ==============

  const projectData = {
    'fieldsim': {
      title: 'Fieldsim',
      meta: 'TechSchweiz - Kiel, Germany (April 2025 - Present)',
      icon: 'fas fa-microchip',
      description: `Fieldsim is a JavaScript-based Modbus simulation tool used to validate communication logic across dozens of simulated airport devices before production deployment. As the maintainer of this critical tool, I work in collaboration with Honeywell engineers on mission-critical airport systems.

The tool simulates real-world airport infrastructure including baggage handling systems, flight information displays, and security checkpoints. It allows engineers to test communication protocols and validate device behavior before deploying changes to production environments, significantly reducing the risk of system failures.

My responsibilities include maintaining and updating device simulations to reflect real-world airport infrastructure changes, debugging communication issues, and ensuring the simulation accurately represents the production environment.`,
      technologies: ['JavaScript', 'Node.js', 'Modbus Protocol', 'TCP/IP', 'Simulation Logic', 'Industrial Communication'],
      links: []
    },
    'analytics': {
      title: 'Reporting & Analytics Tool',
      meta: 'TechSchweiz - Kiel, Germany (April 2025 - Present)',
      icon: 'fas fa-chart-line',
      description: `As the sole developer of this comprehensive Reporting & Analytics Tool, I built a complete solution providing operational insights, error tracking, and system statistics for airport infrastructure.

The tool helps engineers monitor and analyze device performance in real-time, track system errors and anomalies, and generate reports for operational decision-making. It processes data from multiple airport systems and presents it in an intuitive dashboard format.

Key features include real-time error monitoring, historical data analysis, customizable reports, and system health dashboards. The application is built with Vue 3 for the frontend, Node.js for the backend API, and SQL for data persistence and complex querying.`,
      technologies: ['Vue 3', 'Node.js', 'SQL', 'Data Visualization', 'REST APIs', 'Chart.js', 'Express.js'],
      links: []
    },
    'corporategpt': {
      title: 'CorporateGPT',
      meta: 'Next Data Service AG - Berlin, Germany (March 2023 - December 2024)',
      icon: 'fas fa-robot',
      description: `At CorporateGPT, I served as the sole frontend developer for an admin interface enabling users and admins to create customized AI chatbots. These bots were trained on proprietary data and shared with users or employees across enterprises and municipalities.

I built the interface using React, Tailwind CSS, TypeScript, and Material UI, leveraging Eldora UI components to deliver a polished user experience. The platform allows organizations to upload their documents, configure chatbot behavior, and deploy custom AI assistants for their specific use cases.

I also contributed to backend development using Python and Chainlit to create AI chatbot solutions. One notable deployment was a city chatbot for Falkensee municipality, helping citizens access city services and information.`,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Chainlit', 'Python', 'Auth0', 'LangChain', 'OpenAI API'],
      links: [
        { label: 'CorporateGPT Platform', url: 'https://www.next-data-service.com/en/nextsearch/' },
        { label: 'Falkensee City Bot', url: 'https://falkensee.chat/' }
      ]
    },
    'ucip': {
      title: 'UCIP Platform',
      meta: 'Next Data Service AG / UNITY AG - Berlin & Hamburg, Germany (July 2021 - December 2024)',
      icon: 'fas fa-building',
      description: `I contributed to UCIP, the central platform for the UNITY Alliance, streamlining tools for consultants, sales, and accounting teams. Initially joining as the sole part-time frontend developer at UNITY AG, I was soon hired full-time by Next Data Service.

My primary role was leading the migration of UCIP from Vue 2 (Webpack) to React 18, ensuring seamless integration of both technologies without disruption to existing users. This was a complex undertaking involving gradual migration of components while maintaining the application's functionality.

Additionally, I mentored part-time developers, promoting frontend best practices and code review standards. I managed CI/CD pipelines and microservice deployments on Azure Kubernetes Service (AKS). While primarily focused on frontend, I also contributed to backend development in Python.`,
      technologies: ['React', 'TypeScript', 'Vue.js', 'Framer Motion', 'Node.js', 'Python', 'Azure AKS', 'CI/CD', 'Docker', 'Microservices'],
      links: []
    },
    'pushbox': {
      title: 'Pushbox',
      meta: 'Wobe Systems GmbH - Kiel, Germany (May 2019 - January 2020)',
      icon: 'fas fa-tasks',
      description: `Pushbox is a Trello-like GDPR-compliant project management web application. During my 8 months at Wobe Systems, I learned the importance of teamwork while working on this project.

With the help of my colleagues, I started writing APIs in GraphQL and developing frontend features in Vue 2. The application features drag-and-drop task management, team collaboration tools, and real-time updates.

This was my first professional experience in a development team, where I learned agile methodologies, code review practices, and the importance of writing clean, maintainable code.`,
      technologies: ['Vue 2', 'Node.js', 'GraphQL', 'MongoDB', 'Express.js', 'Socket.io', 'GDPR Compliance'],
      links: [
        { label: 'Pushbox Website', url: 'https://pushbox.de' }
      ]
    },
    'flood-ai': {
      title: 'Flood Detection using AI',
      meta: 'Kiel University - Master Thesis Project',
      icon: 'fas fa-water',
      description: `This was my Master's thesis project focused on real-time flood detection using deep learning. I built a flood detection model using Python and TensorFlow that can accurately classify images as flooded or non-flooded.

I manually collected and curated 1,400 images for training, validation, and testing datasets. The initial custom model suffered from overfitting, so I implemented data augmentation techniques to expand the dataset. The final solution uses the InceptionV3 pretrained model, which successfully differentiates flooded from non-flooded images with high accuracy.

I also built a Gradio UI to make the model accessible and easy to interact with, allowing users to upload images and get instant predictions.`,
      technologies: ['Python', 'TensorFlow', 'Keras', 'InceptionV3', 'Gradio', 'Data Augmentation', 'Transfer Learning', 'Computer Vision'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/md-Junaid/2021-04_Trajectory_Data_CS_CAU_MScProject/blob/main/Flood_Detection_Model.ipynb' }
      ]
    },
    'profindo': {
      title: 'Profindo',
      meta: 'Startup MVP Project (2024)',
      icon: 'fas fa-shopping-cart',
      description: `Profindo was a startup concept developed by a colleague, aimed at building a platform to provide detailed information on products available in supermarkets and small shops, while also offering a loyalty program for regular customers.

The goal was to streamline the shopping experience and reward customer loyalty through a mobile application. I played a key role in bringing this idea to life by developing the Minimum Viable Product (MVP).

This prototype was used to present the concept to potential investors and gather feedback during university startup competitions, allowing us to refine the platform's functionality and business model.`,
      technologies: ['React Native', 'TypeScript', 'Expo', 'Mobile Development', 'REST APIs'],
      links: []
    },
    'fish-larvae': {
      title: 'Visualization of Fish Larvae Trajectories',
      meta: 'Kiel University - Master Project (2023)',
      icon: 'fas fa-fish',
      description: `This was a Master's course project focused on scientific data visualization. My main role was to gather trajectory data, cluster the data using machine learning techniques, and visualize fish larvae movement patterns on interactive maps.

The visualization uses Python for data processing and clustering, and Leaflet.js with OpenStreetMap for rendering the interactive maps. The project helps marine biologists understand fish larvae migration patterns in the Baltic Sea.

Key challenges included handling large datasets, implementing efficient clustering algorithms, and creating intuitive visualizations that convey complex spatial-temporal patterns.`,
      technologies: ['Python', 'Leaflet.js', 'OpenStreetMap', 'Data Clustering', 'Pandas', 'NumPy', 'Geospatial Analysis'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/md-Junaid/Larve-traj-visualize' }
      ]
    },
    'flood-ml': {
      title: 'Flood Detection using Machine Learning',
      meta: 'Kiel University - Master Project (2022)',
      icon: 'fas fa-brain',
      description: `After learning machine learning fundamentals, I implemented this project to apply my knowledge practically. I chose TensorFlow as it was approachable for beginners while being powerful enough for real-world applications.

I manually collected images from various sources to create training, validation, and test datasets with 1,400 images total. My initial custom model was overfitting, so I applied data augmentation techniques to artificially expand the dataset.

The breakthrough came when I implemented transfer learning using the InceptionV3 pretrained model, which significantly improved accuracy. I also integrated Gradio to provide an interactive UI for the model, making it easy to test with new images.`,
      technologies: ['TensorFlow', 'Keras', 'InceptionV3', 'Gradio', 'Python', 'Data Augmentation', 'Transfer Learning', 'Jupyter Notebook'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/md-Junaid/Flood-detection/blob/main/Flood_Detection_Model.ipynb' }
      ]
    },
    'study-kiel': {
      title: 'Study in Kiel',
      meta: 'Side Project (2020)',
      icon: 'fas fa-graduation-cap',
      description: `Study in Kiel is a blogging platform started by my friend Tobias to help students stay updated with news and events about not only the university but the whole city of Kiel.

Some of the blog topics included awareness campaigns and practical tips on how to save money as a student. As Tobias has been a good friend of mine, he got me involved with this project.

The platform has been recognized by the International Center of Kiel University and continues to help international students navigate life in Kiel.`,
      technologies: ['WordPress', 'PHP', 'MySQL', 'SEO', 'Content Management'],
      links: []
    },
    'heide-park': {
      title: 'Heide Park Tour',
      meta: 'Kiel University - Master Course Project (2019)',
      icon: 'fas fa-map-marked-alt',
      description: `Heide Park Tour was a Master's course project where we built an application to guide visitors using interactive maps and provide useful information about the theme park.

As the team lead, my role was to coordinate the team, ensure we fulfilled our tasks, and complete the project on time. I also contributed to both frontend and backend development.

The application features interactive maps built with Leaflet.js, attraction information, wait times, and navigation assistance. It was built using the MEVN stack (MongoDB, Express, Vue.js, Node.js).`,
      technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet.js', 'Webpack', 'MEVN Stack'],
      links: [
        { label: 'Live Demo', url: 'https://heide-park-tour.herokuapp.com/#/' },
        { label: 'View on GitHub', url: 'https://github.com/md-Junaid/heide_park_tour' }
      ]
    },
    'sentiment': {
      title: 'Sentiment Analysis of Twitter Data',
      meta: 'Bachelor Thesis Project (2017)',
      icon: 'fas fa-chart-pie',
      description: `This was my Bachelor's thesis project where I collected 10,000 tweets on the topic of the 2016 US Presidential Election and performed sentiment analysis using Python.

The goal was to find the sentiments of people towards three candidates: Hillary Clinton, Donald Trump, and Bernie Sanders. The analysis revealed interesting patterns - Trump had the most negative comments on Twitter while Hillary had the most positive ones.

I used the Twython library to collect tweets via the Twitter API and TextBlob for natural language processing and sentiment classification. The project involved data cleaning, preprocessing, and visualization of results.`,
      technologies: ['Python', 'Twython', 'TextBlob', 'Twitter API', 'Natural Language Processing', 'Data Visualization', 'Pandas', 'Matplotlib'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/md-Junaid/sentiment-analysis' }
      ]
    }
  };

  // Modal elements
  const modal = document.getElementById('projectModal');
  const modalOverlay = modal.querySelector('.modal-overlay');
  const modalClose = modal.querySelector('.modal-close');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalDescription = document.getElementById('modalDescription');
  const modalTechTags = document.getElementById('modalTechTags');
  const modalLinks = document.getElementById('modalLinks');

  // Open modal function
  function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Populate modal content
    modalIcon.innerHTML = `<i class="${project.icon}"></i>`;
    modalTitle.textContent = project.title;
    modalMeta.textContent = project.meta;
    modalDescription.innerHTML = project.description.replace(/\n\n/g, '</p><p>');

    // Add technologies
    modalTechTags.innerHTML = project.technologies
      .map(tech => `<span class="modal-tech-tag">${tech}</span>`)
      .join('');

    // Add links
    if (project.links && project.links.length > 0) {
      modalLinks.innerHTML = '<h4>Links</h4>' + project.links
        .map(link => `<a href="${link.url}" target="_blank" class="modal-link">${link.label} <i class="fas fa-external-link-alt"></i></a>`)
        .join('');
      modalLinks.style.display = 'block';
    } else {
      modalLinks.style.display = 'none';
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close modal function
  function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners for project cards
  $('.card.our-project').on('click', function(e) {
    // Don't open modal if clicking on a link
    if ($(e.target).closest('a').length) return;

    const projectId = $(this).data('project');
    if (projectId) {
      openProjectModal(projectId);
    }
  });

  // Close modal events
  modalClose.addEventListener('click', closeProjectModal);
  modalOverlay.addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeProjectModal();
  });

});

// ==================== Dark Mode Toggle ====================
(function() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  // Check for saved theme preference, default to light mode
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Default to light mode for new visitors
    return 'light';
  }

  // Apply theme and update icon
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update toggle icon
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  // Initialize theme
  applyTheme(getPreferredTheme());

  // Toggle handler
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  });

  // Listen for system preference changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference recently
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();

// ==================== Scroll Animations ====================
(function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        animateOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply to elements after DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
      '.timeline-content, .skill-category, .education-card, .testimonial-card'
    );

    animatedElements.forEach((el, index) => {
      el.classList.add('animate-ready');
      el.style.transitionDelay = `${index * 0.1}s`;
      animateOnScroll.observe(el);
    });
  });
})();