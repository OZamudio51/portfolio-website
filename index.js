'use strict';

function showProjects() {
    $('#projects-button').on('click', function (event) {
        $('#bio-screen').hide();
        $('#projects-screen').fadeIn();
    });
};


function showContacts() {
   $('#contact-button').on('click', function (event) {
        $('#contact-screen').fadeIn();
        $('#bio-screen').hide();
    });
};


function handlePortfolioApp() {
    showProjects();
    showContacts();
};

$(handlePortfolioApp);