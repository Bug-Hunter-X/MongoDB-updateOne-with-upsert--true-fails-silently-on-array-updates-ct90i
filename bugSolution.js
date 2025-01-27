```javascript
const query = { name: 'John Doe' };
const update = { $push: { ages: 30 } }; // or $addToSet for unique values

db.collection('users').updateMany(query, update, { upsert: true }); 
```
This solution utilizes `updateMany` which correctly handles array updates when upserting. Using `$push` adds the new age to the array. If you want to ensure uniqueness, `$addToSet` can be used instead.