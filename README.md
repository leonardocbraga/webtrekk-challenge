# WebtrekkChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Node configuration

The backend module of this application uses Node server and Mongo DB as follows.

### Node server

To install nodejs, please go to the nodejs site https://nodejs.org/en/.

To start the server, just run `node server.js`. This server.js file is used to initialize the Node server, connect to MongoDB and set up the Express route.

In order to access these dependencies, it's necessary to run `npm install --save express body-parser cors mongoose nodemon moment`.

### Database connection

Database host, port, schema and credentials are described in the file named `config/DB.js`. The database used is MongoDB in order to store JSON-like documents and it's hosted on MongoLab.

### MongoDB model

MongoDB model interface used is Mongoose and the model configuration is set in the file `models/Customer.js`. In this artifact, table name and column definitions for Customers are configured. Please, note that the column for customer id is omitted since MongoDB will create the `_id` column automatically.

### Express routes
The routes to Customer basic operations are defined in the file `expressRoutes/customerRoutes.js` using Express. In each operation, the Customer Mongoose schema is used to call find, save and remove functions. 

## Angular configuration

The JavaScript framework used in this project is Angular 4. To install Angular client, run `npm install -g @angular/cli`. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Router configuration

The Customer use case paths are defined in the file `src/app/routerConfig.ts` as follows: `index` and `create`. Index route determines the list page with links to deletion and Create route sets the page responsible for creating a new Customer and editing an existing one.

### Service

The Service module is responsible for connecting to Node server via Http. The Service artifacts are stored in `src/app/service` folder.

### Directives

In this application, custom components are implemented via Directives (`src/app/directives`). There are three components used in forms: Currency Mask, Date Picker and Datetime Picker.

### Design

This project uses Bootstrap to allow the design to be responsive whichever browser is being used. The required files are imported in `src/index.html`.

### Tests

There are tests for Create and Index components in their respective `spec.ts` files using Jasmine. Tu run all tests, please see 'Running unit tests' section.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --output-path=public` to build the project. The build artifacts will be stored in the `public/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deployment

The application is deployed automatically on Heroku whenever a change is commited on [Github](https://github.com/leonardocbraga/webtrekk-challenge). The link to application is [Webtrekk Challenge](https://leonardocbraga-webtrekk.herokuapp.com/).