/*
 * Copyright 2019 Jason Graves (GodLikeMouse/Collaboradev)
 * http://www.collaboradev.com
 *
 * This file is part of date-format.js
 *
 * The date-format extension is free software: you can redistribute it
 * and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * The jquery.querystring.js plugin is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with the date-format extension. If not, see http://www.gnu.org/licenses/.
 *
 */

//method for formatting date time
// formatString - reference: https://github.com/godlikemouse/date-format
// supports: dDjlNSwYyaAgGhHisOPZcU
Date.prototype.format = function(formatString){

    var prefixDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if(formatString.indexOf("%d") > -1){
        var d = this.getDate() + "";
        d = d.padStart(2, "0");
        formatString = formatString.replace(/%d/gm, d);
    }

    if(formatString.indexOf("%D") > -1){
        var d = prefixDays[this.getDay()];
        formatString = formatString.replace(/%D/gm, d);
    }

    if(formatString.indexOf("%j") > -1){
        var d = this.getDate();
        formatString = formatString.replace(/%j/gm, d);
    }

    if(formatString.indexOf("%l") > -1){
        var d = prefixDays[this.getDay()];
        formatString = formatString.replace(/%l/gm, d);
    }

    if(formatString.indexOf("%N") > -1){
        var iso = [7,1,2,3,4,5,6];
        var d = iso[this.getDay()];
        formatString = formatString.replace(/%N/gm, d);
    }

    if(formatString.indexOf("%S") > -1){
        var suffix = ["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st"];
        var d = suffix[this.getDate()];
        formatString = formatString.replace(/%l/gm, d);
    }

    if(formatString.indexOf("%W") > -1){
        var d = this.getDay();
        formatString = formatString.replace(/%W/gm, d);
    }

    if(formatString.indexOf("%F") > -1){
        var m = months[this.getMonth()];
        formatString = formatString.replace(/%F/gm, m);
    }

    if(formatString.indexOf("%m") > -1){
        var m = this.getMonth() + 1 + "";
        m = m.padStart(2, "0");
        formatString = formatString.replace(/%m/gm, m);
    }

    if(formatString.indexOf("%M") > -1){
        var m = months[this.getMonth()].substring(0,3);
        formatString = formatString.replace(/%M/gm, m);
    }

    if(formatString.indexOf("%n") > -1){
        var m = this.getMonth() + 1;
        formatString = formatString.replace(/%n/gm, m);
    }

    if(formatString.indexOf("%Y") > -1){
        var y = this.getFullYear();
        formatString = formatString.replace(/%Y/gm, y);
    }

    if(formatString.indexOf("%y") > -1){
        var y = (this.getFullYear() + "").substring(2);
        formatString = formatString.replace(/%y/gm, y);
    }

    if(formatString.indexOf("%a") > -1){
        var h = this.getHours() >= 12 ? "pm" : "am";
        formatString = formatString.replace(/%a/gm, h);
    }

    if(formatString.indexOf("%A") > -1){
        var h = this.getHours() >= 12 ? "PM" : "AM";
        formatString = formatString.replace(/%A/gm, h);
    }

    if(formatString.indexOf("%g") > -1){
        var h = this.getHours();
        h = h >= 12 ? h-12 : h;
        formatString = formatString.replace(/%g/gm, h);
    }

    if(formatString.indexOf("%G") > -1){
        var h = this.getHours() + "";
        h = h.padStart(2, "0");
        formatString = formatString.replace(/%G/gm, h);
    }

    if(formatString.indexOf("%h") > -1){
        var h = this.getHours();
        h = h > 12 ? h - 12 : h;
        formatString = formatString.replace(/%h/gm, h);
    }

    if(formatString.indexOf("%H") > -1){
        var h = this.getHours();
        h = h > 12 ? h - 12 : h;
        h = h.padStart(2, "0");
        formatString = formatString.replace(/%H/gm, h);
    }

    if(formatString.indexOf("%i") > -1){
        var m = this.getMinutes() + "";
        m = m.padStart(2, "0");
        formatString = formatString.replace(/%i/gm, m);
    }

    if(formatString.indexOf("%s") > -1){
        var s = this.getSeconds() + "";
        s = s.padStart(2, "0");
        formatString = formatString.replace(/%s/gm, s);
    }

    if(formatString.indexOf("%O") > -1){
        var o = this.getTimezoneOffset();
        if(o > 0){
            o = o + "";
            o = "+" + o.padStart(4, "0");
        }
        else {
            o = o + "";
            o = "-" + o.padStart(4, "0");
        }
        formatString = formatString.replace(/%O/gm, o);
    }

    if(formatString.indexOf("%P") > -1){
        var o = this.getTimezoneOffset();
        if(o > 0){
            o = o + "";
            o = "+" + o.padStart(4, "0");
        }
        else {
            o = o + "";
            o = "-" + o.padStart(4, "0");
        }

        o = o.substring(0,3) + ":" + o.substring(3);
        formatString = formatString.replace(/%P/gm, o);
    }

    if(formatString.indexOf("%Z") > -1){
        var o = this.getTimezoneOffset() * 60;
        formatString = formatString.replace(/%Z/gm, o);
    }

    if(formatString.indexOf("%c") > -1){
        var d = this.toISOString();
        formatString = formatString.replace(/%c/gm, d);
    }

    if(formatString.indexOf("%U") > -1){
        var t = this.getTime();
        formatString = formatString.replace(/%U/gm, t);
    }

    return formatString;
}
