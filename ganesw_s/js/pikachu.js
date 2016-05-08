/* ---------------------------------  nb de clik button = nb item  */

function pikachu()
{
    var ok = $("#ok").val();
    $("#ok").text(0);

    var i = 0;
    $("#add1").on("click", function(){
            i = i + 1;
            $("#ok").text(i);
	});
    $("#add2").on("click", function(){
            i = i + 1;
            $("#ok").text(i);
        });
    $("#add3").on("click", function(){
            i = i + 1;
            $("#ok").text(i);
        });
    $("#add4").on("click", function(){
            i = i + 1;
            $("#ok").text(i);
	});
    $("#add5").on("click", function(){
            i = i + 1;
            $("#ok").text(i);
	});
    $("#add6").on("click", function(){
            i = i + 1;
            $("#ok").text(i);
        });
}
pikachu();