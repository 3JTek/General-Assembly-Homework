import math
# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    PI = math.pi
    return PI * math.pow(radius, 2)


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    print('')
    return celcius * 1.8 + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    print('')
    return float(''.join(reversed(str(number))))

# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    print('')
    string_reversed = ''.join(list(reversed(string.replace(' ', ''))))
    return string.replace(' ','') == string_reversed


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    print('')
    return ''.join(sorted(string.replace(' ','').lower()))

# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    print('')
    return string.title()

# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    print('')
    vowel = ['a', 'e', 'u', 'i', 'o']
    list_letter = list(string)
    nb_vowel = 0

    for letter in list_letter:
        if letter in vowel:
            nb_vowel += 1

    return nb_vowel


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    print('')
    edge_line = '*' * (len(string) + 4)
    middle_line = f'* {string} *'
    return f'{edge_line}\n{middle_line}\n{edge_line}'
