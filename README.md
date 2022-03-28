# letzter_stand_WebTech
Im Rahmen des Webtech Projektes habe ich eine Seite entwickelt, die dazu dienen soll, 
einen Überblick der Studenten zu haben, welche ihre Abschlussarbeit schreiben wollen. 
Professoren sollen zukünftig somit einen besseren überblick haben, wie viele Studenten bei ihnen ihre Abschlussarbeit gerne 
schreiben wollen würden. Somit können Professoren auch ihre Ressourcen besser einteilen. Die Anmeldung an sich ist kein Antrag 
sondern nur an sich eine unverbindliche Information für die Professoren.

Die Webseite kann über localhost:XXX aufgerufen werden.

Wie ist meine Webseite aufgebaut?

Meine Seite habe ich mit einem Header und einem Container aufgebaut. 
Um es etwas der HTW anzupassen, habe ich im Header links das HTW Logo eingefügt.
Mit einem Mouse Over Effekt erscheint dann meine Martikelnumer. Des weiteren besteht die NavBar aus einem Home und HTW Startseite Button. 
Klickt man auf den HTW Startseiten Button, erfolgt eine Verlinkung auf die HTW Seite mit den Studiengängen. Ein Suchfeld ist ebenfalls mit eingefügt. 

Nun wollte ich auch bei den HTW Farben bleiben, so habe ich den Header meines Containers in den HTW Grün-Tönen geschmückt. 

Nun folgt das wichtige: Das anmelden einer Aschlussarbeit:

(CREATE) Der Student soll seine Daten eintragen. Dazu gehören Name, Nachname, Email, Fachbereich, etc. 
Die Daten habe ich sowohl mit Eingabefeldern, DropDown, Auswahl-Feldern als auch mit Radio Auswahlmöglichkeiten implementiert. 
Ebenfalls sind if else Abfragen auch vorhanden. Damit der Student auch keine Angaben vergisst, habe ich Pflichtfelder eingebunden.
Klickt man auf den anmelde Button, erscheint der Eintrag unten in der Tabelle. 
<img width="1224" alt="Bildschirmfoto 2022-03-28 um 22 25 29" src="https://user-images.githubusercontent.com/102029357/160481130-6988e1ea-03cc-420f-8628-b6e10458e0fd.png">


READ: Klickt man auf die Lupe, so öffnet sich ein Fenster mit dem Eintrag. Hier kann man den Eintrag bzw. die Daten des Studenten erlesen. 

<img width="417" alt="Bildschirmfoto 2022-03-28 um 22 27 56" src="https://user-images.githubusercontent.com/102029357/160481454-809c558b-b837-46d2-82f2-8a6c3d6881da.png">

UPDATE: Nun kann es ja mal vor kommen, dass einige Daten falsch sind oder sich geändert haben. 
Aber das bearbeiten der Daten ist mit Hilfe des Bearbeitungsbuttons kein Problem. 
Einfach auf den Stift Symbol klicken und die Daten überarbeiten und dann updaten. 
<img width="1035" alt="Bildschirmfoto 2022-03-28 um 22 29 29" src="https://user-images.githubusercontent.com/102029357/160481770-6f130e12-6726-46ff-ae70-6fb0116bf359.png">

DELETE: Ein student hat sich entschieden, doch nicht seine Abschlussarbeit zu schreiben. 
Da wäre es sicherlich gut, den Studenten aus der Liste zu löschen. Dafür ist der Button mit dem Mülleimer Button geeignet. 
Um den Studenten zu löschen einfach drauf klicken.

Die Datenbank habe ich mit MongoDB erstellt. Für die Visualisierung der Datenbank (die Einträge, die in meiner Webseite eingetragen werden)
habe ich mich für MongoCompas entschieden. Das Programm bietet die Möglichkeit, die Einträge, die in der Datenbank gespeichert werden sollten, 
mit den jeweiligen variablen, Visualisieren. Dies erleichterte mir die Fehlerfindung. Somit konnte ich eingrenzen, 
ob der Fehler in der Datenbak war oder im Frontend.

Das Programm Mongo Compass kann unter:
https://www.mongodb.com/products/compass?_ga=2.242098183.484665306.1647521336-1145371503.1646484763 
heruntergeladen werden.
genauere Schritte der Instalation von MongoDB und Mongo Compass sind im folgenden Video erklärt: https://youtu.be/AMy4WY3_KQo
Die bedienung von Mongo Compass sind im Video erklärt:  https://youtu.be/ydXCcLAi5aU

Meine Webseite an sich habe ich mit der IDE Visual Studio Code erstellt. 

Nach dem öffnen vom Terminal in der IDE (VSC) kann mit dem Befehl "ng serve --open" die Seite gestartet werden. 
Hier ist zu beachten, dass der Befehl in dem "frontend" Ordner ausgeführt werden muss. 
Falls der Port bereits vergeben ist, kann die Seite mit dem Befehl "ng serve --open --port" ebenfalls gestartet werden.
<img width="788" alt="Bildschirmfoto 2022-03-28 um 22 13 32" src="https://user-images.githubusercontent.com/102029357/160480377-26262aab-02bb-46eb-9e70-552dbb811934.png">


Anschließend kann die Datenbank mit dem Befehl "node server.js" verbunden werden. 
Hier ist ebefalls zu beachten, dass der Befehl im "server" Ordner ausgeführt werden muss. 
Für eine reibungslose Funktion der Seite muss diese Reihenfolge beachtet werden. 
<img width="1159" alt="Bildschirmfoto 2022-03-28 um 22 16 55" src="https://user-images.githubusercontent.com/102029357/160480389-498ddac4-d605-44b7-bcec-b7b7824f86bf.png">

Ebenfalls ist das von enorme Bedeutung, dass nach jeder Änderung im Backend die Datenbank verbunden werden muss.

Weitere Informationen habe ich im Code sowohl als Kommentare als auch hilfreiche Links beigefügt.
Da sind eventuelle Probleme und Fehlermeldungen mit den jeweiligen Lösungsansätzen hinterlegt.










