
// Switch to your db
db = db.getSiblingDB('test-dev')

// var dbs = db.adminCommand('listDatabases')
// print(dbs)

var users = [
  {
    _id: '1',
    name: 'Karose',
    gender: 'MALE',
    job: 'IT',
  },
  {
    _id: '2',
    name: 'Karose1',
    gender: 'MALE',
    job: 'IT_1',
  }
].forEach((user) => {
  db.getCollection('users').insert(Object.assign({}, user {createdAt: new Date}))
})
