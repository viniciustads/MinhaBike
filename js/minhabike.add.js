$( "#addBike" ).submit(function( event ) {
	event.preventDefault();
    var $inputs = $('#addBike :input');
    
    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var objeto = {};
    $inputs.each(function() {
        objeto[this.id] = $(this).val();
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:4004/api/bikes",
        data: JSON.stringify(objeto),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            alert('Bike adicionada com sucesso!');
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    });

    window.location.reload()
});