import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { loginSchema, registerSchema } from '@/features/auth/schemas';

const app = new Hono()
    .post('/login', zValidator('json', loginSchema), async (c) => {
        const { email, password } = c.req.valid('json');
        console.log({ email, password });
        // const session = await account.createEmailPasswordSession(
        //     email,
        //     password,
        // );

        // setCookie(c, AUTH_COOKIE, session.secret, {
        //     path: '/',
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'strict',
        //     maxAge: 60 * 60 * 24 * 30,
        // });

        return c.json({ success: true });
    })
    .post('/register', zValidator('json', registerSchema), async (c) => {
        const { name, email, password } = c.req.valid('json');
        console.log({ name, email, password });
        // const session = await account.createEmailPasswordSession(
        //     email,
        //     password,
        // );

        // setCookie(c, AUTH_COOKIE, session.secret, {
        //     path: '/',
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'strict',
        //     maxAge: 60 * 60 * 24 * 30,
        // });

        return c.json({ success: true });
    });

export default app;
