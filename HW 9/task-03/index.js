// task-03
$('h3').each(function () {
    let div = $(this).next('div');
    if (div.length > 0) {
        $(this).before(div);
    }
});