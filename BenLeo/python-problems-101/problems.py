# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
import math
def area_of_circle(radius):
    return math.pi * (radius * radius)


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return celcius*1.8 + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    # string = str(number)
    # arr = []
    #
    # for number in string:
    #     arr.append(number)
    #
    # arr.reverse()
    #
    # number = ''.join(arr)
    #
    # return(float(number))

    string = str(number)
    reversed_string = string[::-1]
    return float(reversed_string)


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    string_stripped = string.replace(' ', '')
    if string_stripped == string_stripped[::-1]:
         return True
    else: return False


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    string_lowercase = string.lower()
    string_stripped = string_lowercase.replace(' ', '')
    split_string = list(string_stripped)
    list.sort(split_string)
    return ''.join(split_string)


# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    return string.title()


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):

    #
    # import re
    # vowels = re.match(r'/[aeiouAEIOU]/', string, flags=0)
    # print(vowels)
    # return 0 if vowels == None else len(vowels)


    # count = 0
    # for char in string.lower():
    #     if char in 'aeiou':
    #         count += 1
    # return count

    counts = map(string.lower().count, 'aeiou')
    return sum(counts)



# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    width = len(string) + 4
    return '*'*(width) + '\n' + '* ' + string + ' *\n' + '*'*(width)
