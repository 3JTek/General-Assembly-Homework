import math

# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return math.pi * pow(radius,2)


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return (celcius * (9/5)) + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    # num_string = str(number)
    # num_array = []
    #
    # for num in num_string:
    #     num_array.append(num)
    #
    # num_array.reverse()
    #
    # reversed_string = ''.join(num_array)

    string = str(number)
    reversed_string = string[::-1]
    
    return float(reversed_string)


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    no_spaces = string.replace(" ", "")
    if no_spaces == no_spaces[::-1]:
        return True
    else:
        return False



# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
        # no_spaces = string.replace(" ", "")
        # lower_case = no_spaces.lower()
        # array = list(lower_case)
        # list.sort(array)
        no_spaces = list(string.replace(" ", "").lower())
        list.sort(no_spaces)

        return ''.join(no_spaces)


# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    return string.title()


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    number_of_vowels = 0

    for letter in string.lower():
        if letter in 'aeiou':
            number_of_vowels += 1

    return number_of_vowels


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    frameWidth = len(string) + 4

    return '*' * frameWidth + '\n' + '* ' + string + ' *\n' + '*' * frameWidth
