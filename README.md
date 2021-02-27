# data-extractor-example
This is an example of trying to connect to the arcgis online analysis server to execute a data extract job.

### File info:
* index.html - example of client side using axios
* index.js - example of node script using axios
* index2.html - example of client side using ArcGIS REST JS api
* index2.js - example of node script using ArcGIS REST JS api

To run: Open the file you want to run and add your username/password to the agUsername and agPass varaibles at the top.

### Issues:
* Both client side implementations are unable to connect due to CORS issues.
* Both node scripts can hit the analysis url, and even though they pass a valid token, they get a response saying that anonymous access is not allowed

The account I used to test these is able to use the data extract tool in the webmap viewer in arcgis online, so I assume I have the proper priveleges. I just need a way to call that same endpoint from code for a project I am working on.