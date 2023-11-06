const bcrypt = require('bcrypt')

export async function hashPass(password) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(password, salt)
    return hash
}

export async function comparePassword(hashedPassword, hash) {
    const resp = await bcrypt.compare(hashedPassword, hash)
    return resp
}
