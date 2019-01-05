	const assert = require('assert');

			assert(true);  // OK
			assert(1);     // OK
			var x=10;
			assert(x<100);
			/*assert(false);
			  // throws "AssertionError: false == true" */
			/* assert(0);
			  // throws "AssertionError: 0 == true"*/
			/*assert(false, 'it\'s false');*/
			  // throws "AssertionError: it's false"


