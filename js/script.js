$.getJSON('js/lang.json', function(json){
    $('translate').click(function(){
        let lang = $(this).attr('id');
        $('.lang').each(function(index,value){
            $('this').text(json[lang][$(this).attr('key')]);
        });
    });
});