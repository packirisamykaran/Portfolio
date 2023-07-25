type detailType = {
    [key: string]: string;
};

export type projectDetailsType = {
    [key: string]: detailType;
};

const projectDetails: projectDetailsType = {
    Kyzzen: {
        description:
            "Kyzzen is a The Ultimate NFT Hub. I'm contributing to the project as a backend developer, working with Golang & AWS",
        project: "https://www.kyzzen.io/",
    },

    "Cryptobengz NFT Project": {
        description:
            "Built the Front-end with React.js with Sass and worked on creating the smart contract to mint the NFTs",
        project: "https://cryptobengz.xyz",
    },

    "Sentosa NFT Project": {
        description:
            "Built the Front-end for Sentosa NFT project with Next.js and Sass",
        project: "https://nft.sentosa.com.sg",
        github: "https://github.com/packirisamykaran/",
    },
    // "Daily Thoughts": {
    //     "description":"Simple Social Media built with React.js and Firebase",
    //     "project":"https://packirisamykaran.github.io/daily-thoughts/",
    //     "github":"https://github.com/packirisamykaran/daily-thoughts"
    // },
    "Cheong Machinery Equipment": {
        description:
            "I built the corporate website for Cheong Machinery Equipment, a leasing and sales company for construction equipment",
        project:
            "https://packirisamykaran.github.io/cheongmachinery.github.io/",
        github: "https://github.com/packirisamykaran/cheongmachinery.github.io",
    },
};

export default projectDetails;
