import React from 'react';

//we showing the number of users, to whom the invitation was sent
export const Success = ({
    //the number of users, to whom the invitation was sent
    count 
}) => {
    return (
        <div class="success-block">
            <img src="/assets/success.svg" alt="Success" />
            <h3>Successfull!</h3>
            <p>All {count} users the invitation was sent.</p>
             {/*Switching button to home page project*/}
            <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
        </div>
    )
}