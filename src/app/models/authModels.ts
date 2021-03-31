import { IUser } from "./group";

export interface SimpleClaim {
  type: string;
  value: string;
}

export class AuthContext {
  claims?: SimpleClaim[];
  userProfile?: IUser;
}
