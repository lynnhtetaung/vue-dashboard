const fs = require('fs');

// Sample data for items
const items = [
  { description: 'Item 1', unitPrice: 10, quantity: 2, total: 20 },
  { description: 'Item 2', unitPrice: 15, quantity: 3, total: 45 },
  // Add more items as needed
];

// Read the template file
fs.readFile('template.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Replace placeholders with actual data
  let replacedContent = data
    .replace('{{ invoiceNumber }}', 'INV-001')
    .replace('{{ companyName }}', 'ABC Company')
    .replace('{{ date }}', '2024-05-06');

  // Replace table data placeholders
  const itemsTable = items.map(item => `- ${item.description} | Unit Price: ${item.unitPrice} | Quantity: ${item.quantity} | Total: ${item.total}`).join('\n');
  replacedContent = replacedContent.replace('{{#items}}\n{{/items}}', itemsTable);

  // Write to a new file
  fs.writeFile('invoice.txt', replacedContent, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Invoice file generated successfully.');
  });
});
