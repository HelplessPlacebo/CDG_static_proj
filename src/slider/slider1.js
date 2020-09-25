$("#slider-range").slider({
    range: true,
    min: 420,
    max: 1140,
    step: 1,
    values: [540, 1020],
    slide: function (e, ui) {
        let hours1 = Math.floor(ui.values[0] / 60)
        let minutes1 = ui.values[0] - (hours1 * 60)

        if (hours1 < 10) hours1 = '0' + hours1
        if (minutes1 < 10) minutes1 = '0' + minutes1

        if (hours1 === 0) {
            hours1 = 12;
        }

        $('#slider-time').html(hours1 + ':' + minutes1);

        let hours2 = Math.floor(ui.values[1] / 60)
        let minutes2 = ui.values[1] - (hours2 * 60)

        if (hours2 < 10) hours2 = '0' + hours2
        if (minutes2 < 10) minutes2 = '0' + minutes2

        $('#slider-time2').html(hours2 + ':' + minutes2)

    }
});
 // add label for left slider handler
let LeftTimeLabel = document.createElement("div")
LeftTimeLabel.innerHTML = `<div id="LeftLabelRight" class="TimeLabel">
                        <div class="LabelImage"></div>
                        <div class="TimeLabelValue" id="slider-time"> </div>
                    </div>`
document.querySelectorAll(".ui-slider-handle")[0].appendChild(LeftTimeLabel)
// add label for right slider handler
let RightTimeLabel = document.createElement("div")
RightTimeLabel.innerHTML = `<div id = "TimeLabelRight" class="TimeLabel">
                            <div class="LabelImage"> </div>
                            <div class="TimeLabelValue" id="slider-time2"></div>
                         </div>`
document.querySelectorAll(".ui-slider-handle")[1].appendChild(RightTimeLabel)