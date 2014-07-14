/*
 * Copyright (c) 2013-2014, Intel Corporation. All rights reserved.
 * Please see http://software.intel.com/html5/license/samples
 * and the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false */
/*global cordova:false */



// This file contains your event handlers, the center of your application.


function idHello() {
    "use strict" ;
    var fName = "idHello():" ;
    console.log(fName, "function entry") ;

    alert("It worked!") ;

    console.log(fName, "function exit") ;
}

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

    console.log(fName, "function exit") ;
}

// ...additional event handlers here...
