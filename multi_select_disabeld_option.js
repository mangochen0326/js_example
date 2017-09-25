/**
 * Created by Arvin on 2017/9/25.
 */
$(document).ready(function (e) {

    var $selects = $('select');

    $selects.change(function () {
        var ary = new Array();
        var value = $(this).val();
        $selects.each(function () {
            if ('' != $(this).val()) {
                ary.push($(this).val());
            }
        });

        $selects.not(this).each(function () {
            var al_sel=$(this).val();
            $('option', this).each(function () {
                var sel = $(this).val();
                if ('' != sel && ary.indexOf(sel) !== -1 && sel!=al_sel) {
                    $(this).prop('disabled', true);
                } else {
                    $(this).prop('disabled', false);
                }
            });
        });
    }).change(); // Trigger once to add options at load of first

});
