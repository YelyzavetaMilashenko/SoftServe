// task-04
let checkboxes = $("input[type='checkbox']");
let checkedCount = 0;

checkboxes.on("change", function () {
    if ($(this).is(":checked")) {
        checkedCount++;
        if (checkedCount >= 3) {
            checkboxes.prop("disabled", true);
        }
    }
});