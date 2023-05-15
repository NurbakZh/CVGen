// @ts-nocheck
import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";

export async function download(element: HTMLDivElement) {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(element);
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("csv.pdf");
}