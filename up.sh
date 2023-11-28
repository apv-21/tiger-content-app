#!/bin/bash

 

# Build the Docker image

docker build -t react-app .

 

# Run the Docker image

docker run -d -p 3000:3000 react-app