document.addEventListener('DOMContentLoaded', function() {
    const planOptionsCarl = document.querySelectorAll('.plan-option-carl');
    const planContentsCarl = document.querySelectorAll('.plan-content-carl');

    planOptionsCarl.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsCarl.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsCarl.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionCarl = document.querySelector('.expandable-section-carl');
    const expandableContentCarl = document.querySelector('.expandable-content-carl');

    expandableSectionCarl.addEventListener('click', function() {
        expandableContentCarl.style.display = expandableContentCarl.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnCarl = document.getElementById('founder15-book-now-carl');
    const founder15ScheduleEmbedCarl = document.getElementById('founder15-schedule-embed-carl');
    const founder15PackageDetailsCarl = document.getElementById('founder15-package-details-carl');
    const founder15BackToFeaturesCarl = document.getElementById('founder15-back-to-features-carl');

    founder15BookNowBtnCarl.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedCarl.style.display = 'block';
        founder15PackageDetailsCarl.style.display = 'none';
        founder15BackToFeaturesCarl.style.display = 'block';
    });

    founder15BackToFeaturesCarl.addEventListener('click', function() {
        founder15ScheduleEmbedCarl.style.display = 'none';
        founder15PackageDetailsCarl.style.display = 'block';
        founder15BackToFeaturesCarl.style.display = 'none';
    });

    const growthBookNowBtnCarl = document.getElementById('growth-book-now-carl');
    const growthScheduleEmbedCarl = document.getElementById('growth-schedule-embed-carl');
    const growthPackageDetailsCarl = document.getElementById('growth-package-details-carl');
    const growthBackToFeaturesCarl = document.getElementById('growth-back-to-features-carl');

    growthBookNowBtnCarl.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedCarl.style.display = 'block';
        growthPackageDetailsCarl.style.display = 'none';
        growthBackToFeaturesCarl.style.display = 'block';
    });

    growthBackToFeaturesCarl.addEventListener('click', function() {
        growthScheduleEmbedCarl.style.display = 'none';
        growthPackageDetailsCarl.style.display = 'block';
        growthBackToFeaturesCarl.style.display = 'none';
    });

    const accelerateBookNowBtnCarl = document.getElementById('accelerate-book-now-carl');
    const accelerateScheduleEmbedCarl = document.getElementById('accelerate-schedule-embed-carl');
    const acceleratePackageDetailsCarl = document.getElementById('accelerate-package-details-carl');
    const accelerateBackToFeaturesCarl = document.getElementById('accelerate-back-to-features-carl');

    accelerateBookNowBtnCarl.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedCarl.style.display = 'block';
        acceleratePackageDetailsCarl.style.display = 'none';
        accelerateBackToFeaturesCarl.style.display = 'block';
    });

    accelerateBackToFeaturesCarl.addEventListener('click', function() {
        accelerateScheduleEmbedCarl.style.display = 'none';
        acceleratePackageDetailsCarl.style.display = 'block';
        accelerateBackToFeaturesCarl.style.display = 'none';
    });
});
