class Solution:
    def getConcatenation(self,nums: list[int]) -> list[int]:
        nums = nums*2
        return nums
    
sol = Solution()
arr = [1,2,1]
print(f"Initial Array : {arr}")
ans = sol.getConcatenation(arr)
print(ans)