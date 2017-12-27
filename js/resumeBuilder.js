var bio = {
    name: "Khalid Nassir",
    role: "Web Developer",
    contacts: {
        mobile: "0542694904",
        email: "alsahli.khaled.n@gmail.com",
        github: "khalid0n",
        twitter: "alsahliKhalid1",
        "location": "Riyadh Saudi Arabia"
    },
    welcomeMessage: "Hello there! Welcome to my Resume for Udacity-Connect intensive",
    skills: ["PHP", "JavaSript", "HTML & CSS", "Database", "System Analysis"],
    biopic: "images/personal-image.jpg",
    display() {
        //      Name, Role, WelcomeMessage, bioPicture
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedName, formattedRole);
        $("#header").append(formattedMessage, formattedImage);

        //      Top + footer Contacts Sections
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

        //      iterate through 'Skills' Array
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

};

var education = {
    schools: [
        {
            name: "King Saud University",
            "location": "King Saud University, King Khalid Rd, King Saud University, Riyadh",
            degree: "BSc",
            majors: ["Information Systems"],
            dates: "2017"
        },
        {
            name: "Al-Enayah High School",
            "location": "Prince Nayef Road, Riyadh",
            degree: "High School",
            majors: ["natural Sciences"],
            dates: "2012"
        }
    ],
    onlineCourses: [
        {
            title: "Front-end web developer nanodegree",
            school: "Udacity",
            dates: "2017",
            url: "https://sa.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    display() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            //      School Name, Degree, Location, Major, Dates
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedNameDegree, formattedLocation, formattedDates, formattedMajor);
        }
        for (var i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            //      OnlineCourse: Title, School name, Dates, URL
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedTitleSchool, formattedDate, formattedUrl);
        }
    }
};

var work = {
    jobs: [
        {
            employer: "CloudSystems",
            title: "Summer Trainee",
            "location": "As Sahafah, Riyadh",
            dates: "Jun 2017 - Aug 2017",
            description: "Training program that focuses mainly on learning tools & techniques related to the IT infrastructure, as well as Web Application development. It allowed me to gain soft/technical skill set"
        },
        {
            employer: "Panucci Pizza",
            title: "Delivery Boy",
            "location": "Northern Ring Branch Rd, Al Masif, Riyadh 12467",
            dates: "1998 - December 31, 1999",
            description: "Who moved my cheese cheesy feet cauliflower cheese. Queso talesggio Cheese comes out ecerybodu happy " + " airdule ricoatalbesa paneer camberbat batman mozarrila switzerland Who moved my cheese cheesy feet cauliflower cheese." + " Queso talesggio Cheese comes out ecerybodu happy airdule ricoatalbesa paneer camberbat batman mozarrila switzerland" + " ..Who moved my cheese cheesy feet cauliflower cheese. Queso talesggio Cheese comes out ecerybodu happy airdule ricoatalbesa paneer camberbat batman mozarrila switzerland "
        }
    ],
    display() {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            //     Title+Employer
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            //      Dates
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            //      Location
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);
            //      Description
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    projects: [
        {
            title: "Saai",
            dates: "2017",
            description: "service that saves you the effort and time to send many messages you want, at the same time to serve you as a postman to receive messages and send through it as well. With it you will send messages as you want, such as official emails or messages via WattsApp or Teligram. You can also send SMS text messages and all the means of messaging will be available to you.",
            images: [
                "images/saai.png"
            ]
   }
  ],
    display() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            //      Project Title, Dates, Description
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

            // iterate through 'images' array
            if (projects.projects[i].images.length > 0) {
                for (var image in projects.projects[i].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
