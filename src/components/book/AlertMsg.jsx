import React from 'react';

const AlertMsg = ({ msg, close }) => {
    return (
        <div className='bookAlertBg'>
            <div className="bookAlert">
                <p>{msg}</p>
                <button className='bookAlertBtn' onClick={close}>確定</button>
            </div>
        </div>
    )
}

export default AlertMsg