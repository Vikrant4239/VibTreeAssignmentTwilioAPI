
const dotenv = require('dotenv')
dotenv.config();
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);


exports.sendTextMessage =(req,res)=>{
    try {
        client.messages
        .create({
          body: 'Hii Vikrant',
          to: '+919907274073',
          from: '+13343779268',
        })
        .then((message) => console.log(message))
        res.status(200).send({
            success:true,
          message:`- Successful request. SMS sent successfully.`
        })
        .catch((error) => {
          res.status(400).send({
            success:false,
            message:'- Invalid phone number.'
          })
          console.log('sms:Invalid Phone no.');
        });
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'Internal Server error'
        })
        console.log('sms : internal server error')
    }
 
}