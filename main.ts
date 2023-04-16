input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(dust))
})
let dust = 0
let 먼지값 = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(280)
    먼지값 = pins.analogReadPin(AnalogPin.P0)
    basic.pause(40)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(9000)
    basic.showString("" + (먼지값))
    dust = Math.map(먼지값, 0, 1023, 0, 300)
    if (dust <= 75) {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else if (dust <= 150) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        basic.showIcon(IconNames.Angry)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
