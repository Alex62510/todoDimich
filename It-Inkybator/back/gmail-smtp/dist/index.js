"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = (0, express_1.default)();
const port = 3010;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
app.get('/', (req, res) => {
    let helloMessage = 'Hello Incubator';
    res.send(helloMessage);
});
app.post('/sendMessage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, contactEmail, message } = req.body;
    const info = yield transporter.sendMail({
        from: "My Portfolio",
        to: "eagle62510@gmail.com,eagle625@tut.by",
        subject: "FEEDBACK FORM",
        text: "",
        html: `<b>message from Portfolio</b>
<div>
name: ${name}
</div>
<div>
email: ${contactEmail}
</div>
<div> ${message}</div>`
    });
    res.send("ok");
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
