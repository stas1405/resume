'use strict';

/** This are the elements of resume. */
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
	];
var work = {
	"jobs": [
		{
			"start": 2010,
			"employer": "Hospitality",
			"title": "Information Manager",
			"dates": "2010-2012 ",
			"location": "Saint-Petersburgh",
			"description": "Arranging and managing HORECA Food exhibitions "
		},
		{
			"start": 2012,
			"employer": "Kamtec",
			"title": "System Administrator",
			"dates": "2012-Future ",
			"location": "Tel-Aviv",
			"description": "Supporting college`s network during the classes"
		}]
};
var education = {
	"schools": [
		{
			"name": "Lyceum",
			"location": "Saint-Petersburgh",
			"degree": "student",
			"dates": "1987-1997",
			"major": ["English", " CompSci", " Physics"]
		},
		{
			"name": "Saint-Petersburgh University of Trade and Economics",
			"location": "Saint-Petersburgh",
			"degree": "BA",
			"dates": "1997-2002",
			"major": ["Chemistry"]
		},
		{
			"name": "Kamtec",
			"location": "Tel-Aviv",
			"degree": "MCSE",
			"dates": "2012-2013",
			"major": ["Networks"]
		},
		{
			"name": "Front-end Web Developer",
			"location": "Udacity",
			"degree": "Nanodegree",
			"dates": "2015-present",
			"major": ["Web"]
		}]
};
var projects = {
	"projects": [
		{
			"start": 2015,
			"title": "Battle-ship game",
			"dates": "2014-2015",
			"description": "Single page application",
			"images": "images/battleShip.jpg"
		},
		{
			"start": 2015,
			"title": "Portfolio page",
			"dates": "09.2015",
			"description": "Project#1 in Udacity Front-End Web Developer course",
			"images": "images/sunset.jpg "
		}]
};

/** This are functions to replace %data% placeholder in HTML. */
var header = $("#header");
var data = "%data%";
bio.display = function()
{
	if (bio.length !== 0)
	{
		var formattedRole = HTMLheaderRole.replace(data, bio.role);
		var formattedName = HTMLheaderName.replace(data, bio.name, bio.surname);
		var formattedSurName = HTMLheaderName.replace(data, bio.surname);
		var formattedPic = HTMLbioPic.replace(data, bio.bioPic);
		var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
		header.prepend(formattedName, formattedSurName, formattedRole);
		header.append(formattedMessage, formattedPic);
	}
};
contacts.display = function()
{
	var topContacts = $("#topContacts");
	if (contacts.length !== 0)
	{
		var formattedEmail = HTMLemail.replace(data, contacts.email);
		var formattedGitHub = HTMLgithub.replace(data, contacts.github);
		var formattedLocation = HTMLlocation.replace(data, contacts.location);
		topContacts.prepend(formattedLocation, formattedGitHub, formattedEmail);
	}
};
skills.display = function()
{
	if (skills.length !== 0)
		header
		.append(HTMLskillsStart);
	for (var skill = 0; skill < skills.length; skill++)
	{
		var formattedSkills = HTMLskills.replace(data, skills[skill]);
		$("#skills:last")
			.append(formattedSkills);
	}
};
education.display = function()
{
	for (var school in education.schools)
	{
		if (education.schools.length !== 0)
		{
			$("#education")
				.append(HTMLschoolStart);
			var formattedTitle = HTMLschoolName.replace(data, education.schools[school].name);
			var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].major);
			$(".education-entry:last")
				.append(formattedTitle, formattedDates, formattedLocation, formattedMajor);
		}
	}
};
work.display = function()
{
	for (var job in work.jobs)
	{
		if (work.jobs.length)
		{
			$("#workExperience")
				.append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
			$(".work-entry:last")
				.append(formattedEmployerTitle, formattedDates, formattedDescription);
		}
	}
};
projects.display = function()
{
	for (var project in projects.projects)
	{
		if (projects.projects.length)
		{
			$("#projects")
				.append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
			if (projects.projects[project].images.length > 0)
			{
				var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images);
				$(".project-entry:last")
					.append(formattedTitle, formattedDates, formattedDescription, formattedImage);
			}
		}
	}
};

/** This are callings of the functions, which adding elements of resume dynamicly to HTML */
bio.display();
contacts.display();
skills.display();
work.display();
education.display();
projects.display();
$("#mapDiv")
	.append(googleMap);
