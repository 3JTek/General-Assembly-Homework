import math
import re

# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    # return f'Hello {string}!'
    return 'Hello %s!' % string


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    # return math.pi*radius*radius
    # return math.pi*math.pow(radius, 2)
    return math.pi*radius**2


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
     # °F = (°C × 9/5) + 32
    return (celcius * 9/5) + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    # output = ''
    # for char in reversed(str(number)):
    #     output = output + char
    #
    # return float(output)

    return float(''.join(reversed(str(number))))

# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    # string = string.replace(' ','')
    # rev_string = ''
    #
    # for char in reversed(string):
    #     rev_string = rev_string + char
    #
    # return string == rev_string

    string = string.replace(' ','')

    return string == ''.join(reversed(string))


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    return ''.join(sorted(string.lower().replace(' ','')))


# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    return string.title()


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    # count = 0
    #
    # for char in string.lower():
    #     if char in 'aeiou':
    #         count += 1
    #
    # return count

    #REGEX!
    match = re.findall(r'[aeiou]', string)
    return len(match)


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    border = ''
    for i in range(len(string)+4):
        border += '*'

    return f'{border}\n* {string} *\n{border}'
