<u><b>API kitermelt faanyag térfogatszámításához</b></u>

Az API a FATÁJ "Rönk és egyéb hengeresfa köböző táblázatok" adatai alapján készült és gyors és hatékony adatfeldolgozást tesz lehetővé gépi algoritmusok számára.

<b>Technológia</b>
<ul>

<li>PostgreSQL - a köböző táblázatok tárolására</li>
<li>NodeJS - a lekérdezések kiszolgálására</li>
<li>ExpresJS - az API motorja</li>
</ul>


<b>1) CREATE DATABASE</b><br>
Postgresben hozz létre egy 'logvol' nevű és 'postgres' ownerű adatbázist.
az imports.sql tartalmazza a táblák felépítéséhez szükséges queryket és az összes 'insert into' statementet az adatok betöltéséhez.

<b>2) NODEJS PG KITERJESZTÉS telepítése</b><br>
Ezzel fog tudni kapcsolódni a NodeJS PostgreSQL adatbázishoz.<br>
$ npm install pg

<b>3) EXPRESSJS telepítése</b><br>
$ npm install express --save

