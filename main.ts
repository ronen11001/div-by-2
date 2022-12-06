input.onButtonPressed(Button.A, function () {
    divide_by_2 += 1
    basic.showNumber(divide_by_2)
})
input.onButtonPressed(Button.AB, function () {
    if (divide_by_2 % 2 == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    divide_by_2 += -1
    basic.showNumber(divide_by_2)
})
let divide_by_2 = 0
divide_by_2 = 0
basic.forever(function () {
	
})
