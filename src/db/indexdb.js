import { openDB } from 'idb';

async function createDatabase() {
  const db = await openDB('database', 1, {
    upgrade(db) {
      db.createObjectStore('default');
      db.createObjectStore('player');
    },
  });
  return db;
}

let db;
async function getDatabase() {
  if (!db) {
    db = await createDatabase();
  }
  return db;
}

async function getTx(storeName = 'default', mode = 'readonly') {
  const db = await getDatabase();
  const tx = db.transaction(storeName, mode);
  return tx.objectStore(storeName);
}

async function createRecord(storeName, record) {
  const tx = await getTx(storeName, 'readwrite');
  const store = tx.objectStore(storeName);
  await store.add(record);
  await tx.done;
}

async function readRecord(storeName, key) {
  const tx = await getTx(storeName, 'readonly');
  const store = tx.objectStore(storeName);
  const record = await store.get(key);
  await tx.done;
  return record;
}

async function updateRecord(storeName, key, newRecord) {
  const tx = await getTx(storeName, 'readwrite');
  const store = tx.objectStore(storeName);
  await store.put(newRecord, key);
  await tx.done;
}

async function deleteRecord(storeName, key) {
  const tx = await getTx(storeName, 'readwrite');
  const store = tx.objectStore(storeName);
  await store.delete(key);
  await tx.done;
}

export { createRecord, readRecord, updateRecord, deleteRecord };
