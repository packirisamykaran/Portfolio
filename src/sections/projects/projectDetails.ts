type detailType = {
  [key: string]: string;
};

export type projectDetailsType = {
  [key: string]: detailType;
};

const projectDetails: projectDetailsType = {
  "XVA Collective": {
    description:
      "Crafted a sleek and secure React.js & Firebase frontend for XVA Token pre-sale, enabling seamless token purchases and transparent data access.",
    project: "https://www.xva.asia/",
  },

  Kyzzen: {
    description:
      "Architected robust Golang & AWS data pipelines and serverless infrastructure for Kyzzen, powering smooth NFT tracking and optimized performance.      ",
    project: "https://www.kyzzen.io/",
  },

  "Cryptobengz NFT Project": {
    description:
      "Built a user-friendly React.js front-end with integrated minting/payments, co-developed secure NFT smart contracts, and automated data tasks for CRYPTOBENGZ.",
    project: "https://cryptobengz.xyz",
  },

  "Sentosa NFT Project": {
    description:
      "Spearheaded the launch of Sentosa's Golden Jubilee NFT Project, building the Next.js web app, minting unique NFTs on Solana, and airdropping them to community members.",
    project: "https://nft.sentosa.com.sg",
  },
  web3genlab: {
    description: "Built the Front-end for web3genlab",
    project: "https://web3genlab.com",
  },
  Tradecom: {
    description:
      "Successfully migrated Tradecom's website to a more efficient and secure hosting platform, ensuring optimal performance and uptime. Handling their website maintenance and UI changes.",
    project: "https://tradecom.com.sg/",
  },
  "Cheong Machinery Equipment": {
    description:
      "Rebuilt client's Wordpress website with HTML, CSS & Javascript",
    project: "https://packirisamykaran.github.io/cheongmachinery.github.io/",
  },
};

export default projectDetails;
