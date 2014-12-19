var ngScopes = {};

var showHome = function()
{
    $('#html_homeContentManage').css('display', 'block');
    $('#html_addCodeNote').css('display','none'); 
    $('#html_manageCodeNote').css('display','none');
    $('#html_updateCodeNote').css('display','none');
}

var showAddNote = function()
{
    $('#html_homeContentManage').css('display', 'none');
    $('#html_addCodeNote').css('display','block'); 
    $('#html_manageCodeNote').css('display','none');
    $('#html_updateCodeNote').css('display','none');
}

var showManageNote = function()
{
    $('#html_homeContentManage').css('display', 'none');
    $('#html_addCodeNote').css('display','none'); 
    $('#html_manageCodeNote').css('display','block');
    $('#html_updateCodeNote').css('display','none');
}

var showUpdateNote = function()
{
    $('#html_homeContentManage').css('display', 'none');
    $('#html_addCodeNote').css('display','none'); 
    $('#html_manageCodeNote').css('display','none');
    $('#html_updateCodeNote').css('display','block');
}

showHome();