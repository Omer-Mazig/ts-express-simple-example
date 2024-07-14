import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    // getting users from the database
    res.json({ message: "Get all users" });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // getting user from the database
    res.json({ message: `Get a user ${id}` });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};
