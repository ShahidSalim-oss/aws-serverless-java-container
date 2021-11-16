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
Step 6:
```
Give stage variable on api gateway name= version and value = the name you give on alias and deploy api you can see the result o browser
```
Step 7:
```
For canary go to canary deployment and create canary deployment and in stage varibalr give another alias of the other version you upload on lambda 
```
