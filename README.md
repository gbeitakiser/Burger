
# Mmmmmm Burgers



### What this app does...

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, it will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour` button. When the user clicks it, the burger will move to the right side of the page.

* The app stores every burger in a database, whether devoured or not.



## Workflow

#### App Setup

1. Created a GitHub repo called `burger` and cloned it to my computer.

2. Made a package.json file by running `npm init` from the command line.

3. Installed the Express npm package: `npm install express`.

4. Created a server.js file.

5. Installed the Handlebars npm package: `npm install express-handlebars`.

6. Installed MySQL npm package: `npm install mysql`.

7. Required the following npm packages inside of the server.js file:
   * express

#### Inside The Database

1. Inside the `burger` directory is a folder named `db`.

2. In the `db` folder is a file named `schema.sql`. It contains SQL queries that do the following:

   * Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

3. In the `db` folder is a `seeds.sql` file. This file has queries to populate the `burgers` table.

4. To setup this databse manually, run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.




#### Config Folder

1. Inside your `burger` directory is a folder named `config` containing...

2. A `connection.js` file inside `config` directory.

   * Inside the `connection.js` is the code to connect Node to MySQL and export the connection.

3.  An `orm.js` file inside `config` directory containing...

   * An import command requiring `connection.js` in `orm.js`

   * In the `orm.js` file, are the methods that will execute the necessary MySQL commands in the controllers. These are the methods needed to retrieve and store data in the database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Exports the ORM object in `module.exports`.



#### Model Folder

* Inside the `burger` directory, is a folder named `models`.

  * In `models`, is a `burger.js` file containing...

    * Command to import `orm.js` into `burger.js`

    * The code that calls the ORM functions using burger specific input for the ORM.

    * Exports at the end of the `burger.js` file.



#### Controller Folder

1. Inside the `burger` directory is a folder named `controllers` containing...

2. The `burgers_controller.js` file.

3. The `burgers_controller.js` file imports the following:

   * Express
   * `burger.js`

4. The `router` for the app, which is then exported at the end of the file.



#### View Folder

1. Inside the `burger` directory is a folder named `views` containing...

   * The `index.handlebars` file inside `views` directory.

   * The `layouts` directory inside `views` directory.

     * The `main.handlebars` file inside `layouts` directory.

     * The `main.handlebars` file so it's able to be used by Handlebars.

     * The `index.handlebars` to have the template that Handlebars can render onto.

     * A button in `index.handlebars` that submits the user input into the database.



#### Directory Structure


```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       ├── images
│       │   └── bckgrnd.png
│       └── js
│           └── burgers.js
│
├── server.js
│
└── views
    ├── index.handlebars
    ├── layouts
    |   └── main.handlebars
    └── partials
        └── burgers
            └── burger-block.handlebars
```


###Don't forget to enjoy this app!!


# Burger