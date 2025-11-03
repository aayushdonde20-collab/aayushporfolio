// Smooth scrolling for nav and internal links
document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Skills and Projects popups
document.getElementById('openSkills').onclick = function() {
  document.getElementById('skillsModal').style.display = 'block';
};
document.getElementById('skillsTab').onclick = function(e) {
  e.preventDefault();
  document.getElementById('skillsModal').style.display = 'block';
};
document.getElementById('openProjects').onclick = function() {
  document.getElementById('projectsModal').style.display = 'block';
};
document.getElementById('projectsTab').onclick = function(e) {
  e.preventDefault();
  document.getElementById('projectsModal').style.display = 'block';
};

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside modal-content
window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(function(modal) {
    if(event.target == modal) {
      modal.style.display = "none";
    }
  });
};
