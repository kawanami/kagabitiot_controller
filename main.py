def on_button_pressed_a():
    Tello.gomid(100, 100, 100, 50, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    Tello.fly_or_land()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Tello.curve(30, 0, 30, 60, 0, 60, 50)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    radio.send_string("ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい")
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)



Tello.radiosetgroup(31)

def on_forever():
    Tello.setorder(1000)
basic.forever(on_forever)
