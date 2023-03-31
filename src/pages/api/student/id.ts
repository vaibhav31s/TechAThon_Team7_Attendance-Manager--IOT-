
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getattendance = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id, email, avatar } = req.body;
        console.log(id);
        const startDate = new Date('1917-01-01');
        const endDate = new Date('2022-01-31');
        const attendance = await prisma.user.findFirst({
            select: {
                id: true,
                
                    attendance: {
                        select: {
                            subject: true,
                            status: true,
                            date: true,
                        },
                    },
                name: true,
                avatar: true,
                email: true,
                rollno: true,

                
            },
            where: {
                id: id,
            }
        });
      
        
        console.log(attendance);

        res.status(200).json(attendance);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const method = req.method;
    switch (method) {
      case "GET":
          
        break;
      case "POST":
        getattendance(req, res);
        break;
      case "PATCH":
        break;
      case "DELETE":
        break;
      default:
        res.status(500).json({ message: "Method not allowed" });
        break;
    }
  }
  