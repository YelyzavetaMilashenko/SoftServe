// task-01
$('h2.head').each(function (index, element) {
    $(element).addClass('green');
    $(`h2.head span.inner`).addClass('font');
})