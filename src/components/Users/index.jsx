import React from 'react';
import {User} from './User';

export const Users = ({
    //user information
    items, 
    //the user search label from available list of users according to it full name
    searchValue, 
    //the function of changing the user search label from the existing list of users by his full name
    onChangeSearchValue,
    //array of user IDs to which invitations have been sent
    invites,
    //the function of sending an invitation to a specific user
    onClickInvite,
    //the function of fixing sending invitations to users
    onClickSendInvites
}) => {
    return (
        <>
            <div className="search">
                {/*User search icon */}
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                {/*User label assignment window  */}
                <input 
                    //the value of user search label from available list of users according to full name
                    value={searchValue} 
                    //the changing of value of user search label from available list of users according to full name
                    onChange={onChangeSearchValue} 
                    type="text" 
                    placeholder="Find a user..."
                />
            </div>
            <ul className="users-list">
                {/*We display information about each user taking into account
                    users filter label searchValue according to them full names*/}
                {items.filter(obj => {
                    const fullName = (obj.first_name + obj.last_name).toLowerCase();
                    return (
                        fullName.includes(searchValue.toLowerCase()) || 
                        obj.email.toLowerCase().includes(searchValue.toLowerCase())
                    );
                })
                .map((obj) => (
                    //we outputing every user
                    <User 
                        //the function of sending an invitation to an individual user
                        onClickInvite={onClickInvite}
                        //flag, talking about that to an individual user was sent an invitation
                        isInvited={invites.includes(obj.id)} 
                        key={obj.id} 
                        {...obj} 
                    />
                ))}
            </ul>
            {/*Switching to the page showing the number of invited users if there are any */}
            {invites.length > 0 && (
                <button onClick={onClickSendInvites} className="send-invite-btn">
                    Send invitation
                </button>
            )}
        </>
    )
}