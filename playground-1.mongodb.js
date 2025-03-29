// Switch to the studentDB database (it will be created if it doesn't exist)
use('studentDB');

// Create a collection named "students"
db.createCollection('students');
console.log('Database and Collection created successfully!');
db.getCollection('students').insertOne({
    name: 'John Doe',
    rollNo: 101,
    className: 'IT-1'
  });
  console.log('One student inserted');
  db.getCollection('students').insertMany([
    { name: 'Alice', rollNo: 102, className: 'IT-1' },
    { name: 'Bob', rollNo: 103, className: 'IT-2' },
    { name: 'Charlie', rollNo: 104, className: 'IT-1' }
  ]);
  console.log('Multiple students inserted');
  