const root = '__PUBLIC_ROOT__'  // a magic variable that is replaced with the PUBLIC_ROOT in .env

async function init () {
  await Promise.all([
    Breadboard.loadConfig(),
    Breadboard.connect(),
    Breadboard.addScriptFromURL(`${root}/js/chunk-vendors.js`),
  	Breadboard.addScriptFromURL(`${root}/js/app.js`),
    Breadboard.addStyleFromURL(`${root}/css/chunk-vendors.css`),
    Breadboard.addStyleFromURL(`${root}/css/app.css`),
    Breadboard.addScriptFromURL('https://www.google.com/recaptcha/api.js'),
  ])
}

init()

