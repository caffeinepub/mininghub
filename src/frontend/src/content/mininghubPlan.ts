export interface LevelIncome {
  level: number;
  percentage: number;
}

export interface TeamReward {
  teamSize: number;
  monthlyReward: number;
}

export interface CryptoMiningExplainer {
  title: string;
  whatIsMining: {
    title: string;
    content: string;
  };
  howItWorks: {
    title: string;
    points: string[];
  };
}

export interface PdfCopy {
  aboutTitle: string;
  servicesTitle: string;
  benefitsTitle: string;
  packageTitle: string;
  packageLabels: {
    singlePackage: string;
    dailyCredit: string;
    monthlyEarning: string;
  };
  referralTitle: string;
  referralText: string;
  levelIncomeTitle: string;
  levelLabel: string;
  teamRewardsTitle: string;
  teamRewardsLabels: {
    members: string;
    perMonth: string;
  };
  depositWithdrawalTitle: string;
  depositMethodLabel: string;
  withdrawalFeaturesLabel: string;
  incomeCalculatorTitle: string;
  incomeCalculatorLabels: {
    investment: string;
    dailyEarning: string;
    monthlyEarning: string;
  };
  incomeCalculatorNote: string;
  footerGenerated: string;
}

export interface MiningHubPlan {
  name: string;
  tagline: string;
  description: string;
  services: string[];
  benefits: string[];
  package: {
    amount: number;
    dailyCredit: number;
  };
  referral: {
    directReward: number;
  };
  levelIncome: LevelIncome[];
  teamRewards: TeamReward[];
  deposit: {
    method: string;
  };
  withdrawal: {
    features: string[];
  };
  cryptoMiningExplainer: CryptoMiningExplainer;
  pdfCopy: PdfCopy;
}

