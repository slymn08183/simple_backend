# simple_backend

Set MongoDB connection string in config file and run project:

     $ npm install
     $ npm run start

     # To start with nodemon
     # $ npm run dev


##### To use get request: 
```localhost:5000/get```

##### To use post request:
 ```localhost:5000/post ```

##### To use put request:
 ```localhost:5000/put``` 
 
 ```Send the data in body as JSON. You shoud send "id" key and an intager value in header to specifiy the user.```\
 ```Sample data stored in data folder.```
  
### You have to login in order to use these request.
  ###### To login:
  
    First methot params:
    eg: /get?admin=admin
    
    Second methot header:
    Add "admin" key and "admin" value in headers.

  ###### Environment variables are in ```config/env/config.env```
