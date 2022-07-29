initStep = stepFactory.createStep("InitStep")

initStep.run = {
  println "initStep.run"
  a.addEvent("parameters", Parameters)
}
initStep.done = {
  println "initStep.done"
}