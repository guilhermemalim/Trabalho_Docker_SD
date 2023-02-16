#!/bin/sh

echo "Waiting for MongoDB to start..."
./wait-for db1:27017 
./wait-for db2:27018

echo "Starting the server..."
npm start 
