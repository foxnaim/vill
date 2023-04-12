import React from 'react'
import { Link } from 'react-router-dom'
export default function main() {
    return (
        <div className='not_404_not'>
            <div>
            <Link className='vozrat_to-home' to={"/"}>Home</Link>
        </div>
            <img className='not_found' src='fel.gif' />
        </div>
    )
}
