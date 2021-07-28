import express, { Request, Response, Router } from 'express';
import {UserModel} from '../models/user_schema';
import {IUser, IUserModel}from '../types/user_interface'

const router: Router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const allUsers: IUser[] = await UserModel.find()
    res.status(200).send(allUsers)
  } catch (err) {
    console.warn(err)
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser: IUser = await UserModel.create(req.body)
    res.status(200).send(newUser)
  } catch (err) {
    console.warn(err)
  }
})

router.put('/', async (req: Request, res: Response) => {
  const { id, body } = req.body
  try {
    const updatedUser: IUser = await UserModel.findOneAndUpdate(id, body)
    res.status(200).send('User Updated!')
  } catch (err) {
    console.warn(err)
  }
})

router.delete('/', async (req: Request, res: Response) => {
  const {id} = req.query
  try {
    const deletedUser: IUser = await UserModel.findOneAndDelete({ id })
    res.status(200).send('User Deleted :(')
  } catch (err) {
    console.warn(err)
  }
})

export default router;