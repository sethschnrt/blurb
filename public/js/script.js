$(document).ready(function () {
    // variable set for blurb callout/tooltip
    var logoTooltip = $(`.logo-tooltip`)

    // Blurb alert loads when the page does
    logoTooltip.tooltip('show');

    // Hide the tooltip after 10 seconds
    setTimeout(function () {
        logoTooltip.tooltip('hide');
        logoTooltip.tooltip('dispose');
    }, 5000);
});