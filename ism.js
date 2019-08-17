tano=false;
function pano(){
if (!tano){
document.getElementById('fork').style.display='block';
} else {
document.getElementById('fork').style.display='none';
}
tano=!tano;
}

//куки:
function set_cookie(name, value, expires)
{
if (!expires)
{
expires = new Date();
}
document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() +  "; path=/";
}
function get_cookie(name)
{
cookie_name = name + "=";
cookie_length = document.cookie.length;
cookie_begin = 0;
while (cookie_begin < cookie_length)
{
value_begin = cookie_begin + cookie_name.length;
if (document.cookie.substring(cookie_begin, value_begin) == cookie_name)
{
var value_end = document.cookie.indexOf (";", value_begin);
if (value_end == -1)
{
value_end = cookie_length;
}
return unescape(document.cookie.substring(value_begin, value_end));
}
cookie_begin = document.cookie.indexOf(" ", cookie_begin) + 1;
if (cookie_begin == 0)
{
break;
}
}
return null;
}

//куки/


var il;

function delet(){
(il==1 ? il=0 : il=1);
setTimeout(scenz);
}


function scenz() {
 var name = "ili";
 var tmp = il; 
 expires = new Date(); 
 expires.setTime(expires.getTime() + (1000 * 86400 * 365));
 set_cookie(name, tmp, expires);
}


function wcenz() {

if (get_cookie('ili')!=null){
il=get_cookie('ili');
} else {il=1}
if (il==1){
cenz.setAttribute("checked",true);
setTimeout(udalit,0);
}
}





