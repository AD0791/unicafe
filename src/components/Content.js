import React from 'react';
import Part from '../common/Part'

function Content({part, exercises}) {
    return (
        <div>
            <Part part={part} exercises={exercises}/>
        </div>
    );
}

export default Content;