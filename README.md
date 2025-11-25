# karentoroku-api

A scheduling API built with Express, Prisma, and Firebase.

## Prerequisites

- Node.js (v18 or later)
- PostgreSQL
- Firebase Project (for authentication)

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

## Configuration

1.  **Environment Variables**: Create a `.env` file in the root directory and add your database URL:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/karentoroku?schema=public"
    ```

2.  **Firebase Admin SDK**:
    - Download your Firebase Admin SDK service account key.
    - Save it as `src/config/firebaseAdmin.json`.
    - **Note**: This file is gitignored for security.

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
