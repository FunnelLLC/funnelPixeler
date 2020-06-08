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
	 });
$(document).ready(function () {
	 var funnelPixeler2 = getURLParameter("funnelpixeler2");
	 {
      fbq ('track', funnelPixeler2);
      };
	});
$(document).ready(function () {
	 var funnelPixeler3 = getURLParameter("funnelpixeler3");
	 {
      fbq ('track', funnelPixeler3);
      };
	});
$(document).ready(function () {
	 var funnelPixeler4 = getURLParameter("funnelpixeler4");
	 {
      fbq ('track', funnelPixeler4);
      };
	});
$(document).ready(function () {
	 var funnelPixeler5 = getURLParameter("funnelpixeler5");
	 {
      fbq ('track', funnelPixeler5);
      };
	});
$(document).ready(function () {
	 var fpxLead = getURLParameter("fpxlead");
	 {
      fbq ('track', fpxLead);
      fbq('track', 'Lead');
      };
	});
$(document).ready(function () {
	var fpxIC = getURLParameter("fpxic");
	 {
      fbq ('track', fpxIC);
      fbq('track', 'InitiateCheckout');
      };
	});
$(document).ready(function () {
	 var fpxATC = getURLParameter("fpxatc");
	 {
      fbq ('track', fpxATC);
      fbq('track', 'AddToCart');
      };
	});
$(document).ready(function () {
	 var fpxReg = getURLParameter("fpxreg");
	 {
      fbq ('track', fpxReg);
      fbq('track', 'CompleteRegistration');
      };
	});
$(document).ready(function () {
	 var fpxPurchase = getURLParameter("fpxpurchase");
	 {
      fbq ('track', fpxPurchase);
      fbq('track', 'Purchase');
      };
	});
$(document).ready(function () {
	 var fpxGift = getURLParameter("fpxgift");
	 {
      $('[data-title='+fpxGift+']').show();
      fbq ('track', fpxGift);
      };
});
