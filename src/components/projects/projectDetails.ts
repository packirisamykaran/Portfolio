
type detailType = {
    [key:string]:string
}

export type projectDetailsType = {
    [key:string]: detailType
}

const projectDetails:projectDetailsType = {
    "Sentosa NFT Project":{
        "description":"Built the Front-end for Sentosa NFT project with Next.JS and Sass",
        "project":"https://nft.sentosa.com.sg",
        "github":"https://github.com/packirisamykaran/"
    },
    "Daily Thoughts": {
        "description":"Simple Social Media built with React.js and Firebase",
        "project":"https://packirisamykaran.github.io/daily-thoughts/",
        "github":"https://github.com/packirisamykaran/daily-thoughts"
    },
    "Cheong Machinery Equipment":{
        "description":"I built the corporate website for Cheong Machinery Equipment, a leasing and sales company for construction equipment",
        "project":"https://packirisamykaran.github.io/cheongmachinery.github.io/",
        "github": "https://github.com/packirisamykaran/cheongmachinery.github.io"
    }

}


export default projectDetails;