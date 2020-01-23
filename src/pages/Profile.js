import React from 'react';
import { LoginContext } from '../context/loginContext'
import { Redirect } from '@reach/router'

const Profile = (props) => {

   const renderProfileOrRedirect = () => {
        if (props.user_id && props.token) {
            return (
                <>
                    Profile page
                </>
            )
        } else {
            return <Redirect to="/login" noThrow />
        }
   }

   return (
       <>
        {renderProfileOrRedirect()}
       </>
   )

}


const ProfileWithContext = () => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <Profile {...value} />
            }}
        </LoginContext.Consumer>
    )
}

export default ProfileWithContext;