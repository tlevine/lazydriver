function parse(){
  return $('#Centralcolum3_dtgGroup').html();
}

function next(){
  selected=$('select[name="Centralcolum3$drpFAQ"] option:selected');
  next_val=selected.next().val();
  if (next_val!="Please select..."){
    $('select[name="Centralcolum3$drpFAQ"]').val(next_val);
    $('#Centralcolum3_btnSubmit').click();
  }
}

jQuery(function(){
  branch=parse();
  save_page({
    pageId:$('#Centralcolum3_dtgGroup_ctl03_Label2').text()
  , text:branch
  , couch:'http://lazydriver.iriscouch.com/postbank'
  });
  next();
});
