input.onGesture(Gesture.TiltRight, function () {
    Tello.right(50)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.A, function () {
    Tello.up(20)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    Tello.left(50)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.LogoUp, function () {
    Tello.back(50)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.Shake, function () {
    Tello.rotate_cw(90)
    basic.showLeds(`
        . . . # .
        . . . # .
        . # . # .
        # # # # .
        . # . . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    Tello.forward(50)
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    Tello.fly_or_land()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    Tello.down(20)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
Tello.radiosetgroup(101)
basic.forever(function () {
    Tello.Setorder(1000)
})
