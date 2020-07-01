---
title: "정렬 - 버블 정렬"
date: 2020-07-01 18:15:35 -0400
categories: programmers
---

# 버블정렬 (Bubble Sort)  

```
public class Bubble_sort {
	// 버블정렬이 코딩하기 제일 쉽고 이해하기 쉬우나 시간복잡도가 너무 커 잘 사용하지 않음
	// 버블정렬은 두 개를 비교하여 큰 수를 뒤로 보내는 정렬방법
	public int[] sort(int[] arr) {
		int temp;
		for(int k = 0; k < arr.length; k++) {	// 0부터 배열의 끝까지 반복문 돌림
			for(int i = 0; i < arr.length-k-1; i++ ) {	// 0부터 배열의 크기-k-1만큼까지 돌림
				if(arr[i] > arr[i+1] ) {				// 이유는 반복문이 한번 돌때마다 가장 큰수가 가장 뒤로가기 때문에 
					temp = arr[i];						// 뒤에서부터 하나씩 줄여나가도 됨(시간복잡도 최소화하기 위함)
					arr[i] = arr[i+1];
					arr[i+1] = temp;
				}
			}
		}
		
		
		return arr;
	}
	
	
	public static void main(String[] args) {
		int[] arr = {5, 3, 4, 2, 1, 7, 12, 1341,1561, 15};
		Bubble_sort bs = new Bubble_sort();
		
		bs.sort(arr);
		
		for(int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}

}
```







