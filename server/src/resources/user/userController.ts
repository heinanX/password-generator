import { Request, Response } from "express";
import { readFile, writeFile } from "fs/promises";

interface iItem {
  username: string;
  password: string;
}
// ---- FETCHES ALL USERS AND DISPLAYS THEM IN A LIST
export const getUsers = async (req: Request, res: Response) => {
  try {
    const content = await readFile("./src/database/db_users.json");
    res.status(200).send(content);
  } catch (error) {
    res.status(500).send(`Error fetching JSON: ${error}`);
  }
};

export const getUserID = (req: Request, res: Response) => {
  try {
  } catch (error) {}
};


// ---- COMPARES INCOMING DATA TO OLD DATA AND CREATES NEW USER IF NOT ALREADY IN DB
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const content = await readFile("./src/database/db_users.json", "utf-8");
    const parser = JSON.parse(content);
    if (
      parser.find(
        (item: iItem) =>
          item.password === password && item.username === username
      )
    ) {
      return res.status(200).json(username + " and " + password + " already in database");
    }

    parser.push(req.body);

    const users = JSON.stringify(parser, null, 2);

    await writeFile("./src/database/db_users.json", users);
    res
      .status(201)
      .json(username + " and " + password + "was saved to database");
  } catch (error) {
    res.status(500).send(`Error writing file: ${error}`);
  }
};

export const deleteUser = (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
