document.addEventListener('scroll', function() {
    const nav = document.querySelector('.hero-nav'); // Changed from '.nav' to '.hero-nav'
    if (window.scrollY >= window.innerHeight - nav.offsetHeight) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

function showTab(year) {
    // Hide all tab content
    document.querySelectorAll('.tab-pane').forEach(function(tabPane) {
        tabPane.classList.remove('show');
        tabPane.classList.remove('active');
    });

    document.getElementById('list-' + year).classList.add('show', 'active');

    document.querySelectorAll('.years-buttons .btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.querySelector('[onclick="showTab(\'' + year + '\')"]').classList.add('active');
}

document.getElementById('showSurprise').addEventListener('click', function() {
    var surpriseImageDiv = document.querySelector('.surprise-image');
    surpriseImageDiv.style.display = surpriseImageDiv.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1 
    });

    // Work experience boxes
    const experienceBoxes = document.querySelectorAll('.experience-box');
    experienceBoxes.forEach(box => {
        observer.observe(box);
    });

    // Icons in the hobbies and interests sections
    document.querySelectorAll('.hobby-icon, .interest-icon').forEach(icon => {
        observer.observe(icon);
    });
});


// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addClassToVisibleBoxes() {
    const boxes = document.querySelectorAll('.experience-box');
    boxes.forEach(box => {
        if (isInViewport(box)) {
            box.classList.add('in-view');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', addClassToVisibleBoxes);

// Check at least once on initial load
addClassToVisibleBoxes();




// projects
document.addEventListener("DOMContentLoaded", function() {
    var accordionItems = document.querySelectorAll('.card-header button');
    
    function toggleAccordion() {
        var itemClass = this.parentNode.parentNode.className;
        for (var i = 0; i < accordionItems.length; i++) {
            accordionItems[i].parentNode.parentNode.className = 'card';
        }
        if (itemClass === 'card') {
            this.parentNode.parentNode.className = 'card active';
        }
    }
    
    for (var i = 0; i < accordionItems.length; i++) {
        accordionItems[i].addEventListener('click', toggleAccordion, false);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const percentage = parseInt(progressBar.getAttribute('aria-valuenow'), 10);

                    progressBar.style.width = percentage + '%';

                    if (percentage >= 80) {
                        progressBar.className = 'progress-bar progress-bar-master';
                        progressBar.textContent = 'Master';
                    } else if (percentage >= 60) {
                        progressBar.className = 'progress-bar progress-bar-expert';
                        progressBar.textContent = 'Expert';
                    } else if (percentage >= 50) {
                        progressBar.className = 'progress-bar progress-bar-advanced';
                        progressBar.textContent = 'Advanced';
                    } else {
                        progressBar.className = 'progress-bar progress-bar-beginner';
                        progressBar.textContent = 'Beginner';
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        document.querySelectorAll('.progress .progress-bar').forEach(progressBar => {
            observer.observe(progressBar);
        });
    }
});


