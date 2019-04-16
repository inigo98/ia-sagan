
function post(url,data,successCallback,failCallback)//QUITAR DE AQUÍ
{
    console.log(url);
    $.ajax({
        'url':url,
        type:'POST',
        'data':data,
        cache:false,
        contentType:false,
        processData:false,
         
        //dataType:"json"
        success:successCallback, 
        error: failCallback
    });
}


function contactoEnviarDatos(){
    console.log("enviando datos pro");
	var formData = new FormData();
    formData.append('nombre',   $("input[name='nombre']").val() );
    formData.append('tel',   $("input[name='tel']").val() );
    formData.append('email',   $("input[name='email']").val() );
    formData.append('asunto',   $("#asunto").val() );
    formData.append('mensaje',   $("input[name='mensaje']").val() );

	post('send-data-p.php',formData,function(data){
		console.log("Exito al enviar p-datos");
		console.log(data);
        $('#success').removeClass('none');
	},function(data){
		console.log("Error al enviar p-datos");
		console.log(data);
        $('#error').removeClass('none');
    });	
    return false;
}

function contactoEnviarDatos2(){
    console.log("enviando datos Modal");
	var formData = new FormData();
    formData.append('nombre',   $("input[name='nombre2']").val() );
    formData.append('email',   $("input[name='email2']").val() );
    formData.append('mensaje',   $("input[name='mensaje2']").val() );

	post('send-data-p2.php',formData,function(data){
		console.log("Exito al enviar p2-datos");
		console.log(data);
        $('#success').removeClass('noneModal');
        $('#modalStreak').addClass('disable');
        $('#modalNew').removeClass('newdisable');
	},function(data){
		console.log("Error al enviar p2-datos");
		console.log(data);
    });	
    return false;
}