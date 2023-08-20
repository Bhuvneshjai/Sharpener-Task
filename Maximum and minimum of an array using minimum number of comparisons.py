class Solution:
    def MaximumAndMinimum(self, nums: list[int]) -> list[int]:
        nums.sort()
        minmax = {"max":nums[-1],"min":nums[1]}
        return minmax
    
sol = Solution()
arr = [1000, 11, 445, 1, 330, 3000]
print(f"Initial Array : {arr}")
ans = sol.MaximumAndMinimum(arr)
print(f"Maximum Number : {ans['max']} and Minimum Array : {ans['min']}")