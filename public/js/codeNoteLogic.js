var emit = function(key, value)
{
    socket.emit(key, value);
}

var showHome = function()
{
    $('#html_homeContent').css('display', 'block');
    $('#html_categoryTable').css('display','none'); 
    $('#html_noteDetail').css('display','none');
}

var showCategoryTable = function(category)
{
    ngScopes.categoryTable.items = [];
    emit('categoryTable', category);
    console.log('show');
    $('#html_homeContent').css('display', 'none');
    $('#html_categoryTable').css('display','block'); 
    $('#html_noteDetail').css('display','none');
}

var showNoteDetail = function(id)
{
    $('#html_homeContent').css('display', 'none');
    $('#html_categoryTable').css('display','none'); 
    $('#html_noteDetail').css('display','block');
    emit('detail', id);
}

var ngScopes = {
    menu : null,
    categoryTable : null
};

var socket = io.connect();
var converter = new Showdown.converter();

$(document).ready(function(){
    //showHome();
    socket.on('detail', function (detail) {
        $('#h1_noteDetailTitle').html(detail.title);
        $('#h4_noteDetailSubTitle').html(detail.subTitle);
        var html =  converter.makeHtml(detail.html);
        $('#div_noteDetailHtml').html(html);
	});
});