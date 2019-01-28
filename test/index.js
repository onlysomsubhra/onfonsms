const onfon = require('../index');

const Username = 'xxxx';
const Password = 'xxxx';
const PhoneNumber = '254xxxxxxxxx';
const SenderId = 'YYYY';
const Message = 'Onfon test sms';

//const min=1000; 
//const max=9999;  
//const SmsId = Math.floor(Math.random() * (+max - +min)) + +min; 
const SmsId = Math.random().toString(36).replace('0.', '');

const obj = {
    username: Username,
    password: Password,
    senderid: SenderId,
    smsid: SmsId,
    recipient: PhoneNumber,
    message: Message
};

new Promise((resolve, reject) => {
    onfon(obj)
    .then(res => {
        if(res.type == 'error'){
            console.log('error: ', res);
            //return;
            resolve(false);
        } else {
            console.log('success: ',res);
            resolve(true);
        }
    })
    .catch(err => {
        console.log('error: ', err);
        reject(err);
    });
});