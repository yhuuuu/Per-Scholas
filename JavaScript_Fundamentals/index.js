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


//   console.log(CourseInfo)
//   console.log(AssignmentGroup)
// console.log(AssignmentGroup.assignments[0].points_possible)
// console.log(LearnerSubmissions[0].submission['score'])
//   console.log(LearnerSubmissions)
console.log("-------------")


// Calcaulate the weighted average score
function calWeightedAvg(assignments, submissions) {
    let totalWeightedScore = 0;
    let totalWeightAverage = 0;
    let testScoreEarned =0;
    let ScoreThatCanBeEarnedEachAssignment =0
    let totalScoreEarned  =0
    let totalScore =0

    //Loop for each assignment info
    for (const assignment of assignments.assignments) {
        //only work on submitted assignment id that are existed in the assignmentInfo
        const submission = submissions.find(sub => sub.assignment_id === assignment.id)

        // if assigment id is exised and the assignment is not past due
        if (submission && new Date(assignment.due_at) <= new Date) {
            //const percentage = submission.submission.score / assignment.points_possible
            testScoreEarned = submission.submission.score 
            ScoreThatCanBeEarnedEachAssignment = assignment.points_possible
            
            totalScoreEarned += testScoreEarned
            totalScore += ScoreThatCanBeEarnedEachAssignment
            console.log(totalScoreEarned)
            console.log(totalScore)
            totalWeightAverage = totalScoreEarned/totalScore
        }
    }
    console.log(totalWeightAverage)
    return totalWeightAverage 
}
calWeightedAvg(AssignmentGroup, LearnerSubmissions)

console.log("######")
// function calculateScore(assignmentScore, assignmentTotalScore) {
//     return (assignmentScore / assignmentTotalScore) * 100;
// }

// function calEachAssignmentSore(submissions, currentStudent, ag) {
//     let percentages = [];
//     for (let currentAssignment = 0; currentAssignment < ag.assignments.length; currentAssignment++) {

//         let assignmentScore = submissions[currentStudent].submission.score;
//         let assignmentTotalScore = ag.assignments[currentAssignment].points_possible;

//         let percentage = calculateScore(assignmentScore, assignmentTotalScore);
//         percentages.push(percentage);
//     }
//     return percentages
// }



function getLearnerData(course, ag, submissions) {
    let result = [];

    // for (let currentStudent = 0; currentStudent < submissions.length; currentStudent++) {
    //     let percentages = calEachAssignmentSore(submissions,currentStudent,ag)

    //      for (let currentAssignment = 0; currentAssignment < ag.assignments.length; currentAssignment++) {
    //         result.push({
    //             learner_id: submissions[currentStudent].learner_id,
    //             assignment_id: ag.assignments[currentAssignment].id,
    //             percentage_score: percentages[currentAssignment].toFixed(0)
    //         });
    //     }

    // }
    // return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);



// here, we would process this data to achieve the desired result.
// const result = [
//     {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//     },
//     {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//     }
// ];

// return result;