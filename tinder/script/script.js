let url='https://randomuser.me/api/?results=10';

let people = [];
let crosses = [];
let hearts = [];

let picture = document.querySelector("#p_picture"),
    name = document.querySelector("#p_name"),
    age = document.querySelector("#p_age");

if(localStorage.getItem("crosses") !== null){
    crosses = JSON.parse(localStorage.getItem("crosses"));
}  

if(localStorage.getItem("hearts") !== null){
  hearts = JSON.parse(localStorage.getItem("hearts"));
}

if(localStorage.getItem("people") === null){
  function data() {
    for(i=0; i<10; i++){
        let x = data.results[i];
        let arrayData = {
          name: x.name.first + " " +x.name.last,
          picture: x.picture.large,
          age: x.dob.age,
          place: x.location.street + "<br>" + x.location.city
        }
    }
}

function updateUser(){
  fetch(url)
  .then(function(res){
    return res.json()
  })
  .then(function(showData){
    picture.src = data.results[0].picture.large;
    name.innerText = data.results[0].name.last + " " + data.results[0].name.first; 
    age.innerText = data.results[0].dob.age;
    localStorage.setItem("people", JSON.stringify(people));
  })
  .catch(function(error){
    console.log(error);
  });
}

// Buttons en updaten
let btnX = document.getElementById("btn_cross");
btnX.addEventListener("click", function(){

    //adds the item to the first in the array
    crosses.push(people[0]);
    console.log(crosses);
    //removes the first item of an array
    people.shift();
    //removes the first item of an array from the console
    localStorage.removeItem("people");

    updateUser();
});

let btnV = document.getElementById("btn_heart");
btnV.addEventListener("click", function(){
  
   //adds the item to the first in the array
   hearts.push(people[0]);
   console.log(hearts);
   //removes the first item of an array
   people.shift();
   //removes the first item of an array from the console
   localStorage.removeItem("people");

   updateUser();
});

// Show likes and dislikes and be able to change them
document.getElementById("showLikes").addEventListener('click', function(){
  let disl= document.getElementById("dislikes");
  let lks= document.getElementById("likes")
  disl.innerHTML="";
  lks.innerHTML="";
  for(arrayData=0; arrayData<crosses.length; arrayData++){
      if(crosses.length>0){
          let change1 = crosses[arrayData];
          disl.innerHTML += crosses[arrayData].name +"<br><br>";
          let change2 = document.querySelectorAll('.change');
          for(p=0;p<change2.length;p++){
              change2[p].addEventListener('click', function(){
                  //The splice() method adds/removes items to/from an array, and returns the removed item(s).
                  crosses.splice(p, 1);
                  localStorage.setItem("crosses", JSON.stringify(crosses));
                  hearts = JSON.parse(localStorage.getItem("hearts"));
                  hearts.push(crosses[p]);
                  localStorage.setItem("hearts", JSON.stringify(hearts));

              })
          }
      }
  }
  for(i=0;i<hearts.length;i++){
      if(hearts.length>0){
          let changeHearts = hearts[i];
          document.getElementById("likes").innerHTML += hearts[i].name +"<br><br>";
      }
  }
})

//GEOLOCATION
function getLocations(){
if(navigator.geolocation){
    //use geolocation
    //me
    let posMe = navigator.geolocation.getCurrentPosition(getPositionMe);
    for(i=0; i<10; i++)
    {
        let x = data.results[i];
        let posTinder = x.navigator.geolocation.getCurrentPosition(getPositionTinder);
    {
        getPos(position.coords.latitude, position.coords.longitude);
        console.log(posMe);
    })

    //function getPositionMe
    //function getPositionTinder

    //use geolocation 
    //tinder person
   
            getPos(position.coords.latitude, position.coords.longitude);
            console.log(posTinder);
        })
    };  
    //show location on map    
    let map;
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //distance in km between you and the person
function distanceMe (){
    let meLat = posMe.coords.latitude;
    let meLong = posMe.coords.longitude;
    console.log(meLat + " " + meLong);

};

function distanceTinder (){
    for(i=0; i<10; i++){
        let x = data.results[i];
        let tndrLat = x.posTinder.coords.latitude;
        let tndrLong = x.posTinder.coords.longitude;
        console.log(tndrLat + " " + tndrLong);
        }
    }
};

function distance2 (){
    //distance from tinderperson to me in km
    let lat = tndrLat - meLat;
    let long = tndrLong - meLong;
};

//mapbox by google maps
let mapLatLong = new google.maps.LatLng(tndrLat, tndrLong);

let mapOptions = 
{
  zoom: 15,
  mapTypeControl: false,
  center: mapLatLng,
};

let map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//marker for position
let mapMarker = new google.maps.Marker({
    position: mapLatLng,
    map: map,
properties: {
        icon: {
          iconsrc: images/redCircle.gif,
          iconSize: [120, 120]
        }
      }
  
});
}

else
{
    console.log("Geolocation is not supported");
}
};

    



window.onload = getLocations();
window.onload = updateUser();
