import { LoginDTO } from "../dtos/Contactdtos";
import { UserModel } from "../models/Contactformmodel";

export class UserService {
  static async login({ email, password }: LoginDTO) {
    const user = await UserModel.findOne({ email });
    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }
    return user;
  }
}
