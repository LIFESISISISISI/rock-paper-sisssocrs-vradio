enum RadioMessage {
    message1 = 49434,
    ROCK = 22024,
    SISSCORS = 45208,
    PAPER = 2792
}
radio.onReceivedMessage(RadioMessage.SISSCORS, function () {
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    COMPUTER = 2
})
radio.onReceivedMessage(RadioMessage.PAPER, function () {
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    COMPUTER = 1
})
radio.onReceivedMessage(RadioMessage.ROCK, function () {
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    basic.clearScreen()
    COMPUTER = 3
})
let COMPUTER = 0
let HOME = 0
COMPUTER = 0
basic.forever(function () {
    radio.setTransmitPower(7)
    radio.setGroup(255)
    radio.setFrequencyBand(50)
    if (input.logoIsPressed()) {
        radio.sendMessage(RadioMessage.PAPER)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        HOME = 1
    }
    if (input.buttonIsPressed(Button.A)) {
        HOME = 3
        radio.sendMessage(RadioMessage.message1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendMessage(RadioMessage.SISSCORS)
        HOME = 2
        basic.showLeds(`
            # # . . #
            # # . # .
            # # # . .
            # # . # .
            # # . . #
            `)
        basic.clearScreen()
    }
    if (COMPUTER == 1 && HOME == 3) {
        basic.showString("YOU LOST")
        basic.clearScreen()
    }
    if (COMPUTER == 3 && HOME == 1) {
        basic.showString("I WIN")
        basic.clearScreen()
    }
    if (COMPUTER == 2 && HOME == 3) {
        basic.showString("I WIN")
        basic.clearScreen()
    }
    if (COMPUTER == 3 && HOME == 2) {
        basic.showString("I LOST")
        basic.clearScreen()
    }
    if (COMPUTER == 2 && HOME == 3) {
        basic.showString("I WIN")
        basic.clearScreen()
    }
    if (COMPUTER == 1 && HOME == 2) {
        basic.showString("I LOST")
        basic.clearScreen()
    }
    if (COMPUTER == 3 && HOME == 1) {
        basic.showString("I WON")
        basic.clearScreen()
    }
    if (COMPUTER == 3 && HOME == 3) {
        basic.showString("TIE")
        basic.clearScreen()
    }
    if (COMPUTER == 2 && HOME == 2) {
        basic.showString("TIE")
        basic.clearScreen()
    }
    if (COMPUTER == 1 && HOME == 1) {
        basic.showString("TIE")
        basic.clearScreen()
    }
})
