import React from 'react'
import './404.css'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className='notfound-container'>
            <h1 className='notfound-title'>404</h1>
            <p className='notfound-text'>Page Not Found</p>
            <Link className='link link-not' to={'/'}>GO To Home</Link>
        </div>
    )
}
