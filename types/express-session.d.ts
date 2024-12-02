import "express-session";

declare module "express-session" {
  interface SessionData {
    nonce?: string;
    siwe?: any;
  }
}

declare module "express" {
  interface Request {
    session: Session & Partial<SessionData>;
  }
}
