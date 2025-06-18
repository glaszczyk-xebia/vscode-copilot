# Met Museum Art Gallery

Aplikacja React wyświetlająca dzieła sztuki z kolekcji Metropolitan Museum of Art w Nowym Jorku.

## 🎨 Funkcjonalności

- **Przeglądanie dzieł sztuki** - Wyświetlanie kolekcji dzieł z The Met Museum API
- **Responsywny design** - Dostosowanie do różnych rozmiarów ekranów
- **Obsługa błędów** - Eleganckie wyświetlanie komunikatów o błędach
- **Loading states** - Animowane wskaźniki ładowania
- **Lazy loading** - Optymalizacja ładowania obrazów
- **Odświeżanie** - Możliwość odświeżenia kolekcji

## 🚀 Uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Build aplikacji
npm run build

# Podgląd build'a
npm run preview
```

## 🏗️ Architektura

### Struktura projektu

```
src/
├── components/          # Komponenty React
│   ├── ArtworkCard.tsx     # Karta pojedynczego dzieła
│   ├── ErrorMessage.tsx    # Komponent obsługi błędów
│   └── LoadingSpinner.tsx  # Komponent ładowania
├── hooks/              # Custom hooks
│   └── useArtworks.ts     # Hook do pobierania dzieł
├── constants/          # Stałe aplikacji
│   └── index.ts           # Konfiguracja API i komunikaty
├── App.tsx            # Główny komponent
├── App.css            # Style aplikacji
├── index.css          # Globalne style
└── main.tsx           # Entry point
```

### Główne komponenty

#### `useArtworks` Hook
Custom hook odpowiedzialny za:
- Pobieranie listy dzieł z API
- Obsługę stanów loading/error
- Filtrowanie prawidłowych dzieł
- Funkcjonalność odświeżania

#### `ArtworkCard` Component
Komponent wyświetlający:
- Obraz dzieła
- Tytuł i autora
- Dodatkowe informacje (dział, kultura, medium)
- Hover effects i animations

#### Error Handling
- Graceful handling API failures
- User-friendly error messages
- Retry functionality

## 🎯 Zmiany w refaktoryzacji

### Przed refaktoryzacją
- Cała logika w jednym komponencie App
- Brak obsługi błędów
- Podstawowy design
- Brak separacji odpowiedzialności

### Po refaktoryzacji
- ✅ **Separation of Concerns** - Logika API w custom hook
- ✅ **Error Handling** - Comprehensive error handling
- ✅ **Loading States** - Professional loading indicators
- ✅ **Modern UI** - Beautiful, responsive design
- ✅ **TypeScript** - Better type safety
- ✅ **Performance** - Lazy loading, memoization
- ✅ **Maintainability** - Modular structure, constants
- ✅ **Accessibility** - Proper ARIA labels, focus states
- ✅ **Mobile-First** - Responsive grid layout

## 🛠️ Technologie

- **React 19** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Modern styling with CSS Grid/Flexbox
- **Met Museum API** - Art data source

## 📱 Responsive Design

- **Desktop** - Multi-column grid layout
- **Tablet** - Adjusted columns and spacing
- **Mobile** - Single column, optimized touch targets

## 🎨 Design Features

- **Gradient backgrounds** - Modern visual appeal
- **Glass morphism** - Backdrop blur effects
- **Smooth animations** - Hover and loading states
- **Color scheme** - Consistent design system
- **Typography** - Inter font family
- **Icons** - Emoji-based visual indicators

## 🚀 Performance Optimizations

- **Lazy loading** - Images load as needed
- **Promise.allSettled** - Parallel API calls with error handling
- **Efficient re-renders** - Proper dependency arrays
- **CSS optimizations** - Hardware-accelerated animations
