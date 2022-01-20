import React from 'react';

function Button({handler,text}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center' }}>
            <div>
                <button onClick={handler}>
                    {text}
                </button>
            </div>
        </div>    
    );
}

export default Button;