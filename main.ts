let Distance = 0
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
    basic.showNumber(Distance)
})
