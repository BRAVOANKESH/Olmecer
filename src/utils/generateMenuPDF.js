import jsPDF from 'jspdf';

export const generateMenuPDF = () => {
  // Create a new PDF document
  const doc = new jsPDF();
  
  // Set colors
  const darkBg = [5, 5, 5];
  const goldColor = [212, 175, 55];
  const whiteText = [255, 255, 255];
  const lightGrayText = [160, 160, 160];

  // Add background color
  doc.setFillColor(...darkBg);
  doc.rect(0, 0, 210, 297, 'F');

  // Add header
  doc.setFontSize(28);
  doc.setTextColor(...goldColor);
  doc.setFont(undefined, 'bold');
  doc.text('OLMECER', 105, 25, { align: 'center' });

  // Add subtitle
  doc.setFontSize(12);
  doc.setTextColor(...lightGrayText);
  doc.setFont(undefined, 'normal');
  doc.text('Premium Handcrafted Chocolate Menu', 105, 35, { align: 'center' });

  // Add decorative line
  doc.setDrawColor(...goldColor);
  doc.line(20, 40, 190, 40);

  // Menu items data
  const menuItems = [
    {
      category: 'DARK CHOCOLATE',
      items: [
        { name: 'Dark Chocolate Delight', desc: '70% cocoa, pure luxury', price: '₹199' },
        { name: 'Hazelnut Crunch', desc: 'Dark chocolate with crispy hazelnut', price: '₹249' },
        { name: 'Dark Exotic Blend', desc: 'Exotic spice infusion', price: '₹279' }
      ]
    },
    {
      category: 'MILK CHOCOLATE',
      items: [
        { name: 'Milk Chocolate Bliss', desc: 'Silky smooth milk chocolate', price: '₹149' },
        { name: 'Milk Chocolate Mint', desc: 'Fresh mint with creamy milk chocolate', price: '₹169' },
        { name: 'Milk Chocolate Truffle', desc: 'Delicate truffle coating', price: '₹159' }
      ]
    },
    {
      category: 'TRUFFLES',
      items: [
        { name: 'Caramel Fusion', desc: 'Sweet caramel center', price: '₹229' },
        { name: 'Strawberry Truffle', desc: 'Fresh strawberry filling', price: '₹179' },
        { name: 'Coffee Truffle', desc: 'Bold espresso flavor', price: '₹189' }
      ]
    },
    {
      category: 'GIFT BOXES',
      items: [
        { name: 'Holi Special Mix', desc: 'Assorted selection, festive packaging', price: '₹299' },
        { name: 'Premium Dark Selection', desc: 'Luxury dark chocolate collection', price: '₹399' },
        { name: 'Luxury Gift Box', desc: 'Ultimate deluxe assortment', price: '₹499' }
      ]
    }
  ];

  let yPosition = 50;
  const pageHeight = 297;
  const bottomMargin = 20;

  // Iterate through menu items
  menuItems.forEach((section, sectionIndex) => {
    // Check if we need a new page
    if (yPosition > pageHeight - bottomMargin - 40) {
      doc.addPage();
      doc.setFillColor(...darkBg);
      doc.rect(0, 0, 210, 297, 'F');
      yPosition = 20;
    }

    // Category title
    doc.setFontSize(14);
    doc.setTextColor(...goldColor);
    doc.setFont(undefined, 'bold');
    doc.text(section.category, 20, yPosition);
    yPosition += 8;

    // Category items
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');

    section.items.forEach((item) => {
      // Item name and price on same line
      doc.setTextColor(...whiteText);
      doc.setFont(undefined, 'bold');
      doc.text(item.name, 25, yPosition);
      doc.text(item.price, 180, yPosition, { align: 'right' });

      // Item description
      yPosition += 5;
      doc.setTextColor(...lightGrayText);
      doc.setFont(undefined, 'italic');
      doc.setFontSize(9);
      doc.text(item.desc, 25, yPosition);

      yPosition += 7;
    });

    // Add spacing between sections
    yPosition += 3;
  });

  // Add footer
  yPosition = pageHeight - bottomMargin;
  doc.setFontSize(9);
  doc.setTextColor(...lightGrayText);
  doc.setFont(undefined, 'normal');
  doc.text('For orders and inquiries, visit us at www.olmecer.com', 105, yPosition, { align: 'center' });

  // Save the PDF
  doc.save('Olmecer-Menu.pdf');
};
