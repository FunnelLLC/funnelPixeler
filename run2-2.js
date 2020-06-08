 $(document).ready(function () {
	var funnelPixeler1 = getURLParameter("funnelpixeler1");
	 {
      fbq ('track', funnelPixeler1);
      }
	 var funnelPixeler2 = getURLParameter("funnelpixeler2");
	 {
      fbq ('track', funnelPixeler2);
      }
	 var funnelPixeler3 = getURLParameter("funnelpixeler3");
	 {
      fbq ('track', funnelPixeler3);
      }
	 var funnelPixeler4 = getURLParameter("funnelpixeler4");
	 {
      fbq ('track', funnelPixeler4);
      }
	 var funnelPixeler5 = getURLParameter("funnelpixeler5");
	 {
      fbq ('track', funnelPixeler5);
      }
	 var fpxLead = getURLParameter("fpxlead");
	 {
      fbq ('track', fpxLead);
      fbq('track', 'Lead');
      }
	var fpxIC = getURLParameter("fpxic");
	 {
      fbq ('track', fpxIC);
      fbq('track', 'InitiateCheckout');
      }
	 var fpxATC = getURLParameter("fpxatc");
	 {
      fbq ('track', fpxATC);
      fbq('track', 'AddToCart');
      }
	 var fpxReg = getURLParameter("fpxreg");
	 {
      fbq ('track', fpxReg);
      fbq('track', 'CompleteRegistration');
      }
	 var fpxPurchase = getURLParameter("fpxpurchase");
	 {
      fbq ('track', fpxPurchase);
      fbq('track', 'Purchase');
      }
	 var fpxGift = getURLParameter("fpxgift");
	 {
      $('[data-title='+fpxGift+']').show();
      fbq ('track', fpxGift);
      }
});
