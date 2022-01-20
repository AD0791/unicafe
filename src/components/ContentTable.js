import React from 'react';
import Table from '../common/Table';

function ContentTable({good, bad, neutral}) {
    if (good !==0 | bad!==0 | neutral!==0) {
        return (
            <Table good={good} bad={bad} neutral={neutral}/>
        );
     } else {
        return (
        
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center' }}>
            <div>
                <p> No feedback given</p>
            </div>
            
        </div>);
     }
}

export default ContentTable;