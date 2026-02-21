# Uno Score Tracker

A simple score tracking app for Uno card games. Track points for each player and automatically reset when someone reaches 150 points.

## Features

- Add/remove players
- Add points after each round
- View score history for each player
- Reset player score (when they reach 150+)
- Data persists in localStorage

## Usage

1. **Add a player**: Enter a name and click `+`
2. **Add points**: After each round, enter the points and click `+`
3. **Reset player**: When a player reaches 150+, click the home icon to reset their score
4. **Remove player**: Click the trash icon to remove a player

## Development

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run android    # Build & open Android Studio
npm run ios        # Build & open Xcode
```

## Tech Stack

- Ionic 8
- Angular 17
- Capacitor 6
