import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(): void {
    const doc = new jsPDF();

    // Fatura başlığını ekleyin
    doc.setFontSize(18);
    doc.text('RESTOMANAGE', 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);

    // Müşteri bilgilerini ekleyin
    doc.text(`Name: BTech Days`, 14, 30);
    doc.text(`Email: btechdays@gmail.com`, 14, 38);
    doc.text(`Contact Number: 1231231231`, 14, 46);
    doc.text(`Payment Method: Cash`, 14, 54);

    // Ürün detaylarının başlığını ekleyin
    doc.setFontSize(14);
    doc.text('Product Details:', 14, 65);

    // Tablo başlıkları ve verileri
    const tableColumn = ["Name", "Category", "Quantity", "Price", "Sub Total"];
    const tableRows = [
      ["Black Tea", "Tea", "123", "20", "2460"],
      // Diğer ürünler buraya eklenebilir
    ];

    // Tabloyu PDF'e ekleyin
    autoTable(doc, {
      startY: 70,
      head: [tableColumn],
      body: tableRows,
      theme: 'plain',
      didDrawCell: data => {
        // Bu kısım, hücre çizimi sırasında özel işlemler yapmak için kullanılabilir
      },
      styles: { fontSize: 11, cellPadding: 3 },
      headStyles: { fontStyle: 'bold', fillColor: [0, 0, 0], textColor: [255, 255, 255] },
      columnStyles: { 0: { cellWidth: 36 }, 1: { cellWidth: 36 }, 2: { cellWidth: 36 }, 3: { cellWidth: 36 }, 4: { cellWidth: 'auto' } }, // Örnek olarak sütun genişlikleri ayarlanmıştır.
    });

    // Toplam tutarı ekleyin
    doc.setFontSize(11);
    const finalY = (doc as any).autoTable.previous.finalY || doc.internal.pageSize.getHeight();

    // Toplam tutarı ve diğer içeriği ekleyin
    doc.text(`Total: 2460`, 14, finalY + 10);
    let thankYouY = finalY + 20; // Teşekkür mesajının y koordinatını ayarlayın
    doc.text('Thank you for visiting. Please visit again!', 14, thankYouY);

    // PDF'i kaydedin
    doc.save('odeme-bilgileri.pdf');
  }

}
