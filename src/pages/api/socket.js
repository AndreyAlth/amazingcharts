import { Server } from 'socket.io'
import { insert_rel_user_socket } from '@/backend/db/socket'

const SocketHandler = async (req, res) => {
    const { user_id } = req.query
    console.log(user_id)
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        
        io.on('connection', (socket) => {
            socket.on('input-change', (e) => {
                socket.broadcast.emit('update-input', e)
                // socket.to(socket.id).emit('update-input', 555)
            })
        })
    }

    res.end()
}

export default SocketHandler
