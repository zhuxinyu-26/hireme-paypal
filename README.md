## ⚙ Installation Guide 
Please follow the steps to set up the starting project:
1. Create local project folder
2. Open a CMD and cd to this folder or open a VS code terminal at this location
3. $ git clone https://github.com/zhuxinyu-26/hireme-paypal
4. $ cd hireme-paypal
5. $ npm install
6. fill up .env with your own credentials 

## 🚀 Npm package installation
paypal-rest-sdk npm package:
https://www.npmjs.com/package/paypal-rest-sdk

Install: npm i paypal-rest-sdk

## 🔗 Required Links
1. <a href="https://developer.paypal.com/dashboard/" target="_blank">developer.paypal.com</a>
2. <a href="https://developer.paypal.com/dashboard/](https://www.sandbox.paypal.com" target="_blank">sandbox.paypal.com</a>

## 📖 Documentation
needed documentation:
1. <a href="https://www.npmjs.com/package/paypal-rest-sdk" target="_blank">https://www.npmjs.com/package/paypal-rest-sdk</a>
2. <a href="https://github.com/paypal/PayPal-node-SDK/blob/master/samples/payment/execute.js" target="_blank">https://github.com/paypal/PayPal-node-SDK/blob/master/samples/payment/execute.js</a>

## 💬 Code Snippets
**button**
<form action="/payment/pay" method="post">
    <input type="submit" value="Upgrade">
  </form>
  
**for loop -> get the approval_url**
for (let i = 0; i < payment.links.length; i++) {
            if (payment.links[i].rel === 'approval_url') {
              res.redirect(payment.links[i].href);
            }
          }

## ✉️ Reference
[Intro To The Node.js PayPal REST SDK](https://www.youtube.com/watch?v=7k03jobKGXM&t=1374s) by Traversy Media
