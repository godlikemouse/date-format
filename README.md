date-format.js
==============

Standardized JavaScript date format based syntactically on PHP date.

## Compatibility

| Browser | Compatibility |
| ------- | ----- |
| Chrome | Perfect |
| Firefox | Perfect |
| Opera | Perfect |
| Safari | Perfect |
| Internet Explorer | Perfect |


## Usage

Include the date-format.js or date-format.min.js file. Call the format method of the builtin Date object.

## Quick Start

Instantiate a Date object and call the format function.

    var display = new Date().format("%m/%d/%Y");

## Options

The format string can take any of the following format variables preceeded with a "%".

The following table specifies the format string options available.

| Format | Description | Example |
| ---- | ----------- | ------- |
| d | Day of the month, 2 digits with leading zeros | 01 to 31 |
| D | A textual representation of a day, three letters | Mon through Sun |
| j | Day of the month without leading zeros | 1 to 31 |
| l | A full textual representation of the day of the week | Sunday through Saturday |
| N | ISO-8601 numeric representation of the day of the week | 1 (for Monday) through 7 (for Sunday) |
| S | English ordinal suffix for the day of the month, 2 characters | st, nd, rd or th. Works well with j |
| w | Numeric representation of the day of the week | 0 (for Sunday) through 6 (for Saturday) |
| Y | A full numeric representation of a year, 4 digits | Examples: 1999 or 2003 |
| y | A two digit representation of a year | Examples: 99 or 03 |
| a | Lowercase Ante meridiem and Post meridiem | am or pm |
| A | Uppercase Ante meridiem and Post meridiem | AM or PM |
| g | 12-hour format of an hour without leading zeros | 1 through 12 |
| G | 24-hour format of an hour without leading zeros | 0 through 23 |
| h | 12-hour format of an hour with leading zeros | 01 through 12 |
| H | 24-hour format of an hour with leading zeros | 00 through 23 |
| i | Minutes with leading zeros | 00 to 59 |
| s | Seconds, with leading zeros | 00 through 59 |
| O | Difference to Greenwich time (GMT) in hours | Example: +0200 |
| P | Difference to Greenwich time (GMT) with colon between hours and minutes | Example: +02:00 |
| Z | Timezone offset in seconds. The offset for timezones west of UTC is always negative, and for those east of UTC is always positive. | -43200 through 50400 |
| c | ISO 8601 date | 2004-02-12T15:19:21+00:00 |
| U | Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT) | 1546652531917 |



## Community

Keep track of development and community news.

* Follow [@Collaboradev on Twitter](https://twitter.com/collaboradev).
* Follow the [Collaboradev Blog](http://www.collaboradev.com).

## License

date-format.js is released under [GPL, version 2.0](http://www.gnu.org/licenses/gpl-2.0.html)

