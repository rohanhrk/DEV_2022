import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

function Feed() {
  const {signOut} = useContext(AuthContext);
  return (
    <>
      <div>Feed</div>
      <button type="logout" onClick={(e) => {
        signOut();
      }}>Logout</button>
    </>
  )
}

export default Feed