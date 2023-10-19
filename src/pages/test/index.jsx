import { useEffect, useState } from 'react'
import { get_socket } from '@/requests/socket'
import io from 'socket.io-client'
import { useSession } from 'next-auth/react'
let socket

export default function Home() {
    const { data: session } = useSession()
    const [user_id, setUser_id] = useState(null)
    const [input, setInput] = useState('')

    const socketInitializer = async () => {
        // await fetch('/api/socket')
        const user_id = session?.user?.user_id
        await get_socket(user_id)
        socket = io()

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('update-input', (e) => {
            if (e.user_id === session.user.user_id) {
                setInput(e.input_value)
            }
        })
    }

    const onChangeHandler = (e) => {
        setInput(e.target.value)
        socket.emit('input-change', { user_id: 15, input_value: e.target.value })
    }

    const onClickHandler = (e) => {
        socket.emit('send-notification', { user_id })
        // socket?.emit('input-change', { user_id: 15, input_value: e.target.value })
    }

    useEffect(() => {
        if (session) {
            socketInitializer()
        }
    }, [session])

    return (
        <div>
            <input className="text-black" placeholder="Type something" value={input} onChange={onChangeHandler} />
            <input
                className="text-black"
                placeholder="user_id"
                value={user_id}
                onChange={(e) => setUser_id(e.target.value)}
            />
            <button className="bg-blue-100" onClick={onClickHandler}>
                add notification
            </button>
        </div>
    )
}
