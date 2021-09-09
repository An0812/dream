$('document').ready(function(){
    $('.historyAPI').on('click', function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        getContent(href, true);
    });
});

window.addEventListener("popstate", function(e) {
    getContent(location.pathname, false);
});

function getContent(url, addEntry) {
    $.get(url).done(function(data) {
        $('#news-container').html($(data).find("#news-container").html());
        if(addEntry == true) {

            history.pushState(null, null, url);
        }
    });
}
