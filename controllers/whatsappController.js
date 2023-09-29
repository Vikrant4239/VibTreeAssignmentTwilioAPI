const dotenv = require('dotenv')
dotenv.config();
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

exports.sendWhatsappMessage = (req,res)=>{
    try {
        client.messages
        .create({
            body: 'Your appointment is coming up on July 21 at 3PM',
            from: 'whatsapp:+14155238886',
            // only verified number at this time
            to: 'whatsapp:+918629889806'
        })
        .then(message => console.log(message))
        res.status(200).send({
            success:true,
            message:'Successful request. Message sent successfully'
        })
        .catch((error)=>{
            res.status(400).send({
                success:false,
                message:'Invalid phone number'
            })
            console.log('whatsapp:Invalid phone number')
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'Internal server error'
        })
        console.log('whatsapp:internal server error')
    }

}