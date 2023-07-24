import express, {Request, Response} from 'express'

const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
const app = express()
const port = 3010

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'eagle62510@gmail.com',
        pass: 'xsfeuylnvsekbfbg'
    },
    tls: {
        rejectUnauthorized: false,
    },
});

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello Incubator'
    res.send(helloMessage)
})
app.post('/sendMessage', async (req: Request, res: Response) => {

    let {name, contactEmail, message} = req.body
    const info = await transporter.sendMail({
        from: "My Portfolio", // sender address
        to: "eagle62510@gmail.com,eagle625@tut.by", // list of receivers
        subject: "FEEDBACK FORM", // Subject line
        text: "", // plain text body
        html: `<b>message from Portfolio</b>
<div>
name: ${name}
</div>
<div>
email: ${contactEmail}
</div>
<div> ${message}</div>`
    });
    res.send("ok")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})