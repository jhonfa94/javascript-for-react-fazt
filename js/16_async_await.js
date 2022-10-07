const ul = document.createElement("ul");

// Por medio de fetch
/* let data = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let posts = response;

    posts.forEach((post) => {
      const li = document.createElement("li");
      li.innerText = post.title;
      ul.append(li);
    });
    document.body.append(ul);
  })
  .catch((err) => console.log(err));

*/
console.log("Lína 2 ");

const loadData = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dt = await resp.json();
  console.log(dt);
  let posts = dt;

  posts.forEach((post) => {
    const li = document.createElement("li");
    li.innerText = post.title;
    ul.append(li);
  });
  document.body.append(ul);
};
loadData();

// REFORZAR TEMA CON LA PARTE DE ASINCRONIA
