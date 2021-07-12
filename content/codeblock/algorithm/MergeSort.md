---
title: "정렬 - 병합 정렬"
date: 2020-07-03 18:47:58 -0400
categories: sort
metaTitle: "Sn-Hn (병합 정렬)"
metaDescription: "This is the meta description for this page"
---

# 합병정렬 병합정렬 (Merge Sort)
하나의 리스트를 두 개의 균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음,
두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법이다.
합병 정렬은 다음의 단계들로 이루어진다.
분할(Divide): 입력 배열을 같은 크기의 2개의 부분 배열로 분할한다.
정복(Conquer): 부분 배열을 정렬한다. 부분 배열의 크기가 충분히 작지 않으면 순환 호출 을 이용하여 다시 분할 정복 방법을 적용한다.
결합(Combine): 정렬된 부분 배열들을 하나의 배열에 합병한다.


``` javascript
public class Merge_sort {
  static int[] sorted = new int[8];
  public static void merge(int[] a, int m, int middle, int n) {
      int i = m;             // 첫 번째 부분집합의 시작 위치 설정
      int j = middle+1;      // 두 번째 부분집합의 시작 위치 설정
      int k = m;             // 배열 sorted에 정렬된 원소를 저장할 위치 설정

      while(i<=middle && j<=n) {
          if(a[i]<=a[j]) {
              sorted[k] = a[i];
              i++;
          }else {
              sorted[k] = a[j];
              j++;
          }
          k++;
      }
      if(i>middle) {
          for(int t=j;t<=n;t++,k++) {
              sorted[k] = a[t];
          }
      }else {
          for(int t=i;t<=middle;t++,k++) {
              sorted[k] = a[t];
          }
      }

      for(int t=m;t<=n;t++) {
          a[t] = sorted[t];
      }
      System.out.println("병합 정렬 후: "+Arrays.toString(a));
  }

  public static void mergeSort(int a[], int m, int n) {
      int middle;
      if(m<n) {
          middle = (m+n)/2;
          mergeSort(a, m, middle);    // 앞 부분에 대한 분할 작업 수행
          mergeSort(a, middle+1, n);    // 뒷 부분에 대한 분할 작업 수행
          merge(a, m, middle, n);        // 부분집합에 대하여 정렬과 병합 작업 수행
      }
  }

	public static void main(String[] args) {
      int[] arr = {5, 3, 4, 2, 1, 7, 12, 1341,1561, 15};
      int[] list = {58,8,28,3,18,6,33,20};
      int size = list.length;
      System.out.println("정렬 수행 전: "+Arrays.toString(list));
      System.out.println("-----------------병합 정렬 수행 시작------------------");
      mergeSort(list, 0, size-1);
  }
}
```
