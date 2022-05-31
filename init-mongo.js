db.createCollection('user');

db.user.insertOne({ email: 'john.doe@example.com', password: 'password' });
db.user.insertOne({ email: 'jane.doe@example.com', password: 'password2' });

db.createUser({
  user: 'admin',
  pwd: 'helloWorld',
  roles: [
    {
      role: 'readWrite',
      db: 'nauticalDb',
    },
  ],
});
