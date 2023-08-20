from collections import defaultdict

class Solution:
    def numIdenticalPairs(self, nums: list[int]) -> int:
        count = 0
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i] == nums[j] and i < j:
                    count += 1
        return count
    
    def numIdenticalPairs1(self, nums: list[int]) -> int:
        return sum(1 for i in range(len(nums)) for j in range(i+1,len(nums)) if nums[i] == nums[j])
    
    # Time Complexity: O(n)
    def numIdenticalPairs2(self, nums: list[int]) -> int:
        count = defaultdict(int)
        print(f"Count : {count}")

        for num in nums:
            count[num] += 1

        print(f"Count : {count}")

        s = 0
        print("count.values() : ",count.values())
        for k in count.values():
            print(k)
            s += k * (k-1)//2
            print("sum :",s)
        return s    
    
    def numIdenticalPairs3(self, nums: list[int]) -> int:
        count = defaultdict(int)
        for num in nums:
            count[num] += 1
        return sum(k * (k-1)//2 for k in count.values())

sol = Solution()
arr = [1,2,3,1,1,3]
print(f"Initial Array : {arr}")
ans = sol.numIdenticalPairs(arr)
print(f"Result : {ans}")
print()

arr1 = [1,1,1,1]
print(f"Initial Array : {arr1}")
ans1 = sol.numIdenticalPairs(arr1)
print(f"Result : {ans1}")

ans2 = sol.numIdenticalPairs1(arr)
print(f"Result : {ans2}")

ans3 = sol.numIdenticalPairs1(arr1)
print(f"Result : {ans3}")
print()

ans4 = sol.numIdenticalPairs2(arr)
print(f"Result : {ans4}")
print()

ans5 = sol.numIdenticalPairs2(arr1)
print(f"Result : {ans5}")
print()

ans6 = sol.numIdenticalPairs3(arr1)
print(f"Result : {ans6}")
print()


div = 1//2
print(div)