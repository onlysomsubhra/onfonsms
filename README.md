# ONFON SMS Gateway API for Kenya

## Install

```bash
npm install onfonsms --save
```

## Test
```bash
npm test
```

## Basic Usage

```javascript
//import library
const onfon = require('onfonsms');

//get data from database or ...
const Username = 'xxxx'; // onfon client username
const Password = 'xxxx'; // onfon client password
const PhoneNumber = '254xxxxxxxxx'; // to mobile number or recipient number
const Message = 'npm test super agent'; // sms text message
const SenderId = 'YYYYY'; // You can use your project or company name

const SmsId = Math.random().toString(36).replace('0.', '');

const obj = {
    username: Username,
    password: Password,
    senderid: SenderId,
    smsid: SmsId,
    recipient: PhoneNumber,
    message: Message
};

//send sms
new Promise((resolve, reject) => {
    onfon(obj)
    .then(res => {
        resolve(true);        
    })
    .catch(err => {
        console.log('error: ', err);
        reject(err);
    });
});
```

### Expected ouput

```
{    
    responce: 'xml response from onfon end' 
}
```