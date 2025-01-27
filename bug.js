```javascript
const query = { name: 'John Doe' };
const update = { $set: { age: 30 } };

db.collection('users').updateOne(query, update, { upsert: true });
```
This code snippet attempts to upsert a document. The issue is that upserting with `updateOne` doesn't handle array updates well. If the document exists but the field to update is within an array, the update will fail silently.