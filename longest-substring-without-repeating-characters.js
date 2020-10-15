/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    let longest = 0;
    const seen = new Set();
    let left = 0;
    let right = 0;
    let len;
    while(right < s.length) {
       while(seen.has(s[right])) {
           seen.delete(s[left])
           left++;
       }
        seen.add(s[right])
        right++;
        len = (right - left)
        if(len > longest) {
            longest = len
        }
    }
    return longest
};
