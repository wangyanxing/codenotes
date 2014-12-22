var ngScopes = {};

var emit = function(key, value)
{
    socket.emit(key, value);
}

var showHome = function()
{
    $('#html_homeContentManage').css('display', 'block');
    $('#html_addCodeNote').css('display','none'); 
    $('#html_manageCodeNote').css('display','none');
}

var showAddNote = function()
{
    $('#html_homeContentManage').css('display', 'none');
    $('#html_addCodeNote').css('display','block'); 
    $('#html_manageCodeNote').css('display','none');
}

var showManageNote = function()
{
    $('#html_homeContentManage').css('display', 'none');
    $('#html_addCodeNote').css('display','none'); 
    $('#html_manageCodeNote').css('display','block');
    
    emit('categoryTable', 'all');
}

var showUpdateNote = function(id)
{
    $('#html_homeContentManage').css('display', 'none');
    $('#html_addCodeNote').css('display','block'); 
    $('#html_manageCodeNote').css('display','none');
    
    ngScopes.addNote.noteId = id;
    emit('detail', id);
}

showHome();

var socket = io.connect();