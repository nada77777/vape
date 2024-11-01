import { firebaseApp } from "@/firebase";
import { equalTo, get, getDatabase, orderByChild, query, ref, child } from "firebase/database";

export function addBookmark(item) {
  //
  // 로컬에 기존 북마크 아이템들 체크
  const bookmarkItems = JSON.parse(localStorage.getItem("bookmarkItems")) || [];

  // 로컬에 중복 아이템 유무 확인
  const isSameItem = bookmarkItems.find((bookmarkItem) => bookmarkItem.name === item.name);

  let newBookmarkItems;
  if (isSameItem) {
    // 중복 아이템 있다? 덮어쓰기
    newBookmarkItems = bookmarkItems.map((bookmarkItem) =>
      bookmarkItem.name === item.name ? item : bookmarkItem
    );
  } else {
    // 중복 아이템 없다면 새로운 아이템을 기존 배열에 추가
    newBookmarkItems = [...bookmarkItems, item];
  }

  // 후에 최종 북마크 아이템 리스트 로컬 스토리지에 저장
  localStorage.setItem("bookmarkItems", JSON.stringify(newBookmarkItems));
}

export function removeBookmark(bookmarkItems, item, callback) {
  const filterdItems = bookmarkItems.filter((bookmarkItem) => bookmarkItem.name !== item.name);
  localStorage.setItem("bookmarkItems", JSON.stringify(filterdItems));
  callback(filterdItems);
}

export async function searchItem(keyword) {
  // // return fetch("/data/all.json") //
  // //   .then((res) => res.json()) //
  // //   .then((result) => result.products.filter(({ name }) => name.includes(keyword))); //

  const db = getDatabase(firebaseApp);
  const dbRef = ref(db, "/itemsforsearch/products"); // 검색할 경로를 설정

  // name 필드를 기준으로 keyword와 일치하는 데이터 쿼리
  const searchedItem = query(dbRef, orderByChild("name"), equalTo(keyword));

  // 쿼리 실행하여 검색 결과 가져오기
  return get(searchedItem)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const products = snapshot.val();
        console.log("products", products);
        return products;
      } else {
        console.log("데이터가 없어요");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function localSearchItem(keyword) {
  return fetch("/data/all.json") //
    .then((res) => res.json()) //
    .then((result) => result.products.filter(({ name }) => name.includes(keyword))); //
}

export async function getData(category) {
  // 로컬에 아이템이 있는지 체크 있다면, 로컬 데이터 사용
  if (checkLocalStorage(category)) return checkLocalStorage(category);

  // 로컬에 아이템이 없다면 db에서 가져오기
  const dbRef = ref(getDatabase(firebaseApp));
  return get(child(dbRef, `/items/${category}/products`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("로컬에ㄴㄴ firebaseㄱㄱ");
        const products = snapshot.val();
        saveLocalStorage(category, products);
        return products;
      } else {
        console.log("데이터가 없어요");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function getDataLocal(category) {
  // 로컬에 아이템이 있는지 체크 있다면, 로컬 데이터 사용
  if (checkLocalStorage(category)) return checkLocalStorage(category);
  console.log("-----로컬에 ㄴㄴ json 파일 사용-----");

  // 로컬에 아이템이 없다면 해당 경로 json 파일 사용
  const response = await fetch(`/data/${category}.json`);
  const data = await response.json();
  const products = await data.products;

  // 후에 로컬 스토리지에 저장
  saveLocalStorage(category, products);

  return products;
}

function checkLocalStorage(category) {
  const localData = JSON.parse(localStorage.getItem(category));
  return localData;
}

function saveLocalStorage(category, products) {
  localStorage.setItem(category, JSON.stringify(products));
}
