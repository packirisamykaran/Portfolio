
type detailType = {
    [key:string]:string
}

export type projectDetailsType = {
    [key:string]: detailType
}

const projectDetails:projectDetailsType = {

    "Daily Thoughts": {
        "description":"Social Media App built with React.js and Firebase",
        "project":"https://packirisamykaran.github.io/daily-thoughts/",
        "github":"https://github.com/packirisamykaran/daily-thoughts"
    },
    "Cheong Machinery Equipment":{
        "description":"Cheong Machinery Equipment is a one-stop hub in the areas of sales, rental, servicing and maintenance of construction machinery, equipment and spare parts industry.",
        "project":"https://packirisamykaran.github.io/cheongmachinery.github.io/",
        "github": "https://github.com/packirisamykaran/cheongmachinery.github.io"
    }

}


export default projectDetails;