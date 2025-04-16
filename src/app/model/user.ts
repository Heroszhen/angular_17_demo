export class User {
    id?:number;
    civility: string |null = null;
    lastname: string|null = null;
    firstname: string|null = null;
    email: string|null = null;
    password:string|null = null;
    roles:string[] = ['ROLE_USER'];
    activated:boolean = false;
}
