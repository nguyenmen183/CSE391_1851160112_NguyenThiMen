
$(document).ready(function(){
    $("#jselect").change(function(){
        var sq_num=$(this).val();
        $(".show").html('');
        for (let i=0;i<sq_num;i++) {
           $(".show").append('<div class="square"></div>');
        }
    })
})