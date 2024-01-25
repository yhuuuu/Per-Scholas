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

/**
 *  1.Get all learner id
 *  Return [ {id:1},{id:2},{id:3}]
 */
function getAllLearner(submissions) {
    // Create an array to store all learner 
    const learners = [];
    // Loop for submissions
    for (const submission of submissions) {
        // variable to store current learner id
        const curr_learner_id = submission.learner_id

        //if the student is not exist, push to the array
        if (!learnerExists(learners, curr_learner_id)) {
            learners.push({ id: curr_learner_id })
        }
    }
    return learners
}

/**
 * 2. Create a function to check if leaner id is exist in the array
 * Input:[ 125, 125, 125, 132, 132 ]
 * Output:[125 ,132]
 */
function learnerExists(learners, currLearnerId) {
    // Loop all learner array
    for (const learner of learners) {
        // if the currLearner id already existed
        if (learner.id == currLearnerId) {
            return true;
        }
    }
    return false;
}


/** 
 * 3. get scores for each learner
 * return [{assignment_id: 1, score: 47, total: 50},...]
 */

function getScores(learner_id, submissions, ag) {
    const scores = [];
    for (const submission of submissions) {

        if (submission.learner_id == learner_id) {
            // if (isAssignmentDue(ag, submission)) {
            const assignment_id = submission.assignment_id;
            let score = submission.submission.score;
            const total = getScoreTotal(ag, assignment_id)
            const submittedDate = submission.submission.submitted_at
            const dueDate = getAssignmentDue(ag, assignment_id)
            const x = new Date(submittedDate)
            const y = new Date(dueDate)
            const today = new Date()

            //only output grades that is due
            if (x <= y && y < today) {
                scores.push({
                    learner_id: learner_id, assignment_id: assignment_id, score: score, total: total
                })
            }
            //if the assignment is turn in past due date, deduct 10 percent of the total points possible from their score for that assignment
            else if (x > y) {
                score = score - (total * 0.1)
                scores.push({
                    learner_id: learner_id, assignment_id: assignment_id, score: score, total: total
                })
            }
        }

    }
    return scores;
}


/**
 * 
 * 4. get the possible earn score  
 */
function getScoreTotal(ag, assignment_id) {
    for (const assignment of ag.assignments) {
        if (assignment.id == assignment_id) {
            return assignment.points_possible
        }
    }

}

/**
 *  5. return assignment due date
 * 
 */
function getAssignmentDue(ag, assignment_id) {
    for (const assignmentDueDate of ag.assignments) {
        if (assignmentDueDate.id == assignment_id) {
            return assignmentDueDate.due_at
        }
    }
}


/**
 * 
 *  6. Get verage
 */
function getAveage(scores) {

    let scoreSum = 0
    let totalSum = 0
    for (const score of scores) {
        scoreSum += score.score
        totalSum += score.total
    }
    const avg = scoreSum / totalSum

    return avg
}




function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];
    // 1. get all students
    // 2. calculate all scores for each student
    // 3. gather all results

    const result = [];

    //console.log(getAllLearner(submissions))
    const learners = getAllLearner(submissions)

    for (const learner of learners) {
        // {id: 123}
        const scores = getScores(learner.id, submissions, ag)
        //console.log(scores)


        //console.log(getAveage(scores))

        //Data transform
        const current = {}
        current.id = learner.id
        current.avg = getAveage(scores).toFixed(2)

        for (const score of scores) {
            current[score.assignment_id] = (score.score / score.total).toFixed(2)
        }

        result.push(current)

    }
    return result


}


const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
