@Grab('com.squareup.okhttp3:okhttp:3.5.0')
import static groovy.json.JsonOutput.toJson
import okhttp3.MediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.Response
import okhttp3.FormBody
import okhttp3.HttpUrl
import org.json.JSONObject
OkHttpClient client = new OkHttpClient()

Parameters = [
  timeStepLength: 1000,
  gameLength: 60000,
]
