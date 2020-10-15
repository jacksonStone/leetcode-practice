std::vector<std::string> numerals = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };
int values[] =      { 1000, 900, 500,  400, 100,  90,   50,  40,  10,   9,    5,    4,   1 };

class Solution {
public:
    string intToRoman(int num) {
        string s = "";
        int remainder = num;
        for(int n = 0; n < numerals.size(); n++) {
            while(remainder >= values[n]) {
                s.append(numerals[n]);
                remainder -= values[n];
            }
        }
        return s;
    }
};
