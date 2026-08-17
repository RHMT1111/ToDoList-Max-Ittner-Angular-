Du hast recht — mein Fehler. Hier komplett zum Kopieren, diesmal korrekt mit **Speicherung** und **Gelernt**:

````md
# Angular Todo-Liste

Eine einfache Todo-Liste, die ich zum Lernen von Angular erstellt habe.

## Funktionen

- Statische Todos anzeigen
- Neue Todos über ein Eingabefeld hinzufügen
- Todo-Status per Checkbox ändern
- Erledigte und offene Todos anzeigen
- Einzelne Todos löschen
- Todos im `localStorage` speichern
- Gespeicherte Todos beim Neuladen der Seite wieder laden
- Parent- und Child-Komponenten verwenden

## Verwendete Technologien

- Angular
- TypeScript
- HTML
- CSS
- Browser `localStorage`

## Projektstruktur

```text
src/app/
├── app.ts             # Hauptlogik und Liste aller Todos
├── app.html           # Oberfläche der Anwendung
├── app.css            # Styling der Haupt-Komponente
├── list-item/         # Child-Komponente für ein einzelnes Todo
└── pipes/             # Eigene Pipes zur Anzeige von Daten
```

## Speicherung mit localStorage

Die Todo-Liste wird im Browser gespeichert. Dadurch bleiben die Todos auch nach einem Neuladen der Seite erhalten.

- `localStorage.setItem(...)` speichert Daten als Text.
- `localStorage.getItem(...)` liest gespeicherte Daten.
- `JSON.stringify(...)` wandelt die Todo-Liste in speicherbaren JSON-Text um.
- `JSON.parse(...)` wandelt den JSON-Text wieder in eine JavaScript-/TypeScript-Liste um.

Hinweis: Die Daten liegen nur im jeweiligen Browser auf dem jeweiligen Gerät und werden nicht im Backend gespeichert.

## Starten des Projekts

1. Repository klonen:

```bash
git clone <DEINE-REPOSITORY-URL>
```

2. In den Projektordner wechseln:

```bash
cd <PROJEKTNAME>
```

3. Benötigte Pakete installieren:

```bash
npm install
```

4. Angular-Anwendung starten:

```bash
ng serve
```

5. Im Browser öffnen:

```text
http://localhost:4200
```

## Gelernt

- Angular-Komponenten mit `@Component`
- Aufbau einer Angular-Anwendung mit `app.ts`, `app.html` und `app.css`
- Daten und Methoden in TypeScript
- Darstellung von Daten mit `{{ variable }}`
- Schleifen mit `@for`
- Bedingungen mit `@if` und `@else`
- Click-Events mit `(click)`
- Property Binding, z. B. `[placeholder]`
- Template-Referenzvariablen wie `#todoEingabe`
- Neue Todos mit `push()` zur Liste hinzufügen
- Todos mit `splice()` aus der Liste löschen
- Den Status eines Todos über `done` ändern
- Parent- und Child-Komponenten
- Datenübergabe mit `@Input()`
- Ereignisse mit `@Output()` und `EventEmitter`
- `$index` und `$event`
- Pipes zur Veränderung der Darstellung
- Daten lokal im Browser mit `localStorage` speichern und laden
- JSON mit `JSON.stringify()` speichern und mit `JSON.parse()` wieder lesen
````
