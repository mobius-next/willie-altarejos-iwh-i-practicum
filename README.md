# Integrating With HubSpot I: Foundations Practicum

**Custom Object: Technologies**|
https://app.hubspot.com/contacts/48508447/objects/2-38101974/views/all/list

**Documentation for index.js**
This Express.js application utilizes Axios for making HTTP requests and Pug for rendering dynamic HTML templates. It interacts with the HubSpot CRM API to manage custom objects.

**Dependencies:**

dotenv: Loads environment variables from a .env file.
express: Web framework for Node.js.
axios: Promise-based HTTP client for the browser and Node.js.
pug: Template engine for Node.js.
body-parser: Middleware for parsing request bodies.


**Setup:**

Environment Variables:

PORT: Specifies the port the application will run on (defaults to 3002).
PRIVATE_APP_ACCESS: Stores the HubSpot API access token.
Middleware:

express.static(): Serves static files from the 'public' directory.
express.urlencoded(): Parses URL-encoded request bodies.
express.json(): Parses JSON request bodies.


**Routes:**

GET /:

Fetches all custom object records from the HubSpot API.
Renders the homepage Pug template, passing the fetched records as data.


GET /update-cobj:

Renders the updates Pug template for updating a custom object.

POST /update-cobj:

Retrieves custom object data from the request body.
Sends a request to the HubSpot API to update the custom object.
Fetches all updated custom object records from the HubSpot API.
Renders the homepage Pug template, passing the updated records as data.
Error Handling:

try...catch blocks are used to handle errors during API requests.

**Pug Templates:**

homepage: Displays a list of custom object records.
updates: Provides a form for updating a custom object.

**Additional Notes:**

The HubSpot API endpoint and custom object IDs are hardcoded in the routes.
The application assumes the existence of Pug templates in a 'views' directory.