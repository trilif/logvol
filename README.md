<u><h2>API kitermelt faanyag térfogatszámításához</h2></u>

Az API a FATÁJ "Rönk és egyéb hengeresfa köböző táblázatok" adatai alapján készült és gyors és hatékony adatfeldolgozást tesz lehetővé gépi algoritmusok számára.

<b>Technológia</b>
<ul>

<li>PostgreSQL - a köböző táblázatok tárolására</li>
<li>NodeJS - a lekérdezések kiszolgálására</li>
<li>ExpresJS - az API motorja</li>
</ul>


<b>1) Create database</b><br>
Postgresben hozz létre egy 'logvol' nevű és 'postgres' ownerű adatbázist.

<b>2) Import data</b><br>
az imports.sql tartalmazza a táblák felépítéséhez szükséges queryket és az összes 'insert into' statementet az adatok betöltéséhez.

<b>3) Start logvol</b><br>
$node logvol.js
<hr>
<h3>Dependencies</h3>
<b>A) NodeJS PG</b><br>
Ezzel fog tudni kapcsolódni a NodeJS PostgreSQL adatbázishoz.<br>
$ npm install pg

<b>B) ExpressJS</b><br>
$ npm install express --save
<hr>
<b>Hívás:</b></br>

pl.: http://localhost:3300/T/25/36
<br>
protokol://host:port/FAFAJCSOPORT/HOSSZ_DECIMÉTERBEN/ÁTMÉRŐ_CENTIMÉTERBEN
<br>
response: az adott faanyag térfogata m<sup>3</sup>-ben
<br>
Választható fafajok:
<ul>

<li>T - Tölgy, Alkalmazható
a kocsányos tölgy,
a kocsánytalan tölgy,
a molyhos tölgy,
a vörös tölgy és
az egyéb tölgyfélék esetében</li>
<li>CS - Cser</li>
<li>B - Bükk</li>
<li>A - Akác</li>
  <li>GYEKL - Gyertyán és egyéb kemény lombos fafajok, Alkalmazható
a gyertyán,
a kőris,
a juhar,
a szil,
a vadgyümölcs félék és
minden egyéb kemény lombosfaj esetében</li>
  <li>NY - Nyár, Alkalmazható
a hazai nyárak és
a nemesnyárak fajai, illetve fajtái esetében</li>
  <li>ELL - Egyéb lágy lombos fafajok, Alkalmazható
az éger,
a fűz,
a hárs,
a nyír és
minden egyéb lágy lombos fafaj esetében</li>
  <li>F - Fenyő, Alkalmazható
az erdeifenyő,
a feketefenyő,
a lucfenyő,
a vörösfenyő és
minden egyéb fenyőféle esetében</li>
</ul>
