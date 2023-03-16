import React from 'react';
import './index.scss';
import {Success} from './components/Success';
import {Users} from './components/Users/index';

// Here is a list of users: https://reqres.in/api/users

function App() 
{
  //users information
  const [users, setUsers]             = React.useState([]);
  //users IDS array, to whom the invitations was sent
  const [invites, setInvites]         = React.useState([]);
  //the success flag of sending of any quantity of applications to users
  const [success, setSuccess]         = React.useState(false);
  //status of the user's search label according to his full name
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => 
  {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => 
    {
      //the users was received
      setUsers(json.data);
    })
    .catch(err => 
    {
      console.warn(err);
      alert('Error receiving users');
    })
  }, [])

  //changing function of the user's search label according to his full name 
  const onChangeSearchValue = (event) => 
  {
    setSearchValue(event.target.value);
  }

  //user invitation control function
  const onClickInvite = (id) => 
  {
    if (invites.includes(id)) 
    {
      //a user with an id already has an invitation, so this invitation is being withdrawn from him
      setInvites( (prev) => prev.filter( (_id) => _id !== id))
    } 
    else 
    {
      //overwise to user with ID id we  provide an invitation
      setInvites( (prev) => [...prev, id]);
    }
  }

  //success fixing function according to sending of invitations to users
  const onClickSendInvites = () => 
  {
    setSuccess(true);
  }

  return (
    <div className="App">
      {success ? 
        (
          //we fixing success of sending invitations to users
          <Success count={invites.length} /> 
        ) 
        : 
        (
          //outing users
          <Users 
            //information about users
            items={users} 
            //user's search label from available list of users according to his full name
            searchValue={searchValue}           
            //changing function of user's search label from available list of users according to his full name
            onChangeSearchValue={onChangeSearchValue}
            //IDs users array, to whom the invitaions was sent 
            invites={invites}
            //sending invitation function to individual user
            onClickInvite={onClickInvite}
            //the function of fixing sending invitations to users
            onClickSendInvites={onClickSendInvites}
          />
        )
      }
    </div>
  );
}

export default App;