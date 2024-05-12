import { getDb } from '@/assets/config/indexDB';

export default {
  async getAllItems() {
    const db = await getDb();
    const tx = db.transaction('items', 'readonly');
    const store = tx.objectStore('items');
    return store.getAll();
  },

  async addItem(item) {
    const db = await getDb();
    const tx = db.transaction('items', 'readwrite');
    const store = tx.objectStore('items');
    
    // Set created_date and updated_date fields
    item.created_date = new Date().toISOString();
    item.updated_date = new Date().toISOString();
    
    store.add(item);
    await tx.complete;
  },

  async updateItem(id, updates) {
    const db = await getDb();
    const tx = db.transaction('items', 'readwrite');
    const store = tx.objectStore('items');
    
    // Update updated_date field
    updates.updated_date = new Date().toISOString();
    
    store.put(updates, id);
    await tx.complete;
  },
};