export const miningHubPlan: MiningHubPlan = {
  name: 'MiningHub',
  tagline: 'ब्लॉकचेन डेवलपमेंट और क्रिप्टो माइनिंग प्लेटफॉर्म',
  description:
    'MiningHub एक ब्लॉकचेन-आधारित प्लेटफॉर्म है जो उन्नत ब्लॉकचेन विकास, क्रिप्टो माइनिंग समाधान और एक सुरक्षित कमाई प्रणाली प्रदान करता है। उपयोगकर्ता माइनिंग, ROI कमाई और रेफरल आय के माध्यम से कमा सकते हैं।',
  services: [
    'उन्नत ब्लॉकचेन तकनीक',
    'सुरक्षित क्रिप्टो माइनिंग सिस्टम',
    'पारदर्शी कमाई पैनल',
    'रेफर करें और कमाएं कार्यक्रम',
  ],
  benefits: [
    'दैनिक कमाई प्रणाली',
    'कम निवेश पैकेज',
    'सुरक्षित USDT BEP20 जमा',
    'तत्काल निकासी',
    'शक्तिशाली रेफरल आय मॉडल',
    'कई आय स्रोत',
  ],
  package: {
    amount: 20,
    dailyCredit: 0.6,
  },
  referral: {
    directReward: 2,
  },
  levelIncome: [
    { level: 1, percentage: 5 },
    { level: 2, percentage: 3 },
    { level: 3, percentage: 1 },
    { level: 4, percentage: 1 },
    { level: 5, percentage: 1 },
  ],
  teamRewards: [
    { teamSize: 100, monthlyReward: 180 },
    { teamSize: 300, monthlyReward: 250 },
    { teamSize: 700, monthlyReward: 300 },
    { teamSize: 1000, monthlyReward: 400 },
    { teamSize: 2000, monthlyReward: 700 },
  ],
  deposit: {
    method: 'USDT BEP20',
  },
  withdrawal: {
    features: [
      'तत्काल निकासी',
      'पूर्ण ट्रैकिंग सिस्टम',
      'सुरक्षित प्रोसेसिंग',
      'पारदर्शी इतिहास',
    ],
  },
  cryptoMiningExplainer: {
    title: 'क्रिप्टो माइनिंग क्या है और यह कैसे काम करती है',
    whatIsMining: {
      title: 'क्रिप्टो माइनिंग क्या है?',
      content:
        'क्रिप्टो माइनिंग एक प्रक्रिया है जिसमें शक्तिशाली कंप्यूटर जटिल गणितीय समस्याओं को हल करते हैं ताकि ब्लॉकचेन नेटवर्क पर लेनदेन को सत्यापित और सुरक्षित किया जा सके। जब माइनर्स इन समस्याओं को सफलतापूर्वक हल करते हैं, तो उन्हें क्रिप्टोकरेंसी के रूप में पुरस्कार मिलता है। यह प्रक्रिया ब्लॉकचेन नेटवर्क की सुरक्षा और विकेंद्रीकरण को बनाए रखने में महत्वपूर्ण भूमिका निभाती है।',
    },
    howItWorks: {
      title: 'यह कैसे काम करती है?',
      points: [
        'लेनदेन सत्यापन: माइनर्स नेटवर्क पर होने वाले लेनदेन को सत्यापित करते हैं और उन्हें ब्लॉक में समूहित करते हैं।',
        'हैशिंग प्रक्रिया: शक्तिशाली कंप्यूटर जटिल क्रिप्टोग्राफिक हैश फंक्शन को हल करने के लिए प्रतिस्पर्धा करते हैं।',
        'ब्लॉक निर्माण: पहला माइनर जो समस्या को हल करता है, वह नया ब्लॉक ब्लॉकचेन में जोड़ता है।',
        'पुरस्कार प्राप्ति: सफल माइनर को नई क्रिप्टोकरेंसी और लेनदेन शुल्क के रूप में पुरस्कार मिलता है।',
        'नेटवर्क सुरक्षा: यह प्रक्रिया नेटवर्क को सुरक्षित और विकेंद्रीकृत रखती है, जिससे कोई भी एक पक्ष नियंत्रण नहीं कर सकता।',
        'ऊर्जा और संसाधन: माइनिंग के लिए विशेष हार्डवेयर (ASIC, GPU) और बिजली की आवश्यकता होती है।',
      ],
    },
  },
  pdfCopy: {
    aboutTitle: 'MiningHub के बारे में',
    servicesTitle: 'हम क्या करते हैं:',
    benefitsTitle: 'MiningHub में क्यों शामिल हों:',
    packageTitle: 'निवेश पैकेज',
    packageLabels: {
      singlePackage: 'एकल पैकेज:',
      dailyCredit: 'दैनिक क्रेडिट:',
      monthlyEarning: 'मासिक कमाई:',
    },
    referralTitle: 'रेफरल सिस्टम',
    referralText: 'प्रत्यक्ष रेफरल पुरस्कार: $',
    levelIncomeTitle: 'लेवल आय (ROI प्रतिशत)',
    levelLabel: 'लेवल',
    teamRewardsTitle: 'टीम पुरस्कार (मासिक)',
    teamRewardsLabels: {
      members: 'सदस्य',
      perMonth: 'प्रति माह',
    },
    depositWithdrawalTitle: 'जमा और निकासी',
    depositMethodLabel: 'जमा विधि:',
    withdrawalFeaturesLabel: 'निकासी सुविधाएं:',
    incomeCalculatorTitle: 'आय कैलकुलेटर उदाहरण',
    incomeCalculatorLabels: {
      investment: 'निवेश:',
      dailyEarning: 'दैनिक कमाई:',
      monthlyEarning: 'मासिक कमाई:',
    },
    incomeCalculatorNote:
      '* टीम पुरस्कार, रेफरल और लेवल आय से अतिरिक्त कमाई आपकी कुल मासिक आय को काफी बढ़ा सकती है।',
    footerGenerated: 'MiningHub निवेश योजना से उत्पन्न',
  },
};
