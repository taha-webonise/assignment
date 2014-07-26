#!/bin/bash

#
# Assignment 6 - UNIX/LINUX BASH
# Part I
# 

# store the user's home directory in a variable user_dir
user_dir=$(cat /etc/passwd | grep $USER | cut -d ":" -f 6)

# Hostname of the machine
echo Hostname is : $HOSTNAME > assignment.log

# Version and Type of OS
echo cat /etc/os-release | grep -i "pretty_name" | cut -d "=" -f 2 >> assignment.log

# Home directory of User
echo Home directory of User : $USER $user_dir >> assignment.log

# List of users that are currently logged in
echo Users that are logged in : >> assignment.log
echo $(who | cut -d " " -f 1) | tr " " "\n" >> assignment.log

# List of group that current user belongs
echo $USER belongs to : >> assignment.log
echo $(groups) | tr " " "\n" >> assignment.log

# List User's home directory files
echo Listing Files of $USER: $(ls -R $user_dir) | tr " " "\n" >> assignment.log

# Current date and time of machine 
echo Date and Time is: >> assignment.log
echo $(date) >> assignment.log
