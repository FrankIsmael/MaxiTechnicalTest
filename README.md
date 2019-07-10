# MaxiTechnicalTest  
This is a test. API for User Management.  

## Clone Repository  
Git clone - repositorie's link -  

## Install dependencies  
npm install  

## Create .env file  
In this file put: PORT and conection string from MondoDB Cloud Cluster 

## Routes of the API  
|       URL       |    HTTP Verb  | Request body  |            Action           |
| -------------   | ------------- | ------------- | --------------------------- |
|  /api/users     |     GET       |     empty     | Returns all the users       |
| /api/users      |     POST      |     JSON      | Adds a new user             | 
| /api/users/:id  |     GET       |     empty     | Returns the specified user  |
| /api/users/:id  |     PUT       |     JSON      | Edits the specified user    |
