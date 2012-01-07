function save_page(args){
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
  , data: docs
  , dataType: 'json'
  , contentType: "application/json; charset=utf-8"
  , success: function(res) {console.log(res);}
  });
}
