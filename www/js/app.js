/*
 * Copyright (c) 2013-2014, Intel Corporation. All rights reserved.
 * Please see http://software.intel.com/html5/license/samples
 * and the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false */
/*global cordova:false, StatusBar:false, plugins:false */



// This file contains your event handlers, the center of your application.
// In a real app you probably would want to remove the console.log msgs
// from your main app code to avoid any buffer overflow issues.



function idHello() {
    "use strict" ;
    var fName = "idHello():" ;
    console.log(fName, "function entry") ;

    var str = "This app is running. :-)" ;
    if( navigator.notification && navigator.notification.alert )
        navigator.notification.alert(str, function(){}, "Congratulations!" ) ;
    else
        alert(str) ;

    console.log(fName, "function exit") ;
}



// see http://plugins.cordova.io/#/package/org.apache.cordova.statusbar

function idStatusBar() {
    "use strict" ;
    var fName = "idStatusBar():" ;
    console.log(fName, "function entry") ;

    var str = "" ;
    if( window.StatusBar ) {
        if( StatusBar.isVisible )
            StatusBar.hide() ;
        else
            StatusBar.show() ;

        str = "StatusBar plugin is present, status bar should toggle." ;
        if( navigator.notification && navigator.notification.alert )
            navigator.notification.alert(str, function(){}, "StatusBar" ) ;
        else
            alert(str) ;
    }
    else {
        str = "StatusBar plugin is not available or is not supported on this device." ;
        if( navigator.notification && navigator.notification.alert )
            navigator.notification.alert(str, function(){}, "StatusBar" ) ;
        else
            alert(str) ;
    }
    console.log(fName, "function exit") ;
}



// see https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin

function idFlashlight() {
    "use strict" ;
    var fName = "idFlashlight():" ;
    console.log(fName, "function entry") ;

    var str = "" ;
    if( window.plugins && plugins.flashlight ) {

        // switch on
        window.plugins.flashlight.switchOn() ;      // success/error callbacks may be passed

        setTimeout(function() {                     // switch off after two seconds
            window.plugins.flashlight.switchOff() ; // success/error callbacks may be passed
        }, 2000) ;

        str = "Flashlight plugin is present, light should go on for two seconds." ;
        if( navigator.notification && navigator.notification.alert )
            navigator.notification.alert(str, function(){}, "Flashlight" ) ;
        else
            alert(str) ;
    }
    else {
        str = "Flashlight plugin is not available or is not supported on this device." ;
        if( navigator.notification && navigator.notification.alert )
            navigator.notification.alert(str, function(){}, "Flashlight" ) ;
        else
            alert(str) ;
    }
    console.log(fName, "function exit") ;
}


// see https://github.com/nielsAD/cordova-wifiscanner

function idWiFi() {
    "use strict" ;
    var fName = "idWifi():" ;
    console.log(fName, "function entry") ;

    var str = "" ;
    if( navigator.wifi ) {
        str = "navigator.wifi plugin IS present." ;
        if( navigator.notification && navigator.notification.alert )
            navigator.notification.alert(str, function(){}, "WiFi" ) ;
        else
            alert(str) ;
    }
    else {
        str = "navigator.wifi plugin IS NOT present." ;
        if( navigator.notification && navigator.notification.alert )
            navigator.notification.alert(str, function(){}, "WiFi" ) ;
        else
            alert(str) ;
    }
    console.log(fName, "function exit") ;
}


// ...additional event handlers here...
