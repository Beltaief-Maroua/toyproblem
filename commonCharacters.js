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

 
function f(a, b) {
  for (i=0 ; i<a.length ; i++)
  { var x
    var y    
    x=a[i]
    y=b[i] 
    if (x===y)
  {
    console.log (x)
  }
  else 
  {"pas de lettre en commun"}
  }
}
f('acexivou', 'aegihobu')

// function fact (n)
// { var i=1
//  var result
//  while (i<=n)
//  { result = result*i
//   i++ 
//  }
//  return result
//  }
//      function(5)

function fact(n)
    { if (n===1) 
    { return 1 }
    return n*fact(n-1)
    }
 