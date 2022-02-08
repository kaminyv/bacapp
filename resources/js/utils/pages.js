export const getPage = (totalWorkshop, per_page) => {
    return Math.ceil(totalWorkshop / per_page)
}
export const getPagesArray = (totalPage) => {
    let resultPage=[]
    for (let i = 0; i < totalPage; i++) {
        resultPage.push(i + 1)
    }
    return resultPage
}
