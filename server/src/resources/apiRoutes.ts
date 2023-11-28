import { Router } from "express";
import { createUser, deleteUser, getUserID, getUsers } from "./user/userController";
import { createData, deleteData, getData, getSingleDataID } from "./data/dataController";

export const apiRoutes = Router();

// ---- ROUTES FOR FETCHING USER DATA
apiRoutes.get('/users', getUsers);
apiRoutes.get('/users/:id', getUserID);
apiRoutes.post('/users/create', createUser);
apiRoutes.post('/users/delete/:id', deleteUser);


// ---- ROUTES FOR FETCHING PASSWORD DATA
apiRoutes.get('/data', getData);
apiRoutes.get('/data/:id', getSingleDataID);
apiRoutes.post('/data/create', createData);
apiRoutes.post('/data/delete/:id', deleteData);