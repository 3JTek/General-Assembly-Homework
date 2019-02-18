import math
# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return('Hello %s!' % string)
    # return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return math.pi * math.pow(radius, 2)


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return celcius * 9/5 + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    s = str(number)
    arr = list(s)
    arr.reverse()
    # return reverse(arr[1:]) + arr[0]
    return float(''.join(arr))


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    str2 = string.replace(' ', '')
    arr2 = list(str2)
    arr2.reverse()
    arr2 = ''.join(arr2)

    return True if arr2 == str2 else False



# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    str = string.lower()
    str2 = str.replace(' ','')
    # print(sorted(str2))
    return ''.join(sorted(str2))


# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    return string.title()


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    # a = (string.count('a'))
    # e = (string.count('e'))
    # i = (string.count('i'))
    # o = (string.count('o'))
    # u = (string.count('u'))
    # return (a + e + i + o + u)

    counts = map(string.lower().count, "aeiou")
    return sum(counts)



# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    nr_stars = len(string) + 4
    stars = ('*' * nr_stars)
    stars2 = ('*' * nr_stars)

    # print('%s \n* %s *\n %s' % stars, string, stars2)
    # return '%s \n* %s *\n %s' % stars, string, stars2
    return('{0}\n* {1} *\n{0}'.format(stars, string))

    # print f'* {string} *'
