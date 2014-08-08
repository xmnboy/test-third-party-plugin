/*
 * Copyright (c) 2013-2014, Intel Corporation. All rights reserved.
 * Please see http://software.intel.com/html5/license/samples
 * and the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false */
/*global cordova:false, StatusBar:false, plugins:false */



// This file contains your event handlers, the center of your application.



function idHello() {
    "use strict" ;
    var fName = "idHello():" ;
    console.log(fName, "function entry") ;

    alert("It worked!") ;

    console.log(fName, "function exit") ;
}



// see http://plugins.cordova.io/#/package/org.apache.cordova.statusbar

function idStatusBar() {
    "use strict" ;
    var fName = "idStatusBar():" ;
    console.log(fName, "function entry") ;

    if( window.StatusBar ) {
        if( StatusBar.isVisible )
            StatusBar.hide() ;
        else
            StatusBar.show() ;
    }
    else {
        alert("StatusBar plugin is not available or is not supported on this device") ;
    }
    console.log(fName, "function exit") ;
}



// see https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin

function idFlashlight() {
    "use strict" ;
    var fName = "idFlashlight():" ;
    console.log(fName, "function entry") ;

    if( window.plugins && plugins.flashlight ) {

        // switch on
        window.plugins.flashlight.switchOn() ;      // success/error callbacks may be passed

        setTimeout(function() {                     // switch off after one second
            window.plugins.flashlight.switchOff() ; // success/error callbacks may be passed
        }, 1000) ;
    }
    else {
        alert("Flashlight plugin is not available or is not supported on this device") ;
    }
    console.log(fName, "function exit") ;
}


// see https://github.com/nielsAD/cordova-wifiscanner

function btnWiFi() {
    "use strict" ;
    var fName = "btnWifi():" ;
    console.log(fName, "function entry") ;

    if( navigator.wifi && navigator.wifi ) {
        alert("navigator.wifi IS present") ;
    }
    else {
        alert("navigator.wifi is NOT present") ;
    }
    console.log(fName, "function exit") ;
}


// ...additional event handlers here...
