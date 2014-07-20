#!/usr/bin/python2.7

import re

# globals for program
isRuby = False
indentation = False

# prompt user to enter file name
file_name = str(raw_input("""Enter file name with absolute path: """))

def identify(file_name):
	""" function to identify language, 
		class names, 
		method names and
		variable names """

	# To access global variables
	global isRuby, indentation

	# local lists
	classes = []
	methods = []
	properties = []

	# open desired file with read only flag
	with open(file_name, 'r') as code_file:

		# iterate through each line of the code
		for line in code_file:

			# Check if the line starts with keyword "class" and store the class name
			if re.search(r'\s*class\s[A-Z]+[_[A-Za-z0-9]*]*',line) and line.lstrip().startswith("class"):
				block = []
				indentations = []
				block.append(line.split(' ')[0])
				classes.append(line.split(' ')[1].strip())
				indentations.append(len(line)-len(line.lstrip("\s")))

			# Check if the line starts with keyword "def" and store method name
			if re.search(r'\s*\t*def\s[A-Za-z]+[_a-zA-Z0-9]*(.*)',line) and line.lstrip().startswith("def"):
				block.append(line.split(' ')[0].strip())
				methods.append(line.split(' ')[1].strip())
				indentations.append(len(line)-len(line.lstrip("\s")))

			# Check if the line starts with keyword "end"
			if re.search("end",line) and line.lstrip().startswith("end"):
				block.append(line.strip())
				indentations.append(len(line)-len(line.lstrip("\s")))

				# Check if block always start with "class" or "def" and ends with "end"
				if (block[0] == "class" or block[0] == "def") and block[-1] == "end":
					block.pop(0)
					block.pop()
					isRuby = True
				else:
					"Improper Blocks"

				# Check if indentations of the block are same
				if (indentations == indentations[::-1]):
					indentation = True
				else:
					indentation = False

			# Search for variables in the Code
			if re.search(r'(@).*_*.*=.*',line):
				properties.append(line.split('=')[0].strip())

		# Print class names, method names, and properties
		print "\nClasses : ",classes
		print "\nMethods : ",methods
		print "\nProperties : ",properties

	# Close the file
	code_file.close()

# Call to the "identify()" function
identify(file_name)

# Print if Code is indented
if indentation:
	print "\nCode is Indented"
else:
	print "\nCode is Unindented"

# Print the Language
if isRuby:
	print "\nCode is Ruby"
else:
	print "\nCannot recognize Language!"
