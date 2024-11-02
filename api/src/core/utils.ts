export const validateBody = (body: any, ...inputArray: string[]): boolean => {
    return inputArray.reduce((acc: boolean, val: string) => {
        if(acc && body[val] != undefined) return true;
        else return false;
    },true)
}