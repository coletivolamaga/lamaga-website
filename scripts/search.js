$(document).ready(function () {
    $("#filter").keyup(function () {

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;


        // Loop through the comment list
        $("#item_list a").each(function () {
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
                //console.log('oi')

                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }

            /*
            if (count != 0) {
                //console.log('kkk');
                $( "#fail_to_find" ).fadeOut();
            } else {
                $( "#fail_to_find" ).fadeIn();
            }*/

        });


    });
});