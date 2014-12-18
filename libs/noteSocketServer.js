var socketio = require('socket.io');

var io;

exports.listen = function (server) {
	io = socketio.listen(server);
    
	io.sockets.on('connection', function (socket) {
        socket.on('menu', function(){
            socket.emit('menu', [{name:"Number"}, {name:"Sort"}, {name:"Tree"}, {name:"Sum"}, {name: "Map"}]);
        });
        
        socket.on('categoryTable', function(category){
            if(category)
            {   
                var items = [];
                for (var i=0; i<100; i++) {
                    items.push({id: category + " " + i, fname: "fname "+ i, lname: "lname " + i, fname: "fname " + i, email: "email " + i });
                }
                socket.emit('categoryTable', items);
            }
        });
        
        socket.on('detail', function(key){
            var detail = {};
            detail.title = key + " title";
            detail.subTitle = key + " sub title";
            detail.html = '## Bootstrap Markdown\n\
\n\
Markdown editing meet Bootstrap.\n\
\n\
| Version | Compatibility with Bootstrap |\n\
| :---: | :---: |\n\
| Bootstrap Markdown v2.x | **only** compatible with Bootstrap 3.x |\n\
| Bootstrap Markdown v1.x | **only** compatible with Bootstrap 2.x |\n\
\n\
Demo and documentation on [http://toopay.github.io/bootstrap-markdown/](http://toopay.github.io/bootstrap-markdown/)\n\
\n\
### LICENSE\n\
\n\
> Copyright 2013-2014 Taufan Aditya\n\
>\n\
> Licensed under the Apache License, Version 2.0 (the "License");\n\
> you may not use this file except in compliance with the License.\n\
> You may obtain a copy of the License at\n\
>\n\
> http://www.apache.org/licenses/LICENSE-2.0\n\
>\n\
> Unless required by applicable law or agreed to in writing, software\n\
> distributed under the License is distributed on an "AS IS" BASIS,\n \
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n\
> See the License for the specific language governing permissions and\n\
> limitations under the License.';

            socket.emit('detail', detail);
        });
	});
};