#Kraken-Openshift

This git repository is a [KrakenJs](http://krakenjs.com/) application quickstart based on [ramr/node-custom-version-openshift](https://github.com/ramr/nodejs-custom-version-openshift).

We're using it for our own development process. It already has a kraken project with dust, less and browserify support so you don't need to create a new project.  


If you want to start from scratch please use [ramr/node-custom-version-openshift](https://github.com/ramr/nodejs-custom-version-openshift) and change node and npm versions. Then use `yo kraken` command outside project folder.
Creating a kraken-openshift project
---------------------------------------

    rhc app create <appname> nodejs-0.10 --from-code=git://github.com/Perfect6/kraken-openshift.git

Optionally set your openshift NODE_ENV for production

    rhc set-env NODE_ENV=production -a <appname>

Change deafult execution file

    rhc set-env node_app=index.js -a <appname>

Node cartridge don't support grunt and/or bower so make sure to execute `grunt build` and push .build folder changes to openshift.
