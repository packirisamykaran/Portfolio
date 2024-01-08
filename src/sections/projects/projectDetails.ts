type detailType = {
  [key: string]: string;
};

export type projectDetailsType = {
  [key: string]: detailType;
};

const projectDetails: projectDetailsType = {
  "XVA Collective": {
    description: "XVA Collective",
    project: "https://www.xva.asia/",
  },

  Kyzzen: {
    description:
      "Kyzzen is the Ultimate NFT Hub. Contributed to the project as a backend developer, working with Golang & AWS",
    project: "https://www.kyzzen.io/",
  },

  "Cryptobengz NFT Project": {
    description:
      "Built the Front-end with React.js with Sass and smart contract to mint the NFTs",
    project: "https://cryptobengz.xyz",
  },

  "Sentosa NFT Project": {
    description:
      "Built the Front-end for Sentosa NFT project with Next.js and Sass",
    project: "https://nft.sentosa.com.sg",
  },
  web3genlab: {
    description: "Built the Front-end for web3genlab",
    project: "https://web3genlab.com",
  },
  Tradecom: {
    description: "Web hosting migration and maintenance, and UI updates",
    project: "https://tradecom.com.sg/",
  },
  "Cheong Machinery Equipment": {
    description:
      "I built the corporate website for Cheong Machinery Equipment, a leasing and sales company for construction equipment",
    project: "https://packirisamykaran.github.io/cheongmachinery.github.io/",
  },
};

export default projectDetails;
