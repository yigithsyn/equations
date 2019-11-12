let user = {}
{
  let request = new XMLHttpRequest()
  request.open("GET", "/authorization/api/v1/user", true)
  request.onload = function () {
    user = JSON.parse(request.responseText)
    if (!user.username) {
      user = { username: "guest" }
      let request = new XMLHttpRequest()
      request.open("POST", "/authorization/api/v1/login", true)
      request.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
      let json = { username: "guest", password: "guest" }
      request.send(JSON.stringify(json))
    }
  }
  request.onerror = function() {
    console.log(request.status)
  }
  request.send()
}
