class Solution:
    def KidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        result = []
        for i in range(len(candies)):
            if (extraCandies + candies[i]) >= len(candies):
                result.append('true')
            else:
                result.append('false')
        return result
    
    def KidsWithCandies1(self, candies: list[int], extraCandies: int) -> list[bool]:
        max_candies = max(candies)
        result = []
        for candy in candies:
            if candy + extraCandies >= max_candies:
                result.append(True)
            else:
                result.append(False)
        return result

sol = Solution()
arr = [2,3,5,1,3]
print(f"Initial Array : {arr}")
target = 3
print(f"Extra Candies : {target}")
ans = sol.KidsWithCandies(arr,target)
print(f"Final Result : {ans}")
print()

arr1 = [4,2,1,1,2]
print(f"Initial Array : {arr}")
target1 = 1
print(f"Extra Candies : {target1}")
ans1 = sol.KidsWithCandies(arr1,target1)
print(f"Final Result : {ans1}")
print()

arr2 = [2,3,5,1,3]
print(f"Initial Array : {arr2}")
target2 = 3
print(f"Extra Candies : {target2}")
ans2 = sol.KidsWithCandies1(arr2,target2)
print(f"Final Result : {ans}")
print()

arr3 = [4,2,1,1,2]
print(f"Initial Array : {arr3}")
target3 = 1
print(f"Extra Candies : {target3}")
ans3 = sol.KidsWithCandies(arr3,target3)
print(f"Final Result : {ans3}")