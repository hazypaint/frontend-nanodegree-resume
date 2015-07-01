var bio = {

    "name": "Stefanie Schwaiger",
    "role" : "Front-end web developer",
    "welcomeMsg" : "Welcome to my resume page",
    "contacts" : [{
        "mobile" : "+43 699 17 25 22 54",
        "email" : "hazypaint@hotmail.com",
        "github" : "hazypaint",
        "twitter" : "hazypaint",
        "location" : "Vienna, Austria"
    }],
    "skills" : ["Marketing", "Communications", "Social Media", "Teamwork", "Human Resources", "International Business", "Project Management"],
    "bioImage" : "images/nerdgirl.jpg"

};

bio.dispaly = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioImage);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic,formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        
        for (var skill in bio.skills) {

            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);    
            $("#skills").append(formattedSkill);
        };
    };

    for (var contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);

        $("#footerContacts:last").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub);
    };
};

var education = {
    "schools" : [
    {
        "name" : "Johannes Kepler University",
        "location" : "Linz, Austria",
        "degree" : "Bachelor of Science",
        "major" : "Business Administration", 
        "minors" : ["Human Resources & Change Management", " International Business", " Not for Profit Organizations"],
        "dates" : "03/2009 - 11/2011",
        "url" : "http://www.jku.at/"
    },
    {
        "name" : "Union County College",
        "location" : "Cranford, NJ, US",
        "degree" : "Associate's Degree",
        "major" : "Liberal Arts", 
        "minors" : "International Studies",
        "dates" : "01/2007 - 02/2009",
        "url" : "http://www.ucc.edu/"
    },
    {
        "name" : "Höhere Lehranstalt für Tourismus",
        "location" : "Bad Leonfelden, Austria",
        "degree" : "High school diploma",
        "major" : "Tourism Management",
        "minors": "Hotels and tourism",
        "dates" : "10/1998 - 06/2004",
        "url" : "http://www.baletour.at/"
    }],
    "onlineCourses" : [
    {
        "title" : "Front-end web development", 
        "school" : "Udacity",
        "dates" : "06/2015 - present",
        "url" : "http://www.udacity.com/"
    },
    {
        "title" : "Introduction to Programming with Python", 
        "school" : "Coursera.org",
        "dates" : "02/2015 - 04/2015",
        "url" : "http://www.coursera.org/"
    }]
};

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);    
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDegree = formattedSchool + formattedDegree
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedMinors = HTMLschoolMinors.replace("%data%", education.schools[school].minors);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

        $(".education-entry:last").append(formattedSchoolDegree).append(formattedDates).append(formattedMajor).append(formattedMinors).append(formattedSchoolURL).append(formattedLocation);
    };

    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);  
        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);    
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);    
        $(".education-entry:last").append(formattedOnlineTitleSchool).append(formattedOnlineDates).append(formattedOnlineURL);
    };
};

var work = {
    "jobs" : [
    {
        "employer": "Grant Thornton",
        "title": "Marketing, Communications and Business Development",
        "location": "Vienna, Austria",
        "dates": "08/2011 - present",
        "description": "Digital: set up and maintenance of company website and intranet (html, css, episerver, wordpress), management of social media sites (linkedin, twitter, facebook, xing, incl. alumni groups), preparation and roll out of external and internal mailings (news, event invitations, seasonal), introduction and monthly preparation of employee newsletter, [Event management: client events, company events, career fairs, alumni meetings, Local roll out of global marketing campaign, adoption of global templates to local standards, creation of various brochures, flyers, folders, presentations etc. and promotional items (using global CI), press releases, etc. Some projects in collaboration with agencies & producers. Employer branding incl. implementation of an onboarding procedure. Business Development: administration of incoming and outgoing proposals, RFPs requests from network; research and information gathering for private and public proposal, design and implementation of proposal templates for various services, creation of credential list and details, maintenance of employee CVs, processing and preparation of proposals. Various organizational projects."
    },
    {
        "employer": "Plant Gartengestaltung",
        "title": "Executive Assistant",
        "location": "Linz, Austria",
        "dates": "02/2009 - 08/2011",
        "description": "Part time while studying: mainly dministrative tasks at a small landscaping company including preparation of proposals, accounting and billing, preparation of meeting documentation. "
    },
    {
        "employer": "Sailor's GmbH",
        "title": "Waitress",
        "location": "Freistadt, Austria",
        "dates": "02/2009 - 08/2011",
        "description": "Part time help at parent's restaurant while studying."
    },
    {
        "employer": "Au-Pair in America",
        "title": "Au-Pair",
        "location": "Florham Park, NJ, US",
        "dates": "10/2004 - 04/2006",
        "description": "Au-Pair with an American family: taking care of 3 children, aged 5 years, 3 years and 14 months."
    }
    ]
};

work.display = function () {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
    }
};

var projects = {
    "projects" : [
    {
        "title" : "First website",
        "dates" : "June 2015",
        "description" : "Building my first website with Udacity",
        "images" : "images/hello-world.png"
    },
    {
        "title" : "My resume",
        "dates" : "July 2015",
        "description" : "Building my online resume",
        "images" : "images/prog-languages.png"
    }
    ]
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

        $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription).append(formattedImage);
    };
};

function inName() {
    var finalName = name;
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");

    return finalName;
}

bio.dispaly();
education.display();
work.display();
projects.display();

//adds internationalize button
// $("#main").append(internationalizeButton);

//shows the map
$("#mapDiv").append(googleMap);