## 프로젝트 실행 방법

1. 레포지토리를 클론합니다

```
git clone ...
```

1. 모듈을 설치합니다

```
npm install
```

1. .env 파일 추가 후 아래 코드를 작성합니다

```
REACT_APP_API_URL = https://api.knkn.co
```

1. 로컬 환경으로 실행합니다

```
npm start
```

## 사용한 기술 및 의사결정

1. **자바스크립트(선택)** / 타입스크립트
   - 타입스크립트를 사용하는 이유와 기본 개념은 알고있으나 짧은 시간 내에 적용하기 힘들다는 판단으로 자바스크립트를 우선적으로 채택했습니다. 추후 과제와 상관없이 타입스크립트 적용할 예정입니다.
2. **리덕스 툴킷(선택)** / context API
   - 컴포넌트가 분리 됨에 따라 전역 상태 관리의 필요성을 느끼고 도입하였습니다. 처음에는 context API를 적용하였으나, 불필요한 리렌더링이 많이 발생하여 리덕스 툴킷으로 전환하였습니다.
3. **스타일드 컴포넌트(선택)**
   - 동적 스타일링과 유지보수가 편한 css-in-js 방식을 채택했습니다.

## 기술 구현 중 했던 고민

1. 어떤 데이터를 전역 상태로 관리할까?
   - 하나의 컴포넌트에서만 데이터 변경이 일어나지 않는 데이터들을 전역 상태로 관리했습니다. 자식 컴포넌트 간의 원활한 데이터 이동이 필요했기 때문입니다.
   - 사용자들이 선택한 값들(카테고리, 지역, 마감 제외, 요일)을 하나의 파일에서 관리하고 데이터를 사용할 수 있도록 했습니다.
     [src/app/slices/selectSlice.js](https://github.com/devyouth94/nfyg-clone/blob/e2f75546b7d9a0964575f3eb5a6107929cdad5c0/src/app/slices/selectSlice.js)
   - 사용자가 선택한 값을 기반으로 데이터를 불러오는 api와 불러온 데이터도 전역으로 관리했습니다.
     [5c0/src/app/slices/upcomingListSlice.js](https://github.com/devyouth94/nfyg-clone/blob/e2f75546b7d9a0964575f3eb5a6107929cdad5c0/src/app/slices/upcomingListSlice.js)
2. 쿼리 스트링을 어떻게 관리하고 요청할까?
   - 사용자가 선택 시 바로 요청이 가야했고, 관리하는 쿼리가 많아서 어떻게 하면 효율적으로 관리하고 보낼 수 있을지 고민했습니다.
   - 기본적인 쿼리 값들은 객체로 관리했습니다.
     ```jsx
     //params.js

     const basicParams = {
       type: 1,
       season: 7,
       order: "salon_category_asc",
       upcoming: true,
       limit: 20,
       offset: 0,
     };

     export { basicParams };
     ```
   - 배열로 관리하던 사용자 선택 값들은 api요청시 문자열로 바꾸고 해당하는 쿼리 키 값의 밸류 값으로 넣어서 사용했습니다.
     ```jsx
     //upcomingList.js

     const {
       category: categoryData,
       day: dayData,
       region: regionData,
       soldOut,
     } = useSelector((state) => state.select);

     dispatch(
       __getList({
         salonCategory: getString(categoryData),
         dayOfWeek: getString(dayData),
         region: getString(regionData),
         soldOut,
       }),
     );
     ```
     ```jsx
     //getString.js

     const getString = (arr) => {
       if (!arr.length) return null;

       return arr.join(",");
     };

     export { getString };
     ```
   - 필요한 쿼리들을 객체 형태로 작업 후에 axios get요청 시 두번째 인자에 params로 넣어서 요청했습니다.
     ```jsx
     //upcomingListSlice.js

     export const __getList = createAsyncThunk("/getList", async (params, thunkAPI) => {
       try {
         const { data } = await instance.get("/v2/nfyg/meetups", {
           params: { ...basicParams, ...params },
         });
         return thunkAPI.fulfillWithValue(data.data);
       } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
       }
     });
     ```
3. 카테고리마다 고유의 컬러가 있는데 어떻게 효율적으로 관리할까?
   - 카테고리 이름으로 컬러 값을 가져오는 로직이 효율적이라고 판단했고, 이름과 컬러 값을 하나의 객체로 묶어 관리했습니다.
     추가로 컬러 값은 상수로 관리하였습니다.
     ```jsx
     //arr.js

     const categoryArr = [
       { name: "전체", color: MAIN_COLOR.black, lightColor: MAIN_COLOR.black },
       { name: "라이프스타일", color: COLOR.Lifestyle, lightColor: COLOR_BRIGHT.Lifestyle },
       { name: "영화와 넷플릭스", color: COLOR.Movie, lightColor: COLOR_BRIGHT.Movie },
     	...,
     ];
     ```
     ```jsx
     //colorPalette.js

     const COLOR = {
       Love: "#EC5A51",
       Movie: "#2947B2",
       Career: "#47525D",
     	...,
     };
     ```
   - 각 아이템에 담긴 카테고리 값(`item.tags.salonCategory[0]`)을 사용하여 categoryArr에 해당하는 값을 필터링 해 필요한 값을 가져와 사용했습니다.
     ```jsx
     const MeetupCardImage = ({ item }) => {
       const [category] = categoryArr.filter((value) => value.name === item.tags.salonCategory[0]);

       //중략

       return (
         <S.Image color={category.lightColor}>
           <S.ThumbnailImage color={category.color}>
             <img className="card-image" src={item.thumbnailUrl} alt="thumbnailImage" />
           </S.ThumbnailImage>
         </S.Image>
       );
     };
     ```

## 구현 하지 못한것

### 기술

- 드롭다운 메뉴 외부 클릭시 닫기
- 드롭다운 하나 열때 다른 하나 자동으로 닫기
- 쿼리스트링값 주소에 표시하기

### 디자인

- 드롭다운 선택시 파란색 아웃라인 포커스
