# SBA 308: JavaScript Fundamentals

## Introduction
This script is designed to gather data, process it, and produce a consistent result based on a specific set of specifications. This scenario reflects a common situation in the industry and has been adapted from a real-world application. The provided data includes information about courses, assignment groups, assignments, and learner submissions.


## Objectives

- Employ basic JavaScript syntax accurately.
- Implement control flow structures such as conditionals and loops effectively.
- Use arrays and objects to organize and manage data.
- Develop functions to create reusable code.
- Utilize loops and iteration to navigate through data collections.
- Implement error handling to manage potential code failures gracefully.

## Input Data

### CouseInfo Object
```js
{
  "id": number,
  "name": string,
}
```

### AssignmentGroup Object
```js
{
  "id": number,
  "name": string,
  // the ID of the course the assignment group belongs to
  "course_id": number,
  // the percentage weight of the entire assignment group
  "group_weight": number,
  "assignments": [AssignmentInfo],

}
```
### AssignmentInfo
```js
{
 "id": number,
  "name": string,
  // the due date for the assignment
  "due_at": Date string,
  // the maximum points possible for the assignment
  "points_possible": number,


}
```

### LearnerSubmission
```js
{
   "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }

}
```

### Output
```js
{ '1': '0.94', '2': '1.00', id: 125, avg: '0.98' }
{ '1': '0.78', '2': '0.83', id: 132, avg: '0.82' }
```



### How to Use

Follow these steps to set up greenSprout locally:

```bash
# Clone the assignment repository
git clone git@github.com:yhuuuu/Per-Scholas.git


# Go to assignment folder
cd SBA_308_JavaScript_Fundamentals/

# Open index.js file
open index.js

# Execute js file
node index.js

```


## Authors

Yuting Hu  

