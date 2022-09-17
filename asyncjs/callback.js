/* const func1 = () => {
  console.log("func1 start");
  func2();
  console.log("func1 completed");
};

const func2 = () => {
  console.log("func2 start");
  func3();
  console.log("func2 completed");
};
const func3 = () => {
  console.log("func3 start");
  console.log("func3 completed");
};

func1();
 */

/* let x = 5;
console.log(x);
setTimeout(() => {
  x += 5;
  console.log(x);
}, 2000);
x += 5;
console.log(x);
 */

/* const books = [
  { name: "Kitap1", author: "Yazar1" },
  { name: "Kitap2", author: "Yazar2" },
  { name: "Kitap3", author: "Yazar3" },
];

const listbooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};
addBook({ name: "Kitap4", author: "Yazar4" }, listbooks);
 */

function writeName(name, callback) {
  // writeName fonksiyonu argüman olarak bir callback fonksiyonu alıyor
  callback(name);
}

function writer(word) {
  // writer fonksiyonu
  console.log(word);
}

writeName("Ahmet", writer); // writeName fonksiyonu çalıştırılırken writer fonksiyonu callback işlevi görüyor
