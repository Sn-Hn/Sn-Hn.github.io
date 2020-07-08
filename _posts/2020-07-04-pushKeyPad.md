---
title: "프로그래머스 - [카카오 인턴] 키패드 누르기"
date: 2020-07-03 16:07:44 -0400
categories: programmers kakao2020
---

# 문제 키패드 누르기
- 문제 링크
[Programmers 키패드 누르기](https://programmers.co.kr/learn/courses/30/lessons/67256)

# [카카오 인턴] 키패드 누르기
- 문제 설명  
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.  

![kakao_phone1](https://user-images.githubusercontent.com/40006670/86512407-14d4e300-be3d-11ea-8190-9aa0df7d6414.png)

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.  
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.  

  1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
  1. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
  1. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
  1. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
    1-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.  
    
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.  

- 제한 사항  
  - numbers 배열의 크기는 1 이상 1,000 이하입니다.
  - numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
  - hand는 "left" 또는 "right" 입니다.
    - "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
  - 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

- 입출력 예  
  numbers | hand | result
  ---|:---:|---:
  `[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]` | `"right"` | `"LRLLLRLLRRL"`
  `[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]` | `"left"` | `"LRLLRRLLLRR"`
  `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]` | `"right"	` | `"LLRLLRLLRL"`

- 입출력 예에 대한 설명  
- 입출력 예 1  
순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.

  왼손 위치 | 오른손 위치 | 눌러야 할 숫자 | 사용한 손 | 설명
  ---|:---:|:---:|:---:|---:
  * | # | 1 | L | 1은 왼손으로 누릅니다.
  1	| # |	3	| R |	3은 오른손으로 누릅니다.
  1	| 3 |	4 |	L |	4는 왼손으로 누릅니다.
  4 |	3 |	5 |	L |	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
  5	| 3 |	8 |	L |	왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.
  8	| 3 | 2 |	R |	왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.
  8 |	2 |	1 |	L |	1은 왼손으로 누릅니다.
  1	| 2 |	4 |	L |	4는 왼손으로 누릅니다.
  4	| 2 |	5 |	R |	왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.
  4	| 5 |	9 |	R |	9는 오른손으로 누릅니다.
  4 |	9 |	5 |	L |	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
  5 |	9 |	- |	- | 
  
  따라서 "LRLLLRLLRRL"를 return 합니다.  
- 입출력 예 2  
왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.  

- 입출력 예 3  
오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.

# 문제 풀이
이 문제에 접근 할 때, 저는 마지막으로 누른 손의 위치와 다음에 누를 위치의 거리를 계산하는 것에 집중하였습니다.  
양 손의 위치와 다음에 누를 위치의 거리를 계산하여 비교한 후 비교한 거리가 더 가까운 손이 다음에 누를 손입니다.  

문제 설명에 처음은 왼손 * 오른손 # 에 있다고 합니다. 저는 배열을 만들어 왼손과 오른손의 마지막 위치를 넣었습니다.  
```
int[] handLocation = {10, 12};
```
*과 #이 아닌 10과 12인 이유는 int형 배열로 만들어 계산하기 쉽게 변형시켰습니다.  
```
for(int i : numbers) {
}
```
위 코드에서 i값을 뽑아와 i와 handLocation의 거리를 계산하는 distance메소드를 만들었습니다.  

```
public static int distance(int number, int location) {
  int distance = 0;
  if(number == 0) {
    number = 11;
  }
  if(location == 0) {
    location = 11;
  }
  int num = absoluteValue(location-number);
//num = Math.abs(location-number);
  if(num%3==0) distance = num/3;
  else distance = (num+1)/3+1;

  return distance;
}

public static int absoluteValue(int n) {
  if(n >= 0) {
    return n;
  }else {
    return -n;
  }
}
	
```

위의 코드에서 절댓값을 구하는 Math.abs();를 쓰지 않고 absoluteValue메소드를 만든 이유는
그냥 속도가 더 빠르더라구요 ㅎㅎ Math함수 쓰셔도 됩니다!!

위의 number와 location이 0일 때, 11로 변경시켜준 이유는 저는 키패드를  
    |   |
   -| - | -
  1 | 2 | 3
  4 | 5 | 6
  7 | 8 | 9
  10 | 11 | 12
  
위 처럼 바꾸어서 풀었기 때문입니다.  
0으로 계산하게 된다면 distance값이 달라지므로 if문으로 변경시켜주었습니다.  

```
public String solution(int[] numbers, String hand) {
    String answer = "";
    int[] handLocation = {10, 12};		// 왼손[0]과 오른손[1] 위치

    for(int i : numbers) {
      if(i==1 || i==4 || i==7) {    // 왼손 키패드
        answer += "L";
        handLocation[0] = i;     // 마지막 위치를 handLocation[0]에 넣어줌
      }else if(i==3 || i==6 || i==9) {
        answer += "R";
        handLocation[1] = i;     // 마지막 위치를 handLocation[1]에 넣어줌
      }else {		// i = 2, 5, 8, 0
        if(distance(i, handLocation[0]) < distance(i, handLocation[1])) {

          answer += "L";
          handLocation[0]	= i;
        }else if(distance(i, handLocation[0]) > distance(i, handLocation[1])) {
          answer += "R";
          handLocation[1] = i;
        }else {
          if(hand.equals("right")) {
            answer += "R"; 
            handLocation[1]	= i;
          }
          else {
            answer += "L";
            handLocation[0] = i;
          }
        }
      }
    }

    return answer;
}
```
거리를 비교하여 가까운 손이 가도록 하였습니다.  


# Java Code
```
public class PushKeyPad {
	public String solution(int[] numbers, String hand) {
        String answer = "";
        int[] handLocation = {10, 12};		// 왼손과 오른손 위치
        
        for(int i : numbers) {
        	if(i==1 || i==4 || i==7) {
        		answer += "L";
        		handLocation[0] = i;
        	}else if(i==3 || i==6 || i==9) {
        		answer += "R";
        		handLocation[1] = i;
        	}else {		// i = 2, 5, 8, 0
        		if(distance(i, handLocation[0]) < distance(i, handLocation[1])) {
        			
        			answer += "L";
        			handLocation[0]	= i;
        		}else if(distance(i, handLocation[0]) > distance(i, handLocation[1])) {
        			answer += "R";
        			handLocation[1] = i;
        		}else {
        			if(hand.equals("right")) {
        				answer += "R"; 
        				handLocation[1]	= i;
        			}
        			else {
        				answer += "L";
        				handLocation[0] = i;
        			}
        		}
        	}
        }
        
        return answer;
    }
	
	public static int distance(int number, int location) {
		int distance = 0;
		int num = 0;
		if(number == 0) {
			number = 11;
		}
		if(location == 0) {
			location = 11;
		}
		num = absoluteValue(location-number);
		if(num%3==0) distance = num/3;
		else distance = (num+1)/3+1;
		
		return distance;
	}
	
	public static int absoluteValue(int n) {
		if(n >= 0) {
			return n;
		}else {
			return -n;
		}
	}
	
	
	public static void main(String[] args) {
//		int[] numbers = {1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5};		// return : LRLLLRLLRRL
//		String hand = "right";
		int[] numbers = {7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2};		// return : LRLLRRLLLRR
		String hand = "left";
		
		System.out.println(new PushKeyPad().solution(numbers, hand));		

	}
}
```








