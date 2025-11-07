import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
const HomePage = () => {
  return (
    <div>
      <button className='btn btn-secondary' onClick={()=>toast.success( "succesfully cliked on button")}>Click me</button>
  <h1>welcome to app</h1>
     <SignedOut>
      <SignInButton mode="modal">
      Login
      </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
  </div>)
}

export default HomePage