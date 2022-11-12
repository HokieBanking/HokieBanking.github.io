var button = document.getElementById("login");
var ID = document.getElementById("last").value;

button.onClick = function () {
  var api_url =
    "http://api.nessieisreal.com/customers?key=d38e7117f1268f294bd69c1aca813c7e/";
  api_url = api_url + ID;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(api_url, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
