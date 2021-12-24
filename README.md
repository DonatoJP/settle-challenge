# Settle Challenge

## Set up

The repository contains a Makefile file containing some useful commands to execute the app:

```bash
# Start the app on Developing mode
make dev-up

# Start the app on Production mode
make prod-up

# Check the status of the containers
make ps

# Follow app logs
make logs

# Shutdown application
make down
```

### Second option

If you don't want to use the `make` tool, you can use the following commands:

```bash
# Start the app on Developing mode
docker-compose -p "settle-challenge" up -d --build

# Start the app on Production mode
docker-compose -f "docker-compose-prod.yaml" -p "settle-challenge" up -d --build

# Check the status of the containers
docker-compose -p "settle-challenge" ps

# Follow app logs
docker-compose -p "settle-challenge" logs -f

# Shutdown application
docker-compose -p "settle-challenge" down
```

Additionally, if you decide to go this way, you may want to validate the `.env` file (`src/back-app/.env`) to configure environment variables while the back-end application is running. Examples for both environments (`production` and `dev`) files are in `src/back-app/.env.dev` and `src/back-app/.env.prod`.


## Technological Stack

- Back-end application: **`Hapi.js`**
  - Dependencies: axios, mongoose, migrate-mongo, joi, dotenv, winston, nodemon
- Front-end application: **`React`**
  - Dependencies: Material-UI, axios
- Database: **`MongoDB`**
- Infrastructure: **`Docker & Docker Compose`**

## Development Environment

This environment includes:

- A frontend application, running with `react-scripts start` on port 3001 (http://localhost:3001)
- A backend application, running with `nodemon` for hot-reloading on port 3000 (http://localhost:3000)
- A `dev` database in MongoDB

The backend application on dev mode does not communicates with FixerIO to retrieve data from it. Instead, it loads a Mock component that uses data saved on its filesystem to answer client's requests. To make it a little bit more real, it returns rates with a difference of +/- 10% from the original. Reloading any rate multiple times will result in a constant change of the "Original Fee" value.

## Production Environment

This environment includes:

- A frontend application, compiled and run behind a `nginx` service on port 80 (http://localhost).
- A backend application, running on port 3000 (http://localhost:3000)
- A `db` database in MongoDB

The backend application is fully connected with FixerIO. Trying to reload any rate with the reload button will trigger a new request to Fixer.IO to re-calculate the FX rate.