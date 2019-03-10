# RESTful application.

This is an example of a RESTful API with a working application and added notes.

This application was built with CSS3,HTML5,Javascript, EJS, MongoDB, Mongoose, Lodash, Express.js, Node.js,.
MongoDB is hosted on MongoDB Atlas, and the application is hosted on Heroku.

![alt text]()

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Running Ubuntu 18.04 Bionic Beaver standard image
Visit ubuntu.com to get the latest image.
Google how to install the iso.
(iso on USB through UniversalUSB installer works.)
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install Node
```
sudo apt update
sudo apt install nodejs npm
node -v
'check what version you have'
```


Install MongoDB
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo service mongod start
```

Start up a shell
```
mongo
```
Install Robo3T
```
*refer to the site for the most up-to-date tar file
mkdir ~/robo3t
cd ~/robo3t
wget https://download.robomongo.org/1.2.1/linux/robo3t-1.2.1-linux-x86_64-3e50a65.tar.gz
tar -xvzf robo3t-1.2.1-linux-x86_64-3e50a65.tar.gz
-Manually move all files in the robo3t-1.2.1-linux-x86_64--3e50a65 folder into the robo3t folder.
-Delete robo3t-1.2.1-linux-x86_64-3e50a65 folder.

mkdir ~/robo3t/lib/icon
- Google an image for robo3t and place it into /robo3t/lib/icon folder. Name it robo3t-icon.png.

nano /home/<user-name-here>/.local/share/applications/robo3t.desktop
in this file, enter the following:
[Desktop Entry]
Type=Application
Name=Robo3T
Exec=/home/<username-here>/robo3t/bin/robo3t -- %u
Icon=/home/<username-here>/robo3t/lib/icon/robo3t-icon.png
Terminal=false

Afterwards, navigate to ubuntu applications and begin the installation procedure.

```





## Built With
Front-End
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - HTML5 is the latest evolution of the standard that defines HTML
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML
* [Javascript](https://www.javascript.com/) - JavaScript is the programming language of HTML and the Web
* [EJS](https://ejs.co/) - Embedded JavaScript templating.


Back-End
* [Robo 3T](https://robomongo.org) - free lightweight GUI for MongoDB enthusiasts.
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework
* [MongoDB](https://www.mongodb.com/) - MongoDB is a document database with the scalability and flexibility
* [mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js
* [Nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server
* [Heroku](https://www.heroku.com/) - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Noe Alvarado** - *Initial work* - [CeroDosUno](https://github.com/CeroDosUno)

## License

This project is licensed under the GNU Public License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Thank you to anyone that blogs, teaches coding courses, or contributes funds towards the development of coding skills among minorities.
* This engineer couldn't have gotten far without you guys.
* Thank you to Angela Yu @ [App Brewery](https://www.udemy.com/the-complete-web-development-bootcamp/)
* Thank you to [wstudio](https://vimeo.com/234457798) for the tutorial to installing robo3t on ubuntu
