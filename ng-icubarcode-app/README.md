# ng-icubarcode-app
Angular and git practice for RMIT IT project group member

### For Angular component version

Please access to ng-practice-app subfolder or click [here](https://github.com/tomz12321/ng-practice-app/tree/master/ng-practice-app)

## Demo (start server)
	python -m SimpleHTTPServer 8000

or download [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)

## Demo with Angular Dev Server (start server)
	ng serve

## Demo on a mobile device with user/password authentication
If you want to demo this on a mobile device, you will need to make a tunnel to your local machine. [I recommend you use ngrok for this](https://www.twilio.com/blog/2015/09/6-awesome-reasons-to-use-ngrok-when-testing-webhooks.html). You can [download and install ngrok from ngrok.com](https://ngrok.com/). Once you have it installed, run

	./ngrok http -auth "user:password" 8000
This will open a tunnel to the locally hosted project. You will get two randomly generated URLs, enter the HTTPS version into the browser in your mobile device.

## Quick start

Quick start options:

- Download from Github.

	https://github.com/tomz12321/ng-practice-app/
	
	<img src="https://github.com/tomz12321/ng-practice-app/blob/tomz12321-readme-2-2/readme-img/Screen-Shot-Download-from-Github.png" width = "1996" height = "502" alt="Screen-Shot-Download-from-Google-drive.png" 
align=center>

- Download MVPs from team Google drive
	
	<img src="https://github.com/tomz12321/ng-practice-app/blob/tomz12321-readme-2-2/readme-img/Screen-Shot-Download-from-Google-drive.png" width = "2150" height = "244" alt="Screen-Shot-Download-from-Google-drive.png" 
align=center>

## Release table

Table of versions among prototype release versions and git versions

Git version / Prototype release version

- Prototype 4 /
Github link: [tomz12321/ng-practice-app: Pull Request 23](https://github.com/tomz12321/ng-practice-app/pull/23) /
Prototype4_21052019
- Prototype 3 /
Github link: [tomz12321/ng-practice-app: Pull Request 16](https://github.com/tomz12321/ng-practice-app/pull/16) /
Prototype3_10052019
- Prototype 2 /
Github links: [tomz12321/ng-practice-app: Pull Request 7](https://github.com/tomz12321/ng-practice-app/pull/7) /
Prototype2_22042019
- Prototype 1 /
Github links: [tomz12321/ng-practice-app: Pull Request 6](https://github.com/tomz12321/ng-practice-app/pull/6) /
Prototype1_09042019

## Release notes
-  Prototype 4 -

	- Complete integration demonstration on Angular framework

- Prototype 3 -

	- Release pure HTML/CSS/JavaScript webpages performing all 1D barcode scanner, QR code scanner and 2D data matrix code scanner

	- Regression test pass of 2D data matrix code scanner with Sponsors

- Prototype 2 -

	- Create a webpage using JavaScript file performing 1D barcode scanner
	- User test pass of 1D barcode scanner with Sponsors

- Prototype 1 -

	- Release the code using HTML/JavaScript performing getUserMedia API can get the video stream data from mobile devices and selecting device camera by device ids.

## Terminal Commands

This project was generated with Angular CLI version 1.0.0 and angular 7.x.

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/).

2. Open Terminal

3. Go to your file project

4. Make sure you have installed [Angular CLI](https://github.com/angular/angular-cli) already. If not, please install.

5. Run in terminal: npm install

6. Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

To get more help on the [Angular CLI](https://github.com/angular/angular-cli) use ng help or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Usage
### Deployment

When you are ready to deploy your Angular application to a remote server, you have various options for deployment; see instructions [here](https://angular.io/guide/deployment)

### Basic deployment to a remote server

	For the simplest deployment, create a production build and copy the output directory to a web server.

	Start with the production build:

		ng build --prod

	Copy everything within the output folder (dist/ by default) to a folder on the server.

	Configure the server to redirect requests for missing files to index.html. Learn more about server-side redirects below.

	This is the simplest production-ready deployment of your application.
 
## What's included

Please access to ng-practice-app subfolder or click [here](https://github.com/tomz12321/ng-practice-app/tree/master/ng-practice-app)

Within the download you'll find the following directories and files:

	ng-practice-app
	├── CHANGELOG.md
	├── LICENSE.md
	├── README.md
	├── angular-cli.json
	├── documentation
	├── e2e
	├── karma.conf.js
	├── package-lock.json
	├── package.json
	├── protractor.conf.js
	├── src
	│   ├── app
	│   │   ├── app.component.css
	│   │   ├── app.component.html
	│   │   ├── app.component.spec.ts
	│   │   ├── app.component.ts
	│   │   ├── app.module.ts
	│   │   ├── app.routing.ts
	│   │   ├── components
	│   │   │   ├── components.module.ts
	│   │   │   ├── footer
	│   │   │   │   ├── footer.component.css
	│   │   │   │   ├── footer.component.html
	│   │   │   │   ├── footer.component.spec.ts
	│   │   │   │   └── footer.component.ts
	│   │   │   ├── navbar
	│   │   │   │   ├── navbar.component.css
	│   │   │   │   ├── navbar.component.html
	│   │   │   │   ├── navbar.component.spec.ts
	│   │   │   │   └── navbar.component.ts
	│   │   │   ├── sidebar
	│   │   │   │   ├── sidebar.component.css
	│   │   │   │   ├── sidebar.component.html
	│   │   │   │   ├── sidebar.component.spec.ts
	│   │   │   │   └── sidebar.component.ts
	│   │   │   ├── jsbarcode
	│   │   │   │   ├── jsbarcode.component.css
	│   │   │   │   ├── jsbarcode.component.html
	│   │   │   │   ├── jsbarcode.component.spec.ts
	│   │   │   │   └── jsbarcode.component.ts
	│   │   │   ├── js-qrcode
	│   │   │   │   ├── js-qrcode.component.css
	│   │   │   │   ├── js-qrcode.component.html
	│   │   │   │   ├── js-qrcode.component.spec.ts
	│   │   │   │   └── js-qrcode.component.ts
	│   │   │   └── js-dmcode
	│   │   │       ├── js-dmcode.component.css
	│   │   │       ├── js-dmcode.component.html
	│   │   │       ├── js-dmcode.component.spec.ts
	│   │   │       └── js-dmcode.component.ts
	│   │   ├── dashboard
	│   │   │   ├── dashboard.component.css
	│   │   │   ├── dashboard.component.html
	│   │   │   ├── dashboard.component.spec.ts
	│   │   │   └── dashboard.component.ts
	│   │   ├── icons
	│   │   │   ├── icons.component.css
	│   │   │   ├── icons.component.html
	│   │   │   ├── icons.component.spec.ts
	│   │   │   └── icons.component.ts
	│   │   ├── layouts
	│   │   │   └── admin-layout
	│   │   │       ├── admin-layout.component.html
	│   │   │       ├── admin-layout.component.scss
	│   │   │       ├── admin-layout.component.spec.ts
	│   │   │       ├── admin-layout.component.ts
	│   │   │       ├── admin-layout.module.ts
	│   │   │       └── admin-layout.routing.ts
	│   │   ├── table-list
	│   │   │   ├── table-list.component.css
	│   │   │   ├── table-list.component.html
	│   │   │   ├── table-list.component.spec.ts
	│   │   │   └── table-list.component.ts
	│   │   └── user-profile
	│   │       ├── user-profile.component.css
	│   │       ├── user-profile.component.html
	│   │       ├── user-profile.component.spec.ts
	│   │       └── user-profile.component.ts
	│   ├── assets
	│   │   ├── css
	│   │   │   └── demo.css
	│   │   ├── img
	│   │   └── scss
	│   │       ├── core
	│   │       └── material-dashboard.scss
	│   ├── environments
	│   ├── favicon.ico
	│   ├── index.html
	│   ├── main.ts
	│   ├── polyfills.ts
	│   ├── styles.css
	│   ├── test.ts
	│   ├── tsconfig.app.json
	│   ├── tsconfig.spec.json
	│   └── typings.d.ts
	├── tsconfig.json
	├── tslint.json
	└── typings


## Integrate into your Angular existed system

1. Copy js-qrcode, js-dmcode, jsbarcode folder from components file folder

2. Paste them into your existed Angular project folder

3. Setup your routing in app.routing.ts

4. Run ng serve for a dev server. Navigate to http://localhost:4200/. 

### Available formats (decoders)
	For a list of available formats, please visit our core package. 

	As this feature relies directly on the ZXing's core, so you can find the available formats here:

	https://github.com/zxing-js/library/blob/master/src/core/BarcodeFormat.ts

## Limitations

1. The component relies on zxing-typescript with a [MIT license](https://github.com/zxing-js/library/blob/master/LICENSE). The library currently supports some 2D and 1D barcode formats, but not them all.

2. On iOS-Devices camera access works only in native Safari and not in other Browsers (Chrome,...) or Apps that use an UIWebView or WKWebView. This is not a restriction of this component but of the limited WebRTC support by Apple. The behavior might change in future iOS versions as stated [here](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_11_1.html#//apple_ref/doc/uid/TP40014305-CH14-SW1)
