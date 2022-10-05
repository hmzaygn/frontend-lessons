//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

// let userData;

fetch("https://api.github.com/users")
  .then((res) => {
    // console.log(res);
    //! Error handling
    if (!res.ok) {
      throw new Error("Something went wrong");
    } else {
      return res.json();
    }
  })
  .then((data) => updateDom(data))
  .catch((err) => console.log(err));

// console.log(userData);

const updateDom = (users) => {
  console.log(users);
  const userDiv = document.querySelector(".users");
  users.forEach((user) => {
    userDiv.innerHTML += `<h2>${user.login}</h2> <img src="${user.avatar_url}" width="300px"></img>`;
  });
};
