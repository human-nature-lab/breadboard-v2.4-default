async function init () {
  await Promise.all([
    Breadboard.loadConfig(),
    Breadboard.connect(),
    Breadboard.addScriptFromURL('/generated/breadboard-v2.4/js/chunk-vendors.js'),
  	Breadboard.addScriptFromURL('/generated/breadboard-v2.4/js/app.js'),
    Breadboard.addStyleFromURL('/generated/breadboard-v2.4/css/chunk-vendors.css'),
    Breadboard.addStyleFromURL('/generated/breadboard-v2.4/css/app.css'),
  ])
}

init()
