#!/bin/bash

#
# Assignment 6 - UNIX/LINUX BASH
#

user_dir=$(cat /etc/passwd | grep $USER | cut -d ":" -f 6)

echo Hostname is : $HOSTNAME > assignment.log

echo Version of Operating System : $(uname -osrv) >> assignment.log

echo Home directory of User : $USER $user_dir >> assignment.log

echo Users that are logged in : >> assignment.log

echo $(who | cut -d " " -f 1) | tr " " "\n" >> assignment.log

echo $USER belongs to : >> assignment.log

echo $(groups) | tr " " "\n" >> assignment.log

echo Files : $(ls -R $user_dir) | tr " " "\n" >> assignment.log

echo Date and Time is: >> assignment.log

echo $(date) >> assignment.log
