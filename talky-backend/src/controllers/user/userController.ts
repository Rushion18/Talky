import mssql from "mssql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sqlConfig } from "../../config/sqlConfig";

import { v4 } from "uuid";
import { Request, response, Response } from "express";


// import {
//   validateLoginUser,
//   validateRegisterUser,
// } from "../validators/userValidator";
// import Connection from "../services/dbConnect";
// import { ExtendedUser } from "../middleware/verifyToken";
