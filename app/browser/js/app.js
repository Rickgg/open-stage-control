///////////////////////

WIDGETS = {}
WIDGETS_LINKED = {}
WIDGETS_ID_BY_PATH = {}
SESSION = []

MISC = {
    iterators: {
        widget:{},
        tab:{}
    }
}

///////////////////////

$ = jQuery = require('./jquery/jquery.min')
require('./jquery/jquery.resizable-draggable')
require('./jquery/jquery.sortable')
require('./jquery/jquery.drag')
require('./jquery/jquery.resize')
require('./jquery/jquery.fake-input')

///////////////////////

var callbacks = require('./app/callbacks')

var bindCallback = function(i) {
    IPC.on(i,function(event,data){
        callbacks[i](event,data)
    })
}

for (i in callbacks) {
    bindCallback(i)
}


IPC.send('ready')