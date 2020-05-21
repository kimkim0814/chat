$(function(){

  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();
    console.log(input);   //フォームの値を取得して変数に代入する
  })
});