import React from 'react';

function Total({good, bad, neutral}) {
    return (
        <p>Total {good + bad + neutral}</p>
    );
}

export default Total;