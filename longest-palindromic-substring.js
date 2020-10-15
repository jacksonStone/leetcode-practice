/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let longest = "";
    let max = 0;
    
    for(let i = 0; i < s.length; i++) {
        let R = i;
        let L = i;
        //Odd
        while(s[R] == s[L] && L >= 0 && R < s.length) {
            if((R - L + 1) > max) {
               max = R - L + 1;
               longest = s.substring(L, R + 1)
            }
            R++;
            L--;
        }
        //Even
        R = i;
        L = i -1;
        while(s[R] == s[L] && L >= 0 && R < s.length) {
            if((R - L + 1) > max) {
               max = R - L + 1;
               longest = s.substring(L, R + 1)
            }
             R++;
             L--;
        }
    }
    return longest
}
// var longestPalindrome1 = function(s) {

//     let longest = s[0]
//     let currentChecking
//     let right = s.length - 1;
//     let left
//     for(let i = 0; i < s.length; i++) {
//             left = i;
//             right = s.length - 1
//             while(right > left) {
//                 let found = false;
//                 let palindromCandidateCount = 0;
//                 if(s[left] === s[right]) {
//                     let innerRight = right
//                     let innerLeft = left

//                    while(s[innerLeft] === s[innerRight]) {
//                     if(innerRight < innerLeft || innerLeft === innerRight) {
//                         if(innerRight === innerLeft) {
//                             palindromCandidateCount++
//                         }
//                         //Found plaindrome
//                         if(palindromCandidateCount > longest.length) {
//                             longest = s.substring(i, i + palindromCandidateCount)
//                         }
//                         found = true;
//                         break;
//                     }
//                     innerLeft++;
//                     innerRight--;
//                     palindromCandidateCount+=2;
                 
//                   }
//                   if(found) {
//                     break;
//                   }
//                 }
//                 right--; 
//             }
            
            
//     }
//     return longest
// };
