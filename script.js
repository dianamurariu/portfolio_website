document.addEventListener('DOMContentLoaded', function () {
  // Download CV Button
  document
    .getElementById('downloadButton')
    .addEventListener('click', function () {
      var link = document.createElement('a');
      link.href =
        'https://drive.google.com/uc?export=download&id=1FW8xwG7tzTwGpXF3Tc0T4BwPULkiScTq';
      link.download = 'DianaMurariu_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  // Projects Category Buttons
  const categoryButtons = document.querySelectorAll('.btn_category');
  const projectWrappers = document.querySelectorAll('.project_wrapper');

  showProjects('all');

  categoryButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const category = this.dataset.category;
      showProjects(category);
      categoryButtons.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  function showProjects(category) {
    projectWrappers.forEach((wrapper) => {
      wrapper.style.display = 'none';
    });

    projectWrappers.forEach((wrapper) => {
      if (category === 'all') {
        wrapper.style.display = 'block';
      } else if (wrapper.dataset.category === category) {
        wrapper.style.display = 'block';
      }
    });
  }
  // Testimonial Stepper
  const testimonialWrappers = document.querySelectorAll('.testimonial_wrapper');
  const stepperContainer = document.querySelector('.testimonial_stepper');
  const steps = stepperContainer.querySelectorAll('.step');

  testimonialWrappers.forEach((testimonial, index) => {
    const step = steps[index];

    step.addEventListener('click', () => {
      testimonialWrappers.forEach((testimonial) => {
        testimonial.classList.add('hidden');
        testimonial.classList.remove('active');
      });

      testimonial.classList.remove('hidden');
      testimonial.classList.add('active');

      stepperContainer.querySelectorAll('.step').forEach((step) => {
        step.classList.remove('active');
      });

      step.classList.add('active');
    });
  });

  // Light/dark mode button
  const checkbox = document.getElementById('checkbox');
  const servicesImage = document.getElementById('services-image');

  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      // Dark mode
      document.body.classList.toggle('dark');
      servicesImage.src = './images/services-dark-mode.svg';
    } else {
      // Light mode
      document.body.classList.remove('dark');
      servicesImage.src = './images/services.svg';
    }
  });

  // Burger menu open/close
  const mainMenu = document.querySelector('.mainMenu');
  const closeButton = document.querySelector('.closeMenu');
  const openMenuButton = document.querySelector('.openMenu');
  const menuItems = document.querySelectorAll('.mainMenu li a');

  const openMenu = function () {
    mainMenu.classList.add('open');
  };

  const closeMenu = function () {
    mainMenu.classList.remove('open');
  };

  const toggleMenu = function () {
    if (mainMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  openMenuButton.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', closeMenu);

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
});
