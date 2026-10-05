let currentSemester = "semesters";
let selectedSubject = "";

const subjectData = {

    "English": {
        number: 1,
        semester: "1st",
        about: "English language and communication skills.",
        topics: [
            "Communication Skills",
            "Grammar",
            "Vocabulary",
            "Reading",
            "Writing"
        ]
    },

    "Maths": {
        number: 2,
        semester: "1st",
        about: "Basic mathematical concepts used in diploma studies.",
        topics: [
            "Algebra",
            "Matrices",
            "Trigonometry",
            "Differentiation",
            "Integration"
        ]
    },

    "Physics": {
        number: 3,
        semester: "1st",
        about: "Fundamental concepts of physics.",
        topics: [
            "Mechanics",
            "Heat",
            "Waves",
            "Optics",
            "Electricity"
        ]
    },

    "Chemistry": {
        number: 4,
        semester: "1st",
        about: "Basic concepts of engineering chemistry.",
        topics: [
            "Atomic Structure",
            "Chemical Bonding",
            "Water",
            "Corrosion",
            "Polymers"
        ]
    },

    "BCE": {
        number: 5,
        semester: "1st",
        about: "Basic concepts of communication and engineering.",
        topics: [
            "Communication Basics",
            "Engineering Concepts",
            "Technical Communication"
        ]
    },

    "C Programming": {
        number: 6,        semester: "1st",
        about: "Fundamentals of programming using C.",
        topics: [
            "Variables",
            "Data Types",
            "Operators",
            "Loops",
            "Arrays",
            "Functions"
        ]
    },

    "E.D": {
        number: 7,
        semester: "1st",
        about: "Engineering Drawing fundamentals.",
        topics: [
            "Geometrical Construction",
            "Projections",
            "Orthographic Views"
        ]
    },

    "M2": {
        number: 1,
        semester: "3rd",
        about: "Mathematics II concepts.",
        topics: [
            "Matrices",
            "Differential Equations",
            "Partial Fractions"
        ]
    },

    "DE": {
        number: 2,
        semester: "3rd",
        about: "Digital Electronics fundamentals.",
        topics: [
            "Number Systems",
            "Logic Gates",
            "Flip-Flops",
            "Digital Circuits"
        ]
    },

    "OS": {
        number: 3,
        semester: "3rd",
        about: "Operating Systems fundamentals.",
        topics: [
            "Processes",
            "Memory Management",
            "File Systems",
            "Scheduling"
        ]
    },

    "DS": {
        number: 4,
        semester: "3rd",
        about: "Fundamental data structures and their applications.",
        topics: [
            "Arrays",
            "Linked Lists",
            "Stacks",
            "Queues",
            "Trees",
            "Graphs"
        ]
    },

    "DBMS": {
        number: 5,
        semester: "3rd",
        about: "Fundamentals of database management systems.",
        topics: [
            "Database Concepts",
            "SQL",
            "Tables",
            "Keys",
            "Normalization"
        ]
    },

    "SE": {
        number: 1,
        semester: "4th",
        about: "Software Engineering fundamentals.",
        topics: [
            "Software Process",
            "Requirements",
            "Design",
            "Testing"
        ]
    },

    "WT": {
        number: 2,
        semester: "4th",
        about: "Web Technologies fundamentals.",
        topics: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web Applications"
        ]
    },

    "CO&MP": {
        number: 3,
        semester: "4th",
        about: "Computer Organization and Microprocessors.",
        topics: [
            "Computer Organization",
            "CPU",
            "Memory",
            "Microprocessors"
        ]
    },

    "JAVA": {
        number: 4,
        semester: "4th",
        about: "Object-oriented programming using Java.",
        topics: [
            "Classes and Objects",
            "Inheritance",
            "Polymorphism",
            "Interfaces",
            "Exception Handling"
        ]
    },

    "CNCS": {
        number: 5,
        semester: "4th",
        about: "Computer Networks and Communication Systems.",
        topics: [
            "Network Basics",
            "Protocols",
            "LAN and WAN",
            "Communication Systems"
        ]
    },

    "IME": {
        number: 1,
        semester: "5th",
        about: "Industrial Management and Entrepreneurship.",
        topics: [
            "Management",
            "Entrepreneurship",
            "Organization",
            "Business"
        ]
    },

    "BD&CC": {
        number: 2,
        semester: "5th",
        about: "Big Data and Cloud Computing fundamentals.",
        topics: [
            "Big Data",
            "Cloud Computing",
            "Data Processing",
            "Cloud Services"
        ]
    },

    "AP": {
        number: 3,
        semester: "5th",
        about: "Advanced Programming concepts.",
        topics: [
            "Programming Concepts",
            "Applications",
            "Problem Solving",
            "Programming Techniques"
        ]
    },

    "IoT": {
        number: 4,
        semester: "5th",
        about: "Internet of Things fundamentals.",
        topics: [
            "IoT Architecture",
            "Sensors",
            "Communication",
            "Applications"
        ]
    },

    "PYTHON": {
        number: 5,
        semester: "5th",
        about: "Programming concepts using Python.",
        topics: [
            "Variables",
            "Data Types",
            "Operators",
            "Loops",
            "Functions",
            "Lists"
        ]
    }
};


function showSubject(subjectName) {

    selectedSubject = subjectName;

    const data = subjectData[subjectName];

    if (!data) {
        alert("Subject data not found: " + subjectName);
        return;
    }

    const detailNumber = document.getElementById("detailNumber");
    const detailSubject = document.getElementById("detailSubject");
    const detailInfo = document.getElementById("detailInfo");
    const detailAbout = document.getElementById("detailAbout");
    const detailTopics = document.getElementById("detailTopics");

    if (!detailNumber ||
        !detailSubject ||
        !detailInfo ||
        !detailAbout ||
        !detailTopics) {

        alert("Subject Details HTML IDs are missing");
        return;
    }

    detailNumber.textContent = data.number;

    detailSubject.textContent = subjectName;

    detailInfo.textContent =
        "Branch: CME | Semester: " + data.semester;

    detailAbout.textContent = data.about;

    detailTopics.innerHTML = "";

    data.topics.forEach(function(topic) {

        const li = document.createElement("li");

        li.textContent = topic;

        detailTopics.appendChild(li);

    });

    showScreen("subjectDetails");
}

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.add("hidden");

    });

    const selected =
        document.getElementById(screenId);

    if (selected) {

        selected.classList.remove("hidden");

    }
}


/* Splash screen */

setTimeout(function() {

    showScreen("home");

}, 2500);
function openBranch(branch) {
    showScreen("semesters");

    const title = document.getElementById("semesterTitle");

    if (title) {
        title.textContent = branch + " - Semesters";
    }
}
function toggleMenu() {

    const menu = document.getElementById("sideMenu");

    if (menu) {
        if (menu.style.left === "0px") {
            menu.style.left = "-300px";
        } else {
            menu.style.left = "0px";
        }
    }

}