setTimeout(tegss);
function tegss(){
for(z=0;z<document.getElementsByClassName('msg').length;z++){
if ((document.getElementsByClassName('msg')[z].innerHTML.search(/\<\/b\>$/gi)>-1 || document.getElementsByClassName('msg')[z].innerHTML.search(/<\/b\"/gi)>-1|| document.getElementsByClassName('msg')[z].innerHTML.search(/\<>/gi)>-1 || document.getElementsByClassName('msg')[z].innerHTML.search(/\<\/td\"/gi)>-1)&&document.getElementsByClassName('msg')[z].innerHTML.search(/\<span>Ошибка тега<\/span>/gi)==-1){
document.getElementsByClassName('msg')[z].innerHTML+="<span>Ошибка тега</span>";
}


}
}


setTimeout(zapis);//анти
//setTimeout(tegas);
function tegas(){
for(z=0;z<document.getElementsByClassName('msg').length;z++){
if (document.getElementsByClassName('msg')[z].clientHeight>document.getElementById("fon").value*8+12 && document.getElementById("fon").value!="" && document.getElementById("fon").value<=30){
document.getElementsByClassName('msg')[z].style.display="block";
document.getElementsByClassName('msg')[z].style.overflow="auto";
document.getElementsByClassName('msg')[z].style.height=document.getElementById("fon").value*4+"px";
document.getElementsByClassName('msg')[z].style.minHeight=document.getElementsByClassName('msg')[z].clientHeight>document.getElementById("fon").value*7+"px";
document.getElementsByClassName('msg')[z].style.boxShadow="inset 0 0 2px 0 black";
document.getElementsByClassName('msg')[z].style.lineHeight="0.8";
document.getElementsByClassName('msg')[z].style.fontSize=document.getElementById("fon").value-1+"pt";
}
}
}



//антифлуд 
ZAP=new Array;
KER=new Array;
LER=new Array;
var UO=0;
var UI=0;
//setTimeout(flud0);
//setTimeout(flud);

kor=new Array();



function flud0(){
for (y=0;y<document.getElementsByClassName('msg').length-1;y++){


for (qa=y+1;qa<=document.getElementsByClassName('msg').length;qa++){
if (document.getElementsByClassName('nme')[y]!=null && document.getElementsByClassName('nme')[qa]!=null && document.getElementsByClassName('msg')[y]!=null && document.getElementsByClassName('msg')[qa]!=null){

if (document.getElementsByClassName('msg')[y].textContent.slice(document.getElementsByClassName('nme')[y].textContent.length+18,-1).length>80 && document.getElementsByClassName('msg')[qa].textContent.slice(document.getElementsByClassName('nme')[qa].textContent.length+18,-1).length>80 && qa-y>=1){


if (document.getElementsByClassName('msg')[qa].textContent.search(document.getElementsByClassName('msg')[y].textContent.slice(Math.round(document.getElementsByClassName('msg')[y].textContent.length/2),Math.round(document.getElementsByClassName('msg')[y].textContent.length/2)+30))>-1){
ZAP[UI]=document.getElementsByClassName('nme')[qa].innerHTML;

KER[UI]=document.getElementsByClassName('msg')[qa].innerHTML;
UI=UI+1;
document.getElementsByClassName('msg')[qa].remove();

}
} 
}
}
}
setTimeout(vign);
}
function flud(){
for (y=0;y<document.getElementsByClassName('msg').length-1;y++){
for (qa=y+1;qa<=document.getElementsByClassName('msg').length;qa++){
if (document.getElementsByClassName('nme')[y]!=null && document.getElementsByClassName('nme')[qa]!=null && document.getElementsByClassName('msg')[y]!=null && document.getElementsByClassName('msg')[qa]!=null){
if (document.getElementsByClassName('msg')[y].textContent.slice(document.getElementsByClassName('nme')[y].textContent.length+18,-1).length<=80 && qa-y<=4 && document.getElementsByClassName('msg')[y].textContent.slice(document.getElementsByClassName('nme')[y].textContent.length+18,-1)==document.getElementsByClassName('msg')[qa].textContent.slice(document.getElementsByClassName('nme')[qa].textContent.length+18,-1) && document.getElementsByClassName('nme')[qa].innerHTML==document.getElementsByClassName('nme')[y].innerHTML){

KER[UI]=document.getElementsByClassName('msg')[qa].innerHTML;
UI=UI+1;
document.getElementsByClassName('msg')[qa].remove();



}
}
}
}


}

function vign(){

for(z=0;z<document.getElementsByClassName('msg').length;z++){
for (B=0;B<=ZAP.length;B++){
if (document.getElementsByClassName('nme')[z]!=null && document.getElementsByClassName('nme')[z].innerHTML==ZAP[B]){
LER[UO]=document.getElementsByClassName('msg')[z].innerHTML;
document.getElementsByClassName('msg')[z].remove();
UO=UO+1;
}
}
}
}

//антимат

MAT=new Array;
L=1;
var nu=document.getElementsByClassName('msg');
var ku=new Array;
function udalit(){
for (TT=0;TT<document.getElementsByClassName('msg').length;TT++) {
if (nu[TT]!=null){
ku[TT]=nu[TT].textContent.split("").reverse().join("");
if (nu[TT].textContent.search(/[ёеe]+[^а-яa-z]*[6бb]+[^а-яa-z]*[лl]+[оаoa]/gi)>-1 || nu[TT].innerHTML.search(/(.{3,})\1{7,}/gi)>-1 ||  nu[TT].textContent.search(/c+[^а-я]b+[^а-я]o+[^а-я]x+/ig)>-1 || nu[TT].textContent.search(/t+[a-z ]*a+[a-z ]*l+[a-z ]*k+[a-z ]*r+[a-z ]*o/ig)>-1 || nu[TT].textContent.search(/v+[a-z ]*k+[a-z ]*\.+[a-z ]*c+[a-z ]*c/ig)>-1 || ku[TT].search(/([я9]|ay|[аa][еe])+[^а-яa-z]*([лl|]|\\\/)+[^а-я]*[bб6]+(?!ур|ас|ар|ер|уд|юл|ул|уг|ал|р|о|м)/ig)>-1 || ku[TT].search(/([ё*йияеюeiujy]+[^а-яa-z]*[уyuⓨ*%#0-9]+[^а-яa-z]*[×✖хⓧxh]+|\(\))+(?!ис|ар|ре)/gi)>-1 ||  nu[TT].textContent.search(/(3,14|[pп*]+)[^а-яa-z]*[*еeиui]+[^а-яa-z]*[*3зсzs]+[^а-яa-z]*([*dд]+|ж+)/gi)>-1 || nu[TT].textContent.search(/[pп*]+[^а-яa-z]*[*iиu]+[^а-яa-z]*[*дgd]+[^а-яa-z]*[aoао*]*[^а-яa-z]*[prр]+/gi)>-1 || nu[TT].textContent.search(/[^рлшчнтжсб][ёеe]+[^а-яa-z]*[6бb]+[^а-яa-z]*[yу]+[^дк]/gi)>-1 || nu[TT].textContent.search(/хй/gi)>-1 || ku[TT].search(/[нтцл ][eеёаaа@]+[^а-яa-z]*[bб6]+[^а-яa-z ]*[ееeё]+[^мдкрчвлнтжщсб]/gi)>-1 /*||ku[TT].search(/[нтлрц ][иieеё@оoыя9]+[^а-яa-z]*[bб6]+[^а-яa-z]*[ееeё][^р]/gi)>-1*/ || nu[TT].innerHTML.search(/(img.*){5,}/gi)>-1 ){
MAT[L]=nu[TT].innerHTML;
nu[TT].innerHTML='<center><i><span class="Deleted"><span class="nme">Вырезано</span> цензурой '+L+' .<div style="display:none"></div></span></i></center>';
L=L+1;
}

if (nu[TT].textContent.search(/c+[^а-я]*h+[^а-я]*a+[^а-я]t/ig)>-1){
nu[TT].innerHTML=nu[TT].innerHTML.replace(/c+[^а-я]*h+[^а-я]*a+[^а-я]t/ig, "multik2");
}

}
} //особая цензура
}

//setTimeout(ax,5);
function ax(){
LA=document.getElementsByTagName('html')[0].innerHTML;
document.write('<xmp>'+LA+'</xmp>');
}

//setInterval(ex,500);
LA=new Array();
function ex(){
ir=document.getElementsByClassName("btnDel").length;
if (ir>0){
var clon=document.createElement('a');
clon.href="#";
clon.className='btnBan';
clon.innerHTML='[o]';
for(cx=0;cx<ir;cx++){
LA[cx]=document.getElementsByClassName("btnDel")[cx];
/*if (document.getElementsByClassName("btnDel")[cx].parentNode.innerHTML.search('btnBan')==-1){
document.getElementsByClassName("btnDel")[cx].parentNode.appendChild(clon.cloneNode(true));
}*/
if (document.getElementsByClassName("btnDel")[cx].parentNode.innerHTML.search('btnBan')>-1){

document.getElementsByClassName("btnBan")[cx].style.display="none";
}
}

/*for(cx=0;cx<ir-1;cx++){
document.getElementsByClassName("btnBan")[cx].parentNode.insertBefore(LA[cx+1],document.getElementsByClassName("btnBan")[cx]);
}
document.getElementsByClassName("btnBan")[document.getElementsByClassName("btnBan").length-1].parentNode.insertBefore(LA[0],document.getElementsByClassName("btnBan")[document.getElementsByClassName("btnBan").length-1]);*/


}
}


function vernut(){
newWin=window.open("about:blank", "Сообщения");
for (u=0;u<=L;u++){
if (MAT[u]!=undefined){
newWin.document.write('<div style="background-color:yellow">'+MAT[u]+'</div><br>');
}
}
for (u=0;u<=UI;u++){
if (KER[u]!=undefined){
newWin.document.write(KER[u]+'<br>');
}
}
for (u=0;u<=UO;u++){
if (LER[u]!=undefined){
newWin.document.write(LER[u]+'<br>');
}
}
}


window.onload=rrrr;
function rrrr(){

setTimeout(write1);
setTimeout(FFF);

//цвета:
setTimeout(write3);
setTimeout(write4);

//цензура (вверху)
setTimeout(wcenz);

//миг текста 
txtz=new Array();
setTimeout(pereop);
setInterval(pereop1,500);

}
function FFF(){

document.getElementById("raz").innerHTML="<style>.mnbdy{font-size:"+document.getElementById("fon").value+"pt} img{height:"+document.getElementById("fon").value*6+"px} .msg{display:block;max-height:"+(document.getElementById("fon").value*9+6)+"px;overflow-y:auto;overflow-x:hidden;} </style>";
setTimeout(save1);
setTimeout(save2);
} //шрифт

function save1() {
 var name = "razmer1";
 var tmp = document.getElementById("raz").innerHTML; 
 expires = new Date(); 
 expires.setTime(expires.getTime() + (1000 * 86400 * 365));
 set_cookie(name, tmp, expires);
}
function save2() {
 var name = "razmer2";
 var tmp = document.getElementById("fon").value; 
 expires = new Date(); 
 expires.setTime(expires.getTime() + (1000 * 86400 * 365));
 set_cookie(name, tmp, expires);
}

function write1() {
if (get_cookie('razmer2')!=null){
document.getElementById('fon').value = get_cookie('razmer2')*1;
document.getElementById('raz').innerHTML = get_cookie('razmer1')*1;
}
if (fon.value=="0"){
fon.value="10";
}
}


//ВСЯ ФУНКЦИЯ ЦВЕТА


//непр
setTimeout(iss);
function iss(){

for (y=0;y<document.getElementsByClassName('msg').length;y++){
if (document.getElementsByClassName('msg')[y].innerHTML.search(/isch/)>-1){
document.getElementsByClassName('msg')[y].innerHTML=document.getElementsByClassName('msg')[y].innerHTML;
}
}
}

//скрипт переключалки

coloz=new Array("Стандарт","Фиолетовый","Белый", "Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Циановый", "Чёрный", "Коричневый", "Розовый","Кастом");
backc1=new Array("#DCBAFF","#FFFFFF", "#FFB8B8", "#FFD483", "#FFFFA9", "#A1FF2A", "#7DF9FF", "#4766FF", "#99FFEF", "#2A2A2A", "#FFDEAD", "#FFA5E7");
backc2=new Array("#C5A2FF","#E4E4E4",  "#EE9999", "#EEB868", "#EEEE76", "#90E019", "#6CD8EE", "#3645EE", "#55EECE", "#000000", "#DEBD8C", "#EE84C6");
fontc=new Array("#000758","#666666",  "#FF3333", "#C26200", "#B68E00", "#2A5C03", "#00809C",  "#000884", "#0A6D7C", "#DDDDDD", "#8B4513", "#CF16AA");
var cvet=document.getElementById("FON");
if (get_cookie('colors')!=null){
var n=get_cookie('colors')*1;
} else {n=0;}
var zap;
function rct(){
if (n>13){
n=0;
}
cvet.innerHTML=coloz[n];
zap=n;
n=n+1;


setTimeout(rct2);
setTimeout(save3);
setTimeout(kont);
}

function save3() {
 var name = "colors";
 var tmp = zap; 
 expires = new Date(); 
 expires.setTime(expires.getTime() + (1000 * 86400 * 365));
 set_cookie(name, tmp, expires);
}
function write3() {
if (get_cookie('colors')!=null){
n=get_cookie('colors')*1;
} else {n=0}
setTimeout(rct);
}

function save4() {
 var name = "bc";
 var tmp = BACK.value; 
 expires = new Date(); 
 expires.setTime(expires.getTime() + (1000 * 86400 * 365));
 set_cookie(name, tmp, expires);
}

function save5() {
 var name = "fc";
 var tmp = COL.value; 
 expires = new Date(); 
 expires.setTime(expires.getTime() + (1000 * 86400 * 365));
 set_cookie(name, tmp, expires);
}

function save6() {
 var name = "fcs";
 var tmp = COLS.value; 
 expires = new Date(); 
 expires.setTime(expires.getTime() + (1000 * 86400 * 365));
 set_cookie(name, tmp, expires);
}

function write4() {
if (get_cookie('bc')!=null){
BACK.value=get_cookie('bc');
}
if (get_cookie('fc')!=null){
COL.value=get_cookie('fc');
}
if (get_cookie('fcs')!=null){
COLS.value=get_cookie('fcs');
}
setTimeout(rct2);
}

function rct2(){

if (zap>0 && zap<13){

col.innerHTML="<style> .smoke{text-shadow: 0 0 0 "+fontc[zap-1]+";}.stxt{margin:3px;color:"+fontc[zap-1]+";background-color:"+backc1[zap-1]+";border:solid 1px "+backc2[zap-1]+"} .stxt2{margin:2px;color:"+fontc[zap-1]+";background-color:"+backc1[zap-1]+";border:solid 1px "+backc2[zap-1]+"} .dtxt,.dtxt2{color:"+fontc[zap-1]+"}.pn_std,.pn_reg{color:"+fontc[zap-1]+"} .pn_reg{text-shadow: 0 0 1px "+fontc[zap-1]+"}.pn_adm1{box-shadow: 0 0 5px 5px "+fontc[zap-1]+";}.mnbdy{background:"+backc2[zap-1]+";border-color:"+backc1[zap-1]+"} A:link{color:"+backc1[zap-1]+";background-color:"+fontc[zap-1]+"}.stxt:hover,.stxt2:hover,.dtxt:hover,.dtxt2:hover{text-shadow:0 0 1px "+fontc[zap-1]+"}.cc_d{text-shadow:"+fontc[zap-1]+" 0 0 1px;}.cc_a{text-shadow: 0 4px 0 "+fontc[zap-1]+",0 -4px 0 "+fontc[zap-1]+";}::selection {background-color:"+fontc[zap-1]+";color:"+backc1[zap-1]+";}::-moz-selection {background-color:"+fontc[zap-1]+";color:"+backc1[zap-1]+";}</style>";

}
if (zap==13){
BACK.style.display="Inline";
COL.style.display="Inline";
COLS.style.display="Inline";
col.innerHTML="<style> .smoke{text-shadow: 0 0 0 "+fontc[zap-1]+";} .stxt{margin:3px;color:"+COLS.value+";background-color:"+BACK.value+";} .stxt2{margin:2px;color:"+COLS.value+";background-color:"+BACK.value+";}.dtxt,.dtxt2{color:"+COLS.value+"}.pn_std,.pn_reg{color:"+COLS.value+"} .pn_reg{text-shadow: 0 0 1px "+COLS.value+"}.pn_adm1{box-shadow: 0 0 5px 5px "+COLS.value+";}.mnbdy{background:"+COL.value+";border-color:"+BACK.value+"} A:link{color:"+COLS.value+";background-color:"+COL.value+"}.stxt:hover,.stxt2:hover,.dtxt:hover,.dtxt2:hover{text-shadow:0 0 1px "+COLS.value+"}.cc_d{text-shadow:"+COLS.value+" 0 0 1px;}.cc_a{text-shadow: 0 4px 0 "+COLS.value+",0 -4px 0 "+COLS.value+";}.cc_g{background: repeating-linear-gradient(to left, "+COLS.value+" 10%, transparent 20%, "+COLS.value+" 30%);}::selection {background-color:"+COLS.value+";color:"+BACK.value+";}::-moz-selection {backgroun-dcolor:"+COLS.value+";color:"+BACK.value+";}</style>";
setTimeout(save4);
setTimeout(save5);
setTimeout(save6);
}
if (zap==0){
BACK.style.display="none";
COL.style.display="none";
COLS.style.display="none";
col.innerHTML="";
}
}
//игнор:
function tegs(){
if (document.getElementById('TEG').getAttribute("s")==0){
document.getElementById('TEG').setAttribute("s",1);
document.getElementById('TEG').value="t+";
} else {
document.getElementById('TEG').setAttribute("s",0);
document.getElementById('TEG').value="t-";
}
}

function reveros(){
if (document.getElementById('REV').getAttribute("k")==0){
document.getElementById('REV').setAttribute("k",1);
document.getElementById('REV').value="↶";
} else {
document.getElementById('REV').setAttribute("k",0);
document.getElementById('REV').value="↷";
}
}

function ignor(){
if (document.getElementById('BIGN').getAttribute("l")==0){
document.getElementById('BIGN').setAttribute("l",1);
document.getElementById('BIGN').value="Отмена";
setTimeout(ignore);
} else {
document.getElementById('BIGN').setAttribute("l",0);
document.getElementById('BIGN').value="Игнор";
for (K=0;K<document.getElementsByClassName('msg').length;K++){
document.getElementsByClassName('msg')[K].style.display="block";
}
}
}

function ignore(){
setTimeout(savei);
if (document.getElementById('BIGN').getAttribute("l")==1){
if (document.getElementById('TEG').getAttribute("s")==0){

if (document.getElementById('REV').getAttribute("k")==0){
for(Q=0;Q<document.getElementsByClassName('nme').length;Q++){
if (document.getElementsByClassName('nme')[Q].textContent.search(document.getElementById('IGN').value)>-1 && document.getElementsByClassName('nme')[Q].textContent!="admin"){
document.getElementsByClassName('nme')[Q].parentElement.style.display="none";
}
}
} else {
for(Q=0;Q<document.getElementsByClassName('nme').length;Q++){
if (document.getElementsByClassName('nme')[Q].textContent.search(document.getElementById('IGN').value)==-1 && document.getElementsByClassName('nme')[Q].textContent!="Admin"){
document.getElementsByClassName('nme')[Q].parentElement.style.display="none";
}
} 
} 
}else{

if (document.getElementById('REV').getAttribute("k")==0){
for(Q=0;Q<document.getElementsByClassName('nme').length;Q++){
if (document.getElementsByClassName('nme')[Q].innerHTML.search(document.getElementById('IGN').value)>-1 && document.getElementsByClassName('nme')[Q].textContent!="Admin"){
document.getElementsByClassName('nme')[Q].parentElement.style.display="none";
}
}
} else {
for(Q=0;Q<document.getElementsByClassName('nme').length;Q++){
if (document.getElementsByClassName('nme')[Q].innerHTML.search(document.getElementById('IGN').value)==-1 && document.getElementsByClassName('nme')[Q].textContent!="Admin"){
document.getElementsByClassName('nme')[Q].parentElement.style.display="none";
}
} 
}
}
}
}

function savei() {
 var name = "ignor1";
 var tmp = document.getElementById("IGN").value; 
 expires = new Date(); 
 expires.setTime(expires.getTime() + (1000 * 86400 * 365));
 set_cookie(name, tmp, expires);
}
setTimeout(writei);
function writei() {
if (get_cookie('ignor1')!=null){
document.getElementById('IGN').value = get_cookie('ignor1');
}
}


//ДАЛЕЕ МИГАНИЕ:

DD=new Array(); //массив цветов
ka=new Array(); //массив 
spans=new Array(); //счетчик тегов
var j=0;
var N=0;
cv=new Array(); //массив дв
var sob=new Event("click");
setTimeout(sozd);
function sozd(){

for (cl=0;cl<document.getElementsByClassName("sss").length;cl++){
document.getElementsByClassName("sss")[cl].id="ss"+N;
N=N+1;
cv[cl]=0;
  DD[cl]=new Array();
  if (document.getElementsByClassName("sss")[cl].getAttribute("a")!=null){
ka[cl]=document.getElementsByClassName("sss")[cl].getAttribute("a").split(",");

for (n=0;n<ka[cl].length;n++){
DD[cl][n]=document.getElementsByClassName("sss")[cl].getAttribute("a").split(",")[n];
}
  }


document.getElementsByClassName("sss")[cl].removeAttribute("a");



 


}

} //создание массива


  function sozd2(){
   
    for (sj=0;sj<document.getElementsByClassName("sss").length;sj++){
    if (document.getElementsByClassName("sss")[sj].id==""){
      document.getElementsByClassName("sss")[sj].id="ss"+N;
     
      
      cv[N]=0;
  DD[N]=new Array();
  if (document.getElementsByClassName("sss")[sj].getAttribute("a")!=null){
ka[N]=document.getElementsByClassName("sss")[sj].getAttribute("a").split(",");

for (n=0;n<ka[N].length;n++){
DD[N][n]=document.getElementsByClassName("sss")[sj].getAttribute("a").split(",")[n];
}
  }

N=N+1;
document.getElementsByClassName("sss")[sj].removeAttribute("a");
      
    }
    }
    
  }
  
  
setTimeout(mig);
migg=setInterval(mig,1000);

function mig(){

for (jj=0;jj<=N;jj++){

 if (document.getElementById("ss"+jj)!=null){


if (document.getElementById("ss"+jj).getAttribute("b")==undefined){
document.getElementById("ss"+jj).style.color=DD[jj][cv[jj]];
} else {

document.getElementById("ss"+jj).style.backgroundColor=DD[jj][cv[jj]];
}
cv[jj]=cv[jj]+1;
if (cv[jj]>DD[jj].length-1){
cv[jj]=0;
}
}
}
}


//сложный контур

Dt=new Array(); //массив цветов
kb=new Array(); //массив 
var Nt=0;
cr=new Array(); //массив дв
setTimeout(szd);
function szd(){

for (cw=0;cw<document.getElementsByClassName("sgs").length;cw++){
document.getElementsByClassName("sgs")[cw].id="sg"+Nt;
Nt=Nt+1;
cr[cw]=0;
Dt[cw]=new Array();
if (document.getElementsByClassName("sgs")[cw].getAttribute("a")!=null){
kb[cw]=document.getElementsByClassName("sgs")[cw].getAttribute("a").split(",");

for (n=0;n<8;n++){
if (document.getElementsByClassName("sgs")[cw].getAttribute("a").split(",")[n]!=undefined){
Dt[cw][n]=document.getElementsByClassName("sgs")[cw].getAttribute("a").split(",")[n];
vark=n;
} else {

Dt[cw][n]=Dt[cw][n-vark-1];

}
}
}





document.getElementsByClassName("sgs")[cw].removeAttribute("a");

 

 


}
setTimeout(kont);
} //создание массива


function szd2(){

for (si=0;si<document.getElementsByClassName("sgs").length;si++){
if (document.getElementsByClassName("sgs")[si].id==""){
document.getElementsByClassName("sgs")[si].id="sg"+Nt;


cr[Nt]=0;
Dt[Nt]=new Array();
if (document.getElementsByClassName("sgs")[si].getAttribute("a")!=null){
kb[Nt]=document.getElementsByClassName("sgs")[si].getAttribute("a").split(",");

for (n=0;n<8;n++){
if (document.getElementsByClassName("sgs")[si].getAttribute("a").split(",")[n]!=undefined){
Dt[Nt][n]=document.getElementsByClassName("sgs")[si].getAttribute("a").split(",")[n];
vark=n;
} else {

Dt[Nt][n]=Dt[Nt][n-vark-1];

}
}


}

Nt=Nt+1;
document.getElementsByClassName("sgs")[si].removeAttribute("a");

}
}
setTimeout(kont);
}


function kont(){

for (jj=0;jj<=Nt;jj++){

if (document.getElementById("sg"+jj)!=null){

if (document.getElementById("sg"+jj).getAttribute("b")!=undefined){


if (FON.textContent!="Стандарт"){
document.getElementById("sg"+jj).style.color=window.getComputedStyle( document.getElementsByClassName("stxt")[0] , null).getPropertyValue('background-color' );}else {
document.getElementById("sg"+jj).style.color="black";
}




} 


document.getElementById("sg"+jj).style.textShadow="-1px 0 0 "+Dt[jj][cr[jj]] +", 0 1px 0 "+Dt[jj][cr[jj]+1] +", 1px 0 0 "+Dt[jj][cr[jj]+2] +", 0 -1px  0 "+Dt[jj][cr[jj]+3] +", 1px 1px 0 "+Dt[jj][cr[jj]+4] +", -1px 1px 0 "+Dt[jj][cr[jj]+5] +", 1px -1px 0 "+Dt[jj][cr[jj]+6] +", -1px -1px 0 "+Dt[jj][cr[jj]+7] +"";



}
}

}



//градиент:
var l;
r=new Array;
g=new Array;
b=new Array;
fcl=new Array;
clo=new Array;
olp=new Array;
txt=new Array;
sr=new Array;
sg=new Array;
sb=new Array;
stat=new Array;
setTimeout(nach);

function nach() {
for (p=0;p<document.getElementsByClassName('box').length;p++){
if (document.getElementsByClassName('box')[p].getAttribute("g")!=null && document.getElementsByClassName('box')[p].getAttribute("g").length>12 && document.getElementsByClassName('box')[p].getAttribute("g").search(",")>-1){
txt[p]=document.getElementsByClassName('box')[p].textContent;
olp[p]=document.getElementsByClassName('box')[p].getAttribute("g").split(",");
stat[p]=olp[p].length;
if (olp[p][olp[p].length-1].length<6){
document.getElementsByClassName('box')[p].setAttribute("rt",olp[p][olp[p].length-1]);
olp[p].pop();
for (ke=0;ke<txt[p].length;ke++){
if (olp[p][ke]==undefined){
olp[p][ke]=olp[p][ke-(stat[p]-1)];
}
}
}

for (CL=0;CL<olp[p].length;CL++){
if (olp[p][CL].length<6){
olp[p][CL]+="FFFFFF";
}
if (olp[p][CL].search(/#| /)>-1){
olp[p][CL]=olp[p][CL].replace(/#| /g, '');
}
r[CL]=parseInt(olp[p][CL].substr(0,2),16);


g[CL]=parseInt(olp[p][CL].substr(2,2),16);

b[CL]=parseInt(olp[p][CL].substr(4,2),16);

r[CL]=((r[CL]/255*100));
g[CL]=((g[CL]/255*100));
b[CL]=((b[CL]/255*100));


}


if (document.getElementsByClassName('box')[p].getAttribute("rt")){
fcl[p]=parseInt(document.getElementsByClassName('box')[p].getAttribute("rt"),10);
} else {
fcl[p]=(txt[p].length-1)/(olp[p].length-1);
}

if (txt[p].length>=olp[p].length){
for (k=0;k<txt[p].length;k++){
for (re=0;re<olp[p].length;re++){
if (k>fcl[p]*re && k<=fcl[p]*(re+1)){
l=re+1;
}

sr[k]=(r[l]-r[l-1])/fcl[p];
sg[k]=(g[l]-g[l-1])/fcl[p];
sb[k]=(b[l]-b[l-1])/fcl[p];
}
}


for (k=1;k<txt[p].length;k++){


r[k]=(r[k-1]+sr[k]);
g[k]=(g[k-1]+sg[k]);
b[k]=(b[k-1]+sb[k]);

if (r[k]<0){
r[k]=0;
}
if (g[k]<0){
g[k]=0;
}
if (b[k]<0){
b[k]=0;
}
if (r[k]>100){
r[k]=100;
}
if (g[k]>100){
g[k]=100;
}
if (b[k]>100){
b[k]=100;
}
}
}
clo[p]=new Array;
for (n=0;n<txt[p].length;n++){
clo[p][n]='rgb('+Math.round(r[n]*10000)/10000+'%,'+Math.round(g[n]*10000)/10000+'%,'+Math.round(b[n]*10000)/10000+'%)';
}


}

}
setTimeout(prevr,0);

}

htm=new Array;
teg=new Array;
X=new Array;
function prevr() {
for (q=0;q<document.getElementsByClassName('box').length;q++){

if (document.getElementsByClassName('box')[q].getAttribute("g")!=null && document.getElementsByClassName('box')[q].getAttribute("g").length>12 && document.getElementsByClassName('box')[q].getAttribute("g").search(",")>-1){
htm[q]='';

for (var i=0; i<txt[q].length; i++){
htm[q]+='<span style="color:'+clo[q][i]+';">' + txt[q][i] + '</span>';

}
document.getElementsByClassName('box')[q].innerHTML = htm[q];
if (document.getElementsByClassName('box')[q].getAttribute("rt")){
document.getElementsByClassName('box')[q].removeAttribute("rt");
}
if (document.getElementsByClassName('box')[q].getAttribute("g")){
document.getElementsByClassName('box')[q].removeAttribute("g");
}
}
}
}


//тень-градиент

var ls;
rs=new Array;
gs=new Array;
bs=new Array;
RS=new Array;
GS=new Array;
BS=new Array;
fcs=new Array;
clt=new Array;
ols=new Array;
tsh=new Array;
srs=new Array;
sgs=new Array;
sbs=new Array;
stah=new Array;
lev=new Array;
niz=new Array;
setTimeout(noch);

function noch() {
for (p=0;p<document.getElementsByClassName('ten').length;p++){
if (document.getElementsByClassName('ten')[p].getAttribute("g")!=null && document.getElementsByClassName('ten')[p].getAttribute("g").length>12 && document.getElementsByClassName('ten')[p].getAttribute("g").search(",")>-1){

ols[p]=document.getElementsByClassName('ten')[p].getAttribute("g").split(",");
lev[p]=1;
niz[p]=1;
if (ols[p][0]==1||ols[p][0]=="0"||ols[p][0]==-1){
lev[p]=ols[p][0];
ols[p].shift();
}
if (ols[p][0]==1||ols[p][0]=="0"||ols[p][0]==-1){
niz[p]=ols[p][0];
ols[p].shift();
}


stah[p]=ols[p].length;
if (ols[p][ols[p].length-1].length<6){
document.getElementsByClassName('ten')[p].setAttribute("rt",ols[p][ols[p].length-1]);
ols[p].pop();




for (ke=0;ke<9;ke++){
if (ols[p][ke]==undefined){
ols[p][ke]=ols[p][ke-(stah[p]-1)];
}
}
}

for (CL=0;CL<ols[p].length;CL++){
if (ols[p][CL].length<6){
ols[p][CL]+="FFFFFF";
}
if (ols[p][CL].search(/#/)>-1){
ols[p][CL]=ols[p][CL].replace(/#/g, '');
}
rs[CL]=RS[CL]=parseInt(ols[p][CL].substr(0,2),16);

gs[CL]=GS[CL]=parseInt(ols[p][CL].substr(2,2),16);

bs[CL]=BS[CL]=parseInt(ols[p][CL].substr(4,2),16);

rs[CL]=Math.round(rs[CL]/255*100);
gs[CL]=Math.round(gs[CL]/255*100);
bs[CL]=Math.round(bs[CL]/255*100);


}


if (document.getElementsByClassName('ten')[p].getAttribute("rt")){
fcs[p]=parseInt(document.getElementsByClassName('ten')[p].getAttribute("rt"),10);
} else {
fcs[p]=(9)/(ols[p].length-1);
}

if (9>=ols[p].length){
for (k=0;k<9;k++){
for (re=0;re<ols[p].length;re++){
if (k>fcs[p]*re && k<=fcs[p]*(re+1)){
ls=re+1;
}

srs[k]=(rs[ls]-rs[ls-1])/fcs[p];
sgs[k]=(gs[ls]-gs[ls-1])/fcs[p];
sbs[k]=(bs[ls]-bs[ls-1])/fcs[p];
}
}

for (k=1;k<9;k++){


rs[k]=Math.round(rs[k-1]+srs[k]);
gs[k]=Math.round(gs[k-1]+sgs[k]);
bs[k]=Math.round(bs[k-1]+sbs[k]);

if (rs[k]<0){
rs[k]=0;
}
if (gs[k]<0){
gs[k]=0;
}
if (bs[k]<0){
bs[k]=0;
}
if (rs[k]>100){
rs[k]=100;
}
if (gs[k]>100){
gs[k]=100;
}
if (bs[k]>100){
bs[k]=100;
}
}
}
clt[p]=new Array;
for (n=0;n<9;n++){
clt[p][n]='rgb('+rs[n]+'%,'+gs[n]+'%,'+bs[n]+'%)';
}


}

}
setTimeout(prevrh,0);

}

function prevrh() {
for (q=0;q<document.getElementsByClassName('ten').length;q++){

if (document.getElementsByClassName('ten')[q].getAttribute("g")!=null && document.getElementsByClassName('ten')[q].getAttribute("g").length>12 && document.getElementsByClassName('ten')[q].getAttribute("g").search(",")>-1){
document.getElementsByClassName('ten')[q].style.color=clt[q][0];

document.getElementsByClassName('ten')[q].style.textShadow=lev[q]+'px '+niz[q]+'px 0 '+clt[q][1]+', '+lev[q]*2+'px '+niz[q]*2+'px 0 '+clt[q][2]+', '+lev[q]*3+'px '+niz[q]*3+'px 0 '+clt[q][3]+', '+lev[q]*4+'px '+niz[q]*4+'px 0 '+clt[q][4]+', '+lev[q]*5+'px '+niz[q]*5+'px 0 '+clt[q][5]+', '+lev[q]*6+'px '+niz[q]*6+'px 0 '+clt[q][6]+', '+lev[q]*7+'px '+niz[q]*7+'px 0 '+clt[q][7]+', '+lev[q]*8+'px '+niz[q]*8+'px 0 '+clt[q][8];

if (document.getElementsByClassName('ten')[q].getAttribute("rt")){
document.getElementsByClassName('ten')[q].removeAttribute("rt");
}
if (document.getElementsByClassName('ten')[q].getAttribute("g")){
document.getElementsByClassName('ten')[q].removeAttribute("g");
}

}

}
}

//цветотег 
teh=new Array;
b1=new Array;
b2=new Array;
lim=new Array;
an=new Array;
dl=new Array;
lam=new Array;//цвета
lem=new Array;//цифры
LIM=new Array;//цвета посимвольно
setTimeout(proavl);
function proavl(){



for (cls=0;cls<document.getElementsByClassName('boz').length;cls++){
if (document.getElementsByClassName('boz')[cls].getAttribute("g")!=null){
teh[cls]=document.getElementsByClassName('boz')[cls].textContent;



b1[cls]=0;
b2[cls]=0;
lim[cls]=document.getElementsByClassName('boz')[cls].getAttribute("g").split(",");


lam[cls]=new Array;
lem[cls]=new Array;
for (a1=0;a1<lim[cls].length;a1++){

if (isNaN(lim[cls][a1])==false){
lem[cls][b1[cls]]=lim[cls][a1];
b1[cls]+=1;

} else {lam[cls][b2[cls]]=lim[cls][a1]; b2[cls]+=1;}
}



dl[cls]=lem[cls].length;
for (k1=0;k1<document.getElementsByClassName('boz')[cls].textContent.length*3;k1++){
if (lem[cls][k1]<0){
if(document.getElementsByClassName('boz')[cls].getAttribute("a")==null){
lem[cls][k1]=Math.round(document.getElementsByClassName('boz')[cls].textContent.length/Math.abs(lem[cls][k1]));
} else {
oke=document.getElementsByClassName('boz')[cls].textContent.replace(/ /gi,"");
lem[cls][k1]=Math.round(oke.length/Math.abs(lem[cls][k1]));
}
}
if (lem[cls][k1]==undefined){
lem[cls].push(lem[cls][k1-dl[cls]]);
}
}

an[cls]=0;

LIM[cls]=new Array;
for (k1=0;k1<document.getElementsByClassName('boz')[cls].textContent.length;k1++){

if (lem[cls][0]==0){
k1=k1-1;
} else {LIM[cls][k1]=lam[cls][an[cls]];}
lem[cls][0]-=1;


if (lem[cls][0]==0 || lem[cls][0]==-1){
an[cls]+=1;
lem[cls].shift();
if (an[cls]==lam[cls].length){
an[cls]=0;
}

}

}
}
}

setTimeout(reavl);
}
ht=new Array;

function reavl(){
for (cs=0;cs<document.getElementsByClassName('boz').length;cs++){
if (document.getElementsByClassName('boz')[cs].getAttribute("g")!=null){
 ht[cs]='';
if (document.getElementsByClassName('boz')[cs].getAttribute("a")==null){
for (var i=0; i<teh[cs].length; i++)  {ht[cs]+='<span style="color:'+LIM[cs][i]+';">' + teh[cs][i] + '</span>'}
} else {
var lum=0;
for (var i=0; i<teh[cs].length; i++)  {
ht[cs]+='<span style="color:'+LIM[cs][lum]+';">' + (teh[cs][i]) + '</span>';
if (teh[cs][i]!=" "){
lum+=1;
}
}
}
    document.getElementsByClassName('boz')[cs].innerHTML = ht[cs];

if (document.getElementsByClassName('boz')[cs].getAttribute("g")){
document.getElementsByClassName('boz')[cs].removeAttribute("g");
}
}
}
}


//и переливание:
CC=new Array(); //массив цветов
rc=new Array;
gc=new Array;
bc=new Array; //цвета
rs=new Array;
gs=new Array;
bs=new Array; //шаги
//fclo=new Array;
ko=new Array(); //массив 
spa=new Array(); //счетчик тегов
var J=0;
var T=0;
var ll;
cvc=new Array(); //массив дв

setTimeout(perel);
function perel(){

for (clc=0;clc<document.getElementsByClassName("ppp").length;clc++){
document.getElementsByClassName("ppp")[clc].id="ff"+T;
T=T+1;
cvc[clc]=0;
  CC[clc]=new Array();
  if (document.getElementsByClassName("ppp")[clc].getAttribute("a")!=null){
ko[clc]=document.getElementsByClassName("ppp")[clc].getAttribute("a").split(",");
ko[clc].push(ko[clc][0]);



for (n=0;n<ko[clc].length;n++){

if (ko[clc][n].search(/#| /)>-1){
ko[clc][n]=ko[clc][n].replace(/#| /g, '');
}

rc[n]=parseInt(ko[clc][n].substr(0,2),16);
gc[n]=parseInt(ko[clc][n].substr(2,2),16);
bc[n]=parseInt(ko[clc][n].substr(4,2),16);
rc[n]=Math.round(rc[n]/255*100);
gc[n]=Math.round(gc[n]/255*100);
bc[n]=Math.round(bc[n]/255*100);
}

document.getElementsByClassName("ppp")[clc].removeAttribute("a");
for (k=0;k<10*(ko[clc].length-1);k++){
for (rre=0;rre<ko[clc].length;rre++){

if (k>10*rre && k<=10*(rre+1)){

ll=rre+1;
}

rs[k]=(rc[ll]-rc[ll-1])/10;
gs[k]=(gc[ll]-gc[ll-1])/10;
bs[k]=(bc[ll]-bc[ll-1])/10;
}
}
for (k=1;k<10*(ko[clc].length-1);k++){
rc[k]=Math.round(rc[k-1]+rs[k]);
gc[k]=Math.round(gc[k-1]+gs[k]);
bc[k]=Math.round(bc[k-1]+bs[k]);
if (rc[k]<0){
rc[k]=0;
}
if (gc[k]<0){
gc[k]=0;
}
if (bc[k]<0){
bc[k]=0;
}
if (rc[k]>100){
rc[k]=100;
}
if (gc[k]>100){
gc[k]=100;
}
if (bc[k]>100){
bc[k]=100;
}
}
for (nn=0;nn<(ko[clc].length-1)*10;nn++){
CC[clc][nn]='rgb('+rc[nn]+'%,'+gc[nn]+'%,'+bc[nn]+'%)';
}




  }

}

} 

  function perel2(){
   
    for (sjj=0;sjj<document.getElementsByClassName("ppp").length;sjj++){
    if (document.getElementsByClassName("ppp")[sjj].id==""){
      document.getElementsByClassName("ppp")[sjj].id="ff"+T;
     
      
      cvc[T]=0;
  CC[T]=new Array();
  if (document.getElementsByClassName("ppp")[sjj].getAttribute("a")!=null){

ko[sjj]=document.getElementsByClassName("ppp")[sjj].getAttribute("a").split(",");
ko[sjj].push(ko[sjj][0]);

for (n=0;n<ko[sjj].length;n++){
if (ko[sjj][n].search(/#| /)>-1){
ko[sjj][n]=ko[sjj][n].replace(/#| /g, '');
}

rc[n]=parseInt(ko[sjj][n].substr(0,2),16);
gc[n]=parseInt(ko[sjj][n].substr(2,2),16);
bc[n]=parseInt(ko[sjj][n].substr(4,2),16);
rc[n]=Math.round(rc[n]/255*100);
gc[n]=Math.round(gc[n]/255*100);
bc[n]=Math.round(bc[n]/255*100);
}



for (k=0;k<10*(ko[sjj].length-1);k++){
for (rre=0;rre<ko[sjj].length;rre++){
if (k>10*rre && k<=10*(rre+1)){
ll=rre+1;
}

rs[k]=(rc[ll]-rc[ll-1])/10;
gs[k]=(gc[ll]-gc[ll-1])/10;
bs[k]=(bc[ll]-bc[ll-1])/10;

}

}


for (k=1;k<10*(ko[sjj].length-1);k++){
rc[k]=Math.round(rc[k-1]+rs[k]);
gc[k]=Math.round(gc[k-1]+gs[k]);
bc[k]=Math.round(bc[k-1]+bs[k]);
if (rc[k]<0){
rc[k]=0;
}
if (gc[k]<0){
gc[k]=0;
}
if (bc[k]<0){
bc[k]=0;
}
if (rc[k]>100){
rc[k]=100;
}
if (gc[k]>100){
gc[k]=100;
}
if (bc[k]>100){
bc[k]=100;
}

}



for (nn=0;nn<(ko[sjj].length-1)*10;nn++){
CC[T][nn]='rgb('+rc[nn]+'%,'+gc[nn]+'%,'+bc[nn]+'%)';
}




  }

T=T+1;
document.getElementsByClassName("ppp")[sjj].removeAttribute("a");
      
    }

    }
    
  }
  
 
setTimeout(meg);
megg=setInterval(meg,100);

function meg(){

for (ju=0;ju<=T;ju++){

 if (document.getElementById("ff"+ju)!=null){


if (document.getElementById("ff"+ju).getAttribute("b")==undefined){
document.getElementById("ff"+ju).style.color=CC[ju][cvc[ju]];
} else {

document.getElementById("ff"+ju).style.backgroundColor=CC[ju][cvc[ju]];
}
cvc[ju]=cvc[ju]+1;
if (cvc[ju]>CC[ju].length-1){
cvc[ju]=0;
}
}
}
}


//полнотег градиентный 
setTimeout(fontG);
kir=new Array();
function fontG(){
for (F=0;F<document.getElementsByClassName('fog').length;F++){
kir[F]=document.getElementsByClassName('fog')[F];
while (kir[F].tagName.search(/td/gi)==-1){
kir[F]=kir[F].parentElement;
}
if (!document.getElementsByClassName('fog')[F].getAttribute("d")){
ito=document.getElementsByClassName('fog')[F].getAttribute("a").split(",");
if (!isNaN(ito[0])){
fi=ito[0];
ito.splice(0,1);
} else {fi=0};
if (!document.getElementsByClassName('fog')[F].getAttribute("c")){
if(!document.getElementsByClassName('fog')[F].getAttribute("b")){
kir[F].style.background="linear-gradient("+fi+"deg,"+ito+")";
} else {
kir[F].style.background="radial-gradient(circle,"+ito+")";
}
} else {
if(!document.getElementsByClassName('fog')[F].getAttribute("b")){
kir[F].style.background="repeating-linear-gradient("+fi+"deg,"+ito+")";
} else {
kir[F].style.background="repeating-radial-gradient(circle,"+ito+")";
}



}
} else if (document.getElementsByClassName('fog')[F].getAttribute("d")==1) {

kir[F].style.cssText="background-image: url('http://img-fotki.yandex.ru/get/9510/131624064.4dc/0_d1735_2d887d50_XL.gif'); background-repeat: repeat-x; background-attachment: scroll; background-position: 100% 50%; background-size: 1.1cm;color:white;";


} else if (document.getElementsByClassName('fog')[F].getAttribute("d")==2){
kir[F].style.cssText="background-image: url('http://smiles24.ru/data/smiles/anime-ogon-150.gif'); background-repeat: repeat-x; background-attachment: scroll; background-position: 100% 70%; background-size: 1.1cm; text-shadow: 1px -1px 3px orange, 2px -2px 3px yellow, 0 -5px 6px red, 0 3px 5px yellow;";

}
}
}




//текстопароль

var XX=0;
setTimeout(prisv);
parol=new Array;
function prisv(){
for (mi=0;mi<document.getElementsByClassName('par').length;mi++){
if (document.getElementsByClassName('par')[mi].getAttribute('a')){
document.getElementsByClassName('par')[mi].addEventListener("click",pass);
parol[mi]=document.getElementsByClassName('par')[mi].getAttribute('a');
XX=XX+1;
document.getElementsByClassName('par')[mi].removeAttribute('a');
document.getElementsByClassName('par')[mi].id=mi+'da';
}
}
}
function prisv2(){
for (mii=0;mii<document.getElementsByClassName('par').length;mii++){
if (document.getElementsByClassName('par')[mii].getAttribute('a') && document.getElementsByClassName('par')[mii].id==""){
document.getElementsByClassName('par')[mii].id=XX+'da';
document.getElementsByClassName('par')[mii].addEventListener("click",pass);
parol[XX]=document.getElementsByClassName('par')[mii].getAttribute('a');
document.getElementsByClassName('par')[mii].removeAttribute('a');
XX=XX+1;
}
}
}

function pass(){
xx=this;
twe=prompt('Введите пароль:');
if (twe==parol[parseInt(xx.id)].slice(0,parol[parseInt(xx.id)].indexOf(' '))){

xx.innerHTML=parol[parseInt(xx.id)].substr(parol[parseInt(xx.id)].indexOf(' '));
xx.removeEventListener("click",pass);
} else {
alert('Неверный пароль');
}
}
//мигание текста


var qwad=0;
fik=new Array();

function pereop(){
wex=document.getElementsByClassName('iop').length;
if (document.getElementsByClassName('iop').length!=0){
for (ki=0;ki<wex;ki++){
if (document.getElementsByClassName('iop')[ki].id==""){
document.getElementsByClassName('iop')[ki].id="xzc"+ki;


document.getElementsByClassName('iop')[ki].style.display="inline-block";


document.getElementsByClassName('iop')[ki].style.height=document.getElementsByClassName('iop')[ki].clientHeight+"px";
if (document.getElementsByClassName('mnbdy')[0].clientWidth<400 || document.getElementsByClassName('iop')[ki].clientWidth>300){
document.getElementsByClassName('iop')[ki].style.width=document.getElementsByClassName('iop')[ki].clientWidth+"px";
}
fik[ki]=0;
//fi[ki]=new Array();
qwad=qwad+1;


txtz[ki] = document.getElementById('xzc'+ki).innerHTML.split(/\+/);

document.getElementById('xzc'+ki).innerHTML='';

}
}
}
setTimeout(func);
}

function pereop1(){

for (wex=0;wex<document.getElementsByClassName("iop").length;wex++){
if (document.getElementsByClassName("iop")[wex].id==""){
document.getElementsByClassName("iop")[wex].id="xzc"+qwad;
document.getElementsByClassName('iop')[wex].style.display="inline-block";

document.getElementsByClassName('iop')[wex].style.height=document.getElementsByClassName('iop')[wex].clientHeight+"px";
if (document.getElementsByClassName('mnbdy')[0].clientWidth<400 || document.getElementsByClassName('iop')[wex].clientWidth>300){
document.getElementsByClassName('iop')[wex].style.width=document.getElementsByClassName('iop')[wex].clientWidth+"px";
}

fik[qwad]=0;
//fi[qwad]=new Array();

txtz[qwad] = document.getElementById('xzc'+qwad).innerHTML.split(/\+/);
document.getElementById('xzc'+qwad).innerHTML='';

qwad=qwad+1;
}
}
setTimeout(func);
}



function func(){
if (document.getElementsByClassName('iop').length!=0){
for (kj=0;kj<qwad;kj++){
if (fik[kj]==undefined){
fik[kj]=0;
//console.log(fik[kj]);
}
}

for (kj=0;kj<qwad;kj++){
if (document.getElementById('xzc'+kj)!=null){
document.getElementById('xzc'+kj).innerHTML=txtz[kj][fik[kj]];
//console.log(fik,kj);


}
fik[kj]=fik[kj]+1;
if (fik[kj]==txtz[kj].length){
fik[kj]=0;
}
}
}
}



//кон миг
//отключение тегов
function Otkl(){
if (Otk.getAttribute("a")==1){
clearInterval(megg);
clearInterval(migg);
clearInterval(prove);
Otk.value="Вкл";
Otk.setAttribute("a",0);
for (ad=0;ad<document.getElementsByTagName('span').length;ad++){
document.getElementsByTagName('span')[ad].class="";
document.getElementsByTagName('span')[ad].style="";
}
} else {
prove=setInterval(prov,50);
migg=setInterval(mig,1000);
megg=setInterval(meg,100);
Otk.value="Откл";
Otk.setAttribute("a",1);
}
}


//setTimeout(SVG);
svg=new Array();
function SVG(){
for (Q=0;Q<document.getElementsByClassName('svgs').length;Q++){
svg[Q]=document.getElementsByClassName('svgs')[Q];
while (svg[Q].tagName.search(/td/gi)==-1){
svg[Q]=svg[Q].parentElement;
}
svg[Q].outerHTML=svg[Q].outerHTML.replace(/td/gi, 'svg height=120 width=100%');
}
}





