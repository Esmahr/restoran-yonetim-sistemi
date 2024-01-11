import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(): void {
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text('Ödeme Detayi', 14, 22);
  
    doc.setFontSize(11);
    doc.text('Isim: Esma Harmanci', 14, 30);
    doc.text('Iletisim Numarasi: 539 123 23 34', 14, 38);
    doc.text('E-Posta: esmaharmanci@gmail.com', 14, 46);
    doc.text('Ödeme Yöntemi: Nakit', 14, 54);
  
    // Tablo verilerini ve başlıklarını tanımlayın
    const sütunBaşlıkları = ["Ürün", "Kategori", "Fiyat", "Miktar", "Toplam"];
    const veriler = [
      ["Kahve", "Içecek", "89.50 TL", 2, "179 TL"],
      // Daha fazla ürün ekleyebilirsiniz
    ];
  
    // Tabloyu PDF'e ekleyin
    autoTable(doc, {
      startY: 60,
      head: [sütunBaşlıkları],
      body: veriler,
      theme: 'striped',
      headStyles: {
        fillColor: [200, 200, 200],
        textColor: [0, 0, 0],
        lineWidth: 0.1
      },
      styles: {
        cellPadding: 5,
        fontSize: 10,
        valign: 'middle',
        overflow: 'linebreak',
      },
      tableWidth: 'auto',
    });
  
    doc.save('fatura.pdf');
  }
  
}
