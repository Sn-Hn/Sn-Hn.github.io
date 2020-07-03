---
title: "정렬 - 퀵 정렬"
date: 2020-07-03 16:07:44 -0400
categories: sort
---

# 퀵 정렬 (Quick Sort)
퀵 정렬(Quicksort)은 찰스 앤터니 리처드 호어가 개발한 정렬 알고리즘이다.  
다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬에 속한다.  
퀵 정렬은 n개의 데이터를 정렬할 때, 최악의 경우에는 O(n2)번의 비교를 수행하고, 평균적으로 O(n log n)번의 비교를 수행한다.  

퀵 정렬은 분할 정복(divide and conquer) 방법을 통해 리스트를 정렬한다.  
 
리스트 가운데서 하나의 원소를 고른다. 이렇게 고른 원소를 피벗이라고 한다.  
피벗 앞에는 피벗보다 값이 작은 모든 원소들이 오고, 
피벗 뒤에는 피벗보다 값이 큰 모든 원소들이 오도록 피벗을 기준으로 리스트를 둘로 나눈다.   
이렇게 리스트를 둘로 나누는 것을 분할이라고 한다. 분할을 마친 뒤에 피벗은 더 이상 움직이지 않는다.  
분할된 두 개의 작은 리스트에 대해 재귀(Recursion)적으로 이 과정을 반복한다. 재귀는 리스트의 크기가 0이나 1이 될 때까지 반복된다.  
재귀 호출이 한번 진행될 때마다 최소한 하나의 원소는 최종적으로 위치가 정해지므로, 이 알고리즘은 반드시 끝난다는 것을 보장할 수 있다.  




```
public class Quick_sort2 {
	public static int partition(int arr[], int left, int right) {
		// 정렬되지 않은 배열 arr, 가장왼쪽 left, 가장 오른쪽 right
		int pivot = arr[(left + right) / 2];		// 중간 지점을 정해준다

		while (left < right) {		// left가 right보다 작을 때 while문 실행.. 
			// arr[left]값이 피봇보다 작고, left가 right보다 작으면(left와 right가 만나지 않았다면)
			// left를 ++(오른쪽으로 한칸)
			while ((arr[left] < pivot) && (left < right))
				left++;
			// arr[right]값이 피봇보다 크고, left가 right보다 작으면(left와 right가 만나지 않았다면)
			// right를 --(왼쪽으로 한칸)
			while ((arr[right] > pivot) && (left < right))
				right--;
			// arr[left]값이 피봇보다 크다면! 또, arr[right]값이 피봇보다 작다면!
			// while문을 나오게 됨 퀵정렬의 첫번째 순환은 
			// | 기준값보다 작은 값들  |  기준값(피봇)  | 기준값보다 큰 값들 |
			// 이렇게 정렬을 시켜야 하기 때문에 왼쪽에 피봇보다 큰 값들 혹은 오른쪽에 피봇보다 작은 값들이 있으면 서로 그 값을 교환!
			if (left < right) {	
				int temp = arr[left];
				arr[left] = arr[right];
				arr[right] = temp;
			}
		}					// left를 반환하는 이유는 퀵정렬이 1순환을 끝내고 나면
		return left;		// | 기준값보다 작은 값들 |  기준값(피봇)  | 기준값보다 큰 값들 |
							// 여기서 왼쪽의 마지막에 있거나 혹은 오른쪽의 첫번째에 있기 때문에
	}						// left를 반환하여 왼쪽의 끝으로 재귀호출, 오른쪽의 첫번째로 재귀호출을 하면 되기 떄문
	
	public static void quickSort(int arr[], int left, int right) {
		// left가 right보다 작다면 정렬이 끝나지 않은 상황이기 떄문
		if (left < right) {
			// 파티션 메소드를 호출했으니 | 기준값보다 작은 값들 |  기준값(피봇)  | 기준값보다 큰 값들 | 로 정렬됨
			int pivotNewIndex = partition(arr, left, right);

			quickSort(arr, left, pivotNewIndex - 1);	// 재귀 호출를 통해 왼쪽에 있는 것들을 다시 정렬
			quickSort(arr, pivotNewIndex + 1, right);	// 재귀 호출을 통해 오른쪽에 있는 것들을 다시 정렬
		}

	}
	public static void main(String[] args) {
		int data[] = { 66, 10, 1, 34, 5, -10 };

		quickSort(data, 0, data.length - 1);
		for (int i = 0; i < data.length; i++) {
			System.out.println("data[" + i + "] : " + data[i]);
		}

	}

}
```











