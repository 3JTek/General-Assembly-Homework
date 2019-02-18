from math import exp, pi
# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return f'Hello {string}!'

# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return pi * pow(radius, 2)


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return celcius * 9 / 5 + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    return float(str(number)[::-1])


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    s = string.lower().replace(' ', '')
    return s == s[::-1]


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    return ''.join(sorted(string.lower().replace(' ','')))


# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    words = string.split()
    return ' '.join([word.capitalize() for word in words])


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    vowels = {"a", "e", "i", "o", "u", "A", "E", "I", "O", "U"}
    return sum([string.replace(' ', '').count(v) for v in vowels])


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    num = len(string) + 4

    return '*' * num + '\n*' + ' ' + string + ' ' + '*\n' + '*' * num
