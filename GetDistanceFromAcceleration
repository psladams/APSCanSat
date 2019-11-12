let acceleration = 0
let recording = false
let accel_data: number[] = []
input.setAccelerometerRange(AcceleratorRange.EightG)


serial.writeString("testing")
input.onButtonPressed(Button.A, function () {
    recording = true
    while (recording) {
        acceleration = input.acceleration(Dimension.Strength)
        accel_data.push(acceleration)
        control.waitMicros(100)
        //basic.showNumber(acceleration)
        //serial.writeNumber(acceleration)

    }
})

input.onButtonPressed(Button.B, function () {
    recording = false
    let vel_data: number[] = []
    let len: number = accel_data.length
    for (let i = 0; i < len + 1; i++) {
        let velocity = integrate(accel_data, i)
        vel_data.push(velocity)
    }
    let d: number = integrate(vel_data, len)
    serial.writeNumber(d)
    basic.showNumber(acceleration)
})

function integrate(f: number[], b: number) {
    let n = f.length
    let h = b / n
    let integral = 0
    for (let i = 0; i < n + 1; i++) {
        integral += f[i * h]
    }
    integral += f[b] / 2
    integral *= h
    return integral
}
