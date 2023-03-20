@GrabResolver(name='central', root='https://repo1.maven.org/maven2/')
@Grab('com.squareup.okhttp3:okhttp:4.10.0')
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.Response
import okhttp3.FormBody
import org.json.JSONObject
OkHttpClient client = new OkHttpClient()

SANDBOX = true // Set the to false before running in prod!

Parameters = [
  timeStepLength: 1000,
  gameLength: 60000,
]

// This handles responses for the recaptcha component
verifyRecaptcha = { player, responseStr ->
    RequestBody body = new FormBody.Builder()
      .add("secret", "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe")
      .add("response", responseStr)
      .build()
    Request request = new Request.Builder()
            .url("https://www.google.com/recaptcha/api/siteverify")
            .post(body)
            .build()
    Response response = client.newCall(request).execute()
    def responseString = response.body().string()
    JSONObject obj = new JSONObject(responseString)
    def captcha = obj.get("success")
    if (captcha) {
        startTutorial(player)
    } else {
        player.step = "failedCaptcha"
    }
}
