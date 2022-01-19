import React from 'react';
import Part from '../common/Part'
import Positive from '../common/Positive';
import Total from '../common/Total';

function Content({good, bad, neutral}) {
    
     if (good !==0 | bad!==0 | neutral!==0) {
        return (
            <div>
                <Part title={'Good'} score={good}/>
                <Part title={'Neutral'} score={neutral}/>
                <Part title={'Bad'} score={bad}/>
                <Total good={good} neutral={neutral} bad={bad}/>
                <Positive good={good} neutral={neutral} bad={bad}/>
            </div>
        );
     } else {
        return (<div>
             <p> No feedback given</p>
         </div>);
     }
}

export default Content;