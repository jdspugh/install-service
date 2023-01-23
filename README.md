# Installation

Install this npm package globally:

```
$ npm install --global @jdsp/install-service
```

Update it using:

```
$ npm update --global @jdsp/install-service
```

# Usage

Then use it to install Linux services from service files located in non-system directories. The command will symlink the service files to the correct system location (/etc/systemd/system/). It will also enable and restart the services and show you the installation logs. Your service files can have any name as long they have the postfix ".service" and they will be found and installed e.g.:

```
$ ls
my.service
$ install-service
```

# Why?

I have quite a few projects that run as services on my servers and this package comes in handy to install, enable and test them quickly directly from the source directories. I'm consolidating all my code into npms for consistency and managability.