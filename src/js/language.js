/**
 * @name Language
 * @function redirect to language specified page
 * @function via js through header and footer
 */

$(function(){
  // Language select in Headed
  $('#lang_menu li a').click(function(){
    var url = window.location.toString(),
        path = window.location.pathname.split('/'),
        path_lang = path[path.length - 2],
        file = path[path.length - 1]
    var lang = $(this).data("lang");
    
    window.location = url.replace(path_lang + "/" + file, lang + "/" + file);
  })
  
  // Language select in footer
  $('#lang_select').on('change', function() {
    var lang = $(this).val(); 
    var url = window.location.toString(),
        path = window.location.pathname.split('/'),
        path_lang = path[path.length - 2],
        file = path[path.length - 1]
    
    if(lang) {
      window.location = url.replace(path_lang + "/" + file, lang + "/" + file);
    }
    return false;
  });
});