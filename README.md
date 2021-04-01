# Built with
* [Laravel Sail](https://laravel.com/docs/8.x/sail)
* [Docker](https://www.docker.com/)

# Pre-requisites
You will only need [Docker](https://www.docker.com/) to run the application. Related installation instructions can be seen [here](https://docs.docker.com/docker-for-windows/install/). Please make sure that the following ports are free to use:
* 8081 - is used by the REST API application server
* 8082 - is used by Laravel
* 8083 - is used by MySQL

# Usage
1. Open a command line terminal on the project directory and execute the following:
   ```
   docker-compose up
   ```
2. Wait until `composer` finishes installing the required dependencies and base images are done building.
3. You may check if Laravel is running on http://localhost:8082/ and if the REST API application is running on http://localhost:8081/.

# Available APIs

## Laravel

### **GET** `<Laravel base URL>/api/httpRes`
* URL Params

  None

* Data Params

  None

* Success Response

  Code: 200 </br>
  Content:
    ```json
    [
      {
        "date_time": "...",
        "http_res": "..."
      },
      ...
    ]
    ```

### **POST** `<Laravel base URL>/api/httpRes/store`
* URL Params

  None

* Data Params

  ```json
  {
    "date_time": "...",
    "http_res": "..."
  }
  ```

* Success Response

  Code: 200

## REST API application

### **GET** `<REST API base URL>/`
* URL Params

  None

* Data Params

  None

* Success Response

  Code: 200
  Content:
  ```
  REST API server is up
  ```

### **GET** `<REST API base URL>/datetime`
* URL Params

  None

* Data Params

  None

* Success Response

  Code: 200 </br>
  Content:
    ```json
    {
      "date_time": "..."
    }
    ```