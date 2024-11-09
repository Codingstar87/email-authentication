import { response } from "express";
import nodemailer from "nodemailer" ;


const sendMail = async (req,res) => {

    // let testAccount = await nodemailer.createTestAccount()
    
    //connect with smtp server
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure : true,
        port: 465,
        auth: {
            user: 'abhijitdatta54321@gmail.com',
            pass: 'sfli twcb emlh yfar'
        }
    });


    
    const receiver = ({
        from: 'abhijitdatta54321@gmail.com', // sender  mail'
        to: "shimamallik31@gmail.com", // list of receivers
        subject: "Subject ta thik ase ni", // Subject line
        text: "Hello mello ", // plain text body
        html: "<b>kita dea vat khaist</b>", // html body
      });

    //   console.log("Message sent: %s", receiver.messageId);

    transporter.sendMail(receiver,(error,emailresponse) => {
        if(error)
        throw error ;
        console.log("success!")
        response.end()
    });



    res.json(receiver)
}

export default sendMail ;