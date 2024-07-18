// // ------------ Regular Expression
// // Regular expression is a sequence of charecter that difine a search pattern .
// // Regular expression can be used for string matching , searching and manipulation.Regular

// // Regular expression can be complex but they are incredibly useful for tasks
// // like validation ,searching and replacing text in string .
// // They are widely used in developing application like - text editor and many other
// // application.


// syntax:
//     /pattern/modifier

// Example:
// let pattern = /DreAmERInfotECH/i

// DreAmERInfotECH : The pattern to search.
// /DreAmERInfotECH/ : A regular exp .
// i : The modifier to make the search case-insensitive.


// // -------- modifiers
// // --------- Brackets
// //------------- Metacharecter
// //------------- Quantifiers


//------------------------ Modifiers:
// g : Global search. Find all matches instead of stopping after the first match.
// i : Case-insensitive search.
// m : Multiline search. Treat string as multiple lines, common for finding matches across multiple lines
// u : Unicode. Treat the string as a sequence of Unicode code points.
// x : Ignore whitespace. Ignores whitespace characters in the regular expression pattern.



//-------------------------Brackets
// Brackets are used to find a range of characters:
// [abc] : Find any of the characters a, b, or c.
// [a-z] : Find any lowercase letter from a to z.
// [A-Z] : Find any uppercase letter from A to Z.
// [0-9] : Find any digit from 0 to 9.
// (x|y)	Find any of the alternatives specified
// [a-zA-Z0-9] : Find any letter or digit from a to z,
//               A to Z, or 0 to 9.
// [^abc] : Find any character except a, b, or c.
// [^a-z] : Find any character except lowercase letters from a to z.
// [^A-Z] : Find any character except uppercase letters from A to Z.
// [^0-9] : Find any character except digits from 0 to 9.

// [^a-zA-Z0-9] : Find any character except letters or digits from a
//               to z, A to Z, or 0 to 9.
// [^a-zA-Z0-9_] : Find any character except letters, digits, or
//                 underscores from a to z, A to Z, or 0 to 9.


// -------------------------Metacharacters
// Metacharacters are special characters that have a specific meaning in regular expressions. They are used
// to match patterns in strings. Some common metacharacters are:

//  . : Matches any single character except line terminators.
//  \ : Escapes special characters and metacharacters.
//  ^ : Matches the beginning of a string.
//  $ : Matches the end of a string.
//  * : Matches zero or more occurrences of the preceding character or group.
//  + : Matches one or more occurrences of the preceding character or group.
//  ? : Matches zero or one occurrence of the preceding character or group.
//  {n} : Matches exactly n occurrences of the preceding character or group.
//  {n,} : Matches n or more occurrences of the preceding character or group.
//  {n,m} : Matches at least n and at most m occurrences of the preceding character or
//          group.
//  | : Matches either the character or group to the left or right of the | symbol.
//  ( ) : Groups characters or metacharacters together for matching or for use with other
//        metacharacters.
//  [ ] : Defines a character class or a range of characters to match.
//  \d : Matches any digit character.
//  \D : Matches any non-digit character.
//  \s : Matches any whitespace character.
//  \S : Matches any non-whitespace character.
//  \w : Matches any word character (alphanumeric or underscore).
//  \W : Matches any non-word character.
//  \b : Matches the empty string at the beginning or end of a word.
//  \B : Matches the empty string within a word.
//  .	Find a single character, except newline or line terminator
//  \w	Find a word character
//  \W	Find a non-word character
//  \d	Find a digit
//  \D	Find a non-digit character
//  \s	Find a whitespace character
//  \S	Find a non-whitespace character
//  \b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
//  \B	Find a match, but not at the beginning/end of a word
//  \0	Find a NULL character
//  \n	Find a new line character
//  \f	Find a form feed character
//  \r	Find a carriage return character
//  \t	Find a tab character
//  \v	Find a vertical tab character


// ------------------------------------Quantifiers
// n+	Matches any string that contains at least one n
// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n
// n{X}	Matches any string that contains a sequence of X n's
// n{X,Y}	Matches any string that contains a sequence of X to Y n's
// n{X,}	Matches any string that contains a sequence of at least X n's
// n$	Matches any string with n at the end of it
// ^n	Matches any string with n at the beginning of it
// ?=n	Matches any string that is followed by a specific string n
// ?!n	Matches any string that is not followed by a specific string n