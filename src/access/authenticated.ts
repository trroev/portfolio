import type { Access } from "payload";

export const authenticated: Access = ({ req }) => Boolean(req.user);
