var sensors = [];
sensors.push({coordonnees : {lon: -1.6386111111111, lat: 48.1161111 }, id: "70b3d53af0031139", status: "n.a"});

setInterval(function(){
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  //Requête HTTP
  req.open("GET", "http://primary.aqmo.org/API/sensorsData.php");
  req.addEventListener("load", function(){
    if (req.status >= 200 && req.status < 400) {
        //On met à jour notre tableau
        data = JSON.parse(req.responseText);
        majSensors(sensors, data);
    }else {
      console.error(req.status + " " + req.statusText);
    }

  });
  req.addEventListener("error", function () {
      console.error("Erreur réseau");
  });
  req.send(null);
}, 10000)



var majSensors = function(sensors, datas) {
  //On parcourt la liste des sensorsData
  sensors.forEach((sensor)=>{
    const id = sensor.id; console.log(`Id du sensor qu'on mets à jour : ${sensor.id}`);
    //On va chercher les informations qu'on a dans la requête. On cherche un status 0/1/2/3/4/5/F. On ne regarde pas les "" ou n.a
    const newStatus = datas.status.find((status, indice) => {
      return ( (datas.sensorInstallId[indice]==id) && ((new Date(datas.timestamp[indice]) - new Date())/3600000 < 24) && (["0","1","2","3","4","5","F"].includes(status)) );
    });
    console.log("new status : "+newStatus)
    //Si newStatus est "undefined" alors on n'a rien trouvé donc on ne mets pas à jour
    if(newStatus!== undefined){
      sensor.status = newStatus;
    }else{
      sensor.status = "n.a";
    }

  });

  console.log(sensors);

}




/* idée :
On va créer un tableau [{coordonnes, id, status, image}, ...]

Attention : la dernière valeure dans la table récupérée n'est pas forcément intéressante, il faut remonter jusqu'à avoir un status 1 ou 0
On va faire des requêtes de façon régulière et on va mettre à jour notre tableau. Si l'état est plus vieux que 24h alors on prend pas en compte
Pour chaque capteur on va faire une routine : elle va parcourir la requête et mettre à jour les informations


*/
