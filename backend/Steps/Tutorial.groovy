startTutorial = { player ->

  player.step = "tutorial"

  player.on("done", { v, data ->
    startGame(v)
  })

}