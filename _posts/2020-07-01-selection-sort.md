---
title: "정렬 - 선택 정렬"
date: 2020-07-01 19:31:52 -0400
categories: sort
---

# 선택정렬 (Selection Sort)
선택정렬은 배열의 최솟값 혹은 최댓값을 찾아  
최솟값은 맨 앞, 최댓값은 맨 뒤의 값과 교체하는 방식이다.  

```
int[] arr = {5, 2, 7, 3, 6};
```
위 코드처럼 배열이 있을 때, (오름차순)

배열의 최솟값을 찾는다. 최솟값(min)  

- 1회전  
초기 min = 5  
5와 2를 비교하여 작은 수를 min에 넣는다. -> min = 2  
2와 7을 비교하여 작은 수를 min에 넣는다. -> min = 2  
2와 3을 비교하여 작은 수를 min에 넣는다. -> min = 2  
2와 6을 비교하여 작은 수를 min에 넣는다. -> min = 2  
arr 배열의 최솟값(min)은 2  
2를 배열의 맨 앞(arr[0])과 교체한다.  
1회전 후 -> [2, 5, 7, 3, 6]

- 2회전  
맨 앞(arr[0])은 2로 정렬이 되어 있으므로 arr[1]을 최솟값으로 지정  
초기 min = 5  
5와 7을 비교하여 작은 수를 min에 넣는다. -> min = 5  
5와 3을 비교하여 작은 수를 min에 넣는다. -> min = 3  
3과 6을 비교하여 작은 수를 min에 넣는다. -> min = 3  
2회전 후 arr 배열의 최솟값(min)은 3  
3을 배열의 두 번째(arr[1])과 교체한다.
2회전 후 -> [2, 3, 7, 5, 6]

- 3회전  
두 번째까지는 정렬이 되어 있으므로 arr[2]를 최솟값으로 지정  
초기 min = 7  
7과 5를 비교하여 작은 수를 min에 넣는다. -> min = 5  
5와 6을 비교하여 작은 수를 min에 넣는다. -> min = 5
3회전 후 arr 배열의 최솟값(min)은 5  
5를 배열의 세 번째(arr[2])과 교체한다.
3회전 후 -> [2, 3, 5, 7, 6]

- 4회전  
세 번째까지는 정렬이 되어 있으므로 arr[3]을 최솟값으로 지정  
초기 min = 7  
7과 6을 비교하여 작은 수를 min에 넣는다. -> min = 6
4회전 후 arr 배열의 최솟값(min)은 6  
6을 배열의 네 번째(arr[3])과 교체한다.
4회전 후 -> [2, 3, 5, 6, 7]

선택정렬 완료!  

선택정렬도 버블정렬과 같이 시간복잡도가 O(n^2)만큼의 시간이 걸리지만 버블정렬보다 항상 우수하다.  


#JAVA 코드 (Selection Sort)
```
public class Selection_sort {
	public int[] sort(int[] arr) {
		// min은 최소값을 담기 위한 변수, temp는 교환하기 위한 변수
		int min, temp;		
		// i가 0부터 배열의 끝-1 까지 돈다
		for(int i = 0; i < arr.length-1; i++ ) {	
			// min을 0으로 시작해 1씩 증가 시킴 arr[min]을 최소값으로 잡는것.
			min = i;								
			// i+1부터 배열의 끝까지 돔
			for(int j = i+1; j < arr.length; j++) { 
				// arr[0]이 arr[1]보다 크다면 (1회전)
				if(arr[min] > arr[j]) {				
					// min(0) 에 j(1)을 넣음	  (1회전)
					min = j;						
					// arr[0]이 arr[1]보다 작다면 arr[min]을 최소값으로 잡았으니
				}									
				// 변화 없이 for문 돌리면 됨
			}										
			// min이 최소값으로 갱신되었으니 temp에 arr[min](최소값) 저장				
			temp = arr[min];						
			// arr[min]에 arr[i]를 넣음
			arr[min] = arr[i];						
			// arr[min]과 arr[i]를 교환
			arr[i] = temp;							
			
		}
		
		
		
		return arr;
	}
	
	public static void main(String[] args) {
		int[] arr = {5, 3, 4, 2, 1, 7, 12, 1341,1561, 15};
		Selection_sort ss = new Selection_sort();
		
		ss.sort(arr);
		for(int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}

}
```


