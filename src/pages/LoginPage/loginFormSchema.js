import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty("Email é obrigatório"),
    password: z.string().nonempty("Senha é obrigatória"),
});