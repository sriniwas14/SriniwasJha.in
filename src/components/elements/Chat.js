import React from 'react'
import openSocket from 'socket.io-client'

export default function Chat() {
    const socket = openSocket("http://localhost:1500")

    return (
        <div>
            Chat Page
        </div>
    )
}
