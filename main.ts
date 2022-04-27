function Function (num: number, num2: number) {
    sum = num + num2
}
input.onButtonPressed(Button.A, function () {
    num1 += -1
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
    num2 = num1
})
input.onButtonPressed(Button.B, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("sum =")
})
let num2 = 0
let sum = 0
let num1 = 0
num1 = 0
basic.forever(function () {
	
})
