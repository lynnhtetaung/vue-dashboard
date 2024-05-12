const dbName = 'your_database_name';
const dbVersion = 1;
let db;

export async function getDb() {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }

    const request = window.indexedDB.open(dbName, dbVersion);

    request.onerror = function(event) {
      reject('Database error: ' + event.target.errorCode);
    };

    request.onsuccess = function(event) {
      db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      const objectStore = db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });

      // Define object store indexes if needed
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('created_date', 'created_date', { unique: false });
      objectStore.createIndex('updated_date', 'updated_date', { unique: false });
      objectStore.createIndex('companyName', 'companyName', { unique: false });
      objectStore.createIndex('idEdNo', 'idEdNo', { unique: false });
      objectStore.createIndex('maccIdNo', 'maccIdNo', { unique: false });
      objectStore.createIndex('noOfPackage', 'noOfPackage', { unique: false });
      objectStore.createIndex('blAwb', 'blAwb', { unique: false });
      objectStore.createIndex('status', 'status', { unique: false });

      console.log('Database upgraded');
    };
  });
}
