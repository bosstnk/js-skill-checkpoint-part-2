// เริ่มเขียนโค้ดตรงนี้
let getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

async function getUsersDataNameLengthLower17() {
  try {
    const user = await getUsers()
    const result = user.filter((user) => user.name.length > 17).map((user) => user.name);
    console.log(result)
  } catch(error) {
    console.log("There was an error fetching the data.")
  };
}

getUsersDataNameLengthLower17()