/*const stripeSecretKey = process.env.API_KEY_SECRET*/
const stripeSecretKey = 'pk_test_51QYqpeFYRUDDRDQS37JFLnukTL3dE6PZl8lHzTiE4s5VVbrHNifCfbafpoZsqmkCoqmi1Mx4ZOFKSAq595EZeEto00UygFYXEd';
const stripe = Stripe(stripeSecretKey);
const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
});