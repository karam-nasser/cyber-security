const { send } = require("process")
const bcrypt = require('bcryptjs')

const chats = [

]

module.exports = {
createMessage: (req, res) => {
    const {pin, message} = req.body
//console.log(req.body)

    for(let i = 0; i < chats.length; i++){
        const existing = bcrypt.compareSync(pin, chats[i].pinHash)


        if(existing) {
           chats[i].messages.push(message)
           const chatObjSendBack = {...chats[i]}
           delete chatObjSendBack.pinHash 
           console.log(chats) 
           return res.status(200).send(chatObjSendBack)
        }
    }

const salt = bcrypt.genSaltSyne(5);
const pinHash = bcrypt.hashSync(pin, salt);

const chatobj = {
    pinHash: pinHash,
    message: [message]
}

    chat.push(chatobj)

    const chatObjSendBack = {...chatObj}
    delete chatObjSendBack.pinHash 

    console.log(chats)
    console.log('New Chat Obj: ', chatObjSendBack)
    res.status(200).send(chatObjSendBack) 
}
}