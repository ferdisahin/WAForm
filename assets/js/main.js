function waform(){
    $('#form').each(function(){
        $('#form .button').on('click', function(){
            var name = $(this).closest('#form').find('.name').val(),
                phone = $(this).closest('#form').find('.phone').val(),
                email = $(this).closest('#form').find('.email').val();

            if(name, phone, email < 1){
                var a = $(this).closest('#form').find('.error').removeClass('hide');
                setTimeout(function(){
                    a.addClass('hide');
                }, 3000);
                return false;
            }else{
                $(this).attr('href', 'https://wa.me/900000000000?text=Ad%20Soyad:'+name+'%0ATelefon:'+phone+'%0AE-Posta:'+email+' ');
            }
        });
    });
}

waform();