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

mkdir public_html
touch public_html/readme.txt
chmod 777 public_html/readme.txt

for file in $(ls | head -n 4)
	do
		$(mv $file public_html/.)
	done

mkdir public_temp
cp -r public_html public_temp/.
mv public_temp/public_html public_html/.
rm -rf public_temp
cd public_html
mv public_html new_public_html
