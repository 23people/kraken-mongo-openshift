#Kraken-MongoDb-Openshift

This git repository is a [KrakenJs](http://krakenjs.com/) application quickstart based on [ramr/node-custom-version-openshift](https://github.com/ramr/nodejs-custom-version-openshift).

We're using it for our own development process. It's kraken project with mongodb, dust, less and browserify support so you don't need to create a new project.  


If you want to start from scratch please use [ramr/node-custom-version-openshift](https://github.com/ramr/nodejs-custom-version-openshift) and change node and npm versions. Then use `yo kraken` command outside project folder.
Creating a kraken-mongodb-openshift project
---------------------------------------

* First, create a scalable openshift app with rhc tools. A gear is not enough for having a Kraken Nodejs app with a 500 MB MongoDb installation.


    rhc app create <appname> nodejs-0.10 mongodb-2.4 -s


* Optionally set your openshift NODE_ENV for production

```
    rhc set-env NODE_ENV=production -a \<appname\>
```

* Merge this repository with your app

```
    cd <appname>
    git remote add upstream -m master https://github.com/Perfect6/kraken-mongo-openshift
    git pull -s recursive -X theirs upstream master

```

* Execute `npm install` and start with `npm start`.

* Node cartridge don't support grunt and/or bower so make sure to execute `grunt build` and push .build folder changes to openshift.

* Finally.
```
    git push
```
Changing local mongodb url
---------------------------------------

In `config/development.json` change databaseConfig

```
    "databaseConfig": {
      "mongoDbUrl" : "mongodb://user:password@localhost:27017/",
      "dbName": "dev-db"
    }
```
