# MongoDB updateOne Upsert Issue with Array Updates

This repository demonstrates a subtle issue with MongoDB's `updateOne` method when used with the `upsert: true` option and array updates.  The issue is that `updateOne` will fail silently if attempting to modify an array field in a document that already exists.  This can lead to unexpected behavior and difficult debugging.

The `bug.js` file shows the problematic code. The `bugSolution.js` file offers a solution using `updateMany` to correctly handle array updates.