import React from 'react';

function Positive({good,neutral,bad}) {
    const total = good + neutral + bad
    console.log(good, total);
    return (
        <p>
            Positive {(good / total)*100} %
        </p>
    );
}

export default Positive;