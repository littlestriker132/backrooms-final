namespace StatusBarKind {
    export const Loading = StatusBarKind.create()
}
scene.setBackgroundColor(5)
let LoadingProgress = 0
let statusbar = statusbars.create(100, 4, StatusBarKind.Loading)
statusbar.setPosition(80, 100)
for (let index = 0; index < 10; index++) {
    LoadingProgress += 10
    statusbar.value = LoadingProgress
    pause(randint(100, 800))
}
