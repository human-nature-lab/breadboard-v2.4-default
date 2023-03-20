onJoinStep = stepFactory.createNoUserActionStep()

onJoinStep.run = { playerId->
  println "onJoinStep.run"
  def player = g.getVertex(playerId)
  player.step = "recaptcha"
  player.sandbox = SANDBOX
  player.on("verifyRecaptcha", { v, data ->
    verifyRecaptcha(v, data)
  })
}
onJoinStep.done = {
  println "onJoinStep.done"
}
