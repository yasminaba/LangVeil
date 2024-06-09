const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('.container-text')
sr.reveal('.hero-buttons', {delay: 600, distance: '100px', interval: 100});
sr.reveal('.mission-text, .form-container', {origin: 'left', duration:1500});
sr.reveal('.mission-image, .infos-container', {origin: 'right', duration:1500});
sr.reveal('.services-cards, .team', {interval: 100});
sr.reveal('.card, .member', {interval: 200});
sr.reveal('.main-title ,.team-title');
sr.reveal('.details', {origin: 'bottom', duration:1500});


