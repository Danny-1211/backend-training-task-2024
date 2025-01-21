const members = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Evan",
  "Fiona",
  "George",
  "Hannah",
];

let purchaseRecords = []; // 購買課程紀錄
// 是否是有效名稱
function isVaildName(name) {
  if (name == null || !members.includes(name)) {
    return false;
  }
  return true;
}

// 是否為數字
function isVaildNumber(num) {
  if (num == 0 || isNaN(num)) {
    return false;
  }
  return true;
}

// 依據數量而套用的優惠價格
function returnSingleCoursePrice(num) {
  if (num >= 21) {
    // 21 堂以上
    return 1100;
  } else if (num <= 10) {
    // 1-10 堂
    return 1500;
  }
  return 1100;
}

function addPurchaseRecord(name, couresNum) {
  // 	1-10 堂 / 1500 元
  // 11-20 堂 / 1300 元
  // 21 堂以上 / 1100 元
  // 每一筆紀錄所需要的資訊

  let obj = {
    member: "",
    courseCount: 0,
    singleClassPrice: 0,
    totalPrice: 0,
  };

  // 如果名稱跟數量都是有效
  if (isVaildName(name) && isVaildNumber(couresNum)) {
    obj.member = name;
    obj.courseCount = parseInt(couresNum);
    obj.singleClassPrice = returnSingleCoursePrice(couresNum);
    obj.totalPrice = obj.singleClassPrice * obj.courseCount;
    console.log(
      `新增購買記錄成功！會員 ${obj.member} 購買 ${obj.courseCount} 堂課，總金額為 ${obj.totalPrice} 元。`
    );
    purchaseRecords.push(obj); // 將成功購買的 item 放到紀錄中
  } else {
    console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。");
  }
}

// 計算目前的總營業額
function calculateTotalPrice() {
  let totalTurnover = 0;
  purchaseRecords.forEach((item) => {
    totalTurnover += item.totalPrice;
  });
  return totalTurnover;
}

// 篩選出還沒有購課的會員
function filterNoPurchaseMember() {
  console.log("purchaseRecords", purchaseRecords);
  let notBuyClassMembers = [];
  notBuyClassMembers = members.filter((item) => {
    // // 還沒有買課的會員
    return !purchaseRecords.some((record) => record.member === item);
  });
  1;
  notBuyClassMembers.forEach((e) => {
    console.log(`未購買課程的會員有：${e}`);
  });
}

// demo
let name = "George";
let couresName = "10";
let name2 = "Fiona";
let couresName2 = "20";
this.addPurchaseRecord(name, couresName);
this.addPurchaseRecord(name2, couresName2);
console.log("目前總營業額:", calculateTotalPrice());
filterNoPurchaseMember();
