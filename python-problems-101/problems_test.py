import unittest
import problems

class ProblemsTest(unittest.TestCase):
    def test_hello(self):
        self.assertEqual(problems.hello(), 'Hello World!')
        self.assertEqual(problems.hello('Mike'), 'Hello Mike!')

    def test_area_of_circle(self):
        self.assertEqual(problems.area_of_circle(4), 50.26548245743669)
        self.assertEqual(problems.area_of_circle(10), 314.1592653589793)
        self.assertEqual(problems.area_of_circle(1), 3.141592653589793)

    @unittest.skip
    def test_celcius_to_farenheit(self):
        self.assertEqual(problems.celcius_to_farenheit(0), 32)
        self.assertEqual(problems.celcius_to_farenheit(-40), -40)
        self.assertEqual(problems.celcius_to_farenheit(100), 212)

    @unittest.skip
    def test_number_reverse(self):
        self.assertEqual(problems.number_reverse(123), 321)
        self.assertEqual(problems.number_reverse(4001), 1004)
        self.assertEqual(problems.number_reverse(78.567), 765.87)

    @unittest.skip
    def test_palindrome_check(self):
        self.assertEqual(problems.palindrome_check('pop'), True)
        self.assertEqual(problems.palindrome_check('dog'), False)
        self.assertEqual(problems.palindrome_check('nurses run'), True)
        self.assertEqual(problems.palindrome_check('will not work'), False)

    @unittest.skip
    def test_order_string_alphabetically(self):
        self.assertEqual(problems.order_string_alphabetically('happy'), 'ahppy')
        self.assertEqual(problems.order_string_alphabetically('python is cool'), 'chilnooopsty')
        self.assertEqual(problems.order_string_alphabetically('Testing Rocks'), 'cegiknorsstt')

    @unittest.skip
    def test_title_case(self):
        self.assertEqual(problems.title_case('this is it'), 'This Is It')

    @unittest.skip
    def test_num_of_vowels(self):
        self.assertEqual(problems.num_of_vowels('yellow submarine'), 6)
        self.assertEqual(problems.num_of_vowels('Yellow Submarine'), 6)

    @unittest.skip
    def test_frame(self):
        self.assertEqual(problems.frame('Rumplestiltskin'), '*******************\n* Rumplestiltskin *\n*******************')
        self.assertEqual(problems.frame('Hello Kitty'), '***************\n* Hello Kitty *\n***************')


if __name__ == '__main__':
    unittest.main()
