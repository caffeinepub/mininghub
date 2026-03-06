import { miningHubPlan } from "@/content/mininghubPlan";
import { loadPdfImageAssets } from "./loadPdfImageAssets";

declare global {
  interface Window {
    jspdf?: {
      jsPDF: new (options?: any) => any;
    };
  }
}

export async function generateMiningHubPlanPdf(): Promise<Blob> {
  // Check if jsPDF is available
  if (!window.jspdf) {
    throw new Error(
      "jsPDF library is not loaded. Please check your internet connection and try again.",
    );
  }

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Load images (with fallback to empty strings)
    const images = await loadPdfImageAssets();

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const contentWidth = pageWidth - 2 * margin;
    let yPos = margin;

    // Helper function to add new page if needed
    const checkPageBreak = (requiredSpace: number) => {
      if (yPos + requiredSpace > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
        return true;
      }
      return false;
    };

    // Helper function to add text with word wrap
    const addWrappedText = (text: string, fontSize: number, isBold = false) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      const lines = doc.splitTextToSize(text, contentWidth);
      const lineHeight = fontSize * 0.5;

      // biome-ignore lint/complexity/noForEach: jsPDF internal API requires forEach
      lines.forEach((line: string) => {
        checkPageBreak(lineHeight);
        doc.text(line, margin, yPos);
        yPos += lineHeight;
      });
    };

    // Title
    doc.setFillColor(59, 130, 246);
    doc.rect(0, 0, pageWidth, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.name, pageWidth / 2, 20, { align: "center" });
    doc.setFontSize(12);
    doc.text(miningHubPlan.tagline, pageWidth / 2, 30, { align: "center" });

    yPos = 50;
    doc.setTextColor(0, 0, 0);

    // Add hero images if available
    if (images.cryptoMiningImage) {
      checkPageBreak(60);
      try {
        doc.addImage(
          images.cryptoMiningImage,
          "PNG",
          margin,
          yPos,
          contentWidth / 2 - 5,
          50,
        );
      } catch (error) {
        console.warn("Failed to add crypto mining image to PDF:", error);
      }
    }
    if (images.blockchainDevImage) {
      try {
        doc.addImage(
          images.blockchainDevImage,
          "PNG",
          pageWidth / 2 + 5,
          yPos,
          contentWidth / 2 - 5,
          50,
        );
      } catch (error) {
        console.warn("Failed to add blockchain dev image to PDF:", error);
      }
    }
    yPos += 60;

    // About Section
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.pdfCopy.aboutTitle, margin + 5, yPos + 7);
    yPos += 15;

    addWrappedText(miningHubPlan.description, 10);
    yPos += 5;

    // Services Section
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.pdfCopy.servicesTitle, margin + 5, yPos + 7);
    yPos += 15;

    // biome-ignore lint/complexity/noForEach: jsPDF iteration
    miningHubPlan.services.forEach((service) => {
      checkPageBreak(10);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`• ${service}`, margin + 5, yPos);
      yPos += 6;
    });
    yPos += 5;

    // Benefits Section
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.pdfCopy.benefitsTitle, margin + 5, yPos + 7);
    yPos += 15;

    // biome-ignore lint/complexity/noForEach: jsPDF iteration
    miningHubPlan.benefits.forEach((benefit) => {
      checkPageBreak(10);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`• ${benefit}`, margin + 5, yPos);
      yPos += 6;
    });
    yPos += 5;

    // Crypto Mining Explainer Section
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.cryptoMiningExplainer.title, margin + 5, yPos + 7);
    yPos += 15;

    // What is Mining
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(
      miningHubPlan.cryptoMiningExplainer.whatIsMining.title,
      margin + 5,
      yPos,
    );
    yPos += 7;
    addWrappedText(
      miningHubPlan.cryptoMiningExplainer.whatIsMining.content,
      10,
    );
    yPos += 5;

    // How it Works
    checkPageBreak(20);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(
      miningHubPlan.cryptoMiningExplainer.howItWorks.title,
      margin + 5,
      yPos,
    );
    yPos += 7;

    // biome-ignore lint/complexity/noForEach: jsPDF iteration
    miningHubPlan.cryptoMiningExplainer.howItWorks.points.forEach((point) => {
      checkPageBreak(10);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(`• ${point}`, contentWidth - 10);
      // biome-ignore lint/complexity/noForEach: jsPDF iteration
      lines.forEach((line: string) => {
        checkPageBreak(6);
        doc.text(line, margin + 5, yPos);
        yPos += 6;
      });
    });
    yPos += 5;

    // Investment Package
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.pdfCopy.packageTitle, margin + 5, yPos + 7);
    yPos += 15;

    checkPageBreak(30);
    doc.setFillColor(250, 250, 250);
    doc.rect(margin, yPos, contentWidth, 25, "F");
    doc.setDrawColor(200, 200, 200);
    doc.rect(margin, yPos, contentWidth, 25);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(
      `${miningHubPlan.pdfCopy.packageLabels.singlePackage} $${miningHubPlan.package.amount}`,
      margin + 5,
      yPos + 7,
    );

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(
      `${miningHubPlan.pdfCopy.packageLabels.dailyCredit} $${miningHubPlan.package.dailyCredit}`,
      margin + 5,
      yPos + 14,
    );

    const monthlyEarning = (miningHubPlan.package.dailyCredit * 30).toFixed(2);
    doc.text(
      `${miningHubPlan.pdfCopy.packageLabels.monthlyEarning} $${monthlyEarning}`,
      margin + 5,
      yPos + 20,
    );

    yPos += 30;

    // Referral System
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.pdfCopy.referralTitle, margin + 5, yPos + 7);
    yPos += 15;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(
      `${miningHubPlan.pdfCopy.referralText}${miningHubPlan.referral.directReward}`,
      margin + 5,
      yPos,
    );
    yPos += 10;

    // Level Income
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.pdfCopy.levelIncomeTitle, margin + 5, yPos + 7);
    yPos += 15;

    // biome-ignore lint/complexity/noForEach: jsPDF iteration
    miningHubPlan.levelIncome.forEach((level) => {
      checkPageBreak(10);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(
        `• ${miningHubPlan.pdfCopy.levelLabel} ${level.level}: ${level.percentage}%`,
        margin + 5,
        yPos,
      );
      yPos += 6;
    });
    yPos += 5;

    // Team Rewards
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.pdfCopy.teamRewardsTitle, margin + 5, yPos + 7);
    yPos += 15;

    // biome-ignore lint/complexity/noForEach: jsPDF iteration
    miningHubPlan.teamRewards.forEach((reward) => {
      checkPageBreak(10);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(
        `• ${reward.teamSize} ${miningHubPlan.pdfCopy.teamRewardsLabels.members}: $${reward.monthlyReward} ${miningHubPlan.pdfCopy.teamRewardsLabels.perMonth}`,
        margin + 5,
        yPos,
      );
      yPos += 6;
    });
    yPos += 5;

    // Deposit and Withdrawal
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(
      miningHubPlan.pdfCopy.depositWithdrawalTitle,
      margin + 5,
      yPos + 7,
    );
    yPos += 15;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(
      `${miningHubPlan.pdfCopy.depositMethodLabel} ${miningHubPlan.deposit.method}`,
      margin + 5,
      yPos,
    );
    yPos += 8;

    doc.text(
      `${miningHubPlan.pdfCopy.withdrawalFeaturesLabel}`,
      margin + 5,
      yPos,
    );
    yPos += 6;

    // biome-ignore lint/complexity/noForEach: jsPDF iteration
    miningHubPlan.withdrawal.features.forEach((feature) => {
      checkPageBreak(10);
      doc.text(`• ${feature}`, margin + 10, yPos);
      yPos += 6;
    });
    yPos += 5;

    // Income Calculator Example
    checkPageBreak(20);
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, contentWidth, 10, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(miningHubPlan.pdfCopy.incomeCalculatorTitle, margin + 5, yPos + 7);
    yPos += 15;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(
      `${miningHubPlan.pdfCopy.incomeCalculatorLabels.investment} $${miningHubPlan.package.amount}`,
      margin + 5,
      yPos,
    );
    yPos += 6;
    doc.text(
      `${miningHubPlan.pdfCopy.incomeCalculatorLabels.dailyEarning} $${miningHubPlan.package.dailyCredit}`,
      margin + 5,
      yPos,
    );
    yPos += 6;
    doc.text(
      `${miningHubPlan.pdfCopy.incomeCalculatorLabels.monthlyEarning} $${monthlyEarning}`,
      margin + 5,
      yPos,
    );
    yPos += 8;

    addWrappedText(miningHubPlan.pdfCopy.incomeCalculatorNote, 9);
    yPos += 5;

    // Footer
    const totalPages = doc.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text(
        `${miningHubPlan.pdfCopy.footerGenerated} | Page ${i} of ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" },
      );
    }

    return doc.output("blob");
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF. Please try again.");
  }
}
