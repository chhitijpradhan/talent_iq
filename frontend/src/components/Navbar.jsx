
import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/">
                    {/* Logo */}
                </Link>
                <div>
                    {/* Problem page link */}
                    {/* dashboard page link */}
                    <div>
                        <UserButton/>
                    </div>
                </div>
            </div>


        </nav>
    )
}
export default Navbar;
