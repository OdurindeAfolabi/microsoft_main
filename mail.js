const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth:{
        api_key: 'c1641c2a5100a4c81b023db4fce12515-7005f37e-18273322',
        domain: 'sandbox6f85836b378c4507a9d0880a7ca50af5.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = ( text, cb) => {
    
    const mailOptions = {
        from: 'dev@kishi.com',
        to: 'davidmic414@gmail.com',
        subject: 'Details',
        text
    }
        
    transporter.sendMail(mailOptions, function(err, data) {
        if(err){
            cb(err,null)
        }else{
            cb(null,data)        }

    })

}


module.exports = sendMail