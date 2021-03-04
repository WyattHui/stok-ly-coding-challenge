### Dependencies
* Composer (https://getcomposer.org)
### Development
* Install back-end

    * Copy `.env.example` to `.env`

    ```
    composer install
    ```

* Migrate database

    ```
    php artisan migrate
    ```

* Install and start front-end
    * resources/angular

    ```
    npm install
    npm start
    ```

### Deployment instructions
* Build

    ```
    npm run build:prod
    ```

* Start

    ```
    npm run serve
    ```

### Team contacts
* Wyatt Hui (wyatt.hui.1104@gmail.com)
