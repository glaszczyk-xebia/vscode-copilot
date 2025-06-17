# VSCode Copilot - Metropolitan Museum Art Gallery

> 🎨 Aplikacja React do przeglądania dzieł sztuki z The Metropolitan Museum of Art

## 📋 Spis treści

- [Opis projektu](#opis-projektu)
- [Technologie](#technologie)
- [Instalacja](#instalacja)
- [Uruchomienie](#uruchomienie)
- [Struktura projektu](#struktura-projektu)
- [Wytyczne kodowania](#wytyczne-kodowania)
- [Accessibility](#accessibility)
- [API](#api)

## 🎯 Opis projektu

Aplikacja umożliwia przeglądanie dzieł sztuki z kolekcji The Metropolitan Museum of Art za pomocą ich publicznego API. Projekt został zrefaktoryzowany zgodnie z najlepszymi praktykami kodowania, z uwzględnieniem:

- **Domain-Driven Design (DDD)** - struktury domenowe i modele biznesowe
- **Accessibility (ARIA)** - pełna dostępność dla osób z niepełnosprawnościami
- **TypeScript** - silne typowanie i bezpieczeństwo typów
- **Modern React** - hooks, functional components, i najnowsze wzorce
- **Clean Architecture** - separacja warstw i jasne zależności

## 🛠 Technologie

### Frontend

- **React 19.1.0** - biblioteka UI z najnowszymi funkcjonalnościami
- **TypeScript 5.0+** - superset JavaScript z silnym typowaniem
- **Tailwind CSS 4.0** - utility-first CSS framework
- **Vite 6.3.5** - nowoczesny bundler i dev server

### Narzędzia developerskie

- **ESLint 9.25.0** - linter z konfiguracją TypeScript
- **Prettier 3.5.3** - formatter kodu
- **PostCSS** - przetwarzanie CSS
- **Autoprefixer** - automatyczne prefiksy CSS

### API

- **The Metropolitan Museum of Art Collection API** - źródło danych o dziełach sztuki

## 🚀 Instalacja

```bash
# Klonowanie repozytorium
git clone <repository-url>
cd vscode-copilot

# Instalacja zależności
npm install
```

## ▶️ Uruchomienie

```bash
# Tryb deweloperski
npm run dev

# Budowanie dla produkcji
npm run build

# Podgląd produkcji
npm run preview

# Sprawdzanie typów
npm run type-check

# Linting
npm run lint:check
npm run lint        # z automatycznym naprawianiem

# Formatowanie
npm run format:check
npm run format      # z automatycznym formatowaniem
```

## 📁 Struktura projektu

```
src/
├── components/          # Komponenty UI
│   ├── ArtworkCard.tsx     # Karta pojedynczego dzieła
│   ├── ArtworkGrid.tsx     # Siatka dzieł sztuki
│   ├── ErrorBoundary.tsx   # Obsługa błędów React
│   ├── ErrorDisplay.tsx    # Wyświetlanie błędów
│   ├── LoadingIndicator.tsx # Wskaźnik ładowania
│   └── index.ts            # Barrel exports
├── constants/           # Stałe aplikacji
│   └── api.constants.ts    # Stałe API i komunikatów
├── hooks/              # Custom React hooks
│   └── useArtworks.ts      # Hook do zarządzania danymi dzieł
├── services/           # Warstwa usług
│   └── met-api.service.ts  # Serwis API Met Museum
├── types/              # Definicje typów TypeScript
│   └── artwork.types.ts    # Typy domenowe dla dzieł sztuki
├── App.tsx             # Główny komponent aplikacji
├── main.tsx           # Punkt wejścia aplikacji
└── index.css          # Style globalne z Tailwind
```

## 📜 Wytyczne kodowania

### Domain-Driven Design (DDD)

- **Bounded contexts** - wyraźne granice między częściami domeny
- **Ubiquitous language** - spójne nazewnictwo w całym projekcie
- **Value objects** - typy bez tożsamości (np. `ArtworkSummary`)
- **Domain services** - logika biznesowa w serwisach (np. `MetMuseumApiService`)

### React Best Practices

- **Functional components** z hooks zamiast klas
- **React.memo()** dla optymalizacji renderowania
- **useCallback** dla handler funkcji przekazywanych do komponentów potomnych
- **Custom hooks** dla logiki stanu (np. `useArtworks`)
- **Error boundaries** dla graceful error handling

### TypeScript

- **Strict mode** - maksymalne bezpieczeństwo typów
- **Readonly interfaces** - niemutowalne struktury danych
- **Union types** - precyzyjne typy dla stanu i właściwości
- **Generic types** - wielokrotne użycie typów

### Code Quality

- **ESLint** - statyczna analiza kodu z custom rules
- **Prettier** - konsystentne formatowanie
- **Conventional commits** - standardowe komunikaty commitów
- **Path mapping** - czytelne importy z @ aliasami

## ♿ Accessibility

Aplikacja implementuje pełną dostępność zgodnie z WCAG 2.1:

### ARIA Implementation

- **Landmark roles** - `main`, `navigation`, `banner`, `contentinfo`
- **Live regions** - `aria-live` dla dynamicznych treści
- **Semantic HTML** - `article`, `section`, `header`, `footer`
- **Focus management** - widoczne focus states, logical tab order
- **Screen reader support** - meaningful `aria-label`, `alt` texts

### Keyboard Navigation

- **Tab order** - logiczna kolejność nawigacji
- **Enter/Space** - aktywacja interaktywnych elementów
- **Escape** - zamykanie modali/dropdownów (ready for future features)

### Visual Accessibility

- **Color contrast** - spełnia WCAG AA
- **Focus indicators** - wyraźne wskaźniki focus
- **Responsive design** - działa na wszystkich urządzeniach

## 🌐 API

### Endpoints

```typescript
// Wszystkie obiekty
GET https://collectionapi.metmuseum.org/public/collection/v1/objects

// Szczegóły obiektu
GET https://collectionapi.metmuseum.org/public/collection/v1/objects/{id}

// Wyszukiwanie
GET https://collectionapi.metmuseum.org/public/collection/v1/search?q={query}
```

### Data Models

```typescript
interface Artwork {
  readonly objectID: number;
  readonly title: string;
  readonly primaryImageSmall: string;
  readonly artistDisplayName: string;
  // ... i wiele więcej pól
}

interface ArtworkSummary {
  readonly objectID: number;
  readonly title: string;
  readonly primaryImageSmall: string;
  readonly artistDisplayName: string;
}
```

## 🔧 Konfiguracja

### ESLint

- TypeScript support z `typescript-eslint`
- React hooks rules
- Custom rules dla spójności projektu
- Integration z Prettier

### Prettier

- 100 znaków na linię
- Single quotes
- Trailing commas ES5
- Semicolons enabled

### Tailwind CSS

- Utility-first approach
- Custom component classes w CSS
- Responsive design utilities
- Focus states dla accessibility

---

**Powered by** [The Metropolitan Museum of Art Collection API](https://metmuseum.github.io/)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
