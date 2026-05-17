namespace SpriteKind {
    export const question = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.question, function (sprite, otherSprite) {
    num_1 = randint(1, 10)
    num_2 = randint(1, 10)
    correct_ans = num_1 * num_2
    play_ans = game.askForNumber("what is " + num_1 + " multipied by " + num_2)
    if (correct_ans == play_ans) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
    } else {
        sprites.destroy(otherSprite)
    }
})
info.onScore(49, function () {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    num_1 = randint(1, 10)
    num_2 = randint(1, 10)
    correct_ans = num_1 / num_2
    play_ans = game.askForNumber("what is " + num_1 + "divided by " + num_2)
    if (correct_ans == play_ans) {
        info.changeScoreBy(5)
    } else {
        game.gameOver(false)
    }
})
let play_ans = 0
let correct_ans = 0
let num_2 = 0
let num_1 = 0
let mySprite2: Sprite = null
let myAnswer = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(myAnswer, tiles.getTileLocation(12, 12))
controller.moveSprite(myAnswer)
scene.cameraFollowSprite(myAnswer)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.question)
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`myTile`)
}
