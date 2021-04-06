input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let ticks = 0
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let emptyObtacleY = randint(0, 4)
let obstacles: game.LedSprite[] = []
for (let index = 0; index <= 4; index++) {
    if (index != emptyObtacleY) {
        obstacles.push(game.createSprite(4, index))
    }
}
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        let index = 0
        for (let index = 0; index <= 4; index++) {
            emptyObtacleY = randint(0, 4)
            if (index != emptyObtacleY) {
            	
            }
        }
        obstacles.push(game.createSprite(4, index))
    }
    ticks += 1
    basic.pause(1000)
})
