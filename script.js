function animation(){

    var str, res;

    str = document.getElementById("text").innerHTML; 

    $("#text").animate({opacity: 1}, 1000);

    $("#text").animate({opacity: 0}, 1000, function(){

        res = str.replace("Welcome", "To"); /* second word */
        document.getElementById("text").innerHTML = res;
        $("#text").animate({opacity: 1}, 1000);
        str = document.getElementById("text").innerHTML;

        $("#text").animate({opacity: 0}, 1000, function(){

            res = str.replace("To", "My"); /* third word */
            document.getElementById("text").innerHTML = res;
            $("#text").animate({opacity: 1}, 1000);
            str = document.getElementById("text").innerHTML;

            $("#text").animate({opacity: 0}, 1000, function(){

                res = str.replace("My", "GitHub Page"); /* fourth word */
                document.getElementById("text").innerHTML = res; 
                $("#text").animate({opacity: 1}, 2000);
                $("#text").animate({opacity: 0}, 1000, function(){
                    $("#text").remove();
                    /* you can repeat these functions to add even more words*/
                });
            });
        });
    });
}

$(document).ready(function(){

    animation();  
});   