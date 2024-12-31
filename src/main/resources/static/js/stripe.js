const stripeSecretKey = 'pk_test_51QbmklFY800zzpxK3wQuufKDhIhsX1rbr15PoYTWc3NW0YJ6ZHkRMo9mkhl4RGKSfCUhhlqX80JW2TNpt6rivDSw00wFqQxuJ5';
const stripe = Stripe(stripeSecretKey);
const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
});