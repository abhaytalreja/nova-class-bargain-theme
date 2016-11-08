# nova-class-bargain-theme ![dependencies](https://david-dm.org/abhaytalreja/nova-class-bargain-theme.svg)
🏖🔭 Telescope Nova package to redesign the app to have a grid/list feature.

![Grid Screenshot](http://i.imgur.com/omRJ7nF.jpg)

![Grid Screenshot](http://i.imgur.com/sNecroq.png)

Want to add this to your Nova instance? Read below:

# Installation

### 1. Meteor package
I would recommend that you clone this repo in your Nova's `/packages` folder. 

In `.meteor/packages` file, add at the end of the **Optional packages** section:
`abhaytalreja:nova-class-bargain-theme` 

*Note: You can also add it via the classic `meteor add xavcz:nova-forms-upload`, however you may encounter load order issue. Also, make sure to place this new package just above the nova-base-routes package*

![Position of package](http://i.imgur.com/REZaQVw.png)

### 2. NPM dependency
This package depends on the awesome `react-filters` ([repo](https://github.com/ritz078/react-filters)), you need to install the dependency: 
```
npm install react-filters
```


Happy hacking! 🚀

### Thanks

[Sacha Greif](https://github.com/SachaG) for building [Telescope](https://github.com/TelescopeJS/Telescope).

### License

ClassBargain is licensed under the [MIT license](http://opensource.org/licenses/MIT).