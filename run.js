/* Show/Hide Content and Tigger Specific Pixels
 * Copyright 2020 Hawk Mikado, All Rights Reserved
 * Do not share, or distribute this code without author's consent.
 * Author: Hawk Mikado
 * This was crafted and converted from codes my friends wrote. Check out CFProTools at https://cfpro.tools and Funnel Fix It at http://myfunnel.link/funnelfixit
 * You can check out my site at https://HawkMikado.com 
*/  
 $(window).ready(function () {
	var funnelPixeler1 = getURLParameter();
	var funnelPixeler2 = getURLParameter();
	var funnelPixeler3 = getURLParameter();
	var funnelPixeler4 = getURLParameter();
	var funnelPixeler5 = getURLParameter();
	var fpxLead = getURLParameter();
	var fpxIC = getURLParameter();
	var fpxATC = getURLParameter();
	var fpxReg = getURLParameter();
	var fpxPurchase = getURLParameter();
	var fpxGift = getURLParameter();
	 
	if (getURLParameter = "funnelpixeler1" ){
      fbq ('track', funnelPixeler1);
      }
	if  (getURLParameter = "funnelpixeler" ){
      fbq ('track', funnelPixeler2);
      }
	if  (getURLParameter = "funnelpixeler3" ){
      fbq ('track', funnelPixeler3);
      }
	if  (getURLParameter = "funnelpixeler4" ){
      fbq ('track', funnelPixeler4);
      }
	if  (getURLParameter = "funnelpixeler5" ){
      fbq ('track', funnelPixeler5);
      }
	if  (getURLParameter = "fpxlead" ){
      fbq ('track', fpxLead);
      fbq('track', 'Lead');
      }
	if (getURLParameter = "fpxic" ){
      fbq ('track', fpxIC);
      fbq('track', 'InitiateCheckout');
      }
	if (getURLParameter = "fpxatc" ){
      fbq ('track', fpxATC);
      fbq('track', 'AddToCart');
      }
	if (getURLParameter = "fpxreg" ){
      fbq ('track', fpxReg);
      fbq('track', 'CompleteRegistration');
      }
	if (getURLParameter = "fpxpurchase" ){
      fbq ('track', fpxPurchase);
      fbq('track', 'Purchase');
      }
	if (getURLParameter = "fpxgift" ){
      $('[data-title='+fpxGift+']').show();
      fbq ('track', fpxGift);
      }
});
