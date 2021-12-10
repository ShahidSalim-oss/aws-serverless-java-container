# Serverless Spring Boot example
<<<<<<< HEAD
A basic pet store written with the [Spring Boot framework](https://projects.spring.io/spring-boot/). The `LambdaHandler` object is the main entry point for Lambda.

The application can be deployed in an AWS account using the [Serverless Framework](https://github.com/serverless/serverless). The `serverless.yml` file in the root folder contains the application definition

## Installation
To build and install the sample application you will need [Maven](https://maven.apache.org/) and the [`sls` CLI installed](https://serverless.com/framework/docs/providers/aws/guide/installation/) on your computer.

In a shell, navigate to the sample's folder and use maven to build a deployable jar.
```
$ mvn package
```

This command should generate a `serverless-spring-boot-example-1.0-SNAPSHOT.jar` in the `target` folder. Now that we have generated the jar file, we can use the SLS CLI to package the template for deployment, deploy it, and version control it in S3.

If you already [set up AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/), run the following command from the sample's folder:

```
$ sls deploy
```

Once the deployment is complete you'll get information like this in the terminal:
```
Service Information
service: petstore
stage: dev
region: us-west-2
stack: petstore-dev
resources: 11
api keys:
  None
endpoints:
  ANY - https://rbzh9fj8q1.execute-api.us-west-2.amazonaws.com/dev/
  ANY - https://rbzh9fj8q1.execute-api.us-west-2.amazonaws.com/dev/{proxy+}
functions:
  SpringBootPetStoreApi: petstore-dev-SpringBootPetStoreApi
layers:
  None
```

Copy the `endpoints` URL into a browser, and add `pets` at the end of it to test a first request: https://rbzh9fj8q1.execute-api.us-west-2.amazonaws.com/dev/pets

To remove all AWS resources related to this project, including the Lambda function, the API endpoint, and the S3 bucket containing the infrastructure configuration and the source code, run the following:

```
$ sls remove
```
=======
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
>>>>>>> origin/dev
