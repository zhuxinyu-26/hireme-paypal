const express = require("express");
const router = express.Router();

// STEP 1c - import the PayPal REST SDK

/* GET /payment/index page. */
router.get("/", (req, res) => {
  res.render("payment/index", { title: "Payment", user: req.user });
});
/* GET: /payment/successed => show payment confirmed */
router.get("/successed", (req, res) => {
    res.render("payment/successed", {
      title: "Payment Successed",
      user: req.user,
    });
  });
/* GET: /payment/cancelled */
  router.get("/cancelled", (req, res) => {
    res.render("payment/cancelled", {
      title: "Payment Cancelled",
      user: req.user,
    });
  });


// STEP 4a - create a /pay route that the form is getting submitted to

  // STEP 4b - create(paste) a json object and make adjustment
  
  // STEP 4c - pass it in the paypal.payment.create
  
      // res.send('test');
      
      // get the approval_url from the PAYMENT


// STEP 5a - create route for /success

  // STEP 5b - get params from the link

  // STEP 5c - create(paste) execute object
  
    // change the payer_id
    // change transaction info
   

  // STEP 5d - paypal.payment.execute

      // res.redirect("/payment/successed");

// STEP 6 - GET /cancel 

    // res.redirect("/payment/cancelled");

module.exports = router;
