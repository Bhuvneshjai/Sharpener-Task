class Solution:
    # Next Greater Element By Stack
    def next_greater_element(self,num):
        stack = []
        result = [-1] * len(num)
        for i in range(len(num)):
            while stack and num[stack[-1]] < num[i]:
                idex = stack.pop()
                result[idex] = num[i]
            stack.append(i)
        return result

    # Next Greater Element By Brute Force
    def next_greater_element_brute_force(self,num):
        result = []
        for i in range(len(num)):
            for j in range(i,len(num)):
                if num[i] < num[j]:
                    result.append(num[j])
                    break
            else:
                result.append(-1)
        return result

    # Next Greater Element By Stack in Circular Way
    def next_greater_element_stack_circular_way(self,num):
        stack = []
        result = [-1] * len(num)
        for i in range(2*len(num)):
            current_index = i%len(num)
            while stack and num[current_index] > num[stack[-1]]:
                popped_element = stack.pop()
                result[popped_element] = num[current_index]
            stack.append(current_index)
        return result

    # Next Greater Element By Brute Force in Circular Way
    def next_greater_element_brute_circular_way(self,num):
        result = [-1] * len(num)
        num_double = 2 * num
        for i in range(len(num)):
            for j in range(i+1,i+len(num)):
                if num_double[j] > num_double[i]:
                    result[i] = num_double[j]
                    break
        return result

sol = Solution()
arr = [5,3,2,10,6,8,1,4,12,7,4]
print(f"Given Array : {arr}")
print()

print("Next Greater Element By Stack")
print(sol.next_greater_element(arr))
print()

print("Next Greater Element By Brute Force")
print(sol.next_greater_element_brute_force(arr))
print()

print("Next Greater Element By Stack in Circular Way")
print(sol.next_greater_element_stack_circular_way(arr))
print()

print("Next Greater Element By Brute Force in Circular Way")
print(sol.next_greater_element_brute_circular_way(arr))
print()


# Rain Trap Water
print("--------------------- Rain Water Trap ---------------------------")
print()
print("1: By Brute Force")
print()
class RainTrap1:
    def rain_trap_water(self,arr):
        n = len(arr)
        left_arr = [0] * n
        right_arr = [0] * n
        left_arr[0] = arr[0]
        max_value_left = arr[0]

        for i in range(n):
            if max_value_left < arr[i]:
                max_value_left = arr[i]
                left_arr[i] = max_value_left
            else:
                left_arr[i] = max_value_left
        print("Left Array : ",left_arr)

        max_value_right = arr[-1]
        for i in range(n-1,-1,-1):
            if max_value_right < arr[i]:
                max_value_right = arr[i]
                right_arr[i] = max_value_right
            else:
                right_arr[i] = max_value_right
        print("Right Array : ",right_arr)

        water = 0
        for i in range(n):
            water += min(left_arr[i],right_arr[i]) - arr[i]
        return water

rain_trap = RainTrap1()
arr = [1,0,2,0,1,0,3,1,0,2]
print(f"Trap Water : {rain_trap.rain_trap_water(arr)}")

print()
print("2: By while loop")
print()
class RainTrap2:
    def rain_trap_water(self,arr):
        left = 0
        right = len(arr) - 1
        max_left = max_right = water = 0

        while left < right:
            if arr[left] < arr[right]:
                if arr[left] > max_left:
                    max_left = arr[left]
                else:
                    water += max_left - arr[left]
                left += 1
            else:
                if arr[right] > max_right:
                    max_right = arr[right]
                else:
                    water += max_right - arr[right]
                right -= 1
        return water

rain_trap_water2 = RainTrap2()
arr = [1,0,2,0,1,0,3,1,0,2]
print("Water Trap : ",rain_trap_water2.rain_trap_water(arr))
print()

# Stock Span Price
print("------------------- Stock Span Price -----------------------")
print()

class StockSpan:
    
    #Brute Force Approach
    def stock_span_price1(self,arr):
        result = []
        for i in range(len(arr)):
            span = 1
            for j in range(i-1,-1,-1):
                if arr[j] <= arr[i]:
                    span += 1
                else:
                    break
            result.append(span)
        return result

    # Stack Approach
    def __init__(self):
        self.stack = []

    def stock_span_price2(self,arr):
        result = []
        for i in arr:
            span = 1
            while self.stack and self.stack[-1][0] <= i:
                span += self.stack.pop()[1]
            self.stack.append([i,span])
            result.append(span)
        print("Result : ",result)
        return span

    # Repeat Missing Number Array
    def repeatedNumber(self, A):
        n = len(A)
        sum_of_num = sum(A)
        sum_of_set_num = sum(set(A))
        
        duplicate_no = sum_of_num - sum_of_set_num
        total = n * (n+1) // 2
        print("Total : ",total)
        missing = total - sum_of_set_num
        
        return [duplicate_no,missing]

    # Search in Rotated Sorted Array
    def searchSortedArray(self,arr,target):
        left,right = 0,len(arr)-1
        while left <= right:
            mid = left + (right-left)//2
            if arr[mid] == target:
                return mid
            elif arr[left] <= arr[mid]:
                if arr[left] <= target <= arr[mid]:
                    right = mid-1
                else:
                    left = mid+1
            else:
                if arr[mid] <= target <= arr[right]:
                    left = mid+1
                else:
                    right = mid-1
        return -1
            
arr = [100,80,60,70,60,75,85]
print("Given Array : ",arr)
print()

# Brute Force Approach
print("By Brute Force Approach")
stockspan = StockSpan()
print(f"Result : {stockspan.stock_span_price1(arr)}")
print()

# Stack Approach
print("By Stack Approach")
print(f"Total Span : {stockspan.stock_span_price2(arr)}")
print()

# Repeat and Missing Number Array
print("------------------ Repeat Missing Number Array ---------------------")
print()
rearr = [3,5,1,2,3]
print("Given Array : ",rearr)
print(f"Result : [Duplicate,Missing] - {stockspan.repeatedNumber(rearr)}")
print()

# Search in Rotated Sorted Array 
print("-------------------- Search in Rotated Sorted Array ---------------------")
print()
sortArray = [4,5,6,7,0,1,2]
target_no = 0
print("Given Array : ",sortArray)
print(f"Result : Index of {target_no} is : {stockspan.searchSortedArray(sortArray,target_no)}")
print()
