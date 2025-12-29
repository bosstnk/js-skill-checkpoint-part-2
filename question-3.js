// เริ่มเขียนโค้ดตรงนี้
let getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

getUsers().then((data) => {
  const result = data
    .filter((user) => user.name.length > 17)
    .map((user) => user.name);

  console.log(result);
});
