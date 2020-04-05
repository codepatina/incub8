import React from 'react';
import { LoginContext } from '../context/loginContext'
import { Redirect } from '@reach/router'

const Profile = (props) => {

   const renderProfileOrRedirect = () => {
        if (props.user_id && props.token) {
            return (
              <>
                <div className="tagline-container">
                  <h1 className="tagline-title">
                    Next, tell us what you're about
                  </h1>
                  <p>
                    You'll want to describe some personal details about yourself
                    that will help others connect with you and your ideas. What
                    is your background? What do you want to work on? What
                    excites you?
                  </p>
                  <p>
                    The more information you can give, the better. All the
                    fields here are required so we can help you connect with
                    others - and help others connect with you.
                  </p>
                </div>
              </>
            );
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