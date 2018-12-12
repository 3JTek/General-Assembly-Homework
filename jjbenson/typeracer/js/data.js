/* eslint-disable-next-line no-unused-vars */
const samples = [
  'Business casual is an ambiguously defined dress code that has been adopted by many professional and white-collar workplaces in Western countries. It entails neat yet casual attire and is generally more casual than informal attire but more formal than casual or smart casual attire. Casual Fridays preceded widespread acceptance of business casual attire in many offices.',
  'In one study of average computer users, the average rate for transcription was 33 words per minute, and 19 words per minute for composition. In the same study, when the group was divided into "fast", "moderate" and "slow" groups, the average speeds were 40 wpm, 35 wpm, and 23 wpm respectively. An average professional typist reaches 50 to 80 wpm, while some positions can require 80 to 95 wpm (usually the minimum required for dispatch positions and other typing jobs), and some advanced typists work at speeds above 120 wpm.',
  'An ever-growing number of complex and rigid rules plus hard-to-cope-with regulations are now being legislated from state to state. Key federal regulations were formulated by the FDA, FTC, and the CPSC. Each of these federal agencies serves a specific mission. One example: Laws sponsored by the Office of the Fair Debt Collection Practices prevent an agency from purposefully harassing clients in serious debt.',
  'A transcription service is a business which converts speech (either live or recorded) into a written or electronic text document. Transcription services are often provided for business, legal, or medical purposes. The most common type of transcription is from a spoken-language source into text such as a computer file suitable for printing as a document such as a report. Common examples are the proceedings of a court hearing such as a criminal trial (by a court reporter) or a physician\'s recorded voice notes (medical transcription).',
  'Frank Edward McGurrin, a court stenographer from Salt Lake City, Utah who taught typing classes, reportedly invented touch typing in 1888. On a standard keyboard for English speakers the home row keys are: "ASDF" for the left hand and "JKL;" for the right hand. The keyboard is called a QWERTY keyboard because these are the first six letters on the keyboard. Most modern computer keyboards have a raised dot or bar on the home keys for the index fingers to help touch typists maintain and rediscover the correct position on the keyboard quickly with no need to look at the keys.',
  'The Master of Business Administration (MBA or M.B.A.) degree originated in the United States in the early 20th century when the country industrialized and companies sought scientific approaches to management. The core courses in an MBA program cover various areas of business such as accounting, applied statistics, business communication, business ethics, business law, finance, managerial economics, management, entrepreneurship, marketing and operations in a manner most relevant to management analysis and strategy. Most programs also include elective courses and concentrations for further study in a particular area, for example accounting, finance, and marketing.',
  'A freelancer or freelance worker, is a term commonly used for a person who is self-employed and is not necessarily committed to a particular employer long-term. Freelance workers are sometimes represented by a company or a temporary agency that resells freelance labor to clients; others work independently or use professional associations or websites to get work. While the term "independent contractor" would be used in a higher register of English to designate the tax and employment classes of this type of worker, the term freelancing is most common in culture and creative industries and this term specifically motions to participation therein.',
  'Being human makes us susceptible to the onset of feelings. The role of these emotions varies. Some of them are useful while others may be harmful. The use of social media for self-expression has reached a point that it makes us feel we can say anything. This begins when we see people expressing anything and everything that come to mind. When we see everyone else voicing their likes and dislikes, their irritations and desires we tend to imitate what they do. And because many engage in this, we think that it is normal and healthy. However, when we get used to unbridled self-expression, we come to believe that all feelings are valid.',
  'Hunt and peck (two-fingered typing), also known as Eagle Finger, is a common form of typing in which the typist presses each key individually. Instead of relying on the memorized position of keys, the typist must find each key by sight. Use of this method may also prevent the typist from being able to see what has been typed without glancing away from the keys. Although good accuracy may be achieved, any typing errors that are made may not be noticed immediately due to the user not looking at the screen.'
]

let letterAcuracy = {
  a: {good: 0,total: 0},
  b: {good: 0,total: 0},
  d: {good: 0,total: 0},
  e: {good: 0,total: 0},
  f: {good: 0,total: 0},
  g: {good: 0,total: 0},
  h: {good: 0,total: 0},
  i: {good: 0,total: 0},
  j: {good: 0,total: 0},
  k: {good: 0,total: 0},
  l: {good: 0,total: 0},
  m: {good: 0,total: 0},
  n: {good: 0,total: 0},
  o: {good: 0,total: 0},
  p: {good: 0,total: 0},
  q: {good: 0,total: 0},
  r: {good: 0,total: 0},
  s: {good: 0,total: 0},
  t: {good: 0,total: 0},
  u: {good: 0,total: 0},
  v: {good: 0,total: 0},
  w: {good: 0,total: 0},
  x: {good: 0,total: 0},
  y: {good: 0,total: 0},
  z: {good: 0,total: 0}
}
// const samples = [
//   'Business casual'
// ]
