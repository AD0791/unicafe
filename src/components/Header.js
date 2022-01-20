import React from 'react';

function Header({title}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center' }}>
            <div>
            <h1>{title}</h1>
            </div>
        </div>        
    );
}

export default Header;