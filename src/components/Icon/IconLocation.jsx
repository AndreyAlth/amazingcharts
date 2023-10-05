import React from 'react'

function IconLocation({ className }) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}>
            <path
                opacity="0.5"
                d="M3.33337 8.45275C3.33337 4.7049 6.31814 1.66667 10 1.66667C13.6819 1.66667 16.6667 4.7049 16.6667 8.45275C16.6667 12.1712 14.5389 16.5103 11.2192 18.062C10.4453 18.4238 9.55483 18.4238 8.78093 18.062C5.46114 16.5103 3.33337 12.1712 3.33337 8.45275Z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <circle cx="10" cy="8.33333" r="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export default IconLocation
