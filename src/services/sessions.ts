import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });

    return payload;
}

export async function logout() {
    const cookieStore = await cookies();
    // Destroy the session
    cookieStore.delete("@auth_token");
}

export async function getSession() {
    const cookieStore = await cookies();
    const session = cookieStore.get("@auth_token")?.value;
    if (!session) {
        return null;
    }

    return await decrypt(session);
}

export function login() {
    redirect(process.env.URL as string);
}
