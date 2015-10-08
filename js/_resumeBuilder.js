'use strict'; /** This are the elements of resume. */
var bio = {
  "infos": [{
    "name": "Stanislav ",
    "surname": "Yartsev ",
    "age": "35",
    "role": "Front-end web developer",
    "bioPic": "images/me.jpg",
    "welcomeMessage": "welcome, World!"
  }],
  "contacts": [{
    "email": "stas1405@yandex.ru",
    "github": "https://github.com/stas1405",
    "facebook": "https://www.facebook.com/stas.yartsev",
    "twitter": "",
    "google": "",
    "location": "Tel-Aviv"
  }],
  "skills": ["HTML", "CSS", "AngularJS", "PHP", "C#", "MySQL", "JavaScript", "Responsive Web Design", "CSS Frameworks", "Git", "Web perfomance", "Browser Development Tools", "Building and Automation Tools"]
};

var work = {
  "jobs": [{
    "start": 2010,
    "employer": "Hospitality",
    "title": "infosrmation Manager",
    "dates": "2010-2012 ",
    "location": "Saint-Petersburgh",
    "description": "Arranging and managing HORECA Food exhibitions "
  }, {
    "start": 2012,
    "employer": "Kamtec",
    "title": "System Administrator",
    "dates": "2012-Future ",
    "location": "Tel-Aviv",
    "description": "Supporting college`s network during the classes"
  }]
};

var education = {
  "schools": [{
    "name": "Lyceum",
    "location": "Saint-Petersburgh",
    "degree": "student",
    "dates": "1987-1997",
    "major": ["English", " CompSci", " Physics"]
  }, {
    "name": "Saint-Petersburgh University of Trade and Economics",
    "location": "Saint-Petersburgh",
    "degree": "BA",
    "dates": "1997-2002",
    "major": ["Chemistry"]
  }, {
    "name": "Kamtec",
    "location": "Tel-Aviv",
    "degree": "MCSE",
    "dates": "2012-2013",
    "major": ["Networks"]
  }, {
    "name": "Front-end Web Developer",
    "location": "Udacity",
    "degree": "Nanodegree",
    "dates": "2015-present",
    "major": ["Web"]
  }]
};

var projects = {
  "projects": [{
    "start": 2015,
    "title": "Battle-ship game",
    "dates": "2014-2015",
    "description": "Single page application",
    "images": "images/battleShip.jpg"
  }, {
    "start": 2015,
    "title": "Portfolio page",
    "dates": "09.2015",
    "description": "Project#1 in Udacity Front-End Web Developer course",
    "images": "images/sunset.jpg "
  }]
}; /** This are functions to replace %data% placeholder in HTML. */

bio.infos.displayInfo = function () {
  var header = $("#header");
  var data = "%data%";
  if (bio.infos.length) {
    for (var info = 0; info < bio.infos.length; info++) {
      var formattedRole = HTMLheaderRole.replace(data, bio.infos[info].role);
      var formattedName = HTMLheaderName.replace(data, bio.infos[info].name);
      var formattedSurName = HTMLheaderName.replace(data, bio.infos[info].surname);
      var formattedPic = HTMLbioPic.replace(data, bio.infos[info].bioPic);
      var formattedMessage = HTMLwelcomeMsg.replace(data, bio.infos[info].welcomeMessage);
      header.prepend(formattedName, formattedSurName, formattedRole);
      header.append(formattedMessage, formattedPic);
    }
  }
};

bio.contacts.displayContacts = function () {
  var data = "%data%";
  var topContacts = $("#topContacts");
  var footerContacts = $("#footerContacts")
  if (bio.contacts.length) {
    for (var contact = 0; contact < bio.contacts.length; contact++) {
      var formattedEmail = HTMLemail.replace(data, bio.contacts[contact].email);
      var formattedGitHub = HTMLgithub.replace(data, bio.contacts[contact].github);
      var formattedLocation = HTMLlocation.replace(data, bio.contacts[contact].location);
      var formattedFacebook = HTMLfooterFacebook.replace(data, bio.contacts[contact].facebook);
      var formattedTwitter = HTMLfooterTwitter.replace(data, bio.contacts[contact].twitter);
      var formattedGooglePlus = HTMLfooterGooglePlus.replace(data, bio.contacts[contact].google);
      topContacts.prepend(formattedLocation, formattedGitHub, formattedEmail);
      footerContacts.append(formattedFacebook, formattedTwitter, formattedGooglePlus);
    }
  }
};

bio.skills.displaySkills = function () {
  var header = $("#header");
  var data = "%data%";
  if (bio.skills.length) {
    header.append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
      var formattedSkills = HTMLskills.replace(data, bio.skills[skill]);
      $("#skills:last").append(formattedSkills);
    }
  }
};

education.displayEducation = function () {
  var data = "%data%";
  if (education.schools.length) {
    for (var school = 0; school < education.schools.length; school++) {
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLschoolName.replace(data, education.schools[school].name);
      var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
      var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].major);
      $(".education-entry:last").append(formattedTitle, formattedDates, formattedLocation, formattedMajor);
    }
  }
};

work.displayWork = function () {
  var data = "%data%";
  if (work.jobs.length) {
    for (var job = 0; job < work.jobs.length; job++) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
      $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription);
    }
  }
};

projects.displayProjects = function () {
  var data = "%data%";
  if (projects.projects.length) {
    for (var project = 0; project < projects.projects.length; project++) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
      if (projects.projects[project].images.length > 0) {
        var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, formattedImage);
      }
    }
  }
};
 /** This are callings of the functions, which adding elements of resume dynamicly to HTML */
bio.infos.displayInfo();
bio.contacts.displayContacts();
bio.skills.displaySkills();
work.displayWork();
education.displayEducation();
projects.displayProjects();
$("#mapDiv").append(googleMap);