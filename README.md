Lazydriver
======
Lazydriver simplifies the building of a Chrome extension to scrape a site.

How it works
-------
Different sites will have different logic, so you need to write a script
to navigate the pages. 

It is possible to parse the pages as you are navigating them, but
I recommend simply saving the raw html and parsing it later. This gives
you a wider choice of approaches/libraries/languages for parsing and allows.

Writing the script
------
Write your script to navigate the pages. Lazydriver includes jQuery
automatically, so feel free to use it. Somewhere in that script,
you need to run save_page to push the text to a couch.
You may specify up to three options, `pageId`, `text` and `couch`. For
any that you don't specify, these defaults will be used.

    function save_page({
      pageId : document.URL
    , text   : document.documentElement.innerHTML
    , couch  : "http://localhost:5984/lazydriver"
    },callback)

In addition to writing a script to navigate the page, you need to write a
[manifest.json](http://code.google.com/chrome/extensions/manifest.html).

Building
-----------
Once you've finished the script and manifest.json,
run `build.sh <chrome extension dir>`, and an unpacked chrome extension
will appear in a `deploy` directory inside the chrome extension directory.

Then you can go to the [chrome extensions panel](chrome://settings/extensions)
to load the extension or pack it.
