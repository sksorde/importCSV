$(function () {
    $("#fetchdata").on('click', function () {
        $.get("/fetchdata", function (data) {
            var users = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(users, function (index, user) {
                string += '<tr><td>' + (index + 1) + '</td><td>' + user['_id'] + '</td><td>' + user['firstName'] + '</td><td>' + user['lastName'] + '</td></tr>';
            });
            $("#trdata").html(string);
        });
    });

    $("#importdata").on('click', function () {
        $.get("/import", function (data) {
            $("#message").show().html(data['success']);
        });
    });
}); 