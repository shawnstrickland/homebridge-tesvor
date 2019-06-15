# homebridge-tesvor
Tesvor Sweeping Robot plugin for [HomeBridge](https://github.com/nfarina/homebridge)

# Installation
1. Install homebridge using: npm install -g homebridge
2. Install this plugin using: npm install -g homebridge-tesvor
3. Update your configuration file. See sample-config.json snippet below. 

# Configuration

Configuration sample:

 ```
"platforms": [
		{
			"platform": "Tesvor",
			"token" : "token will be generated upon first run of homebridge without a token",
			"clientId": "developer Product ID",
			"clientSecret": "developer Product Secret.",
			"username" : "username",
			"password" : "password"
		}
	],

```
