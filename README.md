# 08/04 컴포넌트 속성 검사 및 테스트 과제  

## 폴더 구조
![폴더구조](https://github.com/user-attachments/assets/3c33849f-829c-4cde-b86f-5888135f2443)

## 과제 진행 과정
ProfilePages.jsx 컴포넌트에서 data를 import해서 구조 분해 할당 후  
자식 컴포넌트 ArrayItem.jsx ObjectItem.jsx StringItem.jsx에 각각 props를 전달했습니다  
타입 검사를 위한 propTypes의 value?는 @types 폴더로부터 import해서 해당 컴포넌트에서 검사를 진행합니다


## 과제를 진행하며 느낀 점

과제를 진행하며 proptypes 코드 작성이 끝나고 생각지도 못하게 각각 속성검사 코드를 가져와서  
types.d.js라는 하나의 파일에 정의해서 export해서 사용하는 부분에서 애를 먹었다
