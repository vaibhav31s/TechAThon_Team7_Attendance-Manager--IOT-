
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getattendance = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { rollno, email, avatar } = req.body;
        console.log(rollno);
        const startDate = new Date('1917-01-01');
        const endDate = new Date('2022-01-31');
        const attendance = await prisma.user.findMany({
            select: {
                id: true,
            },
            where: {
                rollno: rollno,
            }
        });
        let respo = [];
        for(let i=0;i<attendance.length;i++){
            const attendance1 = await prisma.attendance.findMany({
                select: {
                    subject: true,
                    status: true,
                    date: true,
                },
                where: {
                    studentId: attendance[i].id,
                }
            });
            respo.push(attendance1);
           
        }
        // console.log(respo);

        res.status(200).json(respo);
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
  