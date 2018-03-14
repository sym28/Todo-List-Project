// Check off todos by clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

// Click X to delete li
$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
    if (event.which === 13) {
       var newTodo = $(this).val()
       $(this).val('');
       $('ul').append('<li><span>X</span> ' + newTodo + '</li>') 
       
    }
}) 