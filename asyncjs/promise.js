/* const promise1 = new Promise((resolve, reject) => {
  reject("bağlantı hatası");
  resolve("bağlantı başarılı");
});
promise1
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
 */

const books = [
  { name: "Kitap1", author: "Yazar1" },
  { name: "Kitap2", author: "Yazar2" },
  { name: "Kitap3", author: "Yazar3" },
];

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    reject("kitap ekleme başarısız");
  });
  return promise1;
};

addBook({ name: "Kitap4", author: "Yazar4" })
  .then(() => {
    console.log("kitap ekleme başarılı\n", books);
  })
  .catch((err) => {
    console.log(err);
  });
