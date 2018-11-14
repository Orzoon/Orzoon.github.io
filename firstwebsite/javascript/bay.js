
//function menu-toggle
function showhide(){
  menuList = document.getElementById("menuList");
  menuList.classList.toggle("menu-item-list-open");
};
//map-container
/*function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map-container'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
*/
//----------------------------------------
//----------------------------------------
//Variables declaration
var leftBox = document.getElementById("leftBox");
var rightBox = document.getElementById("rightBox");
var leftHawthorn = document.getElementById("leftHawthorn");
var rightPushkilda = document.getElementById("rightKilda");
var infoHawthorn = document.getElementById("info-hawthorn");
var infoKilda = document.getElementById("info-kilda");
//for left-slide
function leftClick(){

  leftBox.classList.add("location-left-arrow-width", "anim");
  leftHawthorn.classList.add("leftHawthorn", "anim");
  rightPushkilda.classList.add("rightPushkilda", "anim");
  rightBox.style.opacity = 1;
  rightBox.classList.add("location-right-arrow","anim");
  infoHawthorn.style.width = 0;
  infoHawthorn.style.opacity = 0;
  infoKilda.style.width = "100%";
  infoKilda.style.opacity = 1;
  infoHawthorn.classList.add("anim1","anim2");
  infoKilda.classList.add("anim1","anim2");


}
//for rightslide
function rightClick(){
  leftBox.classList.remove("location-left-arrow-width");
  leftHawthorn.classList.remove("leftHawthorn");
  rightPushkilda.classList.remove("rightPushkilda");
  rightBox.style.opacity = 0;
  infoHawthorn.style.width = "100%";
  infoHawthorn.style.opacity = 1;
  infoKilda.style.width = 0;
  infoKilda.style.opacity = 0;

}
