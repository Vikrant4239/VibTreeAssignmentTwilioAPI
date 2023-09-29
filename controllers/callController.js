const dotenv = require('dotenv')
dotenv.config();
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);


exports.callingApp=(req,res)=>{
    try {
        client.calls 
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+919907274073',
         from: '+13343779268'
       })
      .then(call => console.log(call))
      res.status(200).send({
        success:true,
        message:'call sent successfully'
      })
      .catch((error)=>{
        res.status(400).send({
            success:false,
            message:'Phone number is incorrect'
        })
        console.log('call:Phone number is incorrect')
      })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'call:internal server error'
        })
        
    }
    

}