input.onButtonPressed(Button.A, function () {
    if (input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B)) {
        led.enable(false)
    }
    while (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # . . .
            # . . . .
            . # . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            # # # . .
            . # . . .
            # . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # # #
            . . . # .
            . . # . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . # #
            . . . . #
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
