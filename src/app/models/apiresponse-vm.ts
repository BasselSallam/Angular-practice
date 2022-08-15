export interface APIResponseVM {
    succes:boolean,
    data: any,
    messegser :string [],
    pageNo?:number,
    totalPages?:number,
    itemsPerPage?:number
}
