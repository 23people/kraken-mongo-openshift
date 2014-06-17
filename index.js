'use strict';




var kraken = require('kraken-js'),
    app = require('express')(),
    db = require('./lib/database'),
    options = {
        onconfig: function (config, next) {
            //any config setup/overrides here

            var databaseConfig = config.get('databaseConfig');
            db.config(databaseConfig);

            next(null, config);
        }
    },
    ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8000;


app.use(kraken(options));

app.listen(port, ip, function (err) {
    console.log('[%s] Listening on http://%s:%d', app.settings.env, ip, port);
});
