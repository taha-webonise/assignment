#!/bin/bash

#
# Assignment 6 - UNIX/LINUX BASH
#

for file in $(ls *.txt x*)
	do
		$(mv $file new$file) | tr " " "\n"
	done

echo $(ls new*) | tr " " "\n" >> assignment.log
echo $(date) >> assignment.log
