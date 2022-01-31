let vh=window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
function initLocator(){
geocoder=new google.maps.Geocoder();
autocomplete=new google.maps.places.Autocomplete(document.getElementById('locator_address'), {
types: ['geocode'],
fields: ['name', 'geometry.location'],
componentRestrictions: {
country: goiko20.googlemaps_country
}});
autocomplete.addListener('place_changed', function(){
var place=autocomplete.getPlace();
if(place.geometry){
jQuery('input[name="lat"]').val(place.geometry.location.lat());
jQuery('input[name="lng"]').val(place.geometry.location.lng());
jQuery('#doGeolocation').addClass('selected');
jQuery('[data-toggle="datepicker"]').datepicker('show');
}});
jQuery("#locator_address").focusin(function (){
jQuery("#locator_address").keypress(function (e){
jQuery('.address_wrap').removeClass('geolocated');
jQuery('#doGeolocation').removeClass('selected');
if(e.which==13){
e.preventDefault();
var firstResult=jQuery(".pac-container .pac-item:first .pac-item-query").text();
var geocoder=new google.maps.Geocoder();
geocoder.geocode({"address":firstResult }, function(results, status){
if(status==google.maps.GeocoderStatus.OK){
console.log(results[0].address_components[0]);
var lat=results[0].geometry.location.lat(),
lng=results[0].geometry.location.lng(),
placeName=results[0].address_components[0].short_name,
latlng=new google.maps.LatLng(lat, lng);
jQuery(".pac-container .pac-item:first").addClass("pac-selected");
jQuery(".pac-container").css("display","none");
jQuery("#locator_address").val(firstResult);
jQuery(".pac-container").css("visibility","hidden");
jQuery('input[name="lat"]').val(lat);
jQuery('input[name="lng"]').val(lng);
jQuery('#doGeolocation').addClass('selected');
jQuery('[data-toggle="datepicker"]').datepicker('show');
}});
}else{
jQuery(".pac-container").css("visibility","visible");
}});
});
if(jQuery('.locationContainer').length > 0){
map=new google.maps.Map(document.getElementById('mapContainer'), {
center: {lat: 40.436775, lng: -3.69379},
zoom: 7,
disableDefaultUI: true,
});
var restaurantPosition={lat: jQuery('.locationContainer').data('lat'), lng: jQuery('.locationContainer').data('lng')};
map.setCenter(restaurantPosition);
map.setZoom(15);
marker=new google.maps.Marker({
map: map,
position: restaurantPosition,
icon:  new google.maps.MarkerImage('/wp-content/themes/goikogrill17/library/images/map-marker.png',
null, null, null, new google.maps.Size(45,50))
});
marker.setOpacity(1);
var panAmount=jQuery('#container').width() * 0.33;
map.panBy(-panAmount, -30);
}}
jQuery(document).ready(function($){
$.fn.datepicker.setDefaults({ autoHide: true });
var today=new Date();
var dd=String(today.getDate()).padStart(2, '0');
var mm=String(today.getMonth() + 1).padStart(2, '0');
var yyyy=today.getFullYear();
var currentTime=String(today.getHours()) + String(today.getMinutes());
today=dd + '/' + mm + '/' + yyyy;
if($('.home-main-carousel').length > 0){
var mainHomeCarousel=new Swiper ('.home-main-carousel', {
loop: true,
preloadImages: false,
pagination: {
el: '.home-main-carousel-nav',
type: 'bullets',
clickable: true,
},
speed: 400,
autoplay: {
delay: 3000,
},
})
}
if($('.home-daily-carousel').length > 0){
var dailyMenuCarousel=new Swiper ('.home-daily-carousel .swiper-container', {
loop: false,
slidesPerView: 1,
centeredSlides: true,
navigation: {
nextEl: '.swiper-daily-next',
prevEl: '.swiper-daily-prev',
},
})
}
if($('.fastbooking-form').length > 0||$('.availability-form').length > 0){
$parent=($('.availability-form').length > 0) ? $('.availability-form'):$('.fastbooking-form');
var initBookingAuto=(window.location.pathname=='/'&&!navigator.geolocation) ? true:false;
$(document).on('show.datepicker', function(e){
setTimeout(positionDatepicker, 100);
});
$(window).on('scroll', positionDatepicker);
$(document).on('pick.datepicker', function(e){
$('[data-toggle="datepicker"]').datepicker('hide');
if($('#locator_date').datepicker('getDate', true)==today){
$('#locator_time').val($('#locator_time option:first').val());
}
$('#locator_time option').each(function(){
if($('#locator_date').datepicker('getDate', true)==today&&parseInt($(this).val().replace(':', '')) < parseInt(currentTime)){
$(this).prop('disabled', true);
}else{
$(this).prop('disabled', false);
}});
$('#locator_time').select2({
minimumResultsForSearch: -1
});
$('#locator_time').select2('open');
});
$('#locator_time').on('select2:select', function(e){
if(!$('#locator_date').val()){
if(parseInt($('#locator_time').val().replace(':','')) < parseInt(currentTime)){
var tomorrow=new Date();
tomorrow.setDate(tomorrow.getDate()+1);
$('#locator_date').datepicker('setDate', tomorrow);
}else{
$('#locator_date').datepicker('setDate', 'today');
}}
$('#locator_time').select2('close');
$('#locator_customers').select2('open');
})
$('#locator_customers').on('select2:select', function(e){
$('#locator_submit').css({transform: 'scale(1.2)'});
})
$('#doGeolocation').on('click', function(e){
e.preventDefault();
doGeolocation(true);
});
$('.fastbooking-toggle').on('click', function(e){
e.preventDefault();
$('.fastbooking-wrap').toggleClass('expanded');
$(this).toggleClass('open');
});
function positionDatepicker(){
var calendarHeight=250;
var viewportBottom=$(window).scrollTop() + $(window).height();
var locatorBottom=$parent.offset().top + 55 + calendarHeight;
if(locatorBottom >=viewportBottom){
var currentPos=$('.datepicker-container.datepicker-dropdown').position();
var newPos=currentPos.top - 290;
$('.datepicker-container.datepicker-dropdown').addClass('datepicker-upbound').css({top: newPos.toString() + 'px'});
}else{
$('.datepicker-container.datepicker-dropdown').removeClass('datepicker-upbound');
}}
function doGeolocation(openDates){
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position){
$('input[name="direc"]').attr('placeholder', goiko20.tu_ubicacion_actual);
if($('input[name="direc"]').val()!=''){
$('input[name="direc"]').val(goiko20.tu_ubicacion_actual);
}
$('.address_wrap').addClass('geolocated');
$('input[name="lat"]').val(position.coords.latitude);
$('input[name="lng"]').val(position.coords.longitude);
$('#doGeolocation').addClass('selected');
if(openDates){
$('[data-toggle="datepicker"]').datepicker('show');
}}, function(){
});
}else{
}}
}
if(window.location.pathname=='/'&&$(window).height() < 768){
$('.fastbooking-wrap').addClass('expanded');
$('.fastbooking-toggle').addClass('open');
var collapsed=false;
}
$.fn.datepicker.languages['es-ES']={
format: 'dd/mm/yyyy',
days: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
daysShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
daysMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
weekStart: 1,
months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
monthsShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
today: "Hoy",
monthsTitle: "Meses",
clear: "Borrar"
};
$.fn.datepicker.languages['ca']={
format: 'dd/mm/yyyy',
days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
daysShort: ["Diu",  "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis"],
daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
weekStart: 1,
months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
today: "Avui",
monthsTitle: "Mesos",
clear: "Esborrar"
};
$.fn.datepicker.languages['fr-FR']={
format: 'dd/mm/yyyy',
days: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
daysShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
daysMin: ['d','l','ma','me','j','v','s'],
weekStart: 1,
months: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
monthsShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
today: "Aujourd'hui",
monthsTitle: "Mois",
clear: "Effacer"
};
$language_datepicker=$('html').attr('lang');
var start=new Date();
var end=new Date();
end.setMonth(end.getMonth() + 4);
$('[data-toggle="datepicker"]').datepicker({
autoHide: true,
startDate: start,
endDate: end,
language: $language_datepicker
});
$('.select-dropdown').select2({
minimumResultsForSearch: -1
});
if($('#carrera').length > 0){
var maxWidth=$('#carrera').outerWidth();
var maxHeight=$('#carrera').outerHeight();
resizeBurger();
$(window).resize(function(evt){
resizeBurger();
});
function resizeBurger(){
var $window=$(window);
var width=$window.width() * 0.9;
var height=$window.height();
var scale;
if(width >=maxWidth){
$('#carrera').css({'-webkit-transform': ''});
$('.carrera-wrap').css({ width: '', height: '' });
return;
}
scale=Math.min(width/maxWidth, height/maxHeight);
$('#carrera').css({'-webkit-transform': 'scale(' + scale + ')'});
$('.carrera-wrap').css({ width: maxWidth * scale, height: maxHeight * scale });
}}
$('.showMobileMenu').click(function(e){
e.preventDefault();
$('html').toggleClass('open-modal');
$(this).toggleClass('open');
$('#mobileMenu').toggleClass('open');
});
$(document).on('click', '.deliveryBtn', function(){
ga('send', 'event', 'Delivery', $(this).parents('.deliveryContainer').children('h2').text(), $(this).children('strong').text());
});
$('.allergenFilter').click(function(){
$(this).toggleClass('active');
$('table.dishesList tbody tr').removeClass('withAllergen');
$('.allergenFilter.active').each(function(){
$('table.dishesList tbody tr[data-allergens*="'+ $(this).data('name') +'"]').each(function(){
$(this).addClass('withAllergen').appendTo($(this).parent());
});
});
$('.newAllergens .dishCategory').each(function(){
let $table=$(this).find('.dishesList');
if($table.find('tbody tr').length==$table.find('tbody tr.withAllergen').length){
$(this).fadeOut();
}else{
$(this).fadeIn();
}}).promise().done(function(){
if($('.newAllergens .dishCategory:not(.extrasCategory):visible').length==0){
$('.noItemsWithoutAllergen').fadeIn();
$('.extrasCategory, .allergensLegend').fadeOut();
}else{
$('.noItemsWithoutAllergen').fadeOut();
$('.allergensLegend').fadeIn();
}});
});
iFrameResize();
if('undefined'!==typeof WonderPush){
geoip2.city(function(location){
var city=location.city.names.es;
console.log(city);
WonderPush.push(function(){
WonderPush.putProperties({
string_city: city
});
});
});
}
var submenu=$('.secondary-menu, .children-menu');
if(submenu.length > 0){
submenu.on('select2:select', function(){
window.location.href=$(this).val();
});
}
var header=false;
if($('.header-booking')[0]){
header=$('.header-booking');
placeholder=$('.header_placeholder_booking');
}else if($('.header-nobooking')[0]){
header=$('.header-nobooking');
placeholder=$('.header_placeholder_nobooking');
}
if(header!==false){
var initialHeaderPos=header.offset();
var scrollHeight=165;
if($(window).width() <=767){
scrollHeight=99;
}
$(window).on('scroll load', function(){
if(window.pageYOffset > scrollHeight){
header.addClass('sticky');
if($(window).width() <=767){
if(jQuery('h2.fastbooking-toggle').hasClass('open')){
placeholder.css({height: '217.19px'});
}else{
placeholder.css({height: '41px'});
}}
placeholder.css({display: 'block'});
}else{
header.removeClass('sticky');
if($(window).width() <=767){
if(jQuery('h2.fastbooking-toggle').hasClass('open')){
placeholder.css({height: '217.19px'});
}else{
placeholder.css({height: '41px'});
}}
placeholder.css({display: 'none'});
}});
}
if(document.cookie.indexOf('close_emergency_modal')==-1){
$('.modal_emergencia').fadeIn();
}
$('.modal_emergencia .cerrar').on('click', function(){
$('.modal_emergencia').css('display','none');
var d=new Date();
d.setTime(d.getTime()+(24*60*60*1000));
var expires="; expires="+d.toGMTString();
document.cookie="close_emergency_modal=1; " + expires + "; path=/";
});
});
if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){
doLazyLoad();
}else{
document.addEventListener('DOMContentLoaded', doLazyLoad);
}
function doLazyLoad(){
var isIE11 = !!window.MSInputMethodContext&&!!document.documentMode;
if(!isIE11){
var images=_toConsumableArray(document.querySelectorAll('.lazy-image'));
var interactSettings={
root: document.querySelector('.center'),
rootMargin: '0px 0px 200px 0px'
};
function onIntersection(imageEntites){
imageEntites.forEach(function (image){
if(image.isIntersecting){
observer.unobserve(image.target);
image.target.src=image.target.dataset.src;
if(image.target.dataset.srcset){
image.target.srcset=image.target.dataset.srcset;
}
if(image.target.dataset.sizes){
image.target.sizes=image.target.dataset.sizes;
}
image.target.onload=function (){
return image.target.classList.add('loaded');
};}});
}
var observer=new IntersectionObserver(onIntersection, interactSettings);
images.forEach(function (image){
return observer.observe(image);
});
}else{
var images=document.querySelectorAll('.lazy-image');
for (var i=0; i < images.length; i++){
images[i].setAttribute("src", images[i].getAttribute('data-src'));
if(images[i].getAttribute('data-srcset')){
images[i].setAttribute("srcset", images[i].getAttribute('data-srcset'));
}
if(images[i].getAttribute('data-sizes')){
images[i].setAttribute("sizes", images[i].getAttribute('data-sizes'));
}
images[i].onload=function (){
return images[i].classList.add('loaded');
};}}
}
function _toConsumableArray(arr){ return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread(); }
function _nonIterableSpread(){ throw new TypeError("Invalid attempt to spread non-iterable instance"); }
function _iterableToArray(iter){ if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]") return Array.from(iter); }
function _arrayWithoutHoles(arr){ if(Array.isArray(arr)){ for (var i=0, arr2=new Array(arr.length); i < arr.length; i++){ arr2[i]=arr[i]; } return arr2; }}
var closeModal=document.querySelector('.show__close')!==null;
var modal=document.querySelector('.promo_modal_bg');
if(closeModal){
closeModal.addEventListener("click", function(e){
e.preventDefault();
modal.style.display='none';
});
}
window.onclick=function(event){
if(event.target==modal){
modal.style.display="none";
}}
function setCookie(cname, cvalue, exdays){
const d=new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
let expires="expires="+d.toUTCString();
document.cookie=cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname){
let name=cname + "=";
let ca=document.cookie.split(';');
for(let i=0; i < ca.length; i++){
let c=ca[i];
while (c.charAt(0)==' '){
c=c.substring(1);
}
if(c.indexOf(name)==0){
return c.substring(name.length, c.length);
}}
return "";
};
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);