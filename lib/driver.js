function save_page(args,callback){
  if (typeof(args.pageId)==="undefined"){
    args.pageId=document.URL;
  }
  if (typeof(args.text)==="undefined"){
    args.text = document.documentElement.innerHTML;
  }
  if (typeof(args.couch)==="undefined"){
    args.couch="http://localhost:5984/lazydriver"
  }

  jQuery.ajax({
    url: args.couch
  , type: 'POST'
  , data: JSON.stringify({
      pageId:args.pageId
    , text:args.text
    })
  , dataType: 'json'
  , contentType: "application/json" //"application/json; charset=utf-8"
  , success: callback
  });
}
