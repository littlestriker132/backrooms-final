namespace SpriteKind {
    export const Button = SpriteKind.create()
}
namespace StatusBarKind {
    export const Loading = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(Title)
    sprites.destroy(Play)
    sprites.destroy(myTextSprite)
})
let myTextSprite: fancyText.TextSprite = null
let Play: fancyText.TextSprite = null
let Title: fancyText.TextSprite = null
scene.setBackgroundColor(5)
Title = fancyText.create("Backrooms")
let LoadingProgress = 0
let statusbar = statusbars.create(100, 4, StatusBarKind.Loading)
statusbar.setPosition(80, 100)
statusbar.setColor(15, 1)
for (let index = 0; index < 10; index++) {
    LoadingProgress += 10
    statusbar.value = LoadingProgress
    pause(randint(100, 800))
}
sprites.destroy(statusbar)
Play = fancyText.create("[ PLAY ]")
myTextSprite = fancyText.create("PRESS A TO CONTINUE")
Play.setKind(SpriteKind.Button)
Play.setPosition(80, 90)
myTextSprite.setPosition(80, 100)
game.onUpdateInterval(100, function () {
    Title.x = randint(78, 82)
    Title.y = randint(58, 62)
    if (Math.percentChance(10)) {
        if (Math.percentChance(50)) {
            fancyText.setColor(Title, 8)
        } else {
            fancyText.setColor(Title, 2)
        }
    } else {
        fancyText.setColor(Title, 1)
    }
    if (Math.percentChance(5)) {
        Title.setFlag(SpriteFlag.Invisible, true)
        pause(100)
    } else {
        Title.setFlag(SpriteFlag.Invisible, false)
    }
})
