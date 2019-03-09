import math
import re

# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return (radius * radius) * math.pi


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return (celcius * 1.8) + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):

    return (float(str(number)[::-1]))


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):

    string = string.replace(' ', '')
    rev = ''
    for char in reversed(string):
        rev = rev + char

    return string == rev


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    string = string.replace(' ', '').lower()
    return ''.join(sorted(string))


# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    return string.title()


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):

    counts = map(string.lower().count, 'aeiou')
    return sum(counts)


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    border = ''
    
    for i in range(len(string)+4):
        border += '*'
    return f'{border}\n* {string} *\n{border}'