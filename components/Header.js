import React, { useEffect } from 'react'
import Link from 'next/link'

const Header = () => {

    return (
        <div className="header container">
            <Link href='/'>
              <a className='nav-title'>
                Jonathan
                <span className="last-name"> Park </span>
              </a>
            </Link>
            <div className="navigation">
              <Link href='https://blog.jonathanpark.ca'>
                <a className="nav-item"> Blog </a>
              </Link>
            </div>
            <style jsx>
            {`
            .header {
              display: flex;
              height: 96px;
            }
            .navigation {
              flex-grow: 1;
              max-width: 100%;
              background-color: white;
              display: flex;
              justify-content: flex-end;
              padding: 8px;
              align-items: center;
            }
            .nav-title {
              color: black;
              text-decoration: none;
              margin: 0;
              padding: 8px 0;
              font-size: 40px;
              line-height: 88px;
            }
            .nav-item {
              font-weight: bold;
              color: black;
              text-decoration: none;
              font-size: 32px;
              padding: 24px 8px 8px 8px;
            }
            @media (max-width: 576px) {
                .last-name {
                    display: none;
                }
            }
            `}
            </style>
        </div>
    )
}

export default Header
