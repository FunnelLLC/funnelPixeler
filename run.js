/* Show/Hide Content and Tigger Specific Pixels
 * Copyright 2020 Hawk Mikado, All Rights Reserved
 * Do not share, or distribute this code without author's consent.
 * Author: Hawk Mikado
 * This was crafted and converted from codes my friends wrote. Check out CFProTools at https://cfpro.tools and Funnel Fix It at http://myfunnel.link/funnelfixit
 * You can check out my site at https://HawkMikado.com 
*/  
 $(document).ready(function () {
	var funnelPixeler = getURLParameter("funnelpixeler");
	 {
      fbq ('track', funnelPixeler);
      };
	 var funnelPixeler2 = getURLParameter("funnelpixeler2");
	 {
      fbq ('track', funnelPixeler2);
      };
	 var funnelPixeler3 = getURLParameter("funnelpixeler3");
	 {
      fbq ('track', funnelPixeler3);
      };
	 var funnelPixeler4 = getURLParameter("funnelpixeler4");
	 {
      fbq ('track', funnelPixeler4);
      };
	 var funnelPixeler5 = getURLParameter("funnelpixeler5");
	 {
      fbq ('track', funnelPixeler5);
      };
	 var fpxLead = getURLParameter("fpxlead");
	 {
      fbq ('track', fpxLead);
      fbq('track', 'Lead');
      };
	var fpxIC = getURLParameter("fpxic");
	 {
      fbq ('track', fpxIC);
      fbq('track', 'InitiateCheckout');
      };
	 var fpxATC = getURLParameter("fpxatc");
	 {
      fbq ('track', fpxATC);
      fbq('track', 'AddToCart');
      };
	 var fpxReg = getURLParameter("fpxreg");
	 {
      fbq ('track', fpxReg);
      fbq('track', 'CompleteRegistration');
      };
	 var fpxPurchase = getURLParameter("fpxpurchase");
	 {
      fbq ('track', fpxPurchase);
      fbq('track', 'Purchase');
      };
	 var fpxGift = getURLParameter("fpxgift");
	 {
      $('[data-title='+fpxGift+']').show();
      fbq ('track', fpxGift);
      };
});
