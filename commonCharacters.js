/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//  var commonCharacters = 




var commonCharacters = function (str1 , str2)
     {
      var result =''
        for ( var i=0 ; i<str1.lenght ; i++)
        {
          if(str2.includes(str1[i]) && result.indexOf(str1) === -1  )
          result = result+str1[i]
        }
        return result
    }