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
                    "path": "src/assets/wireframe1.jpg",
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
    }
}

