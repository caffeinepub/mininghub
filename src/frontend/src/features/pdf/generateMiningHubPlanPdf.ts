import { miningHubPlan } from '@/content/mininghubPlan';
import { calculateMonthlyIncome } from '@/features/calculator/incomeCalculator';
import { loadPdfImageAssets } from './loadPdfImageAssets';

declare global {
  interface Window {
    jspdf: {
      jsPDF: new (orientation?: string, unit?: string, format?: string) => JsPDFDocument;
    };
  }
}

interface JsPDFDocument {
  text(text: string | string[], x: number, y: number, options?: { maxWidth?: number }): void;
  setFontSize(size: number): void;
  setFont(fontName: string, fontStyle?: string): void;
  setTextColor(r: number, g: number, b: number): void;
  setDrawColor(r: number, g: number, b: number): void;
  setFillColor(r: number, g: number, b: number): void;
  addImage(
    imageData: string,
    format: string,
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
  addPage(): void;
  rect(x: number, y: number, width: number, height: number, style?: string): void;
  line(x1: number, y1: number, x2: number, y2: number): void;
  output(type: string): Blob;
  internal: {
    pageSize: {
      getWidth(): number;
      getHeight(): number;
    };
  };
}

export async function generateMiningHubPlanPdf(): Promise<Blob> {
  // Check if jsPDF is loaded
  if (!window.jspdf || !window.jspdf.jsPDF) {
    throw new Error('jsPDF library not loaded. Please refresh the page and try again.');
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;

  let yPos = margin;

  // Load images
  let images: { cryptoMiningImage: string; blockchainDevImage: string } | null = null;
  try {
    images = await loadPdfImageAssets();
  } catch (error) {
    console.warn('Failed to load images, continuing without them:', error);
  }

  // Helper function to add new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // Title
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 139, 34); // Forest green
  doc.text(miningHubPlan.name, margin, yPos);
  yPos += 10;

  // Tagline
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(miningHubPlan.tagline, margin, yPos);
  yPos += 15;

  // Add crypto mining image if available
  if (images?.cryptoMiningImage) {
    checkPageBreak(60);
    try {
      doc.addImage(images.cryptoMiningImage, 'PNG', margin, yPos, contentWidth, 50);
      yPos += 55;
    } catch (error) {
      console.warn('Failed to add crypto mining image:', error);
    }
  }

  // About Section
  checkPageBreak(40);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.aboutTitle, margin, yPos);
  yPos += 8;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  const descLines = doc.text(miningHubPlan.description, margin, yPos, { maxWidth: contentWidth }) as any;
  yPos += 20;

