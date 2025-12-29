const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const score = students
  .filter(student => student.score > 50)
  .reduce((sum,cur) => sum + (cur.score * 1.1) ,0)

console.log(`Total score is ${score}`)