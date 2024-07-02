const studentScores = [95,78,85,60,45,92];

const studentScoresToLetterGrade = studentScores => {
    if(studentScores >= 90) return 'A';
    if(studentScores >= 80) return 'B';
    if(studentScores >= 70) return 'C';
    if(studentScores >= 60) return 'D';
    return 'F';
};

const grades = studentScores.map(studentScoresToLetterGrade );

console.log(grades)     