const stripe = Stripe('sk_test_51QbmklFY800zzpxKMiYuwZ7KEE2YCghVarpqlzmBclmBOWRAmeSG5volMhi05CP8Pte4dhsiuOEwohTgeFIwKvEB00IHkUmqMN');
const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
});