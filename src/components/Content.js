import React from 'react';
import Part from '../common/Part'

function Content({course}) {
    const part1 = course.parts[0]
    const part2 = course.parts[1]
    const part3 = course.parts[2]
    return (
        <div>
            <Part part={part1.name} exercises={part1.exercises}/>
            <Part part={part2.name} exercises={part2.exercises}/>
            <Part part={part3.name} exercises={part3.exercises}/>
        </div>
    );
}

export default Content;