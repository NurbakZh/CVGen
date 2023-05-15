// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
export async function download(element: HTMLDivElement) {
  if (stryMutAct_9fa48("1003")) {
    {}
  } else {
    stryCov_9fa48("1003");
    const pdf = new jsPDF(stryMutAct_9fa48("1004") ? "" : (stryCov_9fa48("1004"), "portrait"), stryMutAct_9fa48("1005") ? "" : (stryCov_9fa48("1005"), "pt"), stryMutAct_9fa48("1006") ? "" : (stryCov_9fa48("1006"), "a4"));
    const data = await html2canvas(element);
    const img = data.toDataURL(stryMutAct_9fa48("1007") ? "" : (stryCov_9fa48("1007"), "image/png"));
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = stryMutAct_9fa48("1008") ? imgProperties.height * pdfWidth * imgProperties.width : (stryCov_9fa48("1008"), (stryMutAct_9fa48("1009") ? imgProperties.height / pdfWidth : (stryCov_9fa48("1009"), imgProperties.height * pdfWidth)) / imgProperties.width);
    pdf.addImage(img, stryMutAct_9fa48("1010") ? "" : (stryCov_9fa48("1010"), "PNG"), 0, 0, pdfWidth, pdfHeight);
    pdf.save(stryMutAct_9fa48("1011") ? "" : (stryCov_9fa48("1011"), "csv.pdf"));
  }
}