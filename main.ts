let ΕΝΤΑΣΗ_ΦΩΤΟΣ = 0
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.setBrightness(255)
    basic.showNumber(input.temperature())
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    led.setBrightness(input.temperature())
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.setVolume(input.temperature())
    music.playMelody("C5 B A G F E D C ", input.temperature())
    music.playMelody("C D E F G A B C5 ", input.temperature())
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    ΕΝΤΑΣΗ_ΦΩΤΟΣ = input.temperature()
    led.setBrightness(ΕΝΤΑΣΗ_ΦΩΤΟΣ)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.setVolume(ΕΝΤΑΣΗ_ΦΩΤΟΣ)
    music.playMelody("C5 B A G F E D C ", ΕΝΤΑΣΗ_ΦΩΤΟΣ)
    music.playMelody("C D E F G A B C5 ", ΕΝΤΑΣΗ_ΦΩΤΟΣ)
    basic.clearScreen()
})
