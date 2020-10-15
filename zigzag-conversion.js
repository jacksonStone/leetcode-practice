/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const rows = [];
    const len = s.length;
        
    for(let i = 0; i < numRows; i++) {
        rows.push('')
    }
    //You do not need empty spaces
    //Go down then up, append 
    let i = 0;
    while (i < len) {
        let y = 0;
        while(y < numRows && i < len) {
            rows[y] += s[i]
            y++;
            i++;
        }
        // Zig up
        y -= 2;
        while(y > 0 && i < len) {
            rows[y] += s[i]
            y--;
            i++;
        }
    }
    
    return rows.join('')
};





