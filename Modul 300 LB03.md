# Modul 300 LB03

Dies ist die LB03 Dokumentation von Timon Müller.

#### Idee

Den von mir Programmierten Express Webserver, welcher auf Node basiert, zusammen mit dem cAdvisor Monitoring, welches Influx als DB verwendet, mithilfe von Docker zu automatisieren.

#### Vorgehen 

Zuerst habe ich mit Dockerfiles herumgespielt um Docker etwas kennenzulernen. Da ich aber mehrere Services zur Verfügung stellen möchte, ist Docker Compose geeigneter. 

Um meinen Webserver mit Docker laufen zu lassen, brauchte ich ein Build, bei welchem Node und Npm vorinstalliert ist. Node selber bietet ein solches an, welches ich auch benutz habe.

Für cAdvisor habe ich ein image von Google benutzt und bei Influx busybox bzw. tutum für InfluxData. 

#### Umgebung

Ich habe insgesamt vier Container. Der Express Webserver, cAdvisor, Influx und InfluxData, welcher von Influx für die Daten benötigt wird.

##### Ports

| ***Container*** | Express | cAdvisor | Influx |
| --------------- | ------- | -------- | ------ |
| **Ports**       | 80      | 8888     | 8083   |

#### Sicherheit

Die Sicherheit ist bei meinem Docker Projekt vor allem auf die Ressourcen fokkussiert mit folgenden Punkten :

- Memory begränzen
- Überwachung mit cAdvisor
- Speichern der Aktivitäten mit Influx

#### Arbeitsmittel

Für die Arbeitsmittel benutze ich folgende Tools:

1. Git Bash - CLI
2. Atom - Code Editor
3. Docker Compose
4. VMware Workstation Player - Virtualisierung für Ubuntu
5. Ubuntu - HostOS
6. Typora - Markdown Editor

#### Testfälle

| *Server* | Test                                         | Resultat |
| -------- | -------------------------------------------- | -------- |
| Express  | Ist erreichbar unter Port 80                 | ja       |
| Express  | Gibt einen Error 404 zurück bei falscher URL | ja       |
| cAdvisor | Ist erreichbar unter Port 8888               | ja       |
| cAdvisor | Zeigt die Werte an                           | ja       |
| Influx   | Ist erreichbar unter Port 8083               | ja       |



#### Reflexion / Wissensstand

Ich konnte in dieser LB sehr viel lernen, da ich zuvor noch nie mit Docker bzw. Docker Compose gearbeitet habe und besonders darüber viel lernen konnte. Ich finde Docker Compose ein sehr nützliches Tool, welches ich hoffentlich in der Zukunft viel brauchen kann. Es war hilfreich mein schon vorhandenes wissen von Node hier brauchen zu können, da Docker Compose eine genug grosse Herausforderung war.  Mit Microservices hatte ich schon bei Node etwas erfahrung, da man beim Programmieren darauf achten soll, dass alles unabhängig von einander läuft und in sogenannte "Modules" unterteilt. Container kannte ich schon ziemlich gut, da ich erst vor ein paar Monaten einen ÜK darüber hatte.

###### 