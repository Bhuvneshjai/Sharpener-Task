class Solution:
    def smallerNumbersThanCurrent(self, nums: list[int]) -> list[int]:
        result = []
        for i in nums:
            count = 0
            for j in nums:
                if i > j:
                    count += 1
            result.append(count)
        return result
    
    def smallerNumberThanCurrent1(self, nums: list[int]) -> list[int]:
        sorted_nums = sorted([(num, idx) for idx, num in enumerate(nums)])
        print(f"Sorted Nums : {sorted_nums}")
        result = [0] * len(nums)
        print("Array of O's Value : ",result)
        prev_rank = 0
        
        for i in range(len(sorted_nums)):
            print(i)
            if i > 0 and sorted_nums[i][0] != sorted_nums[i-1][0]:
                prev_rank = i
                print("Prev Rank : ",prev_rank)
            result[sorted_nums[i][1]] = prev_rank
            print("Result[sorted_nums[i][1]] : ",result[sorted_nums[i][1]])
        return result
    
sol = Solution()
print("Time Complexity : O(n)2")
arr = [8,1,2,2,3]
print(f"Array : {arr}")
ans = sol.smallerNumbersThanCurrent(arr)
print(f"Result : {ans}")
print()

print("Time Complexity : O(n)")
ans1 = sol.smallerNumberThanCurrent1(arr)
print(f"Result : {ans1}")