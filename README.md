Short Pump Race
===============

Website used to support an annual kids race in Richmond, Virginia

Sections
--------

* Repo hosts basic HTML & CSS files for website.
* Photos are stored in a separate S3 bucket (shortpumprace).
* Data folder contains json file with race results.  Results are split into multiple objects to ease management.

Results Lookup
--------------

* AngularJS written page.
* HTTP call is made to pull data files at initial browser rendering.
* Functions parse through the results to present data back to the view.
* Stylesheet (css/results.css) provides formatting for table.
