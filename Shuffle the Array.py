class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
        result = []
        for i in range(n):
            result.append(nums[i])
            result.append(nums[i+n])
        return result
    
sol = Solution()
arr = [2,5,1,3,4,7]
print(f"Initial Array : {arr}")
n = 3
print(f"Target Value : {n}")
ans = sol.shuffle(arr,n)
print(f"Final Ans : {ans}")