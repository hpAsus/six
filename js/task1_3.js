/*
 Task 1.3
 3. Cråate a function that gets the value of <input type="color">
 and sets the background of the body to this value
 */

var changeBgColor = function (element) {
    var el = element || document.getElementById('colorpicker');
    document.body.style.background = el.value;
};