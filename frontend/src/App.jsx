import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'


function App() {

  return (
    <>
     <h1>welcome to app</h1>
     <SignedOut>
      <SignInButton mode="modal">
      Login
      </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </>
  )
}

export default App
