# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
import math

def hello(string='World'):
    return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return math.pi * (radius ** 2)


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return (celcius * (9 / 5)) + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    string = str(number)[::-1]
    return float(string)


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    string = string.replace(' ', '')
    arr = list(string)
    rev_arr = arr.copy()
    rev_arr.reverse()
    return arr == rev_arr



# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    return ''.join(sorted(string.lower())).replace(" ", "")


# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    new_arr = []
    string = string.split(' ')
    for word in string:
        new_arr.append(word.capitalize())
    return ' '.join(new_arr)




# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    num_vowels = 0
    for char in string:
        if char in "aeiouAEIOU":
           num_vowels = num_vowels + 1
    return num_vowels


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    length = len(string)
    borders = ('*' * (length+4))
    return (f'{borders}\n* {string} *\n{borders}')
