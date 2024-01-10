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

    // Tablo verilerini ve başlıklarını tanımlayın
    const sütunBaşlıkları = ["ID", "Ad", "Soyad", "Ülke"];
    const veriler = [
      [1, "Ahmet", "Türkiye"],
      [2, "Maria", "İspanya"],
      // Daha fazla veri ekleyebilirsiniz
    ];

    // Tabloyu PDF'e ekleyin
    autoTable(doc, {
      head: [sütunBaşlıkları],
      body: veriler,
      // Tablo stilini ve diğer opsiyonları burada belirleyebilirsiniz
    });
    doc.save('fatura.pdf');
  }
}
