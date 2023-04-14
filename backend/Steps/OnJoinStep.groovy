onJoinStep = stepFactory.createNoUserActionStep()

onJoinStep.run = { playerId->
  println "onJoinStep.run"
  def player = g.getVertex(playerId)
  player.step = "recaptcha"
  player.sandbox = SANDBOX
  player.on("verifyRecaptcha", { v, data ->
    if (verifyRecaptcha(v, data)) {
      startTutorial(v)
    } else {
      println "player failed the recaptcha: " + v.id
    }
  })
}
onJoinStep.done = {
  println "onJoinStep.done"
}
