FROM public.ecr.aws/j4z9l4i9/maven:3.6.0-jdk-11 AS MAVEN_BUILD
COPY pom.xml build/pom.xml
COPY settings.xml /build/settings.xml
COPY src /build/src/
WORKDIR /build
RUN mvn package install -DskipTests -s ./settings.xml
FROM public.ecr.aws/j4z9l4i9/openjdk:11
COPY --from=MAVEN_BUILD /build/target/*.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"] 
