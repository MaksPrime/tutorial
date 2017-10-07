/**
 * Created by Администратор on 07.10.17.
 */
(function () {
    function F () {
        var par = document.getElementsByTagName('p');
        for (i = 0; i < par.length; i++) {
            par[i].innerHTML = 'ParagrapH'
        }
    }
    setTimeout(F,1000);
})();