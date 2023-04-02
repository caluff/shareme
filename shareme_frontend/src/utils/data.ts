export const userQuery = (userId:any)=>{
    return `*[_type == "user"] && _id == ${userId}`;
}