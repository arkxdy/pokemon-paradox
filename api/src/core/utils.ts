export const validateBody = (body: any, ...inputArray: string[]): boolean => {
    inputArray.reduce((acc: boolean, val: string) => {
        if(acc && body[val] != undefined) return true;
        else return false;
    },true)
    return false;
}