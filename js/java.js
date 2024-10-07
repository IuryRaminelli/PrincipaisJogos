$(document).ready(init);

function init(){
    $(document).ready(function() {
        $('.descricao').click(function() {
          var conteudo = $(this).siblings('.descricao-conteudo');
          
          conteudo.slideToggle('slow');
        });
      });
}