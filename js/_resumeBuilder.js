var bio = {
  "name": "Stanislav ",
  "surname": "Yartsev ",
  "age": 35,
  "role": "Front-end web developer",
  "bioPic": "images/me.jpg",
  "welcomeMessage": "Welcome, World!"
};

var contacts = {
  "email": "stas1405@yandex.ru",
  "github": "https://github.com/stas1405",
  "location": "Tel-Aviv",
};

var skills = ["HTML", "CSS", "AngularJS", "PHP", "C#", "MySQL",
  "JavaScript", "Responsive Web Design", "CSS Frameworks",
  "Version Control", "Web	perfomance", "Browser Development Tools",
  "Building and Automation Tools", "Testing"
]

bio.display = function() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name, bio.surname);
  $("#header").prepend(formattedName);

  var formattedSurName = HTMLheaderName.replace("%data%", bio.surname);
  $("#header").prepend(formattedSurName);

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedPic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);

};

contacts.display = function() {

  var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
  //var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
  var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
  //var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
  var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
  //var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
  var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';


  var formattedEmail = HTMLemail.replace("%data%", contacts.email);
  $("#topContacts").prepend(formattedEmail);

  var formattedGitHub = HTMLgithub.replace("%data%", contacts.github);
  $("#topContacts").prepend(formattedGitHub);

  var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
  $("#topContacts").prepend(formattedLocation);
};


skills.display = function() {
  $("#header").append(HTMLskillsStart); //create div for skills
  for (var skill = 0; skill < skills.length; skill++) {

    var formattedSkills = HTMLskills.replace("%data%", skills[skill]);
    $("#skills").append(formattedSkills);
  }

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

education.display = function() {
  for (var school in education.schools) {
    if (education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedTitle);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
    }
  }
};



var work = {
  "jobs": [{
    "start": 2012,
    "employer": "Kamtec",
    "title": "System Administrator",
    "dates": "2012-Future ",
    "location": "Tel-Aviv",
    "description": "Supporting college`s network during the classes"
  }, {
    "start": 2010,
    "employer": "Hospitality",
    "title": "Information Manager",
    "dates": "2010-2012 ",
    "location": "Saint-Petersburgh",
    "description": "Arranging and managing HORECA Food exhibitions "
  }]
};

work.display = function() {
  for (var job in work.jobs) {
    if (work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

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
};

projects.display = function() {
  for (var project in projects.projects) {
    if (projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
bio.display();
contacts.display();
skills.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);