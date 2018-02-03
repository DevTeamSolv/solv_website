// (function () {
//     alert("abc")
//     document.getElementById('outer-loader').style.display = 'none';
//     // el.style.display="none !important";
// })
var $  = require('jquery');

$(window).on("load", function() {

    document.getElementById('outer-loader').style.display = 'none';
    document.getElementById('root').style.display = 'block';
    // Executes when complete page is fully loaded, including
    // all frames, objects and images
});