  // Services
  checkPageBreak(30);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.servicesTitle, margin, yPos);
  yPos += 7;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  miningHubPlan.services.forEach((service) => {
    checkPageBreak(7);
    doc.setTextColor(34, 139, 34);
    doc.text('•', margin + 2, yPos);
    doc.setTextColor(60, 60, 60);
    doc.text(service, margin + 7, yPos);
    yPos += 6;
  });
  yPos += 5;

  // Benefits
  checkPageBreak(30);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.benefitsTitle, margin, yPos);
  yPos += 7;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  miningHubPlan.benefits.forEach((benefit) => {
    checkPageBreak(7);
    doc.setTextColor(34, 139, 34);
    doc.text('•', margin + 2, yPos);
    doc.setTextColor(60, 60, 60);
    doc.text(benefit, margin + 7, yPos);
    yPos += 6;
  });
  yPos += 10;

  // Add blockchain dev image if available
  if (images?.blockchainDevImage) {
    checkPageBreak(60);
    try {
      doc.addImage(images.blockchainDevImage, 'PNG', margin, yPos, contentWidth, 50);
      yPos += 55;
    } catch (error) {
      console.warn('Failed to add blockchain dev image:', error);
    }
  }

  // Crypto Mining Explainer Section
  checkPageBreak(80);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 139, 34);
  doc.text(miningHubPlan.cryptoMiningExplainer.title, margin, yPos);
  yPos += 10;

  // What is Mining
  checkPageBreak(40);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.cryptoMiningExplainer.whatIsMining.title, margin, yPos);
  yPos += 7;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  const miningDescLines = doc.text(
    miningHubPlan.cryptoMiningExplainer.whatIsMining.content,
    margin,
    yPos,
    { maxWidth: contentWidth }
  ) as any;
  yPos += 25;

  // How it Works
  checkPageBreak(50);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.cryptoMiningExplainer.howItWorks.title, margin, yPos);
  yPos += 7;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  miningHubPlan.cryptoMiningExplainer.howItWorks.points.forEach((point) => {
    checkPageBreak(10);
    doc.setTextColor(34, 139, 34);
    doc.text('•', margin + 2, yPos);
    doc.setTextColor(60, 60, 60);
    const pointLines = doc.text(point, margin + 7, yPos, { maxWidth: contentWidth - 10 }) as any;
    yPos += 7;
  });
  yPos += 10;

  // Investment Package
  checkPageBreak(50);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.packageTitle, margin, yPos);
  yPos += 10;

  // Package box
  doc.setFillColor(240, 248, 255);
  doc.rect(margin, yPos, contentWidth, 30, 'F');
  doc.setDrawColor(34, 139, 34);
  doc.rect(margin, yPos, contentWidth, 30);

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.packageLabels.singlePackage, margin + 5, yPos + 8);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 139, 34);
  doc.text(`$${miningHubPlan.package.amount}`, margin + 5, yPos + 18);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.packageLabels.dailyCredit, margin + 70, yPos + 8);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 139, 34);
  doc.text(`$${miningHubPlan.package.dailyCredit}`, margin + 70, yPos + 18);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.packageLabels.monthlyEarning, margin + 130, yPos + 8);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 139, 34);
  doc.text(`$${calculateMonthlyIncome(miningHubPlan.package.dailyCredit)}`, margin + 130, yPos + 18);

  yPos += 40;

  // Referral System
  checkPageBreak(40);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.referralTitle, margin, yPos);
  yPos += 10;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text(
    `${miningHubPlan.pdfCopy.referralText}${miningHubPlan.referral.directReward}`,
    margin,
    yPos
  );
  yPos += 15;

  // Level Income
  checkPageBreak(50);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.levelIncomeTitle, margin, yPos);
  yPos += 10;

  // Level income table
  const levelBoxWidth = 30;
  const levelBoxHeight = 20;
  let xPos = margin;

  miningHubPlan.levelIncome.forEach((level, idx) => {
    if (xPos + levelBoxWidth > pageWidth - margin) {
      xPos = margin;
      yPos += levelBoxHeight + 5;
      checkPageBreak(levelBoxHeight + 5);
    }

    doc.setFillColor(245, 245, 245);
    doc.rect(xPos, yPos, levelBoxWidth, levelBoxHeight, 'F');
    doc.setDrawColor(200, 200, 200);
    doc.rect(xPos, yPos, levelBoxWidth, levelBoxHeight);

    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(
      `${miningHubPlan.pdfCopy.levelLabel} ${level.level}`,
      xPos + levelBoxWidth / 2,
      yPos + 7,
      { maxWidth: levelBoxWidth - 4 } as any
    );

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(34, 139, 34);
    doc.text(`${level.percentage}%`, xPos + levelBoxWidth / 2, yPos + 15, {
      maxWidth: levelBoxWidth - 4,
    } as any);

    xPos += levelBoxWidth + 5;
  });

  yPos += levelBoxHeight + 15;

  // Team Rewards
  checkPageBreak(80);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.teamRewardsTitle, margin, yPos);
  yPos += 10;

  // Team rewards table
  miningHubPlan.teamRewards.forEach((reward) => {
    checkPageBreak(12);
    doc.setFillColor(250, 250, 250);
    doc.rect(margin, yPos, contentWidth, 10, 'F');
    doc.setDrawColor(220, 220, 220);
    doc.rect(margin, yPos, contentWidth, 10);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text(
      `${reward.teamSize} ${miningHubPlan.pdfCopy.teamRewardsLabels.members}`,
      margin + 5,
      yPos + 6.5
    );

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(34, 139, 34);
    doc.text(
      `$${reward.monthlyReward} ${miningHubPlan.pdfCopy.teamRewardsLabels.perMonth}`,
      pageWidth - margin - 50,
      yPos + 6.5
    );

    yPos += 12;
  });

  yPos += 10;

  // Deposit & Withdrawal
  checkPageBreak(40);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.depositWithdrawalTitle, margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(miningHubPlan.pdfCopy.depositMethodLabel, margin, yPos);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text(miningHubPlan.deposit.method, margin + 40, yPos);
  yPos += 10;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.withdrawalFeaturesLabel, margin, yPos);
  yPos += 7;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  miningHubPlan.withdrawal.features.forEach((feature) => {
    checkPageBreak(7);
    doc.setTextColor(34, 139, 34);
    doc.text('•', margin + 2, yPos);
    doc.setTextColor(60, 60, 60);
    doc.text(feature, margin + 7, yPos);
    yPos += 6;
  });

  yPos += 10;

  // Income Calculator
  checkPageBreak(50);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(miningHubPlan.pdfCopy.incomeCalculatorTitle, margin, yPos);
  yPos += 10;

  doc.setFillColor(255, 250, 240);
  doc.rect(margin, yPos, contentWidth, 35, 'F');
  doc.setDrawColor(34, 139, 34);
  doc.rect(margin, yPos, contentWidth, 35);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text(
    `${miningHubPlan.pdfCopy.incomeCalculatorLabels.investment} $${miningHubPlan.package.amount}`,
    margin + 5,
    yPos + 8
  );
  doc.text(
    `${miningHubPlan.pdfCopy.incomeCalculatorLabels.dailyEarning} $${miningHubPlan.package.dailyCredit}`,
    margin + 5,
    yPos + 16
  );
  doc.text(
    `${miningHubPlan.pdfCopy.incomeCalculatorLabels.monthlyEarning} $${calculateMonthlyIncome(miningHubPlan.package.dailyCredit)}`,
    margin + 5,
    yPos + 24
  );

  yPos += 40;

  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(miningHubPlan.pdfCopy.incomeCalculatorNote, margin, yPos, { maxWidth: contentWidth });

  // Footer
  yPos = pageHeight - 15;
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text(`© ${new Date().getFullYear()} ${miningHubPlan.name}. All rights reserved.`, margin, yPos);
  doc.text(miningHubPlan.pdfCopy.footerGenerated, pageWidth - margin - 60, yPos);

  return doc.output('blob');
}
