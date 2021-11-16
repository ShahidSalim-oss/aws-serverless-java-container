# Serverless Spring Boot example
Step 1:
```
$ mvn package
```
Step 2:
```
$ sls deploy
```
Step 3:
```
Remove apigateway from lambda function and go to versions tab on lambda console
```
Step 4:
```
Create alias on version 
```
Step 5:
```
Go to api gateway tab delete the resource that was created and create a new resource name pets and give lambda function name like this petstore-dev-SpringBootPetStoreApi:${stageVariables.version} 
```
