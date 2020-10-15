//Three Sum can be broken down into a series of twoSum problems where the target
//value is the first value times negative 1.

vector<vector<int>> twoSums(vector<int>& sortedNums, int start, int target) {
    vector<vector<int>> sums = {};
    int r = sortedNums.size() - 1;
    int l = start;
    vector<int> lastMatch;
    while (r > l) {
        int lv = sortedNums[l];
        int rv = sortedNums[r];
        if(lv + rv < target ) {
            l++;
        } else if(lv + rv > target) {
            r--;
        } else {
            // If what we are about to match is identical
            // to what we just matched - skip adding it.
            if(!sums.size() || (lastMatch[0] != lv || lastMatch[1] != rv)) {
                auto newMatch = {lv, rv};
                lastMatch = newMatch;
                sums.push_back(newMatch);
            }
            l++;

        }
    }
    return sums;
}

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> sums = {};
        int len = nums.size();
        // Sort this nonsense
        sort(nums.begin(), nums.end());
        int l = 0;
        while(l < len - 2 && nums[l] <= 0) {
            // If our l is the last one we just saw - skip it
            // to avoid duplicates and the EXTRA SPEED
            if(l != 0 && nums[l] == nums[l-1]) {
                l++;
                continue;
            }
            auto newSums = twoSums(nums, l + 1, nums[l] * -1);
            for(int i = 0; i < newSums.size(); i++) {
                newSums[i].push_back(nums[l]);
                sums.push_back(newSums[i]);
            }
            l++;
        }
        
        return sums;
    }
};
