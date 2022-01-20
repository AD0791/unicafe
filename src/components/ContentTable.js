import React from 'react';
import Table from '../common/Table';

function ContentTable({good, bad, neutral}) {
    if (good !==0 | bad!==0 | neutral!==0) {
        return (
            <Table good={good} bad={bad} neutral={neutral}/>
        );
     } else {
        return (<div>
             <p> No feedback given</p>
         </div>);
     }
}

export default ContentTable;