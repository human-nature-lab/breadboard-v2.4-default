@Grab('com.squareup.okhttp3:okhttp:3.5.0')
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.Response
import okhttp3.FormBody
import org.json.JSONObject
OkHttpClient client = new OkHttpClient()

Parameters = [
  timeStepLength: 1000,
  gameLength: 60000,
]

verifyRecaptcha = { player, key ->
    RequestBody body = new FormBody.Builder()
      .add("secret", "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe")
      .add("response", key)
      .build()
    Request request = new Request.Builder()
            .url("https://www.google.com/recaptcha/api/siteverify")
            .post(body)
            .build()
    Response response = client.newCall(request).execute()
    responseString = response.body().string()
    JSONObject obj = new JSONObject(responseString)
    captcha = obj.get("success")
    if (captcha) {
        startTutorial(player)
    } else {
        player.step = "failedCaptcha"
    }
}
