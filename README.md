# karentoroku-api

A scheduling API built with Express, Prisma, and Firebase.

## Prerequisites

- Node.js (v18 or later)
- Yarn

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd karentoroku-api
    ```

2.  Install dependencies:
    ```bash
    yarn install
    ```

## Development Environment (Local)

The API supports a fully local development environment using SQLite and the Firebase Auth Emulator.

1.  **Configure `.env`**:
    ```env
    # Database
    DATABASE_URL="file:./dev.db"

    # Firebase
    FIREBASE_PROJECT_ID="your-project-id"
    FIREBASE_AUTH_EMULATOR_HOST="127.0.0.1:9099"
    ```

2.  **Initialize Database**:
    ```bash
    yarn prisma:setup-sqlite
    ```

3.  **Run Dev Server**:
    ```bash
    yarn dev
    ```

## Production Environment

1.  **Prerequisites**:
    - PostgreSQL
    - Firebase Project with Service Account Key

2.  **Configure `.env`**:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/karentoroku?schema=public"
    FIREBASE_PRIVATE_KEY="YOUR_PRIVATE_KEY"
    FIREBASE_CLIENT_EMAIL="YOUR_CLIENT_EMAIL"
    FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    ```

3.  **Database Migration**:
    ```bash
    yarn prisma:use-postgres
    yarn prisma:migrate
    ```

## Scripts

- `yarn dev`: Run the development server.
- `yarn build`: Build the project for production.
- `yarn start`: Start the production server.
- `yarn test`: Run tests.
- `yarn prisma:migrate`: Run Prisma migrations.
- `yarn prisma:generate`: Generate Prisma client.

## API Endpoints

- `GET /`: Health check.
- `POST /createUser`: Create a new user.
- `POST /getUsers`: Get all users.
- `POST /getUserById`: Get a user by ID.
- `POST /getUserByIdToken`: Get a user by Firebase ID token.
- `POST /createEventType`: Create a new event type.
- `POST /getEventType`: Get all event types.
