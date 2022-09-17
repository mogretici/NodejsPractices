function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("veriler alınıyor");
    if (data) {
      resolve("veriler alındı.");
    } else {
      reject("veriler alınamadı.");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("veriler düzenleniyor.");
    if (receivedData) {
      resolve("veriler düzenlendi");
    } else {
      reject("veriler düzenlenemedi.");
    }
  });
}

/* getData(true)
  .then((result) => {
    console.log(result);
    return cleanData(false)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
 */

/* 
async function processData(data) {
  await getData(true)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      receivedData = data;
    });
  cleanData(receivedData)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
}

processData(false); */

async function processData(data) {
  try {
    const receivedData = await getData(data);
    console.log(receivedData);

    const cleanedData = await cleanData(receivedData);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}
processData(true);
