---
title: "프로그래머스 - [Summer/Winter Coding(2019)] 멀쩡한 사각형"
date: 2020-07-07 18:20:07 -0400
categories: programmers
---

# 문제 멀쩡한 사각형
- 문제 링크
[Programmers 멀쩡한 사각형](https://programmers.co.kr/learn/courses/30/lessons/62048)

# [Summer/Winter Coding(2019)] 멀쩡한 사각형
- 문제 설명  
가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다. 종이에는 가로, 세로 방향과 평행하게 격자 형태로 선이 그어져 있으며, 
모든 격자칸은 1cm x 1cm 크기입니다. 이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데, 
누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다. 
그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다. 
새로운 종이를 구할 수 없는 상태이기 때문에, 이 종이에서 원래 종이의 가로, 세로 방향과 평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.  

- 제한 사항  
  - W, H : 1억 이하의 자연수  
  
- 입출력 예  
  W |	H |	result
  ---|:---:|---:
  8 |	12 | 80

- 입출력 예 설명  
- 입출력 예 #1
가로가 8, 세로가 12인 직사각형을 대각선 방향으로 자르면 총 16개 정사각형을 사용할 수 없게 됩니다.  
원래 직사각형에서는 96개의 정사각형을 만들 수 있었으므로, 96 - 16 = 80 을 반환합니다.  

![멀쩡한 사각형](https://user-images.githubusercontent.com/40006670/86884460-8c9d5900-c12e-11ea-8052-b8740003ec4a.png)

# 문제 풀이

이 문제에 접근할 때, 처음 들었던 생각은 그림에서 사용하지 못하는 사각형 즉, 하얀색 사각형이 반복된다는 것이었다.  
w=2, h=3인 사각형이 반복되어 4개의 w=2 h=3인 사각형이 생겼다.  
8x12사각형에서 대각선을 이으면 꼭지점이 생긴다.  
![Inked멀쩡한 사각형_LI](https://user-images.githubusercontent.com/40006670/86885530-67a9e580-c130-11ea-9749-3b9b1d1f96df.jpg)  
**위 사진을 보면 2x3사각형을 지날때마다 정확히 꼭지점을 지나게 된다.**   
2x3을 구해 4를 곱하면 사용하지 못하는 사각형의 수가 나오게 된다.  
여기서 4는 무엇일까  
바로 **최대공약수**이다.  

따라서 최대 공약수를 만드는 메소드를 하나 만들었다.
```
private static int gcb(int w, int h) {
  int gcb = 1;
  int big, small;
  big = w >= h ? w : h;
  small = w < h ? w : h;

  for(int i = 1; i <= small; i++) {
    if(small % i == 0 && big % i == 0 ) {
      gcb = i;
    }
  }

  return gcb;
}
```

8과 12를 인수로 받아 최대공약수를 구해 이 수들을 나눈다.
따라서, 2와 3이 되는데 이 사각형의 사용하지 못하는 정사각형들을 구하면 된다.  
이 값은 여러 가지 값들을 테스트 해본 후 나오게 되었다.  
- [w, h]라고 할 때
  1. [1, 8] => 사용하지 못하는 사각형 = 8  
  1. [2, 3] => 사용하지 못하는 사각형 = 4  
  1. [3, 7] => 사용하지 못하는 사각형 = 9  
  1. [2, 4] => 사용하지 못하는 사각형 = 5

**사용하지 못하는 정사각형 = w+h-1**  
이 식을 구하는데 시간이 조금 걸렸다.  

# 1차 Java Code

```
public class IntactQuadrangle {
	
	public long solution(int w, int h) {
		long answer = 1;
		int gcb = 0;
		
		answer = w*h;
		gcb = gcb(w, h);
		w = w/gcb;
		h = h/gcb;
		
		answer = answer-((w+h-1)*gcb);
		return answer;
	}
	
	private static int gcb(int w, int h) {
		int gcb = 1;
		int big, small;
		big = w >= h ? w : h;
		small = w < h ? w : h;
		
		for(int i = 1; i <= small; i++) {
			if(small % i == 0 && big % i == 0 ) {
				gcb = i;
			}
		}
		
		return gcb;
	}
	
  public static void main(String[] args) {
		int w = 8;
		int h = 12;
		System.out.println(new IntactQuadrangle().solution(w, h));
	}
	
}
```
위의 Code로 테스트 케이스 성공, 하지만  
![멀쩡한 사각형 test1](https://user-images.githubusercontent.com/40006670/86887097-09cacd00-c133-11ea-96b7-bc34212508a1.PNG)  
통과 실패 ??  

무엇이 문제인지 System.out.println()으로 변수들을 찍어보았는데,  
```answer = w*h``` 에서 w와 h값이 커지면 answer이 값을 못 받고 있었다...  
w와 h가 int형으로 되어있어서 그런가??    
그래서 인자들의 자료형을 long으로 바꿔주었다.  

```
public long solution(long w, long h) {
  long answer = 1;
  int gcb = 0;

  answer = w*h;
  gcb = gcb(w, h);
  w = w/gcb;
  h = h/gcb;

  answer = answer-((w+h-1)*gcb);
  return answer;
}

private static int gcb(long w, long h) {
  int gcb = 1;
  long big, small;
  big = w >= h ? w : h;
  small = w < h ? w : h;

  for(int i = 1; i <= small; i++) {
    if(small % i == 0 && big % i == 0 ) {
      gcb = i;
    }
  }

  return gcb;
}
```

바꿔주니 성공 !!  

```
public long solution(int w, int h) {
  long answer = 1;
  return answer;
}
	
```
하지만 문제의 기본으로 주어진 solution 메소드의 인자들의 자료형이 int로 주어져있었기 때문에 int로 풀기로 하였다.  

```
public long solution(int w, int h) {
  long answer = 1;
  long gcb = 0;
  long wi, he;
  wi = Long.parseLong(String.valueOf(w));
  he = Long.parseLong(String.valueOf(h));

  answer = wi*he;
  gcb = gcb(wi, he);
  wi = wi/gcb;
  he = he/gcb;

  answer = answer-((wi+he-1)*gcb);
  return answer;
}
```

int형으로 받은 인자를 long형으로 바꿔주기 위하여 long형 변수인 wi와 he를 만들었고,
int형 w와 h를 wi와 he에 long으로 변환시켜 넣어주었다.  
Long.parseLong()은 기본적으로 String을 받기 때문에 w와 h를 String형으로 변환 시킨 후 넣어 주었다.  

이렇게 최종 성공!

# 최종 Java Code
```
public class IntactQuadrangle {
	public long solution(int w, int h) {
		long answer = 1;
		long gcb = 0;
		long wi, he;
		wi = Long.parseLong(String.valueOf(w));
		he = Long.parseLong(String.valueOf(h));
		
		answer = wi*he;
		gcb = gcb(wi, he);
		wi = wi/gcb;
		he = he/gcb;
		
		answer = answer-((wi+he-1)*gcb);
		return answer;
	}
	
	private static long gcb(long w, long h) {
		long gcb = 1;
		long big, small;
		big = w >= h ? w : h;
		small = w < h ? w : h;
		
		for(int i = 1; i <= small/2; i++) {
			if(small == 2 && small % 2 == 0 && big % 2 == 0) {
				gcb = 2;
			}else if(small % i == 0 && big % i == 0 ) {
				gcb = i;
			}
		}
		
		return gcb;
	}
	
	public static void main(String[] args) {
		int w = 8;
		int h = 12;
		System.out.println(new IntactQuadrangle().solution(w, h));
	}

}
```
# 다른 사람의 풀이 #1
```
class Solution {
    public long solution(int w,int h) {
        long min=Math.min(w, h);
        long max=Math.max(w, h);
        long remain=1;
        while(remain>0) {
            remain=max%min;
            max=min;
            min=remain;
        }
        long answer = (long)w*(long)h-max*(w/max + h/max -1);
        return answer;
    }
}
```

# 다른 사람의 풀이 #2
```
import java.math.BigInteger;

public class Solution {

    public long solution(int w, int h) {
        long totalCount = (long) w * (long) h;
        long diagonalCount = w + h - BigInteger.valueOf(w).gcd(BigInteger.valueOf(h)).longValue();

        return totalCount - diagonalCount;
    }
}
```

# 느낀점
세상은 넓고 고수는 많다...........배우고 싶다....  

아무튼 이 문제는 세 가지만 알면 풀 수 있는 문제인 것 같다!!  
1. 최대공약수 추출
1. 멀쩡하지 못한 사각형 구하는 식 세우기
1. int형을 long형으로 바꾸기!

