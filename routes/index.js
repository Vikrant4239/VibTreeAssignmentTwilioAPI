const express = require ('express')
const router = express.Router();

const smsController = require('../controllers/smsController')

const callController = require('../controllers/callController')
const whatsappController = require('../controllers/whatsappController')

router.post('/sms',smsController.sendTextMessage)
router.get('/sms', smsController.sendTextMessage);
router.post('/call',callController.callingApp)
router.get('/call',callController.callingApp)
router.post('/whatsapp',whatsappController.sendWhatsappMessage)
router.get('/whatsapp',whatsappController.sendWhatsappMessage)

module.exports = router