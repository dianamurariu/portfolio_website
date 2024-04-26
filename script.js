document.addEventListener('DOMContentLoaded', function () {
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

      // Show the clicked testimonial
      testimonial.classList.remove('hidden');
      testimonial.classList.add('active');

      stepperContainer.querySelectorAll('.step').forEach((step) => {
        step.classList.remove('active');
      });

      step.classList.add('active');
    });
  });
});
