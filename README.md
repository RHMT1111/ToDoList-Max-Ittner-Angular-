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

## Speicherung mit localStorage

Die Todo-Liste wird im Browser gespeichert. Dadurch bleiben die Todos auch nach einem Neuladen der Seite erhalten.

- `localStorage.setItem(...)` speichert Daten als Text.
- `localStorage.getItem(...)` liest gespeicherte Daten.
- `JSON.stringify(...)` wandelt die Todo-Liste in speicherbaren JSON-Text um.
- `JSON.parse(...)` wandelt den JSON-Text wieder in eine JavaScript-/TypeScript-Liste um.

Hinweis: Die Daten liegen nur im jeweiligen Browser auf dem jeweiligen Gerät.

## Gelernt

- Angular-Komponenten mit `@Component`
- Daten und Methoden in `app.ts`
- Darstellung in `app.html`
- Styling mit `app.css`
- Schleifen mit `@for`
- Bedingungen mit `@if` und `@else`
- Click-Events mit `(click)`
- Datenbindung mit `{{ }}` und `[property]`
- Parent-Child-Kommunikation mit `@Input()` und `@Output()`
- Ereignisse mit `EventEmitter`
- Listen bearbeiten mit `push()` und `splice()`
- Daten lokal im Browser mit `localStorage` speichern und laden
- JSON mit `JSON.stringify()` speichern und mit `JSON.parse()` wieder lesen
