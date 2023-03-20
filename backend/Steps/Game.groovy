
startGame = { player ->
  player.step = "game"
  player.bonus = 0
  player.endGame = false
  player.timeStep = 0
  player.gameLength = Parameters.gameLength

  def timer = new BBTimer()
  timer.scheduleAtFixedRate({
    if (player.endGame) {
      timer.end()
      return
    }
    player.timeStep++
    if (player.timeStep > Parameters.gameLength) {
      player.endGame = true
    }
  } as GroovyTimerTask, (long)Parameters.timeStepLength, (long)Parameters.timeStepLength)

  player.on("displaySurvey", { v, data ->
    player.bonus = 1.0 + (0.01 * v.timeStep)
    a.addEvent("displaySurvey", [
      player: v.id
    ])
    player.step = "survey"
  })

  player.on("displaySubmit", { v, data ->
    a.addEvent("surveyData", [
      player: v.id
    ] + data)
    def bonus = Math.round(v.bonus * 100)/100
    player.text = """
      <h3>Thank you for participating in this game!</h3>
      <p>You have earned an additional bonus of ${currency.format(bonus)}</p>""".toString()
    player.reason = "completed"
    player.step = "submit"
    a.addEvent("submitHit", [
      player: v.id
    ])
  })
}
