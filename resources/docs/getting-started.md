# Getting started

----
## Run from binaries


Prebuilt binaries for Linux, Windows and OS X can be found on the [release](https://github.com/jean-emmanuel/open-stage-control/releases) page.

```bash
Options:
  -h, --help     display help
  -s, --sync     synchronized hosts (ip:port pairs) (all osc messages will also be sent to these)
  -l, --load     session file to load
  -p, --port     osc input port (for synchronization)
  -n, --nogui    disable default gui and makes the app availabe through http on specified port
  -t, --theme    theme name or path (mutliple values allowed)

Exemples:

$ open-stage-control -s 127.0.0.1:5555 127.0.0.1:6666 -p 7777

This will create an app listening on port 7777 for synchronization messages, and sending its widgets state changes to ports 5555 and 6666.

$ open-stage-control -n 8080 -l path/to/session.js

This will create a headless app available through http on port 8080. Multiple clients can use the app (with chrome only) simultaneously, their widgets will be synchronized.


$ open-stage-control -t light noinput /path/to/custom_theme.css

This will apply three themes (light ui, remove all inputs, and a custom theme file)


Available themes:
- light
- noinput
```

----
## Run from sources

Running the app from the sources slightly differs from using built binaries : instead of running a binary, we'll launch the app with npm.

**Requirements**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

```bash
$ sudo apt-get install npm  # install nodejs & npm
$ sudo npm install -g npm   # update npm
```


**Download**

```bash
$ git clone https://github.com/jean-emmanuel/open-stage-control
$ cd open-stage-control/
$ npm install --save-optional
 ```

**Run**

```bash
$ npm start [ -- options]

# A double hyphen ("--") is used here to tell npm that the following options are to be given to the app.
```

----
## Build from sources

**Requirements**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

```bash
$ sudo apt-get install npm  # install nodejs & npm
$ sudo npm install -g npm   # update npm
```

**Build**

```bash
$ git clone https://github.com/jean-emmanuel/open-stage-control
$ cd open-stage-control
$ npm install --save-optional
$ export PLATFORM=TARGET_PLATFORM # TARGET_PLATFORM can be linux, win32 (windows) or darwin (os x)
$ export ARCH=TARGET_ARCH         # TARGET_ARCH can be ia32 or x64
$ npm run build

$ # Do the following if you want a deb package for debian/ubuntu
$ npm run deb32
$ # or
$ npm run deb64
```

This will build the app in `dist/open-stage-control-PLATFORM-ARCH`.

*Please note that building the app for windows from a linux system requires wine to be installed.*
