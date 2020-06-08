/* Show/Hide Content and Tigger Specific Pixels
 * Copyright 2020 Hawk Mikado, All Rights Reserved
 * Do not share, or distribute this code without author's consent.
 * Author: Hawk Mikado
 * This was crafted and converted from codes my friends wrote. Check out CFProTools at https://cfpro.tools and Funnel Fix It at http://myfunnel.link/funnelfixit
 * You can check out my site at https://HawkMikado.com 
*/  
 $(document).ready(function () {
	var funnelPixeler = getURLParameter("funnelpixeler");
	var funnelPixeler2 = getURLParameter("funnelpixeler2");
	var funnelPixeler3 = getURLParameter("funnelpixeler3");
	var funnelPixeler4 = getURLParameter("funnelpixeler4");
	var funnelPixeler5 = getURLParameter("funnelpixeler5");
	var fpxLead = getURLParameter("fpxlead");
	var fpxIC = getURLParameter("fpxic");
	var fpxATC = getURLParameter("fpxatc");
	var fpxReg = getURLParameter("fpxreg");
	var fpxPurchase = getURLParameter("fpxpurchase");
	var fpxGift = getURLParameter("fpxgift");
	 
	if {
      fbq ('track', funnelPixeler);
      }
	if {
      fbq ('track', funnelPixeler2);
      }
	if {
      fbq ('track', funnelPixeler3);
      }
	if {
      fbq ('track', funnelPixeler4);
      }
	if {
      fbq ('track', funnelPixeler5);
      }
	if {
      fbq ('track', fpxLead);
      fbq('track', 'Lead');
      }
	if {
      fbq ('track', fpxIC);
      fbq('track', 'InitiateCheckout');
      }
	if {
      fbq ('track', fpxATC);
      fbq('track', 'AddToCart');
      }
	if {
      fbq ('track', fpxReg);
      fbq('track', 'CompleteRegistration');
      }
	if {
      fbq ('track', fpxPurchase);
      fbq('track', 'Purchase');
      }
	if {
      $('[data-title='+fpxGift+']').show();
      fbq ('track', fpxGift);
      }
});
