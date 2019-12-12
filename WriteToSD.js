let row = ""
basic.showIcon(IconNames.Yes)
serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate115200
)
let header = "Micros" + "," + "Time" + "," + "Light" + "," + "Acceleration" + "," + "Temperature"
serial.writeLine(header)
basic.forever(function () {
    row = "" + input.runningTimeMicros() + "," + input.runningTime() + "," + input.lightLevel() + "," + input.acceleration(Dimension.X) + "," + input.temperature()
    serial.writeLine(row)
})
