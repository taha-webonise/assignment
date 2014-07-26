#!/bin/bash

#
# Assignment 6 - UNIX/LINUX BASH
# Part II
#

# Rename all the files that ends with ".txt" and starts with "x"
for file in $(ls *.txt x*)
	do
		$(mv $file new$file) | tr " " "\n"
	done

# listing all the files that are renamed
echo $(ls) | tr " " "\n" >> assignment.log

# display current date and time
echo $(date) >> assignment.log

# creating a public_html directory
mkdir ~/public_html

# creating a blank readme.txt file
touch ~/public_html/readme.txt

# changing readme.txt file permission to 777
chmod 777 ~/public_html/readme.txt

# moving first four files of assignment to public_html directory
for file in $(ls | head -n 4)
	do
		$(mv $file ~/public_html/.)
	done
	
#
# Steps to copy public_temp folder inside itself
#

# Create a temporary directory
mkdir ~/public_temp

# copy public_html folder inside temporary directory
cp -r ~/public_html ~/public_temp/.

# now move public_html from temporary directory to public_html directory
# in this way it will be copied in itself
mv ~/public_temp/public_html ~/public_html/.

# remove empty temporary directory
rm -rf ~/public_temp

# change current directory to public_html
cd ~/public_html

# renaming public_html (sub directory)
mv public_html new_public_html
