// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

// Find out how many student in the data
let studentsArray = [];
// Loop for student submission information
for (let submission of LearnerSubmissions) {

    // To find an existing student in studentsArray whose id matches submission.learner_id. 
    
    let existingStudent = studentsArray.find(stu => stu.id === submission.learner_id)

    // If the student is not exist, it will add the student
    if (!existingStudent) {
        studentsArray.push({ id: submission.learner_id });
    }

}
console.log("Student sumbitted the assignment:", studentsArray);

let studentsGrades = {}
// Loop for each submission assignment 


for (i = 0; i < studentsArray.length; i++) {
    studentsGrades[studentsArray[i].id] = []
    for (let key in LearnerSubmissions) {
        //If such a student is found, student will be assigned the matching student object based on student.id;
        if (LearnerSubmissions[key].learner_id === studentsArray[i].id) {
            studentsGrades[studentsArray[i].id].push(LearnerSubmissions[key])
        }
    }
}

console.log(studentsGrades)
//console.log(JSON.stringify(studentsGrades, null, 2));




function getLearnerData(course, ag, submissions) {

    //here, we would process this data to achieve the desired result.
    const result = [
        {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0 // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833 // late: (140 - 15) / 150
        }
    ];
    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);


