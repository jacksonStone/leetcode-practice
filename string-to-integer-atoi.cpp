class Solution {
public:
    static bool isNum(char c) {
        return c >= '0' && c <= '9';
    }
    static bool isAlpha(char c) {
        return !isNum(c);
    }

    int myAtoi(string s) {
        string numString = "";
        int i = 0;
        bool isNegative = false;
        while(i < s.length()) {
            char c = s[i];
            if(c == ' ') {
                i++;
                continue;
            }
            if(c == '-' && ( i < s.length() - 1) && Solution::isNum(s[i+1])) {
                isNegative = true;
                i++;
                continue;
            }
            if(c == '+' && ( i < s.length() - 1) && Solution::isNum(s[i+1])) {
                i++;
                continue;
            }
            if(Solution::isAlpha(c)) {
                return 0;
            }

            int numStart = i;
            int numLength = 0;
            // Otherwise is a num
            while(Solution::isNum(s[i]) && i < s.length()) {
                numLength++;
                i++;
            }
            numString = s.substr(numStart, numLength);
            break;
        }
        std::cout << numString;
        long toRet = 0;
        bool overflowed = false;
        i = 0;
        while(i < numString.length()) {
            int startingRet = toRet;
            toRet *= 10;
            toRet += (numString[i] - '0');
            if(toRet > INT_MAX) {
                overflowed = true;
                break;
            }
            i++;
        }
        if(overflowed) {
            if(isNegative) {
                return INT_MIN;
            }
            else {
                return INT_MAX;
            }
            
        }
        if(isNegative) {
            return -1*toRet;
        }
        return toRet;
    }
};
