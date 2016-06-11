#NT Restricted Antimicrobials Guideline

A mobile first web page for Northern Territory doctors' phones which shows what level of restrictions are on an antibiotic when they are being prescribed in the hospital.

##For users
Because phone reception can be sketchy in an all concrete hospital, there is some code in here that allows the page to be saved to the phone and used offline. While showing the page on the phone's browser use the browser bookmark function to 'Add to your home screen'. Once saved you can access via the little blue pill bottle icon on your phone.

To see what restrictions are on any microbial you can start typing the name or scroll through the list. Tap on your target drug to see its level of restriction and any approved protocols and/or comments. You can see a working version of the page on http://learnonline.cc/TEAMS/index.html

##For administrators
If you want to install the app on your own server you can download the zip (or clone this repositoy). To get it running correctly you will need to update the cache.manifest file and set up a text/cache-manifest mime type on your server (although the included .htaccess file might do the trick without you having going to the bother, but I didn't test this).

The data is stored in a JavaScript array at the bottom of the index.html file. After changing any of this data on the server you will need to set a new version number in the cache.manifest file to ensure that it flows through to the saved versions on each doctor's phone.
