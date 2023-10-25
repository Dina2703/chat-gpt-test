
import { NextApiRequest, NextApiResponse } from "next"
import query from "@/util/queryApi"
type Data = {
  answer: string
}


expor default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {prompt, chatId, model, session} = req.body

  if(!prompt) {
    res.status(400).json({answer: "please provide a prompt"})
    return
  }

  if(!chatId) {
    res.status(400).json({answer: "please provide a chat ID"})
    return
  }
  
  //ChatGPT Query
  const response =  await query(prompt, chatId, model)


  res.status(200).json({name: 'John Doe'})
}