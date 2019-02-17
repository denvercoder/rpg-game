import 'phaser'
import config from './config'
import BootScene from './Scenes/Boot'
import GameScene from './Scenes/Game'

class Game extends Phaser.Game {
  constructor() {
    super(config)
    this.scene.add('Boot', BootScene)
    this.scene.add('Game', GameScene)
    this.scene.start('Boot')
  }
}

window.game = new Game()

window.addEventListener('resize', event => {
  game.scale.resize(window.innerWidth, window.innerHeight)
})
