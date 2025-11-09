# Team Notes Board

A lightweight, real-time team notes application for quick updates and daily stand-ups.

## Overview

Simple single-page application where team members can post and view notes instantly. Built as a learning project demonstrating React state management, RESTful API integration, and modern UI design patterns.

## Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Backend**: json-server (mock REST API)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Quick Start

```bash
# Install dependencies
npm install

# Terminal 1: Start json-server
npx json-server --watch db.json --port 3001

# Terminal 2: Start dev server
npm run dev
```

App runs on `http://localhost:3000`

API runs on `http://localhost:3001`

## API Endpoints

| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| GET    | `/notes` | Fetch all notes |
| POST   | `/notes` | Create new note |

### Request/Response Format

```json
{
  "id": 1,
  "user": "Deevyne",
  "message": "Finished frontend layout.",
  "time": "11:45 PM"
}
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Header with note count
│   ├── NoteInput.jsx    # Form for adding notes
│   └── NoteCard.jsx     # Individual note display
├── App.jsx              # Main component with API logic
└── index.css            # Tailwind imports
```

## Features

- Real-time note updates
- Persistent storage via json-server
- Responsive design
- Input validation
- Error handling with user feedback
- Sorted by newest first

## Configuration

Default ports:

- Frontend: `3000`
- Backend: `3001`

To change backend port, update `API_URL` in `App.jsx`:

```javascript
const API_URL = "http://localhost:YOUR_PORT/notes";
```

## Data Persistence

Notes are stored in `db.json`. Data persists across server restarts but is local to each instance.

For shared data across team members, consider deploying json-server or replacing with a proper backend (Node.js/Express + MongoDB/PostgreSQL).

## Future Enhancements

- [ ] Delete notes functionality
- [ ] Edit existing notes
- [ ] User authentication
- [ ] Real-time sync with WebSockets
- [ ] Note categories/tags
- [ ] Search and filter
- [ ] Markdown support

## License

MIT
