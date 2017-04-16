var template = require('art-template');
var defaults = template.defaults;
var options = defaults.$extend({
    debug: process.env.NODE_ENV !== 'production'
});


function renderFile() {

    var data;
    var filename = arguments[0];
    var callback = arguments[arguments.length - 1];

    if (arguments.length > 2) {
        data = arguments[1];

        // No options object -- if there are optiony names
        // in the data, copy them to options
        if (arguments.length === 3) {
            // Express 4
            if (data.settings && data.settings['view options']) {
                options = options.$extend(data.settings['view options']);
            }
            // Express 3 and lower
            else {
                options = options.$extend(data);
            }
        } else {
            options = options.$extend(arguments[2]);
        }

    } else {
        data = {};
    }

    options.filename = filename;

    try {
        var render = template.compile(options);
        callback(null, render(data));
    } catch (e) {
        callback(e);
    }

};


renderFile.template = template;
module.exports = renderFile;