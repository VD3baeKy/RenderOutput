const stripeSecretKey = process.env.API_KEY_SECRET
const stripe = Stripe(stripeSecretKey);
const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
});