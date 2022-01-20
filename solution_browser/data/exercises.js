export const exercises = {
    "Einfuehrung": {
        "1.1": {
            "title": "1.1. Fachliche Argumentation über Erfolgsprinzipien des WWW",
            "exercises": {
                "1": {
                    "title": "Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?",
                    "image": false,
                    "code": false,
                    "solution": "In TBLs Konzept traten \"broken links\" auf. In der Hypertext-Community war man der Meinungen, dass diese einen Rückschritt bedeuten. Man wollte bei Hyperlinks Vollständigkeit haben. "
                },
                "2": {
                    "title": "Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?",
                    "image": false,
                    "code": false,
                    "solution": "Die auftretenden \"broken links\" lassen sich verhindern."
                },
                "3": {
                    "title": "Was wäre der Preis für die garantierte Verhinderung von “broken links”?",
                    "image": false,
                    "code": false,
                    "solution": "Um \"broken links\" zu verhindern muss überprüfen ob es eine Seite gibt die von diesem Link referenziert wird. Das benötigt eine Menge an Rechenressourcen und viel Rechenzeit."
                }
            }
        },
        "1.2": {
            "title": "1.2. HTTP",
            "exercises": {
                "1": {
                    "title": "Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?",
                    "image": false,
                    "code": false,
                    "solution": "Die Anfrage wurde erfolgreich bearbeitet und das Ergebnis der Anfrage wird in der Antwort übertragen."
                },
                "2": {
                    "title": "Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?",
                    "image": false,
                    "code": false,
                    "solution": "Die alte Adresse ist nicht länger gültig."
                },
                "3": {
                    "title": "Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was können Sie dagegen tun?",
                    "image": false,
                    "code": false,
                    "solution": "Die Anfrage-Nachricht war fehlerhaft aufgebaut. Man sollte dabei die URL nochmal auf Korrektheit überprüfen, den Browser-Cache leeren oder die Browser-Cookies löschen."
                },
                "4": {
                    "title": "Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was können Sie dagegen tun?",
                    "image": false,
                    "code": false,
                    "solution": "Die Anfrage wurde mangels Berechtigung des Clients nicht durchgeführt."
                },
                "5": {
                    "title": "In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgründen soll die Abfrage jedoch cacheable sein. Wie könnten Sie dafür eine Lösung angehen?",
                    "image": false,
                    "code": false,
                    "solution": "Über das allgemeine Header-Feld Cache-Control kann man die jeweiligen Direktiven für eine gecachte Abfrage machen."
                }
            }
        },
        "1.3": {
            "title": "1.3. HTML-Literatur lesen und Fragen beantworten",
            "exercises": {
                "1": {
                    "title": "HTML steht für Hypertext Markup Language. Es ist die Auszeichnungssprache für Webseiten.",
                    "image": false,
                    "code": false,
                    "solution": "HTML steht für Hypertext Markup Language. Es ist die Auszeichnungssprache für Webseiten."
                },
                "2": {
                    "title": "Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen?",
                    "image": false,
                    "code": true,
                    "language": "html",
                    "solution": "\t<ol>\n" +
                        "\t\t\t\t<li>Data</li>\n" +
                        "\t\t\t\t<li>\n" +
                        "\t\t\t\t\t<ol>\n" +
                        "\t\t\t\t\t\t<li>Data</li>\n" +
                        "\t\t\t\t\t\t<li>\n" +
                        "\t\t\t\t\t\t\t<ol>\n" +
                        "\t\t\t\t\t\t\t\t<li>Data</li>\n" +
                        "\t\t\t\t\t\t\t</ol>\n" +
                        "\t\t\t\t\t\t</li>\t\n" +
                        "\t\t\t\t\t</ol>\n" +
                        "\t\t\t\t<li>\n" +
                        "\t\t\t</ol>"
                },
                "3": {
                    "title": "Wie ist eine HTML-Tabelle aufgebaut?",
                    "image": false,
                    "code": false,
                    "solution": "Eine Tabelle in HTML hat drei Bausteine. Table Row, Table Header und Table Data. Jede Table Row kann mit Table Headers oder Table Datas gefüllt werden. Die Tags heißen <tr>,<th> und <td>."
                },
                "4": {
                    "title": "Welche Attribute sollte man bei Bildern wie verwenden?",
                    "image": false,
                    "code": false,
                    "solution": "Das Attribut src beschreibt den Pfad zur Bild-Datei. Das alt-Attribut ist eine Beschreibung des Bildes, welche Angezeigt wird wenn das Bild nicht geladen wurde. Width und height setzen die Höhe und Breite des Bildes fest. "
                }
            }
        },
        "1.4": {
            "title": "1.4. HTML Wireframe",
            "exercises": {
                "1": {
                    "title": "Mit welchem HTML-Code (ohne CSS, nur mit HTML-Tags) kann man diesen Wireframe exakt nachbilden?",
                    "image": true,
                    "path": "src/assets/wireframe01.jpg",
                    "code": true,
                    "language": "html",
                    "solution": "\t<!DOCTYPE html>\n" +
                        "\t\t\t<html>\n" +
                        "\t\t\t\t<head>\n" +
                        "\t\t\t\t</head>\n" +
                        "\t\t\t\t<body>\n" +
                        "\t\t\t\t\t<h1>Übung 1.2: Inventors of the Web</h1>\n" +
                        "\t\t\t\t\t<ul>\n" +
                        "\t\t\t\t\t\t<li><u style=\"background-color: yellow;\"><b>Tim Berners-Lee:</b></u> WWW, HTTP, HTML, URI</li>\n" +
                        "\t\t\t\t\t\t<li><b>Hakom Lie and Bert Bos:</b> CSS</li>\n" +
                        "\t\t\t\t\t\t<li><b>Brendan Eich:</b> JavaScript</li>\n" +
                        "\t\t\t\t\t</ul>\n" +
                        "\t\t\t\t\t<hr>\n" +
                        "\t\t\t\t\t<h2 style=\"margin-top: 50px\">Inventors of the WWW</h2>\n" +
                        "\t\t\t\t\t<table style=\"border-style: outset; border-width: 10px; margin-bottom: 20px;\">\n" +
                        "\t\t\t\t\t\t<tr>\n" +
                        "\t\t\t\t\t\t\t<th colspan=\"4\" style=\"border: 1px solid grey;\">Inventors of the WWW</th>\n" +
                        "\t\t\t\t\t\t</tr>\n" +
                        "\t\t\t\t\t\t<tr>\n" +
                        "\t\t\t\t\t\t\t<th style=\"border: 1px solid grey;\">WWW</th>\n" +
                        "\t\t\t\t\t\t\t<th style=\"border: 1px solid grey;\">HTML</th>\n" +
                        "\t\t\t\t\t\t\t<th style=\"border: 1px solid grey;\">CSS</th>\n" +
                        "\t\t\t\t\t\t\t<th style=\"border: 1px solid grey;\">JavaScript</th>\n" +
                        "\t\t\t\t\t\t</tr>\n" +
                        "\t\t\t\t\t\t<tr>\n" +
                        "\t\t\t\t\t\t\t<td style=\"border: 1px solid grey; background-color: yellow;\">Tim Berners-Lee</td>\n" +
                        "\t\t\t\t\t\t\t<td style=\"border: 1px solid grey; background-color: yellow;\">Tim Berners-Lee</td>\n" +
                        "\t\t\t\t\t\t\t<td style=\"border: 1px solid grey;\">Hakie Lie and Bert Bos</td>\n" +
                        "\t\t\t\t\t\t\t<td style=\"border: 1px solid grey;\">Brendan Eich</td>\n" +
                        "\t\t\t\t\t\t</tr>\n" +
                        "\t\t\t\t\t</table>\n" +
                        "\t\t\t\t\t<hr>\n" +
                        "\t\t\t\t\t<div style=\"width: 50%; margin-bottom: 20px;\">\n" +
                        "\t\t\t\t\t\t<h3 align=\"center\">Inventors of the WWW</h3>\n" +
                        "\t\t\t\t\t\t<hr>\n" +
                        "\t\t\t\t\t\t<table>\n" +
                        "\t\t\t\t\t\t\t<tr>\n" +
                        "\t\t\t\t\t\t\t\t<th style=\"border-right: 2px solid black\">HTML</th>\n" +
                        "\t\t\t\t\t\t\t\t<th>JavaScript</th>\n" +
                        "\t\t\t\t\t\t\t</tr>\n" +
                        "\t\t\t\t\t\t\t<tr>\n" +
                        "\t\t\t\t\t\t\t\t<td><img src=\"tbl.jpg\"></td>\n" +
                        "\t\t\t\t\t\t\t\t<td><img src=\"eich.jpg\"><td>\n" +
                        "\t\t\t\t\t\t\t</tr>\n" +
                        "\t\t\t\t\t\t\t<tr>\n" +
                        "\t\t\t\t\t\t\t\t<td style=\"border-right: 2px solid black\"><a style=\"background-color: yellow;\">Tim Berners-Lee</a></td>\n" +
                        "\t\t\t\t\t\t\t\t<td>Brendan Eich<td>\n" +
                        "\t\t\t\t\t\t\t</tr>\n" +
                        "\t\t\t\t\t\t</table>\n" +
                        "\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t<hr>\n" +
                        "\t\t\t\t</body>\n" +
                        "\t\t\t</html>"
                }
            }
        }
    },
    "CSS1": {
        "2.1": {
            "title": "2.1. CSS Selektoren und CSS Farben",
            "exercises": {
                "1": {
                    "title": "Berechnen Sie die Spezifität folgender CSS-Selektoren:\n" +
                        "\n" +
                        "1. div div div:focus  .inner\n" +
                        "2. h1 + div.main\n" +
                        "3. div a:link[href*='h-brs']\n" +
                        "4. nav > a:hover::before\n" +
                        "5. ul#primary-nav  li.active",
                    "image": false,
                    "code": false,
                    "solution": "1. Ein Element der Klasse \"inner\", welches ein Nachfahre eines div-Elements ist auf das fokussiert wird, welches ein Nachfahre eines div-Elementes ist und dieses auch ein Nachfahre eines div-Elements ist.\n" +
                        "\n" +
                        "2. Ein div-Element der Klasse \"main\", welches nächster sibling eines h1-Elements ist.\n" +
                        "\n" +
                        "3. Ein anchor-Element als Link mit einem href indem 'h-brs' vorkommt und ein Nachfahre von einem div-Element ist.   \n" +
                        "\n" +
                        "4. Das Element vor einem anchor-Element über dem die Maus schwebt, welches Kind von einem nav-Element ist.\n" +
                        "\n" +
                        "5. Ein list-Element der Klasse \"active\", welches Nachfahre eines ordered-list-Elements mit der id \"primary-nav\" ist."
                },
                "2": {
                    "title": "Rechnen Sie folgende RGB-Werte in HSL-Werte um:\n" +
                        "\n" +
                        "1. #ffffff\n" +
                        "2. #000\n" +
                        "3. #ab0978\n" +
                        "4. rgb(127,255,33)\n" +
                        "5. rgba(255,127,33,0.8)",
                    "image": false,
                    "code": false,
                    "solution": "1. hsl(0,0,100)\n\n" +
                        "2. hsl(0,0,0)\n\n" +
                        "3.  hsl(319,90,35)\n\n" +
                        "4. hsl(95,100,56)\n\n" +
                        "5. hsla(25,100,56,0.8)"
                }
            }
        },
        "2.2": {
            "title": "2.2. CSS Positionierung",
            "exercises": {
                "1": {
                    "title": "Schauen Sie sich folgendes Video an und bauen Sie das dynamische Verhalten exakt nach (nur mit HTML und CSS, ohne JavaScript):",
                    "image": false,
                    "video": true,
                    "link": "https://www.youtube.com/watch?v=PE3POxjDspo",
                    "code": true,
                    "language": "html",
                    "solution": "\t<!DOCTYPE html>\n" +
                        "\t\t\t<html>\n" +
                        "\t\t\t\t<head>\n" +
                        "\t\t\t\t\t<style>\n" +
                        "\t\t\t\t\th1 {\n" +
                        "\t\t\t\t\t\tborder: 1px solid black;\n" +
                        "\t\t\t\t\t\tpadding: 20px;\n" +
                        "\t\t\t\t\t\tposition: sticky;\n" +
                        "\t\t\t\t\t\tbackground-color: rgba(255,255,255,0.9);\n" +
                        "\t\t\t\t\t\twidth: 100%;\n" +
                        "\t\t\t\t\t\ttop: 0;\n" +
                        "\t\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\t\tp {\n" +
                        "\t\t\t\t\t\tbackground-color: #ccc;\n" +
                        "\t\t\t\t\t}\n" +
                        "\t\t\t\t\t</style>\n" +
                        "\t\t\t\t</head>\n" +
                        "\t\t\t\t<body>\n" +
                        "\t\t\t\t\t<h1>Erste Überschift</h2>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<h1>Zweite Überschift</h2>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<h1>Dritte Überschift</h2>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t\t<p>\n" +
                        "\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "\t\t\t\t\t</p>\n" +
                        "\t\t\t\t</body>\n" +
                        "\t\t\t</html>"
                },
                "2": {
                    "title": "Schauen Sie sich folgendes Video an und bauen Sie das dynamische Verhalten exakt nach (nur mit HTML und CSS, ohne JavaScript):",
                    "image": false,
                    "video": true,
                    "link": "https://www.youtube.com/watch?v=HVmnv3k4__E",
                    "code": true,
                    "language": "html",
                    "solution": "\t<!DOCTYPE html>\n" +
                        "\t\t\t<html>\n" +
                        "\t\t\t\t<head>\n" +
                        "\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "\t\t\t\t\t<style>\n" +
                        "\t\t\t\t\tinput[type=checkbox]:checked + label + div > img {\n" +
                        "\t\t\t\t\t\tvisibility: hidden;\n" +
                        "\t\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\t\timg {\n" +
                        "\t\t\t\t\t\theight: auto;\n" +
                        "\t\t\t\t\t\twidth: 100%;\n" +
                        "\t\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\t\t.border {\n" +
                        "\t\t\t\t\t\tborder: 1px solid black;\n" +
                        "\t\t\t\t\t\tpadding: 5px;\n" +
                        "\t\t\t\t\t}\n" +
                        "\t\t\t\t</style>\n" +
                        "\t\t\t\t</head>\n" +
                        "\t\t\t\t<body>\n" +
                        "\t\t\t\t\t<h1>Übung 2.2</h1>\n" +
                        "\t\t\t\t\t<input type=\"checkbox\" name=\"check\">\n" +
                        "\t\t\t\t\t<label for=\"check\">hide and show via checkbox</label>\n" +
                        "\t\t\t\t\t<div class=\"border\">\n" +
                        "\t\t\t\t\t\t<img class= \"image\" src=\"Hochschule_Bonn-Rhein-Sieg_Wolfgang_Göddertz_Induktion.jpg\"/>\n" +
                        "\t\t\t\t\t</div>\n" +
                        "\t\t\t\t</body>\n" +
                        "\t\t\t</html>"
                }
            }
        },
        "2.3": {
            "title": "2.3. Wireframe with HTML and CSS",
            "exercises": {
                "1": {
                    "title": "Mit welchem HTML- und CSS-Code kann man diesen Wireframe exakt nachbilden?",
                    "image": true,
                    "video": false,
                    "path": "src/assets/survey.png",
                    "code": true,
                    "language": "html",
                    "solution": "\t<!DOCTYPE html>\n" +
                        "\t\t\t<html>\n" +
                        "\t\t\t\t<head>\n" +
                        "\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\t\n" +
                        "\t\t\t\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n" +
                        "\t\t\t\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n" +
                        "\t\t\t\t\t<link href=\"https://fonts.googleapis.com/css2?family=Nunito&display=swap\" rel=\"stylesheet\">\n" +
                        "\t\t\t\t\t<style>\n" +
                        "\t\t\t\t\t\thtml {\n" +
                        "\t\t\t\t\t\t\tbackground-color: #b2d6d1;\n" +
                        "\t\t\t\t\t\t\tfont-family: 'Nunito', sans-serif;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\t\t\t.header {\n" +
                        "\t\t\t\t\t\t\ttext-align: center;\n" +
                        "\t\t\t\t\t\t\tfont-weight: 900;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t.subheader {\n" +
                        "\t\t\t\t\t\t\ttext-align: center;\n" +
                        "\t\t\t\t\t\t\tmargin-bottom: 30px;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\t\t\t.contact-form-container {\n" +
                        "\t\t\t\t\t\t\tbackground-color: white;\n" +
                        "\t\t\t\t\t\t\tmargin-top: 20px;\n" +
                        "\t\t\t\t\t\t\tmargin-left: 50px;\n" +
                        "\t\t\t\t\t\t\tmargin-right: 50px;\n" +
                        "\t\t\t\t\t\t\tpadding: 20px;\n" +
                        "\t\t\t\t\t\t\theight: 600px;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t.row {\n" +
                        "\t\t\t\t\t\t\tdisplay: block;\n" +
                        "\t\t\t\t\t\t\tmargin-bottom: 20px;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t#large-gap {\n" +
                        "\t\t\t\t\t\t\tmargin-bottom: 40px;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t.label {\n" +
                        "\t\t\t\t\t\t\tdisplay: block;\n" +
                        "\t\t\t\t\t\t\tfloat: left;\n" +
                        "\t\t\t\t\t\t\twidth: 49%;\n" +
                        "\t\t\t\t\t\t\ttext-align: right;\n" +
                        "\t\t\t\t\t\t\tpadding-top: 5px;\n" +
                        "\t\t\t\t\t\t\tpadding-bottom: 5px;\n" +
                        "\t\t\t\t\t\t\tmargin-right: 20px;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t#label-radio {\n" +
                        "\t\t\t\t\t\t\tpadding-bottom: 30px;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t.input {\n" +
                        "\t\t\t\t\t\t\tdisplay: block;\n" +
                        "\t\t\t\t\t\t\tmargin-left: 15px;\n" +
                        "\t\t\t\t\t\t}\t\t\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t#input-name {\n" +
                        "\t\t\t\t\t\t\tmargin-top: 1px;\n" +
                        "\t\t\t\t\t\t\tpadding: 5px;\n" +
                        "\t\t\t\t\t\t\twidth: 20%;\n" +
                        "\t\t\t\t\t\t\tmin-width: 150px;\n" +
                        "\t\t\t\t\t\t}\t\t\t\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t#input-email {\n" +
                        "\t\t\t\t\t\t\tmargin-top: 1px;\n" +
                        "\t\t\t\t\t\t\tpadding: 5px;\n" +
                        "\t\t\t\t\t\t\twidth: 20%;\n" +
                        "\t\t\t\t\t\t\tmin-width: 150px;\n" +
                        "\t\t\t\t\t\t}\t\t\t\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t#input-age {\n" +
                        "\t\t\t\t\t\t\tmargin-top: 1px;\n" +
                        "\t\t\t\t\t\t\tpadding: 5px;\n" +
                        "\t\t\t\t\t\t\twidth: 20%;\n" +
                        "\t\t\t\t\t\t\tmin-width: 150px;\n" +
                        "\t\t\t\t\t\t}\t\t\t\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t#input-role {\n" +
                        "\t\t\t\t\t\t\tmargin-top: 9px;\n" +
                        "\t\t\t\t\t\t\tpadding: 5px;\n" +
                        "\t\t\t\t\t\t\twidth: 10%;\n" +
                        "\t\t\t\t\t\t\tmin-width: 100px;\n" +
                        "\t\t\t\t\t\t\tbackground-color: #eee;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t\t#input-like {\n" +
                        "\t\t\t\t\t\t\tmargin-top: 9px;\n" +
                        "\t\t\t\t\t\t\tpadding: 5px;\n" +
                        "\t\t\t\t\t\t\twidth: 10%;\n" +
                        "\t\t\t\t\t\t\tmin-width: 200px;\n" +
                        "\t\t\t\t\t\t\tbackground-color: #eee;\n" +
                        "\t\t\t\t\t\t}\n" +
                        "\t\t\t\t\t\t\n" +
                        "\t\t\t\t\t</style>\n" +
                        "\t\t\t\t</head>\n" +
                        "\t\t\t\t<body>\n" +
                        "\t\t\t\t\t<h1 class=\"header\">Survey Form</h1>\n" +
                        "\t\t\t\t\t<div class=\"contact-form-container\">\n" +
                        "\t\t\t\t\t\t<p class=\"subheader\" >Let us know how we can improve freeCodeCamp</p>\n" +
                        "\t\t\t\t\t\t<form>\n" +
                        "\t\t\t\t\t\t\t<div class=\"row\">\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"label\">\n" +
                        "\t\t\t\t\t\t\t\t\t<label for=\"name\">* Name:</label>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"input\">\n" +
                        "\t\t\t\t\t\t\t\t\t<input id=\"input-name\" name=\"name\" type=\"text\" placeholder=\"Enter your name\">\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t<div class=\"row\">\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"label\">\n" +
                        "\t\t\t\t\t\t\t\t\t<label for=\"email\">* Email:</label>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"input\">\n" +
                        "\t\t\t\t\t\t\t\t\t<input id=\"input-email\" name=\"email\" type=\"text\" placeholder=\"Enter your Email\">\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t<div class=\"row\">\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"label\">\n" +
                        "\t\t\t\t\t\t\t\t\t<label for=\"age\">* Age:</label>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"input\">\n" +
                        "\t\t\t\t\t\t\t\t\t<input id=\"input-age\" name=\"age\" type=\"number\" placeholder=\"Age\">\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t<div class=\"row\">\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"label\">\n" +
                        "\t\t\t\t\t\t\t\t\t<label for=\"age\">Which option best describes your current role?</label>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"input\">\n" +
                        "\t\t\t\t\t\t\t\t\t<select id=\"input-role\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<option>Student</option>\n" +
                        "\t\t\t\t\t\t\t\t\t</select>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t<div class=\"row\" id=\"large-gap\">\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"label\" id=\"label-radio\">\n" +
                        "\t\t\t\t\t\t\t\t\t<label>* How likely is that you would recomemnd freeCodeCamp to a friend?</label>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"input\">\n" +
                        "\t\t\t\t\t\t\t\t\t<div>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"definitely\" name=\"radio\" value=\"definitely\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<label for=\"definitely\">Definitely</label><br>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"maybe\" name=\"radio\" value=\"maybe\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<label for=\"maybe\">Maybe</label><br>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"not sure\" name=\"radio\" value=\"not sure\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<label for=\"not sure\">Not Sure</label>\n" +
                        "\t\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t<div class=\"row\">\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"label\">\n" +
                        "\t\t\t\t\t\t\t\t\t<label for=\"life\">What do you like most about FCC:</label>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"input\">\n" +
                        "\t\t\t\t\t\t\t\t\t<select id=\"input-like\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<option>Select an option</option>\n" +
                        "\t\t\t\t\t\t\t\t\t</select>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t<div class=\"row\">\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"label\">\n" +
                        "\t\t\t\t\t\t\t\t\t<label>Things that should be improved in the future<br>(Check all that apply):</label>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t<div class=\"input\">\n" +
                        "\t\t\t\t\t\t\t\t\t<div>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"frontend-projects\" value=\"Front-end srojects\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<label for=\"vehicle1\">Front-end Projects</label><br>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"backend-projects\" value=\"Back-end Projects\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<label for=\"vehicle2\">Back-end Projects</label><br>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"data visualization\" value=\"Data Visualization\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<label for=\"vehicle3\">Data Visualization</label><br>\n" +
                        "\t\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t</form>\n" +
                        "\t\t\t\t\t</div>\n" +
                        "\t\t\t\t</body>\n" +
                        "\t\t\t</html>"
                },
                "2": {
                    "title": "Was war in der Lösung dieser Aufgabe die größte Schwierigkeit und wie haben Sie diese gelöst?",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "Die Zentrierung des Formulars war die größte Herausforderung bei dieser Aufgabe. Die Lösung war einmal ein div für die Labels und ein div für die Inputs zu erstellen. Das div für die Labels bekam das Property float:left sodass die beiden divs nebeneinander angeordnet waren."
                }
            }
        }
    }
}

