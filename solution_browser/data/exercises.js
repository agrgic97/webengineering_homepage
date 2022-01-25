
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
                    "video_link": "https://www.youtube.com/watch?v=PE3POxjDspo",
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
                    "video_link": "https://www.youtube.com/watch?v=HVmnv3k4__E",
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
    },
    "CSS2": {
        "3.1": {
            "title": "3.1. Responsiv mit Flexbox Desktop-First",
            "exercises": {
                "1": {
                    "title": "Implementieren Sie ausschließlich mit HTML und CSS Flexbox folgendes responsive Webdesign nach der Desktop-First-Strategie!",
                    "image": true,
                    "path": "src/assets/holy-grail1.png",
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": " <!DOCTYPE html>\n" +
                        "           <html>\n" +
                        "               <head>\n" +
                        "                   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                   <style>\n" +
                        "\n" +
                        "                       header {\n" +
                        "                           background-color: red;\n" +
                        "                           width: inherit;\n" +
                        "                           height: 200px;  \n" +
                        "                           margin-bottom: 15px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       aside {\n" +
                        "                           background-color: lawngreen;\n" +
                        "                           width: 20%;\n" +
                        "                           height: 500px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       article {\n" +
                        "                           background-color: blue;\n" +
                        "                           height: 500px;\n" +
                        "                           width: 60%;\n" +
                        "                           margin-left: 15px;\n" +
                        "                           margin-right: 15px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       footer {\n" +
                        "                           background-color: violet;\n" +
                        "                           width: 20%;\n" +
                        "                           height: 500px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .main-section {\n" +
                        "                           display: flex;\n" +
                        "                           flex-flow: row;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       @media (max-width: 992px) {\t\n" +
                        "                           header {\n" +
                        "                               background-color: red;\n" +
                        "                               width: inherit;\n" +
                        "                               height: 200px;  \n" +
                        "                               margin-bottom: 15px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           aside {\n" +
                        "                               background-color: lawngreen;\n" +
                        "                               width: 30%;\n" +
                        "                               height: 800px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           article {\n" +
                        "                               background-color: blue;\n" +
                        "                               height: 800px;\n" +
                        "                               width: 70%;\n" +
                        "                               margin: 0;   \n" +
                        "                           }\n" +
                        "\n" +
                        "                           footer {\n" +
                        "                               background-color: violet;\n" +
                        "                               width: 100%;\n" +
                        "                               height: 300px;\n" +
                        "                               margin-top: 15px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           .main-section {\n" +
                        "                               display: flex;\n" +
                        "                               flex-wrap: wrap;\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "            \n" +
                        "                       @media (max-width: 768px) {\n" +
                        "                           header {\n" +
                        "                               background-color: red;\n" +
                        "                               width: inherit;\n" +
                        "                               height: 200px; \n" +
                        "                               margin: 0; \n" +
                        "                           }\n" +
                        "\n" +
                        "                           aside {\n" +
                        "                               background-color: lawngreen;\n" +
                        "                               width: inherit;\n" +
                        "                               height: 800px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           article {\n" +
                        "                               background-color: blue;\n" +
                        "                               height: 1000px;\n" +
                        "                               width: inherit;\n" +
                        "                               margin: 0;   \n" +
                        "                           }\n" +
                        "\n" +
                        "                           footer {\n" +
                        "                               background-color: violet;\n" +
                        "                               width: inherit;\n" +
                        "                               height: 300px;\n" +
                        "                               margin: 0;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           .main-section {\n" +
                        "                               display: block;\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "                   </style>\n" +
                        "               </head>\n" +
                        "               <body>\n" +
                        "                   <header></header>\n" +
                        "                   <div class=\"main-section\">\n" +
                        "                       <aside></aside>\n" +
                        "                       <article></article>\n" +
                        "                       <footer></footer>\n" +
                        "                   </div>\n" +
                        "               </body>\n" +
                        "           </html>"
                }
            }
        },
        "3.2": {
            "title": "3.2. Responsiv mit Grid Mobile-First",
            "exercises": {
                "1": {
                    "title": "Implementieren Sie das gleiche responsive Webdesign wie in Aufgabe 3.1 allerdings mit Grid und der Mobile-First-Strategie! Vermeiden Sie diesmal außerdem das Erscheinen von Scrollbars.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": " <!DOCTYPE html>\n" +
                        "           <html>\n" +
                        "               <head>\n" +
                        "                   <style>\n" +
                        "                       .grid-container {\n" +
                        "                           display: grid;\n" +
                        "                           grid-template-columns: repeat(12, 1fr);\n" +
                        "                           grid-template-rows: 10vh 27vh 50vh 10vh;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       header {\n" +
                        "                           background-color: red;\n" +
                        "                           grid-column: 1 / 13;\n" +
                        "                           grid-row: 1 / 2;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       aside {\n" +
                        "                           background-color: lawngreen;\n" +
                        "                           grid-column: 1 / 13;\n" +
                        "                           grid-row: 2 / 3;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       article {\n" +
                        "                           background-color: blue;\n" +
                        "                           grid-column: 1 / 13;\n" +
                        "                           grid-row: 3 / 4;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       footer {\n" +
                        "                           background-color: violet;\n" +
                        "                           grid-column: 1 / 13;\n" +
                        "                           grid-row: 4 / 5;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       @media only screen and (min-width: 600px) {\n" +
                        "                           header {\n" +
                        "                               background-color: red;\n" +
                        "                               grid-column: 1 / 13;\n" +
                        "                               grid-row: 1 / 2;\n" +
                        "                               margin-bottom: 10px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           aside {\n" +
                        "                               background-color: lawngreen;\n" +
                        "                               grid-column: 1 / 4;\n" +
                        "                               grid-row: 2 / 4;\n" +
                        "                }\n" +
                        "\n" +
                        "                           article {\n" +
                        "                               background-color: blue;\n" +
                        "                               grid-column: 4 / 13;\n" +
                        "                               grid-row: 2 / 4;\n" +
                        "                               margin-left: 5px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           footer {\n" +
                        "                               background-color: violet;\n" +
                        "                               grid-column: 1 / 13;\n" +
                        "                               grid-row: 4 / 5;\n" +
                        "                               margin-top: 10px;\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "\n" +
                        "                       @media only screen and (min-width: 768px) {\n" +
                        "                           .grid-container {\n" +
                        "                               display: grid;\n" +
                        "                               grid-template-columns: repeat(12, 1fr);\n" +
                        "                               grid-template-rows: repeat(4, 24vh);\n" +
                        "                           }\n" +
                        "\n" +
                        "                           header {\n" +
                        "                               background-color: red;\n" +
                        "                               grid-column: 1 / 13;\n" +
                        "                               grid-row: 1 / 2;\n" +
                        "                               margin-bottom: 10px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           aside {\n" +
                        "                               background-color: lawngreen;\n" +
                        "                               grid-column: 1 / 4;\n" +
                        "                               grid-row: 2 / 5;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           article {\n" +
                        "                               background-color: blue;\n" +
                        "                               grid-column: 4 / 10;\n" +
                        "                               grid-row: 2 / 5;\n" +
                        "                               margin-left: 10px;\n" +
                        "                               margin-right: 10px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           footer {\n" +
                        "                               background-color: violet;\n" +
                        "                               grid-column: 10 / 13;\n" +
                        "                               grid-row: 2 / 5;\n" +
                        "                               margin-top: 0;\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "                   </style>\n" +
                        "               </head>\n" +
                        "               <body>\n" +
                        "                   <div class=\"grid-container\">\n" +
                        "                       <header></header>\n" +
                        "                       <aside></aside>\n" +
                        "                       <article></article>\n" +
                        "                       <footer></footer>\n" +
                        "                   </div>\n" +
                        "               </body>\n" +
                        "           </html>"
                }
            }
        },
        "3.3": {
            "title": "",
            "exercises": {
                "1": {
                    "title": "Implementieren Sie folgende Landing Page responsiv mit Grid Layout. Vermeiden Sie außerdem das Erscheinen von Scrollbars so weit wie möglich.",
                    "image": true,
                    "path": "src/assets/landing.png",
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": " <!DOCTYPE html>\n" +
                        "           <html>\n" +
                        "               <head>\n" +
                        "                   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                   <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n" +
                        "                   <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n" +
                        "                   <link href=\"https://fonts.googleapis.com/css2?family=Oswald&display=swap\" rel=\"stylesheet\">\n" +
                        "                   <style>\n" +
                        "                       * {\n" +
                        "                           font-family: 'Oswald', sans-serif;\n" +
                        "                           margin: 0;\n" +
                        "                           padding: 0;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .grid-container {\n" +
                        "                           display: grid;\n" +
                        "                           grid-template-columns: repeat(12, 1fr);\n" +
                        "                           grid-template-rows: repeat(12, 8.33vh);\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .navigator {\n" +
                        "                           grid-column: 1 / 13;\n" +
                        "                           grid-row: 1 / 2;\n" +
                        "                           background-color: #363636;\n" +
                        "                           display: flex;\n" +
                        "                           align-items: center;\n" +
                        "                           justify-content: center;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .navigator ul {\n" +
                        "                           display: flex;\n" +
                        "                           list-style: none;\n" +
                        "                           flex-direction: row;\n" +
                        "                           justify-content: center;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .navigator ul li a {\n" +
                        "                           text-decoration: none;\n" +
                        "                           color: white;\n" +
                        "                           margin-left: 10px;\n" +
                        "                           margin-right: 10px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .content-area {\n" +
                        "                           background-color: #ebeae5;\n" +
                        "                           grid-column: 1 / 13;\n" +
                        "                           grid-row: 2 / 10;\n" +
                        "                           display: grid;\n" +
                        "                           grid-template-columns: repeat(12, 1fr);\n" +
                        "                           grid-template-rows: repeat(12 ,1fr);\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .subheader {\n" +
                        "                           text-align: center;\n" +
                        "                           padding: 20px;\n" +
                        "                           grid-column: 1 / 13;\n" +
                        "                           grid-row: 1 / 2;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .image {\n" +
                        "                           grid-column: 1 / 7;\n" +
                        "                           grid-row: 2 / 13;\n" +
                        "                           display: flex;\n" +
                        "                           align-items: center;\n" +
                        "                           justify-content: center;\n" +
                        "                           margin-bottom: 20px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .image img {\n" +
                        "                           max-width: 100%;\n" +
                        "                           height: 100%;\n" +
                        "                           border: 1px solid black;\n" +
                        "                           border-radius: 5px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .content {\n" +
                        "                           grid-column: 7 / 13;\n" +
                        "                           grid-row: 2 / 13;\n" +
                        "                           display: flex;\n" +
                        "                           flex-direction: column;\n" +
                        "                           align-items: center;\n" +
                        "                           justify-content: center;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .content p {\n" +
                        "                           margin: 20px;\n" +
                        "                           text-align: center;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .button-content {\n" +
                        "                           text-decoration: none;\n" +
                        "                           color: white;\n" +
                        "                           background-color: #f88e37;\n" +
                        "                           border: 1px solid #f88e37;\n" +
                        "                           border-radius: 5px;\n" +
                        "                           padding: 5px 50px 5px 50px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       @media screen and (max-width: 600px) {\n" +
            "                                       .button-content {\n" +
                        "                               padding: 5px 30px 5px 30px;\n" +
                        "                           }\n" +
                        "\n" +
                        "                           .image img {\n" +
                        "                               width: 90%;\n" +
                        "                               height: auto;\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .button-footer {\n" +
                        "                           text-decoration: none;\n" +
                        "                           color: white;\n" +
                        "                           background-color: #f88e37;\n" +
                        "                           border: 1px solid #f88e37;\n" +
                        "                           border-radius: 5px;\n" +
                        "                           padding: 5px 80px 5px 80px;\n" +
                        "                           max-width: 300px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .footer {\n" +
                        "                           grid-column: 1 / 13;\n" +
                        "                           grid-row: 10 / 13;\n" +
                        "                           background-color: #011826;\n" +
                        "                           display: flex;\n" +
                        "                           flex-direction: column;\n" +
                        "                           align-items: center;\n" +
                        "                           justify-content: center;\n" +
                        "                       }\n" +
                        "\n" +
                        "                       .footer p {\n" +
                        "                           color: white;\n" +
                        "                           text-decoration: none;\n" +
                        "                           margin: 20px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                   </style>\n" +
                        "               </head>\n" +
                        "               <body>\n" +
                        "                   <div class=\"grid-container\">\n" +
                        "                       <div class=\"navigator\">\n" +
                        "                           <ul>\n" +
                        "                               <li><a href=\"#\">The book series</a></li>\n" +
                        "                               <li><a href=\"#\">Testimonials</a></li>\n" +
                        "                               <li><a href=\"#\">The Author</a></li>\n" +
                        "                               <li><a href=\"#\">Free Resources</a></li>\n" +
                        "                           </ul>\n" +
                        "                       </div>\n" +
                        "                       <div class=\"content-area\">\n" +
                        "                           <div class=\"subheader\">\n" +
                        "                               <h2>You dont know JavaScript</h2>\n" +
                        "                           </div>\n" +
                        "                           <div class=\"image\">\n" +
                        "                               <img src=\"landing-img.png\">\n" +
                        "                           </div>\n" +
                        "                           <div class=\"content\">\n" +
                        "                               <p>Dont't just drift through Javascript.</p>\n" +
                        "                               <p>Understand how Javascript works</p>\n" +
                        "                               <p>Start your journey through the bumpy side of Javascript</p>\n" +
                        "                               <a class=\"button-content\" href=\"#\">ORDER YOUR COPY NOW</a>\n" +
                        "                           </div>\n" +
                        "                       </div>\n" +
                        "                       <div class=\"footer\">\n" +
                        "                           <p>The first ebook in the book series is absolutely free</p>\n" +
                        "                           <a class=\"button-footer\" href=\"#\">FIND OUT MORE ABOUT THIS OFFER</a>\n" +
                        "                       </div>\n" +
                        "                   </div>\n" +
                        "               </body>\n" +
                        "           </html>"
                }
            }
        }
    },
    "JavaScript": {
        "4.1": {
            "title": "4.1. Funktionen",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine Funktion identity(), die ein Argument als Parameter entgegen nimmt und dieses als Ergebnis zurück gibt.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " function identity(arg) {\n" +
                        "             return arg;\n" +
                        "           }"
                },
                "2": {
                    "title": "Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " function identity_function(arg) {\n" +
                        "               return function (){\n" +
                        "                   return arg;\n" +
                        "               }\n" +
                        "           }"
                },
                "3": {
                    "title": "Schreiben Sie zwei binäre Funktionen add und mul, die Summe und Produkt berechnen.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " function add(arg1, arg2) {\n" +
                        "               if(typeof arg1 == 'number' && typeof arg2 == 'number') {\n" +
                        "                   return arg1 + arg2;\n" +
                        "               }\n" +
                        "           }\n" +
                        "\n" +
                        "           function mul(arg1, arg2) {\n" +
                        "               if(typeof arg1 == 'number' && typeof arg2 == 'number') {\n" +
                        "                   return arg1 * arg2;\n" +
                        "               }\n" +
                        "           }"
                },
                "4": {
                    "title": "Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " function addf(arg1) {\n" +
                        "               return function(arg2) {\n" +
                        "                   return add(arg1,arg2);\n" +
                        "               }\n" +
                        "           }"
                },
                "5": {
                    "title": "Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " function applyf(operation) {\n" +
                        "               if(typeof operation == 'function') {\n" +
                        "                   return function(arg1) {\n" +
                        "                       return function(arg2) {\n" +
                        "                           return operation(arg1,arg2);\n" +
                        "                       }\n" +
                        "                   }\n" +
                        "               }\n" +
                        "           }"
                }
            }
        },
        "4.2": {
            "title": "4.2. Objekte",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie die Prototypen Person und Auto in JavaScript, so dass jede Person weiß, welche Autos sie besitzt. Schreiben Sie eine Funktion conflict(), die feststellt, ob ein Auto von mehr als einer Person besessen wird.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " function Person(firstname, lastname, age , car) {\n" +
                        "               this.firstname = firstname;\n" +
                        "               this.lastname = lastname;\n" +
                        "               this.age = age;\n" +
                        "               this.car = car;\n" +
                        "           }\n" +
                        "\n" +
                        "           function Auto(make, model, color){\n" +
                        "               this.make = make;\n" +
                        "               this.model = model;\n" +
                        "               this.color = color;\n" +
                        "               this.collision = function() {\n" +
                        "                   var count = 0;\n" +
                        "                   personen.forEach(element => {\n" +
                        "                       if(element.car === this) {\n" +
                        "                           count++;\n" +
                        "                       }\n" +
                        "                   });\n" +
                        "    \n" +
                        "                   return count > 1 ? true : false;\n" +
                        "               }\n" +
                        "           }\n" +
                        "\n" +
                        "           var autos = [new Auto('VW','Golf','schwarz'),new Auto('Ford','Mustang','blau'),new Auto('Porsche','911','rot')];\n" +
                        "           var personen = [new Person('Alice','Wunderland',16,autos[0]),new Person('Bernd','Brot',57,autos[1]),new Person('Kurt C.','Hose',43,autos[0])];\n" +
                        "\n" +
                        "           console.log(autos[0].collision());\n" +
                        "           console.log(autos[1].collision());\n" +
                        "           console.log(autos[2].collision());"
                }
            }
        },
        "4.3": {
            "title": "4.3. Fibonacci",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie im Browser die Fibonacci-Funktion in JavaScript und geben Sie die ersten 2000 Fibonacci-Zahlen 0,1,1,2,3,5,8,13,... auf der Konsole mit console.log() aus.\n" +
                        "\n" +
                        "Achten Sie auf Performanz: Berechnen Sie jeden Fibonacci-Wert nur einmal. Speichern Sie zu diesem Zweck jede bereits berechnete Fibonacci-Zahl in einer Tabelle.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": " <!DOCTYPE html>\n" +
                        "           <html>\n" +
                        "               <head>\n" +
                        "        \n" +
                        "                   <style>\n" +
                        "                       table, th, td {\n" +
                        "                           border: 1px solid black;\n" +
                        "                           border-collapse: collapse;\n" +
                        "                       }\n" +
                        "                   </style>\n" +
                        "               </head>\n" +
                        "               <body>\n" +
                        "                   <h1>Übung 4.3</h1>\n" +
                        "                   <table id=\"table\">\n" +
                        "                       <tr>\n" +
                        "                           <th colspan=\"2\">Fibonacci-Sequenz</th>\n" +
                        "                       </tr>\n" +
                        "                       <tr>\n" +
                        "                           <th>n</th>\n" +
                        "                           <th>fibonacci(n)</th>\n" +
                        "                       </tr>\n" +
                        "                   </table>\n" +
                        "                   <script>\n" +
                        "                       function fibonacci(num, memo) {\n" +
                        "                           memo = memo || {};\n" +
                        " \n" +
                        "                           if (memo[num]) return memo[num];\n" +
                        "                           if (num == 1 || num == 2) return 1;\n" +
                        "                           if (num == 0) return 0;\n" +
                        " \n" +
                        "                           if (num > 0) {\n" +
                        "                               return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);\n" +
                        "                           }\n" +
                        "                           else{\n" +
                        "                               return memo[num] = Math.pow(-1, num + 1) * fibonacci(-num);\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "         \n" +
                        "                       for (var i = 0; i < 2000; i++) {\n" +
                        "                           var table = document.getElementById(\"table\");\n" +
                        "                           var row = table.insertRow(-1);\n" +
                        "                 \n" +
                        "                           var cell1 = row.insertCell(0);\n" +
                        "                           var cell2 = row.insertCell(1);\n" +
                        " \n" +
                        "                           cell1.innerHTML = i;\n" +
                        "                           cell2.innerHTML = fibonacci(i);\n" +
                        "\n" +
                        "                           console.log(fibonacci(i));\n" +
                        "                       }\n" +
                        "             \n" +
                        "                   </script>\n" +
                        "               </body>\n" +
                        "           </html>"
                },
                "2": {
                    "title": "Was ist die größte Fibonacci-Zahl, die sich noch als Integer sicher speichern lässt (Number.MAX_SAFE_INTEGER)? Die wievielte Fibonacci-Zahl in der Fibonacci-Folge ist das?",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "927372692193079200000 ist die 102. Fibonacci-Zahl"
                },
                "3": {
                    "title": "Was ist die größte Fibonacci-Zahl, die sich noch als Number speichern lässt (Number.MAX_VALUE)? Die wievielte Fibonacci-Zahl in der Fibonacci-Folge ist das (d.h. welche Stelle in der Fibonacci-Folge)?",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "1.3069892237633987e+308 ist die 1476. Fibonacci-Zahl."
                },
                "4": {
                    "title": "Wechseln Sie zu BigInt, um alle 2000 Fibonacci-Zahlen korrekt anzuzeigen. Geben Sie hier HTML- und JavaScript-Code zusammen ein:",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": " <!DOCTYPE html>\n" +
                        "           <html>\n" +
                        "               <head>\n" +
                        "        \n" +
                        "                   <style>\n" +
                        "                       table, th, td {\n" +
                        "                           border: 1px solid black;\n" +
                        "                           border-collapse: collapse;\n" +
                        "                       }\n" +
                        "                   </style>\n" +
                        "               </head>\n" +
                        "               <body>\n" +
                        "                   <h1>Übung 4.3</h1>\n" +
                        "                   <table id=\"table\">\n" +
                        "                       <tr>\n" +
                        "                           <th colspan=\"2\">Fibonacci-Sequenz</th>\n" +
                        "                       </tr>\n" +
                        "                       <tr>\n" +
                        "                           <th>n</th>\n" +
                        "                           <th>fibonacci(n)</th>\n" +
                        "                       </tr>\n" +
                        "                   </table>\n" +
                        "                   <script>\n" +
                        "                       function fibonacci(num, memo) {\n" +
                        "                           memo = memo || {};\n" +
                        " \n" +
                        "                           if (memo[num]) return memo[num];\n" +
                        "                           if (num == 1n || num == 2n) return 1n;\n" +
                        "                           if (num == 0n) return 0n;\n" +
                        " \n" +
                        "                           if (num > 0n) {\n" +
                        "                               return memo[num] = fibonacci(num - 1n, memo) + fibonacci(num - 2n, memo);\n" +
                        "                           }\n" +
                        "                           else{\n" +
                        "                               return memo[num] = Math.pow(-1, num + 1n) * fibonacci(-num);\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "         \n" +
                        "                       for (var i = 0n; i <= 2000; i++) {\n" +
                        "                           var table = document.getElementById(\"table\");\n" +
                        "                           var row = table.insertRow(-1);\n" +
                        "                 \n" +
                        "                           var cell1 = row.insertCell(0);\n" +
                        "                           var cell2 = row.insertCell(1);\n" +
                        " \n" +
                        "                           cell1.innerHTML = i;\n" +
                        "                           cell2.innerHTML = fibonacci(i);\n" +
                        "\n" +
                        "                           console.log(fibonacci(i));\n" +
                        "                       }\n" +
                        "             \n" +
                        "                   </script>\n" +
                        "               </body>\n" +
                        "           </html>"
                },
                "5": {
                    "title": "Optional: Was ist die größte Fibonacci-Zahl, die Sie mit BigInt korrekt berechnet haben? An welcher Stelle in der Fibonacci-Folge steht diese?",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "4224696333392304878706725602341482782579852840250681098010280137314308584370130707224123599639141511088446087538909603607640194711643596029271983312598737326253555802606991585915229492453904998722256795316982874482472992263901833716778060607011615497886719879858311468870876264597369086722884023654422295243347964480139515349562972087652656069529806499841977448720155612802665404554171717881930324025204312082516817125\n" +
                        "\n" +
                        "an 2000. Stelle"
                }
            }
        }
    },
    "DOM": {
        "5.1": {
            "title": "5.1. Performanzmessungen von DOM-Operationen",
            "exercises": {
                "1": {
                    "title": "Implementieren Sie Performanzmessungen zum Vergleich von innerHTML, innerText, textContent und outerHTML selbstständig in JavaScript durch Nutzung der DOM API. Geben Sie die Messergebnisse als Tabelle aus. Verwenden Sie die eingebauten Zeitmess-Funktionen performance.now (), siehe auch When-milliseconds-are-not-enough-performance-now. Suchen Sie eine möglichst kurze und elegante Lösung.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": " <!DOCTYPE html>\n" +
                        "           <html>\n" +
                        "               <head>\n" +
                        "                   <meta charset=\"utf-8\">\n" +
                        "                   <style>\n" +
                        "                       table, tr, th, td {\n" +
                        "                           border: 1px solid black;\n" +
                        "                       }\n" +
                        "                   </style>\n" +
                        "                   <script>\n" +
                        "                       function init() {\n" +
                        "                           var start = performance.now();\n" +
                        "                           document.getElementById(\"innerHTML\").innerHTML = \"innerHTML\";\n" +
                        "                           var test1 = performance.now();\n" +
                        "                           document.getElementById(\"innerText\").innerText = \"innerText\";\n" +
                        "                           var test2 = performance.now();\n" +
                        "                           document.getElementById(\"textContent\").textContent = \"textContent\";\n" +
                        "                           var test3 = performance.now();\n" +
                        "                           document.getElementById(\"outerHTML\").outerHTML = \"<td class='outerHTML'>outerHTML</td>\";\n" +
                        "                           var test4 = performance.now();\n" +
                        "\n" +
                        "                           document.getElementById(\"innerHTML-time\").textContent = (test1 - start) + \" ms\";\n" +
                        "                           document.getElementById(\"innerText-time\").textContent = (test2 - test1) + \" ms\";\n" +
                        "                           document.getElementById(\"textContent-time\").textContent = (test3 - test2) + \" ms\";\n" +
                        "                           document.getElementById(\"outerHTML-time\").textContent = (test4 - test3) + \" ms\";\n" +
                        "                       }\n" +
                        "                   </script>\n" +
                        "               </head>\n" +
                        "               <body onload=\"init()\">\n" +
                        "                   <h1>Übung 5.1</h1>\n" +
                        "                   <table>\n" +
                        "                       <tr>\n" +
                        "                           <th colspan=\"2\">Performanzmessungen von DOM-Operationen</th>\n" +
                        "                       </tr>\n" +
                        "                       <tr>\n" +
                        "                           <th>Funktion</th>\n" +
                        "                           <th>Zeit</th>\n" +
                        "                       </tr>\n" +
                        "                       <tr>\n" +
                        "                           <td id=\"innerHTML\"></td>\n" +
                        "                           <td id=\"innerHTML-time\"></td>\n" +
                        "                       </tr>\n" +
                        "                       <tr>\n" +
                        "                           <td id=\"innerText\"></td>\n" +
                        "                           <td id=\"innerText-time\"></td>\n" +
                        "                       </tr>\n" +
                        "                       <tr>\n" +
                        "                           <td id=\"textContent\"></td>\n" +
                        "                           <td id=\"textContent-time\"></td>\n" +
                        "                       </tr>\n" +
                        "                       <tr>\n" +
                        "                           <td id=\"outerHTML\"></td>\n" +
                        "                           <td id=\"outerHTML-time\"></td>\n" +
                        "                       </tr>\n" +
                        "                   </table>\n" +
                        "               </body>\n" +
                        "           </html>"
                }
            }
        },
        "5.2": {
            "title": "5.2. Rednerliste mit Zeitmessung",
            "exercises": {
                "1": {
                    "title": "Implementieren Sie die interaktive Anwendung \"Rednerliste mit Zeitmessung\" selbstständig in JavaScript durch Nutzung der DOM API und der Timer-Funktionen. Neue Redner sollen auf Knopfdruck hinzugefügt werden können. Deren Uhr wird dann sofort automatisch gestartet und alle anderen Uhren angehalten. Bei jedem Redner soll die individuelle, gemessene Redezeit sekundengenau angezeigt werden. Für jeden Redner soll es einen eigenen Start-/Stopp-Button geben. Es soll immer nur eine Uhr laufen. Angezeigt werden sollen die bisherigen Summenzeiten aller Redebeiträge der betreffenden Person. Suchen Sie eine möglichst kurze und elegante Lösung. Achten Sie gleichzeitig auf gute Usability: z.B. wenn die Eingabe mit einem Return beendet wird, soll der Button-Click nicht mehr erforderlich sein, usw.",
                    "image": true,
                    "path": "src/assets/Rednerliste.png",
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": " <!DOCTYPE html>\n" +
                        "           <html>\n" +
                        "                <head>\n" +
                        "                 <meta charset=\"utf-8\">\n" +
                        "                   <style>\n" +
                        "                       .listElement > *{\n" +
                        "                           margin-right: 10px;\n" +
                        "                       }\n" +
                        "\n" +
                        "                     .speaker, .time {\n" +
                        "                         font-size: 32px;\n" +
                        "                      }\n" +
                        "\n" +
                        "                        .timerButtonStart, .timerButtonStop {\n" +
                        "                            border: 1px solid black;\n" +
                        "                            padding: 2px 10px 2px 10px;\n" +
                        "                        }\n" +
                        "                  </style>\n" +
                        "                </head>\n" +
                        "               <body>\n" +
                        "                   <h1>Rednerliste</h1>\n" +
                        "                   <label>Neuer Redner:</label>\n" +
                        "                   <input id=\"name\" type=\"text\">\n" +
                        "                   <button id=\"submit\">Hinzufügen</button>\n" +
                        "                   <ul id=\"speakerslist\">\n" +
                        "                   </ul>\n" +
                        "                   <script type=\"text/javascript\" src=\"uebung5_2.js\"></script>\n" +
                        "               </body>\n" +
                        "           </html> "
                },
                "2": {
                    "title": "",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " var submitButton = document.getElementById(\"submit\");\n" +
                        "           var input = document.getElementById(\"name\");\n" +
                        "           var speakersList = document.getElementById(\"speakerslist\");\n" +
                        "           var speakers = new Array();\n" +
                        "\n" +
                        "           submitButton.addEventListener(\"click\",function(e) {\n" +
                        "               if(input.value !== \"\") {\n" +
                        "                   addSpeaker();\n" +
                        "                   initTimer(e.target);\n" +
                        "               }\n" +
                        "           });\n" +
                        "\n" +
                        "\n" +
                        "           input.addEventListener(\"keyup\",function(e) {\n" +
                        "               if(e.key === 'Enter' && input.value !== \"\") {\n" +
                        "                   addSpeaker();\n" +
                        "                   initTimer(e.target.nextElementSibling);\n" +
                        "               }\n" +
                        "           });\n" +
                        "\n" +
                        "\n" +
                        "           function addSpeaker() {\n" +
                        "    \n" +
                        "               let listElement = document.createElement(\"li\");\n" +
                        "               let textNode = document.createElement(\"span\");\n" +
                        "               let timeNode = document.createElement(\"span\");\n" +
                        "               let seconds = document.createElement(\"span\");\n" +
                        "               let minutes = document.createElement(\"span\");\n" +
                        "               let hours = document.createElement(\"span\");\n" +
                        "               let buttonNode = document.createElement(\"button\");\n" +
                        "\n" +
                        "               let newSpeaker;\n" +
                        "               speakers.push(newSpeaker);\n" +
                        "\n" +
                        "               listElement.setAttribute(\"class\",\"listElement\");\n" +
                        "\n" +
                        "               textNode.appendChild(document.createTextNode(document.getElementById(\"name\").value));\n" +
                        "               textNode.className = \"speaker\"\n" +
                        "\n" +
                        "               hours.appendChild(document.createTextNode(\"00\"));\n" +
                        "               hours.className = \"hours\";\n" +
                        "               minutes.appendChild(document.createTextNode(\"00\"));\n" +
                        "               minutes.className = \"minutes\";\n" +
                        "               seconds.appendChild(document.createTextNode(\"00\"));\n" +
                        "               seconds.className = \"seconds\";\n" +
                        "\n" +
                        "               timeNode.appendChild(hours);\n" +
                        "               timeNode.appendChild(document.createTextNode(\":\"));\n" +
                        "               timeNode.appendChild(minutes);\n" +
                        "               timeNode.appendChild(document.createTextNode(\":\"));\n" +
                        "               timeNode.appendChild(seconds);\n" +
                        "\n" +
                        "               timeNode.className = \"time\";\n" +
                        "\n" +
                        "               buttonNode.setAttribute(\"class\",\"timerButton\");\n" +
                        "               buttonNode.appendChild(document.createTextNode(\"Stop!\"));\n" +
                        "    \n" +
                        "\n" +
                        "               listElement.appendChild(textNode);\n" +
                        "               listElement.appendChild(timeNode);\n" +
                        "               listElement.appendChild(buttonNode);\n" +
                        "               speakersList.appendChild(listElement);\n" +
                        "    \n" +
                        "               document.getElementById(\"name\").value = \"\";\n" +
                        "           }\n" +
                        "\n" +
                        "\n" +
                        "           function initTimer(e) {\n" +
                        "\n" +
                        "               let currentElement = e.nextElementSibling.lastChild;\n" +
                        "\n" +
                        "               let list = Array.from(currentElement.parentElement.children);\n" +
                        "               let index = list.indexOf(currentElement);\n" +
                        "\n" +
                        "               let button = currentElement.lastChild;\n" +
                        "               let buttonList = document.getElementsByClassName(\"timerButton\");\n" +
                        "\n" +
                        "               button.onclick = function(e) {\n" +
                        "                   toggleButtons(e.target, index, buttonList);\n" +
                        "               }\n" +
                        "\n" +
                        "               runTimer(currentElement, index);\n" +
                        "\n" +
                        "               for(var i = 0; i < speakers.length; i++) {\n" +
                        "                   if(index !== i) {\n" +
                        "                       clearInterval(speakers[i]); \n" +
                        "                       buttonList[i].textContent = \"Start!\";\n" +
                        "                   } \n" +
                        "               }\n" +
                        "           }\n" +
                        "\n" +
                        "           function runTimer(currentElement, index) {\n" +
                        "\n" +
                        "               let sec = parseInt(currentElement.childNodes[1].childNodes[4].textContent);\n" +
                        "               let min = parseInt(currentElement.childNodes[1].childNodes[2].textContent);\n" +
                        "               let hrs = parseInt(currentElement.childNodes[1].childNodes[0].textContent);\n" +
                        "\n" +
                        "\n" +
                        "               speakers[index] = setInterval(function() {\n" +
                        "                   sec++;\n" +
                        "                   if (sec >= 60) {\n" +
                        "                       sec = 0;\n" +
                        "                       min++;\n" +
                        "                       if (min >= 60) {\n" +
                        "                           min = 0;\n" +
                        "                           hrs++;\n" +
                        "                       }\n" +
                        "                   }\n" +
                        "\n" +
                        "                   currentElement.childNodes[1].childNodes[4].textContent = (sec > 9 ? sec : \"0\" + sec);\n" +
                        "                   currentElement.childNodes[1].childNodes[2].textContent = (min > 9 ? min : \"0\" + min);\n" +
                        "                   currentElement.childNodes[1].childNodes[0].textContent = (hrs > 9 ? hrs : \"0\" + hrs);\n" +
                        "               },1000);\n" +
                        "\n" +
                        "           }\n" +
                        "\n" +
                        "           function toggleButtons(currentElement, index, buttonList) {\n" +
                        "\n" +
                        "               let row = currentElement.parentElement;\n" +
                        "\n" +
                        "               if(currentElement.textContent === \"Start!\") {\n" +
                        "                   currentElement.textContent = \"Stopp!\";\n" +
                        "                   runTimer(row, index);\n" +
                        "\n" +
                        "                   for(let i = 0; i < speakers.length; i++) {\n" +
                        "                       if(index !== i) {\n" +
                        "                           buttonList[i].textContent = \"Start!\";\n" +
                        "                           stopTimer(i);\n" +
                        "                       }\n" +
                        "                   }\n" +
                        "               }\n" +
                        "               else if(currentElement.textContent === \"Stopp!\") {\n" +
                        "                   currentElement.textContent = \"Start!\";\n" +
                        "                   stopTimer(index);\n" +
                        "               }\n" +
                        "           }\n" +
                        "\n" +
                        "           function stopTimer(index) {\n" +
                        "    \n" +
                        "               clearInterval(speakers[index]);\n" +
                        "           }"
                }
            }
        },
        "5.3": {
            "title": "5.3. TopSort als WebApp",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine Web-Oberfläche, in der man beliebige Beziehungen (Vorrang-Relationen) eingeben kann, für die dann die topologische Sortierung per Knopfdruck auf der Webseite ausgegeben wird.\n" +
                        "\n" +
                        "Für die Eingabe können Sie HTML5-Eingabefelder oder contentEditable verwenden.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": " <!DOCTYPE html>\n" +
                        "           <html>\n" +
                        "               <head>\n" +
                        "                   <meta charset=\"utf-8\">\n" +
                        "                   <style>\n" +
                        "                       #container {\n" +
                        "                           display: flex;\n" +
                        "                           flex-direction: row;\n" +
                        "                           margin-top: 20px;\n" +
                        "                       }\n" +
                        "                       .entries {\n" +
                        "                           border: 1px solid black;\n" +
                        "                           padding: 20px;\n" +
                        "                       }\n" +
                        "                   </style>\n" +
                        "               </head>\n" +
                        "               <body>\n" +
                        "                   <h1>Übung 5.3</h1>\n" +
                        "                   <h2>Topsort</h2>\n" +
                        "                   <div>\n" +
                        "                       <input id=\"relation\" type=\"text\" placeholder=\"format: x->y\">\n" +
                        "                       <button id=\"add\">add</button>\n" +
                        "                       <button id=\"clear\">clear</button>\n" +
                        "                   </div>\n" +
                        "                   <div id=\"container\"></div>\n" +
                        "                   <script type=\"text/javascript\" src=\"uebung5_3.js\"></script>\n" +
                        "               </body>\n" +
                        "           </html>"
                },
                "2": {
                    "title": "",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " var relations = new Array();\n" +
                        "\n" +
                        "           var input = document.getElementById(\"relation\");\n" +
                        "           var add = document.getElementById(\"add\");\n" +
                        "           var clear = document.getElementById(\"clear\");\n" +
                        "\n" +
                        "           add.addEventListener(\"click\",function() {\n" +
                        "               clearGraph();\n" +
                        "               updateGraph(input.value);\n" +
                        "               input.value = \"\";\n" +
                        "           });\n" +
                        "\n" +
                        "           input.addEventListener(\"keyup\",function(e) {\n" +
                        "               if(e.key === \"Enter\") {\n" +
                        "                   clearGraph();\n" +
                        "                   updateGraph(input.value);\n" +
                        "                   input.value = \"\";\n" +
                        "               }\n" +
                        "           });\n" +
                        "\n" +
                        "           clear.addEventListener(\"click\",function() {\n" +
                        "               clearGraph();\n" +
                        "               deleteData();\n" +
                        "           });\n" +
                        "\n" +
                        "           function topsort(arg) {\n" +
                        "\n" +
                        "               var result = new Array();\n" +
                        "               var nodes = new Object();\n" +
                        "               var temp = Array.from(new Set(arg.flat()));\n" +
                        "    \n" +
                        "               for(var i = 0; i < temp.length; i++) {\n" +
                        "                   nodes[temp[i]] = 0;\n" +
                        "               }\n" +
                        "\n" +
                        "               arg.forEach(element => {\n" +
                        "                   nodes[element[1]] += 1;\n" +
                        "               });\n" +
                        "\n" +
                        "               while(Object.keys(nodes).length) {\n" +
                        "                   if(Object.values(nodes).indexOf(0) == -1) return null;\n" +
                        "                   for (const [key, value] of Object.entries(nodes)) {\n" +
                        "                       if(value == 0) {\n" +
                        "                           result.push(key);\n" +
                        "                           delete nodes[key]\n" +
                        "                           arg.forEach(node => {\n" +
                        "                               if(node[0] === key) {\n" +
                        "                                   nodes[node[1]] -= 1;\n" +
                        "                               }\n" +
                        "                           });\n" +
                        "                       }\n" +
                        "                   }\n" +
                        "               }\n" +
                        "               return result;    \n" +
                        "           }\n" +
                        "\n" +
                        "           function updateGraph(input) {\n" +
                        "               let relation = input.split(\"->\");\n" +
                        "               relations.push(relation);\n" +
                        "               console.log(relations);\n" +
                        "\n" +
                        "               let output = topsort(relations);\n" +
                        "\n" +
                        "               if(output !== null) {\n" +
                        "                   output.forEach(element => {\n" +
                        "                       let entry = document.createElement(\"div\");\n" +
                        "                       entry.className = \"entries\";\n" +
                        "                       entry.appendChild(document.createTextNode(element));\n" +
                        "                       document.getElementById(\"container\").appendChild(entry);\n" +
                        "                   });\n" +
                        "               }\n" +
                        "           }\n" +
                        "\n" +
                        "           function deleteData() {\n" +
                        "               relations.length = 0;\n" +
                        "           }\n" +
                        "\n" +
                        "           function clearGraph() {\n" +
                        "               let container = document.getElementById(\"container\");\n" +
                        "    \n" +
                        "               while(container.firstChild) {\n" +
                        "                   container.removeChild(container.firstChild);\n" +
                        "               }\n" +
                        "           }"
                }
            }
        }
    },
    "ECMAScript": {
        "6.1": {
            "title": "6.1. Klammerpaare",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine Webseite, in die man eine Zeichenkette mit beliebigen Buchstaben, Zahlen und Sonderzeichen eingeben kann, die beliebig geschachtelte Klammern [...], (...) und {...} enthält, so dass sofort geprüft wird, ob alle Klammerpaare korrekt geschachtelt sind. Das Eingabefeld der Zeichenkette soll rot gefärbt werden, wenn es ein Klammerpaar gibt, das falsch geschachtelt ist.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " let input = document.getElementById(\"input\")\n" +
                        "\n" +
                        "           input.addEventListener(\"keyup\" , () =>  {\n" +
                        "               checkSyntax(input.value) ? input.style.backgroundColor = 'white' : input.style.backgroundColor = 'red'\n" +
                        "           })\n" +
                        "\n" +
                        "\n" +
                        "           const checkSyntax = (arg) => {\n" +
                        "               let stack = new Array()\n" +
                        "\n" +
                        "               for (let char of arg) {\n" +
                        "                   if (['(','{','['].includes(char)) {\n" +
                        "                       stack.push(char)\n" +
                        "                   }\n" +
                        "        \n" +
                        "                   if([')','}',']'].includes(char)) {\n" +
                        "                       if(char == ')' && stack[stack.length - 1] == '(' && stack.length > 0) {\n" +
                        "                           stack.pop()\n" +
                        "                       }\n" +
                        "                       else if(char == '}' && stack[stack.length - 1] == '{' && stack.length > 0) {\n" +
                        "                           stack.pop()\n" +
                        "                       }\n" +
                        "                       else if(char == ']' && stack[stack.length - 1] == '[' && stack.length > 0) {\n" +
                        "                           stack.pop()\n" +
                        "                       }\n" +
                        "                       else {\n" +
                        "                           return false\n" +
                        "                       }\n" +
                        "                   }\n" +
                        "               }\n" +
                        "\n" +
                        "               return stack.length == 0 ? true : false\n" +
                        "           }\n" +
                        "\n" +
                        "\n" +
                        "           console.assert(checkSyntax('') === true, \"Test 1 fehlgeschlagen!\");\n" +
                        "           console.assert(checkSyntax('hallo{welt}') === true, \"Test 2 fehlgeschlagen!\");\n" +
                        "           console.assert(checkSyntax('[eins],{zwei},(drei)') === true, \"Test 3 fehlgeschlagen!\");\n" +
                        "           console.assert(checkSyntax('[{]}') === false, \"Test 4 fehlgeschlagen!\");\n" +
                        "           console.assert(checkSyntax('[{(verschachtelt)mit}Inhalt]') === true, \"Test 5 fehlgeschlagen!\");\n" +
                        "           console.assert(checkSyntax('{') === false, \"Test 6 fehlgeschlagen!\");\n" +
                        "           console.assert(checkSyntax(')(') === false, \"Test 7 fehlgeschlagen!\");\n" +
                        "           console.assert(checkSyntax('}[]') === false, \"Test 8 fehlgeschlagen!\");"
                }
            }
        },
        "6.2": {
            "title": "6.2. Topologische Iterierbarkeit",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine ES6-Klasse Vorrang für Vorrangrelationen, z.B. new Vorrang([ [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"studieren\", \"prüfen\"] ]). Wählen Sie eine Implementierung, die universell gültig, also nicht nur für dieses Beispiel gilt. (Überlegen Sie sich, über welche Properties und Methoden eine solche Klasse verfügen sollte und wie TopSort hier hineinspielt. Topologische Iterierbarkeit und topologischer Generator sind jedoch Gegenstand der nächsten Übungen weiter unten auf diesem Übungsblatt und sollten für die folgenden Aufgaben aufgespart werden.)\n" +
                        "\n" +
                        "Stellen Sie bei Ihrer Klasse die topologische Iterierbarkeit her (zunächst über das Iterationsprotokoll, ohne Generator, ohne yield).",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " class Vorrang {\n" +
                        "               constructor(args) {\n" +
                        "                   this.relations = args\n" +
                        "                   this.elements = new Set(this.relations.flat())\n" +
                        "                   this.predecessors = new Object()\n" +
                        "\n" +
                        "                   for (let element of this.elements) {\n" +
                        "                       this.predecessors[element] = 0\n" +
                        "                   }\n" +
                        "\n" +
                        "                   for (let entry of Object.entries(this.relations)) {\n" +
                        "                       this.predecessors[entry[1][1]] += 1\n" +
                        "                   }\n" +
                        "        \n" +
                        "                   this.predecessors = Object.fromEntries(\n" +
                        "                       Object.entries(this.predecessors).sort(([,a],[,b]) => a-b)\n" +
                        "                   );\n" +
                        "\n" +
                        "                   this.successors = new Map()\n" +
                        "\n" +
                        "                   for (let element of this.elements) {\n" +
                        "                       this.successors.set(element,[])\n" +
                        "                   }\n" +
                        "\n" +
                        "                   for (let entry of Object.entries(this.relations)) {\n" +
                        "                       let x = this.successors.get(entry[1][0])\n" +
                        "                       x.push(entry[1][1])\n" +
                        "                       this.successors.set(entry[1][0],x)\n" +
                        "                   }\n" +
                        "\n" +
                        "               }\n" +
                        "\n" +
                        "               [Symbol.iterator]() {\n" +
                        "                   return {\n" +
                        "                       next: () => {\n" +
                        "                           if (Object.values(this.predecessors).includes(0)) {\n" +
                        "                               let result = undefined\n" +
                        "                               for (let [key,value] of Object.entries(this.predecessors)) {\n" +
                        "                                   if (value == 0) {\n" +
                        "                                       result = key\n" +
                        "                                       delete this.predecessors[key]\n" +
                        "                                       for (let element of this.successors.get(key)) {\n" +
                        "                                           this.predecessors[element] -= 1\n" +
                        "                                       }\n" +
                        "                                       return {value: result, done: false}\n" +
                        "                                   }\n" +
                        "                               }\n" +
                        "                           }\n" +
                        "                           else {\n" +
                        "                               return {done: true}\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "                   }\n" +
                        "               }\n" +
                        "           }\n" +
                        "\n" +
                        "\n" +
                        "           const test1 = new Vorrang([ [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"studieren\", \"prüfen\"] ])\n" +
                        "           const test2 = new Vorrang([])\n" +
                        "           const test3 = new Vorrang([[\"unterhose\",\"hose\"], [\"shirt\", \"jacke\"], [\"socken\", \"schuhe\"], [\"socken\", \"hose\"], [\"hose\", \"jacke\"], [\"hose\", \"schuhe\"]])\n" +
                        "           const test4 = new Vorrang([[\"blitz\", \"donner\"], [\"regen\", \"traufe\"]])\n" +
                        "           const test5 = new Vorrang([['huhn', 'ei'], ['ei','huhn']])\n" +
                        "\n" +
                        "           let result1 = new Array()\n" +
                        "           let result2 = new Array()\n" +
                        "           let result3 = new Array()\n" +
                        "           let result4 = new Array()\n" +
                        "           let result5 = new Array()\n" +
                        "\n" +
                        "           for (const next of test1) {\n" +
                        "               result1.push(next)\n" +
                        "           }\n" +
                        "           for (const next of test2) {\n" +
                        "               result2.push(next)\n" +
                        "           }\n" +
                        "           for (const next of test3) {\n" +
                        "               result3.push(next)\n" +
                        "           }\n" +
                        "           for (const next of test4) {\n" +
                        "               result4.push(next)\n" +
                        "           }\n" +
                        "           for (const next of test5) {\n" +
                        "               result5.push(next)\n" +
                        "           }\n" +
                        "\n" +
                        "           console.assert(JSON.stringify(result1) === JSON.stringify(['schlafen','essen','studieren','prüfen']), \"Test 1 failed!\");\n" +
                        "           console.assert(JSON.stringify(result2) === JSON.stringify([]), \"Test 2 failed!\");\n" +
                        "           console.assert(JSON.stringify(result3) === JSON.stringify(['unterhose', 'shirt', 'socken', 'hose', 'jacke', 'schuhe']), \"Test 3 failed!\");\n" +
                        "           console.assert(JSON.stringify(result4) === JSON.stringify(['blitz', 'regen', 'donner', 'traufe']), \"Test 4 failed!\");\n" +
                        "           console.assert(JSON.stringify(result5) === JSON.stringify([]), \"Test 5 failed!\");"
                },
                "2": {
                    "title": "",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": ""
                }
            }
        },
        "6.3": {
            "title": "6.3. Topologischer Generator",
            "exercises": {
                "1": {
                    "title": "Stellen Sie bei Ihrer Klasse aus der letzten Aufgabe die topologische Iterierbarkeit mittels Generator her.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": " class Vorrang {\n" +
                        "               constructor(args) {\n" +
                        "                   this.relations = args\n" +
                        "                   this.elements = new Set(this.relations.flat())\n" +
                        "                   this.predecessors = new Object()\n" +
                        "\n" +
                        "                   for (let element of this.elements) {\n" +
                        "                       this.predecessors[element] = 0\n" +
                        "                   }\n" +
                        "\n" +
                        "                   for (let entry of Object.entries(this.relations)) {\n" +
                        "                       this.predecessors[entry[1][1]] += 1\n" +
                        "                   }\n" +
                        "        \n" +
                        "                   this.predecessors = Object.fromEntries(\n" +
                        "                       Object.entries(this.predecessors).sort(([,a],[,b]) => a-b)\n" +
                        "                   );\n" +
                        "\n" +
                        "                   this.successors = new Map()\n" +
                        "\n" +
                        "                   for (let element of this.elements) {\n" +
                        "                       this.successors.set(element,[])\n" +
                        "                   }\n" +
                        "\n" +
                        "                   for (let entry of Object.entries(this.relations)) {\n" +
                        "                       let x = this.successors.get(entry[1][0])\n" +
                        "                       x.push(entry[1][1])\n" +
                        "                       this.successors.set(entry[1][0],x)\n" +
                        "                   }\n" +
                        "\n" +
                        "               }\n" +
                        "\n" +
                        "               *[Symbol.iterator]() {\n" +
                        "        \n" +
                        "                   while (Object.values(this.predecessors).includes(0)) {\n" +
                        "                       for (let [key,value] of Object.entries(this.predecessors)) {\n" +
                        "                           if (value == 0) {\n" +
                        "                               yield key\n" +
                        "                               delete this.predecessors[key]\n" +
                        "                               for (let element of this.successors.get(key)) {\n" +
                        "                                   this.predecessors[element] -= 1\n" +
                        "                               }\n" +
                        "                           }\n" +
                        "                       }\n" +
                        "                   }\n" +
                        "               }\n" +
                        "           }\n" +
                        "\n" +
                        "\n" +
                        "           const test1 = new Vorrang([ [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"studieren\", \"prüfen\"] ])\n" +
                        "           const test2 = new Vorrang([])\n" +
                        "           const test3 = new Vorrang([[\"unterhose\",\"hose\"], [\"shirt\", \"jacke\"], [\"socken\", \"schuhe\"], [\"socken\", \"hose\"], [\"hose\", \"jacke\"], [\"hose\", \"schuhe\"]])\n" +
                        "           const test4 = new Vorrang([[\"blitz\", \"donner\"], [\"regen\", \"traufe\"]])\n" +
                        "           const test5 = new Vorrang([['huhn', 'ei'], ['ei','huhn']])\n" +
                        "\n" +
                        "           let result1 = new Array()\n" +
                        "           let result2 = new Array()\n" +
                        "           let result3 = new Array()\n" +
                        "           let result4 = new Array()\n" +
                        "           let result5 = new Array()\n" +
                        "\n" +
                        "           for (const next of test1) {\n" +
                        "               result1.push(next)\n" +
                        "           }\n" +
                        "           for (const next of test2) {\n" +
                        "               result2.push(next)\n" +
                        "           }\n" +
                        "           for (const next of test3) {\n" +
                        "               result3.push(next)\n" +
                        "           }\n" +
                        "           for (const next of test4) {\n" +
                        "               result4.push(next)\n" +
                        "           }\n" +
                        "           for (const next of test5) {\n" +
                        "               result5.push(next)\n" +
                        "           }\n" +
                        "\n" +
                        "           console.assert(JSON.stringify(result1) === JSON.stringify(['schlafen','essen','studieren','prüfen']), \"Test 1 failed!\");\n" +
                        "           console.assert(JSON.stringify(result2) === JSON.stringify([]), \"Test 2 failed!\");\n" +
                        "           console.assert(JSON.stringify(result3) === JSON.stringify(['unterhose', 'shirt', 'socken', 'hose', 'jacke', 'schuhe']), \"Test 3 failed!\");\n" +
                        "           console.assert(JSON.stringify(result4) === JSON.stringify(['blitz', 'regen', 'donner', 'traufe']), \"Test 4 failed!\");\n" +
                        "           console.assert(JSON.stringify(result5) === JSON.stringify([]), \"Test 5 failed!\");"
                }
            }
        },
        "6.4": {
            "title": "6.4. Proxy",
            "exercises": {
                "1": {
                    "title": "Erweitern Sie Ihre Vorrang-Klasse um Logging, indem Sie ein Proxy einfügen. Lassen Sie sich vom Logger bei jedem Schritt ausgeben, wie viele der Vorrangrelationen noch übrig bleiben. Verwenden Sie so weit wie möglich High-Level-Methoden wie Object.keys und High-Level-Datenstrukturen wie Map und Set und deren Methoden, anstatt mühsam von Hand zu iterieren und zu zählen.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": ""
                }
            }
        },
        "6.5": {
            "title": "6.5. DeepCopy",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine rekursive Funktion deepCopy( struct ) als ES6-Ausdruck, so dass beliebig geschachtelte Arrays und Objekte struct tiefenkopiert werden können. Verwenden Sie zu diesem Zweck den konditionalen ternären Operator, Array.map(), Object.fromEntries() und Object.entries(). Verwenden Sie dabei nur Arrow Functions und Ausdrücke, keine Anweisungen, keine Blöcke. Verwenden Sie nicht die JSON-Methoden.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": ""
                }
            }
        }
    },
    "Functional": {
        "7.1": {
            "title": "7.1. Funktionen in JavaScript",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegennimmt und eine Funktion zurückgibt, die dieses Argument zurückgibt.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const identity_function = arg => _ => arg"
                },
                "2": {
                    "title": "Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const addf = x => y => x + y"
                },
                "3": {
                    "title": "Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const applyf = func => x => y => op(x, y)"
                },
                "4": {
                    "title": "Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const curry = (func,...x) => (...y) => func(...x, ...y)"
                },
                "5": {
                    "title": "Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben, ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const inc1 = addf(1)\n" +
                        "\n" +
                        "          const inc2 = applyf(add)(1)\n" +
                        "\n" +
                        "          const inc3 = curry(add,1)"
                },
                "6": {
                    "title": "Schreiben Sie eine Funktion methodize(), die eine binäre Funktion (z.B. add, mul) in eine unäre Methode verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const methodize = function (func) {\n" +
                        "              return function(arg) {\n" +
                        "                  return func(this.valueOf(), arg)\n" +
                        "              }\n" +
                        "          }"
                },
                "7": {
                    "title": "Schreiben Sie eine Funktion demethodize(), die eine unäre Methode (z.B. add, mul) in eine binäre Funktion umwandelt. demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const demethodize = function (func) {\n" +
                        "              return func\n" +
                        "          }"
                },
                "8": {
                    "title": "Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const twice = func => arg => func(arg, arg)"
                },
                "9": {
                    "title": "Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert, die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const composeu = (func1, func2) => arg => func2(func1(arg))"
                },
                "10": {
                    "title": "Schreiben Sie eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const composeb = (func1, func2) => (x, y, z) => func2(func1(x, y), z)"
                },
                "11": {
                    "title": "Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden, z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const once = (func) => {\n" +
                        "              let executed = false\n" +
                        "\n" +
                        "              return function (x, y) {\n" +
                        "\n" +
                        "                  if (!executed) {\n" +
                        "                      executed = true\n" +
                        "                      return func(x, y)\n" +
                        "                  }\n" +
                        "                  else {\n" +
                        "                      throw Error(\"Fehlermeldung!\")\n" +
                        "                  }\n" +
                        "              }\n" +
                        "           }"
                },
                "12": {
                    "title": "Schreiben Sie eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, die einen Zähler hoch- und herunterzählen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const counterf = (arg) => {\n" +
                        "              return {\n" +
                        "                  counter: arg,\n" +
                        "                  inc: function() {\n" +
                        "                      this.counter += 1\n" +
                        "                      return this.counter\n" +
                        "                  },\n" +
                        "                  dec: function() {\n" +
                        "                      this.counter -= 1\n" +
                        "                      return this.counter\n" +
                        "                  }\n" +
                        "              }\n" +
                        "\n" +
                        "          }"

                },
                "13": {
                    "title": "Schreiben Sie eine rücknehmbare Funktion revocable(), die als Parameter eine Funktion nimmt und diese bei Aufruf ausführt. Sobald die Funktion aber mit revoke() zurück genommen wurde, führt ein erneuter Aufruf zu einem Fehler. Z.B.\n" +
                        "temp = revocable(alert);\n" +
                        "temp.invoke(7); // führt zu alert(7);\n" +
                        "temp.revoke();\n" +
                        "temp.invoke(8); // Fehlerabbruch!",
                    "image": false,
                    "video": false,
                    "code": true,
                    "solution": "const revokable = (func) => {\n" +
                        "              return {\n" +
                        "                  revoked: false,\n" +
                        "                  invoke: function(arg) {\n" +
                        "                      if (!this.revoked) {\n" +
                        "                          return func(arg)\n" +
                        "                      }\n" +
                        "                      else {\n" +
                        "                          throw Error(\"Fehlermeldung!\")\n" +
                        "                      }\n" +
                        "                  },\n" +
                        "                  revoke: function() {\n" +
                        "                      this.revoked = true\n" +
                        "                  }\n" +
                        "              }\n" +
                        "           }"
                },
                "14": {
                    "title": "Implementieren Sie ein \"Array Wrapper\"-Objekt mit den Methoden get, store und append, so dass ein Angreifer keinen Zugriff auf das innere, private Array hat.\n" +
                        "\n" +
                        "my_vector = vector();\n" +
                        "my_vector.append(7);\n" +
                        "my_vector.store(1, 8);\n" +
                        "my_vector.get(0) // 7\n" +
                        "my_vector.get(1) // 8",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const vector = () => {\n" +
                        "              return {\n" +
                        "                  array: [],\n" +
                        "                  get: function(index) {\n" +
                        "                      return this.array[index] == -1 ? null : this.array[index]\n" +
                        "                  },\n" +
                        "                  store: function(index, value) {\n" +
                        "                      this.array[index] = value\n" +
                        "                  },\n" +
                        "                  append: function(value) {\n" +
                        "                      this.array = [...this.array, value]\n" +
                        "                  }\n" +
                        "              }\n" +
                        "          }"
                }
            }
        },
        "7.2": {
            "title": "7.2. Textanalyse mit filter-map-reduce",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie in JavaScript eine Textanalyse. Ermitteln Sie die häufigsten Begriffe im Text Plagiatsresolution. Filtern Sie dabei alle Stoppworte und HTML-Tags. Reduzieren Sie das Ergebnis auf die 3 häufigsten Begriffe.",
                    "image": false,
                    "video": false,
                    "html_page": true,
                    "page_link": "https://kaul.inf.h-brs.de/we/assets/html/plagiatsresolution.html",
                    "code": true,
                    "language": "javascript",
                    "solution": "const source_code = Array.from(document.getElementsByTagName('*'))\n" +
                        "\n" +
                        "          // * stopwords from https://github.com/stopwords-iso/stopwords-de/blob/master/stopwords-de.json\n" +
                        "          const stopWords = [*]\n" +
                        "          const filterByParagraph = (element) => {\n" +
                        "              return element.localName == 'p' || element.localName == 'h2' ? element : undefined\n" +
                        "          }\n" +
                        "\n" +
                        "          const filterOutStopWords = (element) => {\n" +
                        "              return stopWords.includes(element.toLowerCase()) ? undefined : element\n" +
                        "          }\n" +
                        "\n" +
                        "          const filterFirstThree = (element) => {\n" +
                        "    \n" +
                        "          }\n" +
                        "\n" +
                        "          const wordCount = source_code.filter(filterByParagraph)\n" +
                        "                                  .map(element => element.textContent)\n" +
                        "                                  .map(element => element.split(\" \"))\n" +
                        "                                  .map(element => element.filter(filterOutStopWords))\n" +
                        "                                  .reduce((accumulator, currentValue) => accumulator.concat(currentValue),[])\n" +
                        "                                  .reduce((allWords, word) => {\n" +
                        "                                      word in allWords ? allWords[word]++ : allWords[word] = 1\n" +
                        "                                      return allWords\n" +
                        "                                  } ,{})\n" +
                        "\n" +
                        "\n" +
                        "\n" +
                        "          const result = Object.keys(wordCount).map(key => [key, wordCount[key]])\n" +
                        "                                                        .reduce((sorted, current) => {\n" +
                        "                                                              let index = 0\n" +
                        "                                                              while(index < sorted.length && current[1] < sorted[index][1]) index++\n" +
                        "                                                              sorted.splice(index, 0, current)\n" +
                        "                                                              return sorted\n" +
                        "                                                          }, [])\n" +
                        "                                                          .filter((element, index) => {\n" +
                        "                                                              return index < 3 ? element : undefined\n" +
                        "                                                          })\n" +
                        "                                                          .map(element => element[0])\n"
                }
            }
        }
    },
    "Async": {
        "8.1": {
            "title": "8.1. Promises",
            "exercises": {
                "1": {
                    "title": "Erstellen Sie auf Ihrem Server www2.inf.h-brs.de (oder localhost) zwei Text-Dateien A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig auf Korrektheit. Verwenden Sie dabei ausschließlich die Promise API ohne async / await.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "                  <head>\n" +
                        "                      <meta charset=\"UTF-8\">\n" +
                        "                      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                      <title>Übung 8.1</title>\n" +
                        "                  </head>\n" +
                        "                  <body>\n" +
                        "\n" +
                        "                      <div id=\"text\"></div>\n" +
                        "\n" +
                        "                      <script>\n" +
                        "        \n" +
                        "                          const textConatiner = document.getElementById('text')\n" +
                        "\n" +
                        "                          Promise.all([\n" +
                        "                              fetch('http://localhost:3000/A').then(res => res.text()),\n" +
                        "                              fetch('http://localhost:3000/B').then(res => res.text())\n" +
                        "                          ])\n" +
                        "                          .then(values => values.map(value => value.split('\\r\\n')))\n" +
                        "                          .then(texts => texts[0].map((text,index) => text.concat(texts[1][index])))\n" +
                        "                          .then(text => text.forEach(row => generateRow(row)))\n" +
                        "\n" +
                        "                          const generateRow = (text) => {\n" +
                        "                              const paragraph = document.createElement('p')\n" +
                        "                              const textNode = document.createTextNode(text)\n" +
                        "\n" +
                        "                              paragraph.appendChild(textNode)\n" +
                        "                              textConatiner.appendChild(paragraph)\n" +
                        "                          }\n" +
                        "        \n" +
                        "                      </script>\n" +
                        "                  </body>\n" +
                        "          </html>"
                }
            }
        },
        "8.2": {
            "title": "8.2. async / await",
            "exercises": {
                "1": {
                    "title": "Lösen Sie die letzte Aufgabe mit async / await statt Promise.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "                  <head>\n" +
                        "                      <meta charset=\"UTF-8\">\n" +
                        "                      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                      <title>Übung 8.2</title>\n" +
                        "                  </head>\n" +
                        "                  <body>\n" +
                        "                      <div id=\"text\"></div>\n" +
                        "                      <script>\n" +
                        "\n" +
                        "                          const textConatiner = document.getElementById('text')\n" +
                        "\n" +
                        "                          async function fetchTexts() {\n" +
                        "\n" +
                        "                              var data = await Promise.all([\n" +
                        "                                  fetch('http://localhost:3000/A').then(res => res.text()),\n" +
                        "                                  fetch('http://localhost:3000/B').then(res => res.text())\n" +
                        "                              ])\n" +
                        "\n" +
                        "                              const texts = data.map(array => array.split('\\r\\n'))\n" +
                        "                              const text = texts[0].map((row, index) => row.concat(texts[1][index]))\n" +
                        "\n" +
                        "                              return text\n" +
                        "                          }\n" +
                        "\n" +
                        "                          const generateRow = (text) => {\n" +
                        "                              const paragraph = document.createElement('p')\n" +
                        "                              const textNode = document.createTextNode(text)\n" +
                        "\n" +
                        "                              paragraph.appendChild(textNode)\n" +
                        "                              textConatiner.appendChild(paragraph)\n" +
                        "                          } \n" +
                        "\n" +
                        "                          fetchTexts().then(res => {\n" +
                        "                              res.forEach(row => generateRow(row))\n" +
                        "                          })\n" +
                        "\n" +
                        "                      </script>\n" +
                        "                  </body>\n" +
                        "          </html>"
                }
            }
        },
        "8.3": {
            "title": "8.3. WWW-Navigator",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie einen Navigator für die Fachbegriffe des WWW zu den Oberthemen HTML, CSS und JavaScript. Im Hauptmenü sollen diese 3 Oberthemen zur Auswahl stehen. Im Untermenü soll eine zugehörige Liste von Fachbegriffen zum jeweiligen ausgewählten Oberthema stehen. In der Mitte soll eine Dokumentation zum ausgewählten Fachbegriff erscheinen.\n" +
                        "Schreiben Sie in HTML und CSS nur den responsiven Rahmen für einen solchen WWW-Navigator. Dabei können Sie auch ein schöneres Layout als das hier gezeigte erstellen. Die Inhalte sollen in einer JSON-Datei extern gelagert werden. Mit der fetch-API soll die JSON-Datei asynchron nicht-blockierend geladen werden, und zwar nur einmal, nicht mehrfach. (d.h. Sparen Sie Internet-Bandbreite.) Sobald die Inhalte angekommen sind, sollen sie im Browser auch sofort angezeigt werden.\n" +
                        "\n" +
                        "Fügen Sie selbst in die JSON-Datei zusätzliche Inhalte zu Themen der Vorlesung als Strings beispielhaft ein. Wenn Sie Inhalte aus fremden Quellen kopieren, so schreiben Sie bitte stets die Quelle als externe Ressource hinzu. Diese soll dann auf der rechten Seite im WWW-Navigator erscheinen.",
                    "image": true,
                    "path": "src/assets/www-navigator.png",
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "                  <head>\n" +
                        "                      <meta charset=\"UTF-8\">\n" +
                        "                      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                      <title>WWW-Navigator</title>\n" +
                        "                      <style>\n" +
                        "                          * {\n" +
                        "                              margin: 0;\n" +
                        "                              padding: 0;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          header {\n" +
                        "                              text-align: center;\n" +
                        "                              padding: 20px;\n" +
                        "                              box-sizing: border-box;\n" +
                        "                              height: 80px;\n" +
                        "                              background-color: #f4a4a4;\n" +
                        "                              color: white;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .nav-container {\n" +
                        "                              display: flex;\n" +
                        "                              align-items: center;\n" +
                        "                              justify-content: space-evenly;\n" +
                        "                              box-sizing: border-box;\n" +
                        "                              height: 50px;\n" +
                        "                              background-color: #f4a4a4;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .navbar {\n" +
                        "                              display: flex;\n" +
                        "                              list-style-type: none;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .navbar li {\n" +
                        "                              margin: 0 20px;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .navbar a {\n" +
                        "                              display: block;\n" +
                        "                              text-decoration: none;\n" +
                        "                              color: white;\n" +
                        "                              background-color: #4ea1d3;\n" +
                        "                              border: 1px solid #4ea1d3;\n" +
                        "                              padding: 5px 20px;\n" +
                        "                              border-radius: 10px;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .content-area {\n" +
                        "                              display: grid;\n" +
                        "                              grid-template-columns: 15% 1fr 25%;\n" +
                        "                              min-height: calc(100vh - 210px);\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .sub-nav-container {\n" +
                        "                              grid-column: 1;\n" +
                        "                              min-height: inherit;\n" +
                        "                              height: inherit;\n" +
                        "                              box-sizing: border-box;\n" +
                        "                              background-color: #f8c8c6;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .sub-nav {\n" +
                        "                              display: flex;\n" +
                        "                              flex-direction: column;\n" +
                        "                              list-style-type: none;\n" +
                        "                              min-height: inherit;\n" +
                        "                              height: inherit;\n" +
                        "                              padding: 20px;\n" +
                        "                              box-sizing: inherit;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .sub-nav li {\n" +
                        "                              margin: 10px 0;\n" +
                        "                              width: 50px;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .sub-nav a {\n" +
                        "                              display: inline-block;\n" +
                        "                              text-decoration: none;\n" +
                        "                              color: white;\n" +
                        "                              background-color: #4ea1d3;\n" +
                        "                              border: 1px solid #4ea1d3;\n" +
                        "                              padding: 5px 20px;\n" +
                        "                              border-radius: 10px;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .text {\n" +
                        "                              box-sizing: border-box;\n" +
                        "                              min-height: inherit;\n" +
                        "                              height: inherit;\n" +
                        "                              background-color: #9aa4ec;\n" +
                        "                              padding: 20px;\n" +
                        "                              color: white;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .links {\n" +
                        "                              box-sizing: border-box;\n" +
                        "                              color: white;\n" +
                        "                              background-color: #f8c8c6;\n" +
                        "                              min-height: inherit;\n" +
                        "                              height: inherit;\n" +
                        "                              padding: 20px;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .links p {\n" +
                        "                              max-width: 25%;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          footer {\n" +
                        "                              display: flex;\n" +
                        "                              align-items: center;\n" +
                        "                              justify-content: center;\n" +
                        "                              background-color: black;\n" +
                        "                              width: 100%;\n" +
                        "                              height: 80px;\n" +
                        "                              box-sizing: border-box;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .footer {\n" +
                        "                              list-style-type: none;\n" +
                        "                              display: flex;\n" +
                        "                              justify-content: center;\n" +
                        "                              align-items: center;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .footer li {\n" +
                        "                              margin: 0 10px;\n" +
                        "                          }\n" +
                        "\n" +
                        "                          .footer a {\n" +
                        "                              text-decoration: none;\n" +
                        "                              color: white;\n" +
                        "                          }\n" +
                        "                      </style>\n" +
                        "                  </head>\n" +
                        "                  <body>\n" +
                        "                      <header><h1>WWW-Navigator</h1></header>\n" +
                        "                      <div class=\"nav-container\">\n" +
                        "                          <ul class=\"navbar\">\n" +
                        "                          </ul>\n" +
                        "                      </div>\n" +
                        "                      <div class=\"content-area\">\n" +
                        "                          <div class=\"sub-nav-container\">\n" +
                        "                              <ul class=\"sub-nav\">\n" +
                        "                              </ul>\n" +
                        "                          </div>\n" +
                        "                          <div class=\"text\">\n" +
                        "                          </div>\n" +
                        "                          <div class=\"links\">\n" +
                        "                              <p><strong>Weitere Informationen:</strong></p>\n" +
                        "                          </div>\n" +
                        "                      </div>\n" +
                        "                      <footer>\n" +
                        "                          <ul class=\"footer\">\n" +
                        "                              <li><a href=\"#\">Sitemap</a></li>\n" +
                        "                              <li><a href=\"#\">Home</a></li>\n" +
                        "                              <li><a href=\"#\">News</a></li>\n" +
                        "                              <li><a href=\"#\">Contact</a></li>\n" +
                        "                              <li><a href=\"#\">About</a></li>\n" +
                        "                          </ul>\n" +
                        "                      </footer>\n" +
                        "                      <script type=\"text/javascript\" src=\"uebung8_3.js\"></script>\n" +
                        "                  </body>\n" +
                        "          </html>"
                },
                "2": {
                    "title": "",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "{\n" +
                        "          \"html\": {\n" +
                        "              \"headings\": {\n" +
                        "              \"content\": \"Die Überschriftenelemente bestehen aus sechs verschiedenen Leveln. <h1> ist die Überschrift mit der höchsten Gewichtung und <h6> mit der kleinsten. Ein Überschriften-Element beschreibt das Thema des Bereiches, welcher der Überschrift folgt. Überschriften können auch verwendet werden, um ein Inhaltsverzeichnis für ein Dokument automatisch zu erstellen.\",\n" +
                        "              \"references\": [\n" +
                        "                  \"https://developer.mozilla.org/de/docs/Web/HTML/Element/h1-h6\"\n" +
                        "              ]\n" +
                        "              },\n" +
                        "              \"paragraph\": {\n" +
                        "              \"content\": \"Das <p>-Element erzeugt einen Absatz, den zusammenhängenden Abschnitt eines längeren Textes. In HTML kann <p> jedoch für jedwede Art von zu gruppierendem, zusammenhängendem Inhalt genutzt werden, zum Beispiel Bilder oder Formularfelder.\",\n" +
                        "              \"references\": [\n" +
                        "                  \"https://developer.mozilla.org/de/docs/Web/HTML/Element/p\"\n" +
                        "              ]\n" +
                        "              }\n" +
                        "          },\n" +
                        "          \"css\": {\n" +
                        "              \"selectors\": {\n" +
                        "              \"content\": \"Selektoren definieren, auf welche Elemente eine Reihe von CSS Regeln angewendet wird.\",\n" +
                        "              \"references\": [\n" +
                        "                  \"https://developer.mozilla.org/de/docs/Web/CSS/CSS_Selectors\"\n" +
                        "              ]\n" +
                        "              },\n" +
                        "              \"colors\": {\n" +
                        "              \"content\": \"Der CSS Datentyp Color beschreibt eine Farbe im sRGB Farbraum. Eine Farbe kann auf eine von drei Arten beschrieben werden: Schlüsselworte, rgb und rgba, hsl und hsla. ...\",\n" +
                        "              \"references\": [\n" +
                        "                  \"https://developer.mozilla.org/de/docs/Web/CSS/Farben\"\n" +
                        "              ]\n" +
                        "              }\n" +
                        "          },\n" +
                        "          \"javascript\": {\n" +
                        "              \"function\": {\n" +
                        "              \"content\": \"Funktionen sind ein Grundbaustein in JavaScript. Eine Funktion ist eine Prozedur - eine Reihe von Anweisungen, um eine Aufgabe auszuführen oder eine Wert auszurechnen. Um Funktionen zu verwenden, müssen diese im Scope (Gültigkeitsbereich) deklariert werden, in dem sie ausgeführt werden soll.\",\n" +
                        "              \"references\": [\n" +
                        "                  \"https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen\"\n" +
                        "              ]\n" +
                        "              },\n" +
                        "              \"object\": {\n" +
                        "              \"content\": \"Ein Objekt ist eine Sammlung von zusammenhängenden Daten und/oder Funktionalitäten. Diese bestehen üblicherweise aus verschiedenen Variablen und Funktionen, die Eigenschaften und Methoden genannt werden, wenn sie sich innerhalb von Objekten befinden.\",\n" +
                        "              \"references\": [\n" +
                        "                  \"https://developer.mozilla.org/de/docs/Learn/JavaScript/Objects/Basics\"\n" +
                        "              ]\n" +
                        "              }\n" +
                        "          }\n" +
                        "          }"
                },
                "3": {
                    "title": "",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const textArea = document.getElementsByClassName('text')[0]\n" +
                        "          const linkArea = document.getElementsByClassName('links')[0]\n" +
                        "          const navbar = document.getElementsByClassName('navbar')[0]\n" +
                        "          const subnav = document.getElementsByClassName('sub-nav')[0]\n" +
                        "\n" +
                        "          window.addEventListener('load',() => {\n" +
                        "              fetchData()\n" +
                        "          })\n" +
                        "\n" +
                        "          async function fetchData() {\n" +
                        "              const data = await fetch('http://localhost:3000/data').then(res => res.json())\n" +
                        "              console.log(data)\n" +
                        "    \n" +
                        "              for (const [key,value] of Object.entries(data)) {\n" +
                        "                  generateNavbar(key, navbar)\n" +
                        "                  for (const [subkey, index] of Object.entries(value)) {\n" +
                        "                      generateNavbar(subkey, subnav)\n" +
                        "                      generateText(key, subkey, index['content'])\n" +
                        "                      console.log(index['references'])\n" +
                        "                      generateLinks(key, subkey, index['references'])\n" +
                        "                  }\n" +
                        "              }\n" +
                        "    \n" +
                        "          } \n" +
                        "\n" +
                        "          const generateNavbar = (key, nav) => {\n" +
                        "              const list = document.createElement('li')\n" +
                        "              const anchor = document.createElement('a')\n" +
                        "              anchor.className = key + '-button'\n" +
                        "              const text = document.createTextNode(key)\n" +
                        "\n" +
                        "              list.appendChild(anchor)\n" +
                        "              anchor.appendChild(text)\n" +
                        "\n" +
                        "              nav.appendChild(list)\n" +
                        "          }\n" +
                        "\n" +
                        "          const generateText = (topic, subtopic, content) => {\n" +
                        "              const paragraph = document.createElement('p')\n" +
                        "              paragraph.className = topic + \"-text\" + \" \" + subtopic + \"-text\"\n" +
                        "              const text = document.createTextNode(content)\n" +
                        "\n" +
                        "              paragraph.appendChild(text)\n" +
                        "\n" +
                        "              textArea.appendChild(paragraph)\n" +
                        "          }\n" +
                        "\n" +
                        "          const generateLinks = (topic, subtopic, links) => {\n" +
                        "              links.forEach(link => {\n" +
                        "                  const paragraph = document.createElement('p')\n" +
                        "                  const anchor = document.createElement('a')\n" +
                        "                  anchor.className = topic + \"-link\" + \" \" + subtopic + \"-link\"\n" +
                        "                  anchor.href = link\n" +
                        "                  const text = document.createTextNode(link)\n" +
                        "\n" +
                        "                  paragraph.appendChild(anchor)\n" +
                        "                  anchor.appendChild(text)\n" +
                        "        \n" +
                        "                  linkArea.appendChild(paragraph)\n" +
                        "              })\n" +
                        "          }"
                }
            }
        }
    },
    "SVG": {
        "9.1": {
            "title": "9.1. SVG Grafik von Hand erstellen",
            "exercises": {
                "1": {
                    "title": "Codieren Sie eine HTML-Datei mit Inline SVG, so dass sich folgendes Aussehen ergibt:\n" +
                        "Fügen Sie als Hover-Effekt eine CSS-Animation hinzu, die die Größe der SVG-Grafik verdoppelt, wenn man mit dem Cursor über die Grafik geht.",
                    "image": true,
                    "path": "src/assets/use_the_platform.png",
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "          <head>\n" +
                        "              <meta charset=\"UTF-8\">\n" +
                        "              <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
                        "              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "              <title>Übung 9.1</title>\n" +
                        "              <style>\n" +
                        "                  .graphic:hover {\n" +
                        "                      transform: scale(2.0);\n" +
                        "                  }\n" +
                        "\n" +
                        "                  .graphic {\n" +
                        "                      transition: all 1s;\n" +
                        "                  }\n" +
                        "              </style>\n" +
                        "          </head>\n" +
                        "          <body>\n" +
                        "              <h1>SVG Use the Platform</h1>\n" +
                        "              <svg width=\"500\" height=\"550\" class=\"graphic\">\n" +
                        "                  <rect width=\"500\" height=\"550\" x=\"0\" y=\"0\" style=\"fill:#cb798d\"/>\n" +
                        "                  <text font-family=\"Sans-serif\" font-size=\"6.75em\" x=\"50\" y=\"130\" fill=\"white\">Use</text>\n" +
                        "                  <path stroke=\"white\" stroke-width=\"6\" d=\"M 50 160 L 450 160 Z\"/>\n" +
                        "                  <text font-family=\"Sans-serif\" font-size=\"6.75em\" x=\"50\" y=\"285\" fill=\"white\">The</text>\n" +
                        "                  <path stroke=\"white\" stroke-width=\"6\" d=\"M 50 315 L 450 315 Z\"/>\n" +
                        "                  <text font-family=\"Sans-serif\" font-size=\"6.75em\" x=\"50\" y=\"450\" fill=\"white\">Platform</text>\n" +
                        "                  <path stroke=\"white\"stroke-width=\"6\"  d=\"M 50 480 L 450 480 Z\"/>\n" +
                        "              </svg>\n" +
                        "          </body>\n" +
                        "          </html>"
                }
            }
        },
        "9.2": {
            "title": "9.2. Statistik-Balkendiagramm in SVG",
            "exercises": {
                "1": {
                    "title": "Implementieren Sie ein eigenes Balkendiagramm mit HTML, Inline SVG, CSS und JavaScript. Geben Sie die Daten für das Balkendiagramm im JSON-Format vor. Nehmen Sie als Beispieldaten die COVID-19: Fallzahlen in Deutschland (Stand 4. Dezember 2021). Animieren Sie die Grafik",
                    "image": false,
                    "video": false,
                    "html_page": true,
                    "page_link": "https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html",
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "          <head>\n" +
                        "              <meta charset=\"UTF-8\">\n" +
                        "              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "              <title>Übung 9.2</title>\n" +
                        "              <style>\n" +
                        "                  #data line {\n" +
                        "                      stroke-dasharray: 1500; \n" +
                        "                      stroke-dashoffset: 1500;\n" +
                        "                      animation: draw 4s ease-out forwards;\n" +
                        "                  }\n" +
                        "\n" +
                        "                  @keyframes draw {\n" +
                        "                      to {\n" +
                        "                          stroke-dashoffset: 0;\n" +
                        "                      }\n" +
                        "                  }\n" +
                        "              </style>\n" +
                        "          </head>\n" +
                        "          <body>\n" +
                        "              <svg width=\"1500\" height=\"720\">\n" +
                        "                  <rect width=\"1500\" height=\"720\" fill=\"white\" stroke=\"black\"/>\n" +
                        "                  <text x=\"750\" y=\"50\" text-anchor=\"middle\" font-size=\"2em\" font-family=\"sans-serif\">Covid-19 Infektionen nach Bundesland (in Millionen)</text>\n" +
                        "                  <g id=\"y-axis\" font-family=\"sans-serif\" fill=\"black\" transform=\"translate(200 120)\" text-anchor=\"end\">\n" +
                        "                  </g>\n" +
                        "                  <g id=\"x-axis\" font-family=\"sans-serif\" font-size=\"0.75em\" transform=\"translate(210 90)\" text-anchor=\"middle\">\n" +
                        "                      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"0\" y=\"610\">0</text>\n" +
                        "                      <line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"100\" y=\"610\">0.1</text>\n" +
                        "                      <line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"200\" y=\"610\">0.2</text>\n" +
                        "                      <line x1=\"300\" y1=\"0\" x2=\"300\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"300\" y=\"610\">0.3</text>\n" +
                        "                      <line x1=\"400\" y1=\"0\" x2=\"400\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"400\" y=\"610\">0.4</text>\n" +
                        "                      <line x1=\"500\" y1=\"0\" x2=\"500\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"500\" y=\"610\">0.5</text>\n" +
                        "                      <line x1=\"600\" y1=\"0\" x2=\"600\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"600\" y=\"610\">0.6</text>\n" +
                        "                      <line x1=\"700\" y1=\"0\" x2=\"700\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"700\" y=\"610\">0.7</text>\n" +
                        "                      <line x1=\"800\" y1=\"0\" x2=\"800\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"800\" y=\"610\">0.8</text>\n" +
                        "                      <line x1=\"900\" y1=\"0\" x2=\"900\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"900\" y=\"610\">0.9</text>\n" +
                        "                      <line x1=\"1000\" y1=\"0\" x2=\"1000\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"1000\" y=\"610\">1</text>\n" +
                        "                      <line x1=\"1100\" y1=\"0\" x2=\"1100\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"1100\" y=\"610\">1.1</text>\n" +
                        "                      <line x1=\"1200\" y1=\"0\" x2=\"1200\" y2=\"590\" style=\"stroke:#aaa;stroke-width:0.5\"/>\n" +
                        "                      <text x=\"1200\" y=\"610\">1.2</text>\n" +
                        "                  </g>\n" +
                        "                  <g id=\"data\" transform=\"translate(210 90)\" style=\"stroke: red;stroke-width:5\">\n" +
                        "                  </g>\n" +
                        "              </svg>\n" +
                        "              <script>\n" +
                        "                  const data = {\n" +
                        "                      'Baden-Würtemberg': 857957,\n" +
                        "                      'Bayern': 1167598,\n" +
                        "                      'Berlin': 282068,\n" +
                        "                      'Brandenburg': 168828,\n" +
                        "                      'Bremen': 40308,\n" +
                        "                      'Hamburg': 116140,\n" +
                        "                      'Hessen': 422403,\n" +
                        "                      'Mecklenburg-Vorpommern': 75321,\n" +
                        "                      'Niedersachsen': 348998,\n" +
                        "                      'Nordrhein-Westfalen': 1201564,\n" +
                        "                      'Rheinland-Pfalz': 239998,\n" +
                        "                      'Saarland': 63261,\n" +
                        "                      'Sachsen': 524645,\n" +
                        "                      'Sachsen-Anhalt': 166227,\n" +
                        "                      'Schleswig-Holstein': 98841,\n" +
                        "                      'Thüringen': 223403\n" +
                        "                  }\n" +
                        "                  const yAxis = document.querySelector('#y-axis')\n" +
                        "                  const bars = document.querySelector('#data')\n" +
                        "\n" +
                        "                  window.addEventListener('load', () => {\n" +
                        "                      Object.entries(data).map(element => {generateGraphEntry(element[0]);generateBar(element[1])})\n" +
                        "                  })\n" +
                        "\n" +
                        "\n" +
                        "                  const generateGraphEntry = (value) => {\n" +
                        "                      const lastChild = yAxis.lastElementChild\n" +
                        "\n" +
                        "                      const textNode = document.createElementNS('http://www.w3.org/2000/svg','text')\n" +
                        "                      const text = document.createTextNode(value)\n" +
                        "\n" +
                        "\n" +
                        "                      if (lastChild) {\n" +
                        "                          textNode.setAttribute('x', lastChild.attributes.x.value)\n" +
                        "                          textNode.setAttribute('y', parseInt(lastChild.attributes.y.value) + 36)\n" +
                        "                      }\n" +
                        "                      else {\n" +
                        "                          textNode.setAttribute('x', 0)\n" +
                        "                          textNode.setAttribute('y', 0)\n" +
                        "                      }\n" +
                        "\n" +
                        "                      textNode.appendChild(text)\n" +
                        "                      yAxis.appendChild(textNode)\n" +
                        "                  }\n" +
                        "\n" +
                        "                  const generateBar = (amount) => {\n" +
                        "                      const lastChild = bars.lastElementChild\n" +
                        "\n" +
                        "                      const lineElement = document.createElementNS('http://www.w3.org/2000/svg','line')\n" +
                        "                      lineElement.className = 'animated'\n" +
                        "\n" +
                        "                      lineElement.setAttribute('x1', 0)\n" +
                        "                      lineElement.setAttribute('x2', Math.round(amount/1000))\n" +
                        "                      lineElement.className.baseVal = 'animated'\n" +
                        "            \n" +
                        "                      if (lastChild) {\n" +
                        "                          lineElement.setAttribute('y1', parseInt(lastChild.attributes.y1.value) + 36)\n" +
                        "                          lineElement.setAttribute('y2', parseInt(lastChild.attributes.y2.value) + 36)\n" +
                        "                      }\n" +
                        "                      else {\n" +
                        "                          lineElement.setAttribute('y1', 26)\n" +
                        "                          lineElement.setAttribute('y2', 26)\n" +
                        "                      }\n" +
                        "\n" +
                        "                      bars.appendChild(lineElement)\n" +
                        "                  }\n" +
                        "              </script>\n" +
                        "          </body>\n" +
                        "          </html>"
                }
            }
        },
        "9.3": {
            "title": "9.3. Interaktive SVG Grafik",
            "exercises": {
                "1": {
                    "title": "Implementieren Sie das Spiel Tic-Tac-Toe als HTML-Datei mit Inline SVG, CSS und JavaScript.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "          <head>\n" +
                        "              <meta charset=\"UTF-8\">\n" +
                        "              <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
                        "              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "              <title>Übung 9.3</title>\n" +
                        "          </head>\n" +
                        "          <body>\n" +
                        "              <svg width=\"600\" height=\"600\">\n" +
                        "                  <g id=\"tictactoe\" style=\"pointer-events: bounding-box;\">\n" +
                        "\n" +
                        "                      <line style=\"stroke: #aaa;stroke-width: 2\" x1=\"200\" y1=\"0\" x2=\"200\" y2=\"600\"></line>\n" +
                        "                      <line style=\"stroke: #aaa;stroke-width: 2\" x1=\"400\" y1=\"0\" x2=\"400\" y2=\"600\"></line>\n" +
                        "                      <line style=\"stroke: #aaa;stroke-width: 2\" x1=\"0\" y1=\"200\" x2=\"600\" y2=\"200\"></line>\n" +
                        "                      <line style=\"stroke: #aaa;stroke-width: 2\" x1=\"0\" y1=\"400\" x2=\"600\" y2=\"400\"></line>\n" +
                        "\n" +
                        "\n" +
                        "                      <g class=\"area\" id=\"0\" transform=\"translate(0,0)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                      <g class=\"area\" id=\"1\" transform=\"translate(200,0)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                      <g class=\"area\" id=\"2\" transform=\"translate(400,0)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                      <g class=\"area\" id=\"3\" transform=\"translate(0,200)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                      <g class=\"area\" id=\"4\" transform=\"translate(200,200)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                      <g class=\"area\" id=\"5\" transform=\"translate(400,200)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                      <g class=\"area\" id=\"6\" transform=\"translate(0,400)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                      <g class=\"area\" id=\"7\" transform=\"translate(200,400)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                      <g class=\"area\" id=\"8\" transform=\"translate(400,400)\">\n" +
                        "                          <rect width=\"200\" height=\"200\" style=\"fill: #fff;opacity: 0%;stroke: #fff;stroke-opacity: 0%\"></rect>\n" +
                        "                      </g>\n" +
                        "                  </g>\n" +
                        "              </svg>\n" +
                        "              <script>\n" +
                        "                  const areas = document.getElementsByClassName('area')\n" +
                        "                  var game = []\n" +
                        "                  var symbol = ''\n" +
                        "\n" +
                        "                  window.addEventListener('load', () => {\n" +
                        "                      game = [0,0,0,0,0,0,0,0,0]\n" +
                        "                      symbol = 'X'\n" +
                        "                      Array.from(areas).forEach(area => {\n" +
                        "                          area.addEventListener('click', (e) => {\n" +
                        "                              toggleSymbol(e.target.parentElement)  \n" +
                        "                          },{ once: true })  \n" +
                        "                      })\n" +
                        "                  })\n" +
                        "\n" +
                        "                  const toggleSymbol = (target) => {\n" +
                        "                      if (symbol === 'X') {\n" +
                        "                          printCross(target)\n" +
                        "                          symbol = 'O'\n" +
                        "                      }\n" +
                        "                      else if (symbol === 'O') {\n" +
                        "                          printCircle(target)\n" +
                        "                          symbol = 'X'\n" +
                        "                      }\n" +
                        "                  }\n" +
                        "\n" +
                        "                  const printCross = (target) => {\n" +
                        "                      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')\n" +
                        "                      group.setAttribute('id', 'cross')\n" +
                        "                      group.setAttribute('style', 'stroke: #000;stroke-width: 8')\n" +
                        "\n" +
                        "                      const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line')\n" +
                        "                      line1.setAttribute('x1','20')\n" +
                        "                      line1.setAttribute('y1','20')\n" +
                        "                      line1.setAttribute('x2','180')\n" +
                        "                      line1.setAttribute('y2','180')\n" +
                        "\n" +
                        "                      const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line')\n" +
                        "                      line2.setAttribute('x1','20')\n" +
                        "                      line2.setAttribute('y1','180')\n" +
                        "                      line2.setAttribute('x2','180')\n" +
                        "                      line2.setAttribute('y2','20')\n" +
                        "\n" +
                        "                      group.appendChild(line1)\n" +
                        "                      group.appendChild(line2)\n" +
                        "\n" +
                        "                      target.prepend(group)\n" +
                        "                  }\n" +
                        "\n" +
                        "                  const printCircle = (target) => {\n" +
                        "                      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')\n" +
                        "                      group.setAttribute('id', 'cross')\n" +
                        "                      group.setAttribute('style', 'stroke: #000;stroke-width: 8;fill: #fff')\n" +
                        "\n" +
                        "                      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')\n" +
                        "                      circle.setAttribute('cx','100')\n" +
                        "                      circle.setAttribute('cy','100')\n" +
                        "                      circle.setAttribute('r','80')\n" +
                        "\n" +
                        "                      group.appendChild(circle)\n" +
                        "\n" +
                        "                      target.prepend(group)\n" +
                        "                  }\n" +
                        "              </script>\n" +
                        "          </body>\n" +
                        "          </html>"
                }
            }
        }
    },
    "TypeScript": {
        "10.1": {
            "title": "10.1. Static classes in TypeScript",
            "exercises": {
                "1": {
                    "title": "Gibt es in TypeScript statische Klassen? Erläutern Sie den Unterschied von TypeScript zu anderen objekt-orientierten, statisch typisierten Programmiersprachen wie Java und C#.",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "Es gibt keine statische Klassen in TypeScript. Es gibt jedoch Möglichkeiten das Verhalten von statischen Klassen in TypeScript zu modellieren z.B mit Modules. \n" +
                        "\n" +
                        "Anders als Java oder C#, besitz TypeScript eine eingebaute Typinferenz, welche es ihr erlaubt ohne explizite Typdeklaration, den Datentyp einer Variable, eines Parameters oder eines Rückgabewerts einer Funktion abzuleiten."
                }
            }
        },
        "10.2": {
            "title": "10.2. Fehler finden mit TypeScript",
            "exercises": {
                "1": {
                    "title": "Gegeben sei folgendes fehlerbehaftete JavaScript-Programm. Ergänzen Sie dieses um möglichst viele Typisierungen und übersetzen Sie es in ein TypeScript-Programm.\nWas ist der Fehler in dem gegebenen JavaScript-Code?",
                    "image": false,
                    "video": false,
                    "code_snipped": true,
                    "snipped_language": "javascript",
                    "snipped": "const add = (x,y) => x+y;\n" +
                        "            const equals = (x,y) => x===y;\n" +
                        "\n" +
                        "            console.log( add(1,2) );\n" +
                        "            console.log( add(true, true ) );\n" +
                        "            console.log( add(true, false ) );\n" +
                        "            var x = y = 1;\n" +
                        "            console.log( add(equals(x,y), equals(y,x)) );",
                    "code": false,
                    "solution": "Die Parametertypen sind frei wählbar, was dazu führt, dass man bei Laufzeit ungewünschte Ergebnisse erhalten kann."
                },
                "2": {
                    "title": "Geben Sie hier Ihren TypeScript-Code ein:\n",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "type BoolNum = boolean | number;\n" +
                        "\n" +
                        "          const add = (x: BoolNum,y: BoolNum): number => +x + +y;\n" +
                        "          const equals = (x: BoolNum,y: BoolNum): boolean => x===y;\n" +
                        "\n" +
                        "          console.log( add(1,2) );\n" +
                        "          console.log( add(true, true ) );\n" +
                        "          console.log( add(true, false ) );\n" +
                        "          var x: number,y: number = 1;\n" +
                        "          console.log( add(equals(x,y), equals(y,x)) );"
                },
                "3": {
                    "title": "Welche Fehler meldet TypeScript?",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "Die Variable y ist in TypeScript nicht initialisiert und kann in den Funktionsaufrufen nicht gefunden werden."
                },
                "4": {
                    "title": "Geben Sie weitere Beispiele an, wie TypeScript bei der Fehlersuche helfen kann:\n",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "TypeScript inferiert durch die Parametertypen den richtigen Rückgabetypen. Es teilt einem falsche Datentypen zur Compiletime mit."
                }
            }
        },
        "10.3": {
            "title": "10.3. TypeScript auf Deno",
            "exercises": {
                "1": {
                    "title": "Auf Deno ist TypeScript ohne Übersetzung direkt ablauffähig. Deno ist also die Runtime Engine für TypeScript.\n" +
                        "\n" +
                        "Schreiben Sie in TypeScript möglichst umfangreich statisch typisiert ein auf Deno ablauffähiges Programm server.ts, das Sie mit deno run --allow-net server.ts starten können, das die COVID-19-Fallzahlen (Stand 12. Dezember 2021) in Deutschland einliest, Minimum, Maximum, Durchschnitt und Summe berechnet und diese auf einer Webseite ausgibt.",
                    "image": false,
                    "video": false,
                    "html_page": true,
                    "page_link": "https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html",
                    "code": true,
                    "language": "javascript",
                    "solution": "import { Server } from \"https://deno.land/std@0.117.0/http/server.ts\";\n" +
                        "\n" +
                        "          const handler = (_request: Request) => {\n" +
                        "          const body = `<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "          <head>\n" +
                        "              <meta charset=\"UTF-8\">\n" +
                        "              <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
                        "              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "              <title>Corona Fallzahlen</title>\n" +
                        "          </head>\n" +
                        "          <body>\n" +
                        "              <h2>Covid-19 Fallzahlen nach Bundesländern</h2>\n" +
                        "              <p>Niedrigste Fallzahl: ${ min(data) }</p>\n" +
                        "              <p>Höchste Fallzahl: ${ max(data) }</p>\n" +
                        "              <p>Durchschnittliche Fallzahl: ${ avrg(data) }</p>\n" +
                        "              <p>Summierte Fallzahl: ${ sum(data) }</p>\n" +
                        "          </body>\n" +
                        "          </html>`;\n" +
                        "\n" +
                        "          return new Response(body, { status: 200, headers: {\n" +
                        "              \"content-type\": \"text/html\"\n" +
                        "          } });\n" +
                        "          };\n" +
                        "\n" +
                        "          const server = new Server({ handler });\n" +
                        "          const listener = Deno.listen({ port: 8000 });\n" +
                        "\n" +
                        "          server.serve(listener);\n" +
                        "\n" +
                        "          const data: { name: string; count: number }[] = [\n" +
                        "          {\n" +
                        "              name: \"Baden-Würtemberg\",\n" +
                        "              count: 907123,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Bayern\",\n" +
                        "              count: 1219168,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Berlin\",\n" +
                        "              count: 293200,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Brandenburg\",\n" +
                        "              count: 200190,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Bremen\",\n" +
                        "              count: 41628,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Hamburg\",\n" +
                        "              count: 119744,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Hessen\",\n" +
                        "              count: 437099,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Mecklenburg-Vorpommern\",\n" +
                        "              count: 81135,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Niedersachsen\",\n" +
                        "              count: 399254,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Nordrhein-Westfalen\",\n" +
                        "              count: 1247697,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Rheinland-Pfalz\",\n" +
                        "              count: 251709,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Saarland\",\n" +
                        "              count: 66432,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Sachsen\",\n" +
                        "              count: 567898,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Sachsen-Anhalt\",\n" +
                        "              count: 184892,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Schleswig-Holstein\",\n" +
                        "              count: 102598,\n" +
                        "          },\n" +
                        "          {\n" +
                        "              name: \"Thüringen\",\n" +
                        "              count: 242465,\n" +
                        "          },\n" +
                        "          ];\n" +
                        "\n" +
                        "          const min = (data: { name: string; count: number }[]): number => {\n" +
                        "          return data\n" +
                        "              .map((element) => element.count)\n" +
                        "              .reduce((acc, curr) => {\n" +
                        "              return acc < curr ? acc : curr;\n" +
                        "              });\n" +
                        "          };\n" +
                        "\n" +
                        "          const max = (data: { name: string; count: number }[]): number => {\n" +
                        "          return data\n" +
                        "              .map((element) => element.count)\n" +
                        "              .reduce((acc, curr) => {\n" +
                        "              return acc > curr ? acc : curr;\n" +
                        "              });\n" +
                        "          };\n" +
                        "\n" +
                        "          const avrg = (data: { name: string; count: number }[]): number => {\n" +
                        "          return sum(data) / data.length;\n" +
                        "          };\n" +
                        "\n" +
                        "          const sum = (data: { name: string; count: number }[]): number => {\n" +
                        "          return data\n" +
                        "              .map((element) => element.count)\n" +
                        "              .reduce((acc, curr) => {\n" +
                        "              return acc + curr;\n" +
                        "              });\n" +
                        "          };\n"
                }
            }
        }
    },
    "Vue": {
        "11.1": {
            "title": "11.1. Komponente in Vue.js",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine Vue.js Single File Component mit einem Text-Eingabefeld und 3 Ausgabefeldern, in denen man während des Tippens sehen kann, (a) wie viele Buchstaben (b) wie viele Leerzeichen und (c) wie viele Worte man in das Text-Eingabefeld bereits eingegeben hat.\n" +
                        "\n" +
                        "Betten Sie Ihre Komponente in eine Webseite zweimal ein und testen Sie, ob beide Komponenten unabhängig voneinander sind.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "export default {\n" +
                        "              template: `\n" +
                        "                  <div class=\"container\" :style=\"{'display': 'inline-block','color': 'white','margin': '5px','padding': '0','box-sizing': 'border-box','font-family': 'Poppins, sans-serif','border': '1px solid black','border-radius': '2px','background-color': 'steelblue'}\">\n" +
                        "                      <label :style=\"{ 'margin': '10px'}\" for=\"input\">Enter a text:</label>\n" +
                        "                      <input :style=\"{ 'margin': '10px'}\" type=\"text\" name=\"input\" id=\"input\" v-model=\"text\" @keyup=\"calculateData()\">\n" +
                        "\n" +
                        "                      <label :style=\"{ 'margin': '10px'}\">Spaces:</label>\n" +
                        "                      <span class=\"output\" :style=\"{ 'margin': '10px'}\">{{  spaces }}</span>\n" +
                        "                      <label :style=\"{ 'margin': '10px'}\">Letters:</label>\n" +
                        "                      <span class=\"output\" :style=\"{ 'margin': '10px'}\">{{  letters }}</span>\n" +
                        "                      <label :style=\"{ 'margin': '10px'}\">Words:</label>\n" +
                        "                      <span class=\"output\" :style=\"{ 'margin': '10px'}\">{{  words }}</span>\n" +
                        "                  </div>´\n" +
                        "              ,\n" +
                        "              data() {\n" +
                        "                  return {\n" +
                        "                      text: \"\",\n" +
                        "                      spaces: 0,\n" +
                        "                      letters: 0,\n" +
                        "                      words: 0,\n" +
                        "                  };\n" +
                        "              },\n" +
                        "              methods: {\n" +
                        "                  calculateData() {\n" +
                        "                      this.spaces = (this.text.match(/ /g) || []).length;\n" +
                        "                      this.letters = this.text.replace(/ /g, \"\").length;\n" +
                        "                      this.words = this.text.split(\" \").filter((item) => item !== \"\").length;\n" +
                        "                  },\n" +
                        "              },\n" +
                        "          };\n"
                },
                "2": {
                    "title": "Geben Sie die Webseite, auf der Sie Ihre Komponente mehrfach testen, hier ein:",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"en\">\n" +
                        "              <head>\n" +
                        "                  <meta charset=\"UTF-8\">\n" +
                        "                  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
                        "                  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                  <title>Übung 11.1</title>\n" +
                        "              </head>\n" +
                        "              <body>\n" +
                        "                  <div id=\"app\">\n" +
                        "                      <eingabe></eingabe>\n" +
                        "                      <eingabe></eingabe>\n" +
                        "                  </div>\n" +
                        "                  <script src=\"https://unpkg.com/vue\"></script>\n" +
                        "                  <script type=\"module\">\n" +
                        "                      import Eingabe from './Eingabe.mjs'\n" +
                        "\n" +
                        "                      new Vue({\n" +
                        "                          el: '#app',\n" +
                        "                          components: {\n" +
                        "                              Eingabe\n" +
                        "                          }\n" +
                        "                      })\n" +
                        "                  </script>\n" +
                        "              </body>\n" +
                        "          </html>"
                }
            }
        },
        "11.2": {
            "title": "11.2. Menü-Komponente",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine möglichst flexible Vue.js Single File Component für Menüs und wenden Sie diese in derselben Webseite zweimal an, einmal horizontal, das andere Mal vertikal.\nGeben Sie die Inhalte aller Dateien Ihrer Lösung inkl. JS-Quelltext hintereinander ein. Schreiben Sie vor jede Datei deren Dateiname:",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!-- index.html -->\n" +
                        "\n" +
                        "          <!DOCTYPE html>\n" +
                        "          <html lang=\"\">\n" +
                        "              <head>\n" +
                        "                  <meta charset=\"utf-8\">\n" +
                        "                  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
                        "                  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n" +
                        "                  <link rel=\"icon\" href=\"favicon.ico\">\n" +
                        "                  <title>Übung 11.2</title>\n" +
                        "              </head>\n" +
                        "              <body>\n" +
                        "                  <div id=\"app\"></div>\n" +
                        "                  <!-- built files will be auto injected -->\n" +
                        "              </body>\n" +
                        "          </html>"
                },
                "2": {
                    "title": "",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!-- App.vue -->\n" +
                        "\n" +
                        "          <template>\n" +
                        "              <div class=\"container\">\n" +
                        "                  <Navbar :alignment='horizontal'/>\n" +
                        "                  <Navbar :alignment='vertical'/>\n" +
                        "              </div>\n" +
                        "          </template>\n" +
                        "\n" +
                        "          <script>\n" +
                        "              import Navbar from './components/Navbar.vue'\n" +
                        "\n" +
                        "              export default {\n" +
                        "                  name: 'App',\n" +
                        "                  data() {\n" +
                        "                      return {\n" +
                        "                          vertical: true,\n" +
                        "                          horizontal: false\n" +
                        "                      }\n" +
                        "                  },\n" +
                        "                  components:  {\n" +
                        "                      Navbar\n" +
                        "                  }\n" +
                        "    \n" +
                        "              }\n" +
                        "  \n" +
                        "          </script>\n" +
                        "\n" +
                        "          <style>\n" +
                        "              * {\n" +
                        "                  margin: 0;\n" +
                        "                  padding: 0;\n" +
                        "                  box-sizing: border-box;\n" +
                        "              }\n" +
                        "          </style>"
                },
                "3": {
                    "title": "",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!-- Eingabe.vue -->\n" +
                        "\n" +
                        "          <template>\n" +
                        "              <ul :class=\"alignment ? 'vertical' : 'horizontal'\">\n" +
                        "                  <div v-for=\"item in navitems\" :key=\"item.id\">\n" +
                        "                      <li><a>{{ item.text }}</a></li>\n" +
                        "                  </div>\n" +
                        "              </ul>\n" +
                        "          </template>\n" +
                        "\n" +
                        "          <script>\n" +
                        "              export default {\n" +
                        "                  name: 'Navbar',\n" +
                        "                  props: {\n" +
                        "                      alignment: Boolean\n" +
                        "                  },\n" +
                        "                  data() {\n" +
                        "                      return {\n" +
                        "                          navitems: [\n" +
                        "                              { id: 1, text: 'Home' },\n" +
                        "                              { id: 2, text: 'Products' },\n" +
                        "                              { id: 3, text: 'Contact' },\n" +
                        "                              { id: 4, text: 'Location' },\n" +
                        "                              { id: 5, text: 'About' }\n" +
                        "                          ]\n" +
                        "                      }\n" +
                        "                  }\n" +
                        "              }\n" +
                        "          </script>\n" +
                        "\n" +
                        "          <style scoped>\n" +
                        "              .vertical,.horizontal {\n" +
                        "                  list-style-type: none;\n" +
                        "                  margin: 0;\n" +
                        "                  padding: 0;\n" +
                        "                  background-color: #f1f1f1;\n" +
                        "                  overflow: auto;\n" +
                        "              }\n" +
                        "\n" +
                        "              .vertical {\n" +
                        "                  width: 25%;\n" +
                        "                  height: 100%;\n" +
                        "              }\n" +
                        "\n" +
                        "              .horizontal {\n" +
                        "                  width: 100%;\n" +
                        "              }\n" +
                        "\n" +
                        "              .horizontal li {\n" +
                        "                  float: left;\n" +
                        "              }\n" +
                        "\n" +
                        "              .vertical li a, .horizontal li a {\n" +
                        "                  display: block;\n" +
                        "                  color: #000;\n" +
                        "                  padding: 8px 16px;\n" +
                        "                  text-decoration: none;\n" +
                        "              }\n" +
                        "\n" +
                        "              .vertical li a:hover ,.horizontal li a:hover{\n" +
                        "                  background-color: #555;\n" +
                        "                  color: white;\n" +
                        "              }\n" +
                        "          </style>"
                }
            }
        },
        "11.3": {
            "title": "11.3. Vue.js WWW-Navigator",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie Ihren WWW-Navigator als SPA in Vue.js \n" +
                        "Dokumentieren Sie Ihren Entscheidungsprozess: In welche Komponenten wollen Sie Ihre App zerlegen?",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": ""
                },
                "2": {
                    "title": "Geben Sie die Inhalte aller Dateien (ohne node_modules) Ihrer Lösung inkl. JS-Quelltext hintereinander ein. Schreiben Sie vor jede Datei deren Dateiname:",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "soluton": ""
                }
            }
        }
    },
    "PHP": {
        "12.1": {
            "title": "12.1. Registrierung mit PHP",
            "exercises": {
                "1": {
                    "title": "Erstellen Sie mit PHP 5 auf www2.inf.h-brs.de ein Registrierungsformular. Speichern Sie die eingegebenen Daten persistent in einer Datei auf www2.inf.h-brs.de. Schreiben Sie Ihre PHP-Scripte so, dass es zu keinen Nebenläufigkeitsartefakten (z.B. Lost Update) kommen kann, egal wie viele Nutzer sich gleichzeitig registrieren.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "              <head>\n" +
                        "                  <meta charset=\"UTF-8\">\n" +
                        "                  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
                        "                  <title>Registrierung</title>\n" +
                        "              </head>\n" +
                        "              <body>\n" +
                        "                  <h1>Registrieren</h1>\n" +
                        "                  <form action=\"register.php\" method=\"post\">\n" +
                        "                      <label>\n" +
                        "                          Account\n" +
                        "                          <br>\n" +
                        "                          <input type=\"text\" name=\"account\">\n" +
                        "                      </label>\n" +
                        "                      <br>\n" +
                        "                      <label>\n" +
                        "                          Passwort\n" +
                        "                          <br>\n" +
                        "                          <input type=\"password\" name=\"password\">\n" +
                        "                      </label>\n" +
                        "                      <br>\n" +
                        "                      <br>\n" +
                        "                      <input type=\"submit\" value=\"Registieren\">\n" +
                        "                  </form>\n" +
                        "                  <?php\n" +
                        "                      require './etc/salter.php';\n" +
                        "\n" +
                        "                      function accountUsed($account): bool\n" +
                        "                      {\n" +
                        "                          $lines = file('./etc/raw_passwd.csv');\n" +
                        "\n" +
                        "                          foreach ($lines as $line_num => $line) {\n" +
                        "                              list($user,$passwd) = explode(',',$line);\n" +
                        "                              if ($user === salter($account)) { return true; }\n" +
                        "                          }\n" +
                        "\n" +
                        "                          return false;\n" +
                        "                      }\n" +
                        "\n" +
                        "                      if(isset($_POST['account']) && $_POST['account'] != '' && isset($_POST['password']) && $_POST['password'] != '' && !accountUsed($_POST['account'])) {\n" +
                        "                          $account = $_POST['account'];\n" +
                        "                          $password = $_POST['password'];\n" +
                        "\n" +
                        "                          $file = './etc/raw_passwd.csv';\n" +
                        "                          $new_line = salter($account) . ',' . salter($password) . \"\\n\";\n" +
                        "\n" +
                        "                          if(file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) {\n" +
                        "                              echo '<script>';\n" +
                        "                              echo 'alert(\"Registrierung erfolgreich!\")';\n" +
                        "                              echo '</script>';\n" +
                        "                          }else {\n" +
                        "                              echo '<script>';\n" +
                        "                              echo 'alert(\"Registrierung fehlgeschlagen!\")';\n" +
                        "                              echo '</script>';\n" +
                        "                          }\n" +
                        "                      }else {\n" +
                        "                          echo '<script>';\n" +
                        "                          echo 'alert(\"Registrierung fehlgeschlagen!\")';\n" +
                        "                          echo '</script>';\n" +
                        "                      }\n" +
                        "\n" +
                        "\n" +
                        "                  ?>\n" +
                        "              </body>\n" +
                        "      </html>\n" +
                        "\n" +
                        "      <!-- salter.php -->\n" +
                        "\n" +
                        "      <?php\n" +
                        "          $SALT = 'lksdlicse#9u98*lhl!5_dss+';\n" +
                        "\n" +
                        "          function salter($keyword): String\n" +
                        "          {\n" +
                        "              global $SALT;\n" +
                        "              return hash(sha384, $keyword . $SALT);\n" +
                        "          }\n" +
                        "      ?>"
                }
            }
        },
        "12.2": {
            "title": "12.2. Login mit PHP",
            "exercises": {
                "1": {
                    "title": "Schreiben Sie eine sichere PHP-Lösung für Login, das die persistierten Registrierungsdaten aus der letzten Aufgabe nutzt.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "              <head>\n" +
                        "                  <meta charset=\"UTF-8\">\n" +
                        "                  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
                        "                  <title>Login</title>\n" +
                        "              </head>\n" +
                        "              <body>\n" +
                        "                  <h1>Login</h1>\n" +
                        "                  <form action=\"login.php\" method=\"post\">\n" +
                        "                      <label>\n" +
                        "                          Account\n" +
                        "                          <br>\n" +
                        "                          <input type=\"text\" name=\"account\">\n" +
                        "                      </label>\n" +
                        "                      <br>\n" +
                        "                      <label>\n" +
                        "                          Passwort\n" +
                        "                          <br>\n" +
                        "                          <input type=\"password\" name=\"password\">\n" +
                        "                      </label>\n" +
                        "                      <br>\n" +
                        "                      <br>\n" +
                        "                      <input type=\"submit\" value=\"Einloggen\">\n" +
                        "                  </form>\n" +
                        "                  <?php\n" +
                        "                      require './etc/salter.php';\n" +
                        "\n" +
                        "                      function isRegistered($account,$password): bool\n" +
                        "                      {\n" +
                        "                          $lines = file('./etc/raw_passwd.csv');\n" +
                        "\n" +
                        "                          foreach ($lines as $line_num => $line) {\n" +
                        "                              list($registeredAccount,$registeredPassword) = explode(',',$line);\n" +
                        "\n" +
                        "                              // removes trailing whitespaces\n" +
                        "                              $registeredPassword = trim($registeredPassword, \" \\n\\r\\t\\v\\0\");\n" +
                        "\n" +
                        "                              if($registeredAccount === salter($account) && $registeredPassword === salter($password)) { return true; }\n" +
                        "                          }\n" +
                        "\n" +
                        "                          return false;\n" +
                        "\n" +
                        "                      }\n" +
                        "\n" +
                        "                      if(isset($_POST['account']) && $_POST['account'] != '' && isset($_POST['password']) && $_POST['password'] != '') {\n" +
                        "                          $account = $_POST['account'];\n" +
                        "                          $password = $_POST['password'];\n" +
                        "\n" +
                        "\n" +
                        "                          if(isRegistered($account, $password)) {\n" +
                        "                              header('Location:index.html');\n" +
                        "                          }else {\n" +
                        "                              echo '<script> alert(\"Keinen Account unter diesem Namen gefunden oder falsches Passwort!\") </script>';\n" +
                        "                          }\n" +
                        "                      }else {\n" +
                        "                          echo '<script> alert(\"Ungültige Eingabe!\") </script>';\n" +
                        "                      }\n" +
                        "                  ?>\n" +
                        "              </body>\n" +
                        "          </html>\n"
                }
            }
        },
        "12.3": {
            "title": "12.3. WWW-Navigator zum Content-Editor ausbauen",
            "exercises": {
                "1": {
                    "title": "Bauen Sie Ihren WWW-Navigator zum Content-Editor aus, mit dem Sie weitere Inhalte hinzu fügen können, die persistent auf dem Server mittels PHP gespeichert werden. Schreiben Sie Ihre PHP-Scripte so, dass es zu keinen Nebenläufigkeitsartefakten kommen kann, egal wie viele Nutzer gleichzeitig editieren und speichern.\n" +
                        "\n" +
                        "Speichern Sie die Inhalte Ihres WWW-Navigators auf dem Server www2.inf.h-brs.de. Erweitern Sie Ihren WWW-Navigator um eine Edit-Funktionalität, so dass Inhalte editiert und ergänzt werden können. Vermeiden Sie die Lost Update-Anomalie.\n" +
                        "\n" +
                        "Schützen Sie Ihre Inhalte mit einem Login.",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "html",
                    "solution": "<!DOCTYPE html>\n" +
                        "          <html lang=\"de\">\n" +
                        "              <head>\n" +
                        "                  <meta charset=\"UTF-8\">\n" +
                        "                  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                        "                  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
                        "                  <title>Übung 12</title>\n" +
                        "                  <style>\n" +
                        "                      fieldset {\n" +
                        "                          padding: 10px;\n" +
                        "                          background-color: #ccc;\n" +
                        "                      }\n" +
                        "\n" +
                        "                      select {\n" +
                        "                          margin-bottom: 10px;\n" +
                        "                      }\n" +
                        "\n" +
                        "                      textarea {\n" +
                        "                          margin-bottom: 10px;\n" +
                        "                          height: 100px;\n" +
                        "                          width: 50%;\n" +
                        "                      }\n" +
                        "                  </style>\n" +
                        "              </head>\n" +
                        "              <body>\n" +
                        "                  <h1>WWW-Navigator</h1>\n" +
                        "                  <fieldset>\n" +
                        "                      <form method=\"post\">\n" +
                        "                          <select name=\"top_header\">\n" +
                        "                              <option value=\"html\">HTML</option>\n" +
                        "                              <option value=\"css\">CSS</option>\n" +
                        "                              <option value=\"javascript\">JavaScript</option>\n" +
                        "                          </select>\n" +
                        "                          <select name=\"sub_header\"></select>\n" +
                        "                          <br>\n" +
                        "                          <textarea name=\"content\"></textarea>\n" +
                        "                          <br>\n" +
                        "                          <input type=\"submit\" value=\"Speichern\">\n" +
                        "                      </form>\n" +
                        "                  </fieldset>\n" +
                        "              </body>\n" +
                        "                  <?php\n" +
                        "                      $file = './etc/data.json';\n" +
                        "                      $contents = file_get_contents($file);\n" +
                        "                      $json = json_decode($contents, true);\n" +
                        "\n" +
                        "                      if(isset($_POST['top_header']) && isset($_POST['sub_header']) && isset($_POST['content'])) {\n" +
                        "                          $top_header = $_POST['top_header'];\n" +
                        "                          $sub_header = $_POST['sub_header'];\n" +
                        "                          $content = $_POST['content'];\n" +
                        "\n" +
                        "                          $json[$top_header][$sub_header] = $content;\n" +
                        "\n" +
                        "                          if(file_put_contents($file,json_encode($json, true))) {\n" +
                        "                              echo '<script type=\"text/javascript\"> alert(\"Gespeichert!\") </script>';\n" +
                        "                          }else {\n" +
                        "                              echo '<script> alert(\"Speichern fehlgeschlagen!\") </script>';\n" +
                        "                          }\n" +
                        "                      }else {\n" +
                        "                          echo '<script> alert(\"Falsche Eingabe!\") </script>';\n" +
                        "                      }\n" +
                        "                  ?>\n" +
                        "                  <script>\n" +
                        "                      let json = <?php echo json_encode($json) ?>;\n" +
                        "                      const top_header = document.querySelector('select[name=\"top_header\"]');\n" +
                        "                      const sub_header = document.querySelector('select[name=\"sub_header\"]');\n" +
                        "                      const content = document.querySelector('textarea[name=\"content\"]');\n" +
                        "\n" +
                        "\n" +
                        "                      Object.keys(json['html']).forEach(key => {\n" +
                        "                          let option = document.createElement('option');\n" +
                        "                          option.value = key;\n" +
                        "                          option.innerText = key;\n" +
                        "                          sub_header.append(option);\n" +
                        "                      })\n" +
                        "\n" +
                        "                      const text = document.createTextNode(json[top_header.value][sub_header.value]);\n" +
                        "                      content.append(text);\n" +
                        "\n" +
                        "                      top_header.addEventListener('change', (e) => {\n" +
                        "                          while (sub_header.lastChild) {\n" +
                        "                              let lastChild = sub_header.lastChild;\n" +
                        "                              sub_header.removeChild(lastChild);\n" +
                        "                          }\n" +
                        "                          Object.keys(json[e.target.value]).forEach(key => {\n" +
                        "                              let option = document.createElement('option');\n" +
                        "                              option.value = key;\n" +
                        "                              option.innerText = key;\n" +
                        "\n" +
                        "                              sub_header.append(option)\n" +
                        "                          });\n" +
                        "\n" +
                        "                          let lstChld = content.lastChild;\n" +
                        "                          content.removeChild(lstChld);\n" +
                        "\n" +
                        "                          const text = document.createTextNode(json[top_header.value][sub_header.value]);\n" +
                        "                          content.append(text);\n" +
                        "                      });\n" +
                        "\n" +
                        "                      sub_header.addEventListener('change', (e) => {\n" +
                        "                          let lastChild = content.lastChild;\n" +
                        "                          content.removeChild(lastChild);\n" +
                        "\n" +
                        "                          let text = document.createTextNode(json[top_header.value][e.target.value]);\n" +
                        "                          content.append(text);\n" +
                        "                      })\n" +
                        "                  </script>\n" +
                        "          </html>"
                }
            }
        }
    },
    "Security": {
        "13.1": {
            "title": "13.1. Sicherer ArrayWrapper",
            "exercises": {
                "1": {
                    "title": "In der Vorlesung wurde ein ArrayWrapper Exploit gezeigt.\n" +
                        "\n" +
                        "Analysieren Sie die Ursache dieses Exploits.\n" +
                        "\n" +
                        "Entwickeln Sie ein Sicherheitskonzept und eine ArrayWrapper-Lösung, die gegen diesen Exploit gewappnet ist.\n" +
                        "\n" +
                        "Geben Sie hier Ihr Ursachenanalyse ein:",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "Der Exploit macht sich den Gebrauch der push-Funktion in der append-Methode des Wrappers zu nutze. Über die store-Funktion wird eine überschriebene push-Funktion an das Array gehängt . Die neue push-Funktionalität ermöglicht es nun das Array, zu welchem die Funktion nun gehört, zu speichern."
                },
                "2": {
                    "title": "Geben Sie hier Ihr Sicherheitskonzept ein:",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "Um den Exploit zu verhindern, führt man eine Implementierung ohne die push-Funktion ein. Die gleiche Funktionalität kann man mit dem Rest Parameter erreichen."
                },
                "3": {
                    "title": "Geben Sie hier Ihren JS-Code eines sicheren ArrayWrappers ein:",
                    "image": false,
                    "video": false,
                    "code": true,
                    "language": "javascript",
                    "solution": "const vector = (...arguments) => {\n" +
                        "          var array = [...arguments]\n" +
                        "              return {\n" +
                        "                  get: function(index) {\n" +
                        "                      return array[index] == -1 ? null : array[index]\n" +
                        "                  },\n" +
                        "                  store: function(index, value) {\n" +
                        "                      array[index] = value\n" +
                        "                  },\n" +
                        "                  append: function(value) {\n" +
                        "                      array = [...array, value]\n" +
                        "                  }\n" +
                        "              }\n" +
                        "          }"
                }
            }
        },
        "13.2": {
            "title": "13.2. WebGoat Injection",
            "exercises": {
                "1": {
                    "title": "Installieren Sie WebGoat.\n" +
                        "\n" +
                        "Starten Sie das Docker Image mit WebGoat.\n" +
                        "\n" +
                        "Öffnen Sie die Landing Page von WebGoat.\n" +
                        "\n" +
                        "Lösen Sie die Aufgaben in (A1) Injection, SQL Injection (Intro).",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "SELECT department FROM employees WHERE first_name='Bob'\n" +
                        "\n" +
                        "UPDATE employees SET department='Sales' WHERE first_name='Tobi' AND last_name='Barnett'\n" +
                        "\n" +
                        "ALTER TABLE employees ADD phone varchar(20)\n" +
                        "\n" +
                        "GRANT all ON grant_rights TO unauthorized_user\n" +
                        "\n" +
                        "SELECT * FROM user_data WHERE first_name = 'John' and last_name = '' or '1' = '1'\n" +
                        "\n" +
                        "SELECT * From user_data WHERE Login_Count = 0 and userid= 0 OR 1=1\n" +
                        "\n" +
                        "Authentication TAN: ' OR '1' = '1\n" +
                        "\n" +
                        "Authentication TAN: ' ;UPDATE employees SET salary=100000 WHERE last_name='Smith'\n" +
                        "\n" +
                        "Action contains: UPDATE ';DROP TABLE access_log --"
                }
            }
        },
        "13.3": {
            "title": "13.3. WebGoat XSS",
            "exercises": {
                "1": {
                    "title": "Installieren Sie WebGoat.\n" +
                        "\n" +
                        "Starten Sie das Docker Image mit WebGoat.\n" +
                        "\n" +
                        "Öffnen Sie die Landing Page von WebGoat.\n" +
                        "\n" +
                        "Lösen Sie die Aufgaben in (A7) Cross-Site Scripting (XSS), Cross Site Scripting.",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "same cookies on each Tab: yes\n" +
                        "\n" +
                        "credit card input is vurnerable\n" +
                        "\n" +
                        "start.mvc#test/\n" +
                        "\n" +
                        "2099950210\n" +
                        "\n" +
                        "Correct solutions: 4 3 4 2 4"
                }
            }
        },
        "13.4": {
            "title": "13.4. WebGoat Cross-Site Request Forgeries",
            "exercises": {
                "1": {
                    "title": "Installieren Sie WebGoat.\n" +
                        "\n" +
                        "Starten Sie das Docker Image mit WebGoat.\n" +
                        "\n" +
                        "Öffnen Sie die Landing Page von WebGoat.\n" +
                        "\n" +
                        "Lösen Sie die Aufgaben zu (A8:2013) Request Forgeries, Cross-Site Request Forger",
                    "image": false,
                    "video": false,
                    "code": false,
                    "solution": "csrf"
                }
            }
        }
    }
}

