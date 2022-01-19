import React from 'react';

function Total({course}) {
    const part1 = course.parts[0]
    const part2 = course.parts[1]
    const part3 = course.parts[2]
    return (
        <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    );
}

export default Total;