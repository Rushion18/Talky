import { v4 } from "uuid";
import mssql from "mssql";
import { sqlConfig } from "../config/sqlConfig";
import Connection from "../services/dbConnect";
import { Request, Response } from "express";

const dbhelper = new Connection();

export const createPost = async (req: Request, res: Response) => {
  try {
    const id = v4();

    const { post_id, post_description, post_image } = req.body;

    dbhelper.execute("createpost", {
      post_id: id,
      post_description,
      post_image,
    });

    return res.status(200).json({
      message: "Post created successfully",
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};