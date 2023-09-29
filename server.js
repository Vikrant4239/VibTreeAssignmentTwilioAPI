const express = require("express");

const dotenv = require("dotenv");
const routes = require("./routes/index");
const app = express();

dotenv.config();
app.use(express.json());



const port = process.env.PORT || 5000;
//front-end
app.get("/", (req, res) => {
  res.send(
    ` <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    background-color: #f1f1f1;
                    font-family: Arial, sans-serif;
                }
                .container {
                    text-align: center;
                    margin-top: 50px;
                }
                .message {
                    font-size: 24px;
                    font-weight: bold;
                    color: #4285f4;
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    margin-bottom: 20px;
                }
                .input-group {
                    margin-bottom: 20px;
                }
                input[type="text"] {
                    width: 300px;
                    padding: 10px;
                    font-size: 16px;
                }
                .btn {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #4caf50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="message">
                    Welcome to <span style="color: #ff5722;">sendMan</span>!
                </div>
                <div class="input-group">
                    <input type="text" id="callNumber" placeholder="Request will be send to 9907274073 only">
                    <button class="btn" onclick="makeCall()">Make Call</button>
                </div>
                <div class="input-group">
                    <input type="text" id="smsNumber" placeholder="Request will be send to 9907274073 only">
                    <button class="btn" onclick="sendSMS()">Send SMS</button>
                </div>
                <div class="input-group">
                    <input type="text" id="whatsappNumber" placeholder="Request will be send to 9907274073 only">
                    <button class="btn" onclick="sendWhatsApp()">Send WhatsApp</button>
                </div>
            </div>

            <script>
                function makeCall() {
                    var phoneNumber = document.getElementById("callNumber").value;
                    window.location.href = "/call?to=" + phoneNumber;
                }

                function sendSMS() {
                    var phoneNumber = document.getElementById("smsNumber").value;
                    window.location.href = "/sms?to=" + phoneNumber;
                }

                function sendWhatsApp() {
                    var phoneNumber = document.getElementById("whatsappNumber").value;
                    window.location.href = "/whatsapp?to=" + phoneNumber;
                }
            </script>
        </body>
        </html>`
  );
});
app.use("/", routes);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
