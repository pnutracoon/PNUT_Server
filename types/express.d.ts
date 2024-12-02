import "express";

declare global {
  namespace Express {
    interface Request {
      session: {
        nonce?: string;
        siwe?: any;
        cookie?: { expires: Date };
      };
    }
  }
}
