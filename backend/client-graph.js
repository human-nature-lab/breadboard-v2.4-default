const root = '__PUBLIC_ROOT__'  // a magic variable that is replaced with the PUBLIC_ROOT in .env

async function init () {
  // Another magic variable that is replaced with a boolean
  if (__PROD__) {
    Breadboard.addStyleFromURL(`${root}/css/chunk-vendors.css`)
    Breadboard.addStyleFromURL(`${root}/css/app.css`)
  }
  
  await Breadboard.addScriptFromURL('https://www.google.com/recaptcha/api.js')
  await Promise.all([
    Breadboard.loadConfig(),
    Breadboard.connect(),
    Breadboard.addScriptFromURL(`${root}/js/chunk-vendors.js`),
  	Breadboard.addScriptFromURL(`${root}/js/app.js`),
  ])
}

init()

