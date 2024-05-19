# Charts Dashboard

This is a single-page web application built using React and TypeScript for displaying and managing charts. The application features a responsive UI, a date range filter, and a settings page to add, edit, or remove charts. Chart data is generated randomly.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [State Management](#state-management)

## Features

- **Responsive UI**: Adjusts to different screen sizes.
- **View Mode**: Displays a list of charts with a date range filter.
- **Date Range Filter**: Filters chart data based on selected dates.
- **Settings Mode**: Allows adding, editing, and removing charts via a modal window.
- **Chart Types**: Supports various chart types such as line, spline, area, bar, and column.
- **Data Points**: Each data point includes a date and value field.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/faranayyaz/natlex-charts-dashboard.git
   cd charts-dashboard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

### View Mode

- **Date Range Filter**: Select a start date and an end date to filter the data points displayed in the charts.
- **Chart Display**: View the filtered charts. The default date range is set to today and 30 days prior.

### Settings Mode

- **Add Chart**: Click the "Add Chart" button to open a modal where you can enter the chart's name, type, and color.
- **Edit Chart**: Click the "Edit" button next to a chart to modify its details.
- **Remove Chart**: Click the "Remove" button next to a chart to delete it.

## Project Structure

```
charts-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── ChartItem.tsx
│   │   ├── ChartList.tsx
│   │   ├── DateRangeFilter.tsx
│   │   ├── Header.tsx
│   │   ├── ChartTable.tsx
│   │   ├── ChartModal.tsx
│   ├── pages/
│   │   ├── ViewMode.tsx
│   │   ├── Settings.tsx
│   ├── store/
│   │   ├── chartSlice.ts
│   │   ├── store.ts
│   ├── utils/
│   │   ├── dataGenerator.ts
│   │   ├── dateHelper.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── ChartList.css
├── package.json
└── README.md
```

## Components

### `Header.tsx`

- Navigation links for "View Mode" and "Settings".

### `DateRangeFilter.tsx`

- Date range selection for filtering chart data.

### `ChartItem.tsx`

- Displays individual charts using Highcharts.

### `ChartList.tsx`

- Lists all charts and handles the responsive display.

### `ChartTable.tsx`

- Displays a table of charts with options to edit and remove.

### `ChartModal.tsx`

- Modal for adding and editing charts.

### `ViewMode.tsx`

- Contains the logic and layout for the view mode with charts and date range filter.

### `Settings.tsx`

- Contains the logic and layout for managing charts with options to add, edit, and remove.

## State Management

- **Redux Toolkit**: Used for managing the global state of the application.
- **chartSlice.ts**: Contains the slice for managing chart data, including actions to add, update, and remove charts.
