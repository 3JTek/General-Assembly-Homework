import math

# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return (radius ** 2) * math.pi


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return (celcius * 9/5) + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    nums = list(str(number))
    nums.reverse()
    return float(''.join(nums))


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    uni_str = string.lower().replace(' ', '')
    str_list = list(uni_str)
    str_list.reverse()
    return string.lower().replace(' ', '') == ''.join(str_list)


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    uni_str = string.lower().replace(' ', '')
    str_list = sorted(list(uni_str))
    return ''.join(str_list)

# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    return string.title()


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    str_list = list(string.lower())
    return sum([str_list.count('a'), str_list.count('e'), str_list.count('i'), str_list.count('o'), str_list.count('u')])
# len([char for char in string if char in 'aeiou'])



# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    framed_str = string.center( len(string) + 2, ' ' )
    framed_str = framed_str.center( len(framed_str) + 2, '*' )
    framed_str = framed_str.center( len(framed_str) + 2, '\n' )
    return framed_str.center( len(framed_str) + 2 * len(string) + 8, '*' )
    # num * 'str' will return that many repetitions of the string
