
class Solution {
public:
    int maxArea(vector<int>& height) {
        int i = 0;
        int j = height.size() - 1;
        int m = 0;
        while(i < j) {
            if(height[i] > height[j]) {
                m = std::max(m, height[j] * (j - i));
                j--;
            } else {
                m = std::max(m, height[i] * (j - i));
                i++; 
            }
        }
        return m;
    }
};

// Two pointers moving in


