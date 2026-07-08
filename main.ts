namespace StatusBarKind {
    export const Loading = StatusBarKind.create()
}
scene.setBackgroundColor(5)
let LoadingProgress = 0
let Title = fancyText.create("Backrooms")
let statusbar = statusbars.create(100, 4, StatusBarKind.Loading)
statusbar.setPosition(80, 100)
statusbar.setColor(15, 1)
for (let index = 0; index < 10; index++) {
    LoadingProgress += 10
    statusbar.value = LoadingProgress
    pause(randint(100, 800))
}
sprites.destroy(statusbar)
game.onUpdateInterval(500, function () {
	
})
