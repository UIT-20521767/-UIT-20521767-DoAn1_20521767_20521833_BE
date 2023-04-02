const axios = require("axios");
const ErrorResponse = require("../utils/errorResponse");

exports.sendEmail = async (to, subject, body) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.set('Authorization', 'Basic ' + Buffer.from(`${process.env.MAILJET_API_KEY}` + ":" + `${process.env.MAILJET_SECRET_KEY}`, 'utf8').toString('base64'));

    const data = JSON.stringify({
        "Messages": [{
            "From": {"Email": "nguyenshomefurniture@gmail.com", "Name": "NGUYEN'S HOME Furniture"},
            "To": [{"Email": to}],
            "Subject": subject,
            "TextPart": body
        }]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: data,
    };

    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("Error: ", error));
};