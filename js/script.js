lucide.createIcons();
window.addEventListener('scroll', function () {
    const heading = document.getElementById('navbar-heading');
    const logo = document.querySelector('.img-log');

    if (window.scrollY > 10) {
        heading.style.color = 'black';
        logo.src = 'assets/amrita _logo.svg';
    } else {
        heading.style.color = 'white';
        logo.src = 'assets/amrita _logo.png';
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleBtn = document.getElementById('menu-toggle');
//     const dropdown = document.querySelector('.dropdown-mobile');

//     toggleBtn.addEventListener('click', () => {
//         dropdown.classList.toggle('active');
//     });
// });

// $('#v-pills-amritapuri-tab').on('click', function () {
//     setTimeout(function () {
//         $('html, body').animate({
//             scrollTop: $('#v-pills-amritapuri').offset().top
//         }, 500); // 500ms scroll duration
//     }, 100);
// });

// Updated logo URLs with the specified location
const logoUrls = {
'amazon-logo': 'https://spotlight.amrita.edu/btech/img/amazon.svg',
'google-logo': 'https://spotlight.amrita.edu/btech/img/google.svg',
'arista-logo': 'https://spotlight.amrita.edu/btech/img/arista-logo.svg',
'atlassian-logo': 'https://spotlight.amrita.edu/btech/img/atlassian.svg',
'bosch-logo': 'https://spotlight.amrita.edu/btech/img/bosch.svg',
'cisco-logo': 'https://spotlight.amrita.edu/btech/img/cisco.svg',
'ericsson-logo': 'https://spotlight.amrita.edu/btech/img/ericsson.svg',
'zoho-logo': 'https://spotlight.amrita.edu/btech/img/zoho.svg',
'ibm-logo': 'https://spotlight.amrita.edu/btech/img/ibm.svg',
'infosys-logo': 'https://spotlight.amrita.edu/btech/img/infosys.svg',
'mckinsey-logo': 'https://spotlight.amrita.edu/btech/img/mck.svg',
'mindtree-logo': 'https://spotlight.amrita.edu/btech/img/mf.svg',
'microsoft-logo': 'https://spotlight.amrita.edu/btech/img/microsoft.svg',
'nissan-logo': 'https://spotlight.amrita.edu/btech/img/nissan.svg',
'tcs-logo': 'https://spotlight.amrita.edu/btech/img/tcs.svg'
};

// Function to load images with fallback
function loadImageWithFallback(imgId, imgUrl) {
const img = document.getElementById(imgId);
if (!img) return;

const tempImg = new Image();
tempImg.onload = function() {
img.src = imgUrl;
};

tempImg.onerror = function() {
console.log('Failed to load image:', imgUrl);
// Keep the placeholder image
};

tempImg.src = imgUrl;
}

// Load all images when document is ready
document.addEventListener('DOMContentLoaded', function() {
// Add fade-in animation to cards
const cards = document.querySelectorAll('.logo-card');
cards.forEach((card, index) => {
card.style.opacity = '0';
card.style.transform = 'translateY(20px)';
card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

setTimeout(() => {
  card.style.opacity = '1';
  card.style.transform = 'translateY(0)';
}, 100 * index);
});

// Load images with fallback to placeholder
for (const [id, url] of Object.entries(logoUrls)) {
loadImageWithFallback(id, url);
}
});

// Add a simple filter functionality
window.filterLogos = function(searchTerm) {
const cards = document.querySelectorAll('.logo-card');
const term = searchTerm.toLowerCase();

cards.forEach(card => {
const altText = card.querySelector('img').getAttribute('alt').toLowerCase();
const parent = card.closest('.col-lg-2');

if (altText.includes(term) || term === '') {
  parent.style.display = 'block';
} else {
  parent.style.display = 'none';
}
});
};
document.addEventListener('DOMContentLoaded', function() {
// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const rankingCards = document.querySelectorAll('.ranking-card');

filterButtons.forEach(button => {
button.addEventListener('click', function() {
  // Remove active class from all buttons
  filterButtons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked button
  this.classList.add('active');
  
  const filterValue = this.getAttribute('data-filter');
  
  // Show/hide cards based on filter
  rankingCards.forEach(card => {
    if (filterValue === 'all') {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, 10);
    } else {
      if (card.getAttribute('data-category') === filterValue) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = 0;
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    }
  });
});
});

// Removed card hover effects from JavaScript
// Only kept filtering functionality

// Initialize with all cards visible
filterButtons[0].click();
});