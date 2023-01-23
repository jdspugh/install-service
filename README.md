# Installation

Install this npm package globally.

```
$ npm install --global @jdsp/install-service
```

# Usage

And then use it to install Linux services from service files located in non-system directories. It also enables and restarts the service and shows you the installation logs. Your service file can have any name as long it has the postfix ".service" and it will be found and installed.

```
$ ls
my.service
$ install-service
```

# Why?

I have quite a few projects that run as services on my servers and this package comes in handy to install, enable and test them quickly directly from the source directories. I'm consolidating all my code into npms for consistency and managability.