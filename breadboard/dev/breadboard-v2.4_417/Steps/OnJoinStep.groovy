onJoinStep = stepFactory.createNoUserActionStep()

onJoinStep.run = { playerId->
  println "onJoinStep.run"
  def player = g.getVertex(playerId)
  startTutorial(player)
}
onJoinStep.done = {
  println "onJoinStep.done"
}
