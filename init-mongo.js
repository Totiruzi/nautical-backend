db.createCollection('user');

db.user.insertOne({ email: 'john.doe@example.com', password: 'password' });
db.user.insertOne({ email: 'jane.doe@example.com', password: 'password2' });
db.user.insertOne({
  email: 'dummy.user@example.com',
  password: 'dummyPassword',
});

db.createUser({
  user: 'admin',
  pwd: 'adminPassword',
  roles: [
    {
      role: 'readWrite',
      db: 'nauticalDb',
    },
  ],
});
