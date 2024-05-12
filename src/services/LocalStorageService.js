import { v4 as uuidv4 } from 'uuid';

const LocalStorageService = {

    // Retrieve data from local storage
    getItems() {
      const items = localStorage.getItem('items');
      return items ? JSON.parse(items) : [];
    },

    // Store data in local storage
    setItems(items) {
        localStorage.setItem('items', JSON.stringify(items));
    },

    addItem(item) {
        const items = this.getItems();
        const newItem = {
            id: uuidv4(), // Generate a unique ID
            ...item,
            createdDate: new Date().toISOString(),
            updatedDate: new Date().toISOString()
        };
        items.push(newItem);
        this.setItems(items);
    },
    

    updateItem(id, updates) {
        const items = this.getItems();
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            updates.updatedDate = new Date().toISOString();
            items[index] = { ...items[index], ...updates };
            this.setItems(items);
        }
    },

    // Remove item from local storage by ID
    removeItem(id) {
        console.log('Remove ID', id);
        const items = this.getItems();
        const filteredItems = items.filter(item => item.id != id);
        console.log('Filtered Items', filteredItems);
        localStorage.setItem('items', JSON.stringify(filteredItems)); // Set the filtered items back to localStorage
    }


};

export default LocalStorageService;
