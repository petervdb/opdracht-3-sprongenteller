input.onButtonPressed(Button.A, function () {
    basic.showNumber(teller)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    teller += 1
})
input.onButtonPressed(Button.B, function () {
    teller = 0
})
let teller = 0
teller = 0
basic.forever(function () {
    if (teller == 10) {
        music.playMelody("G - - - - - - - ", 250)
        basic.showIcon(IconNames.Heart)
        teller = 0
    }
})
