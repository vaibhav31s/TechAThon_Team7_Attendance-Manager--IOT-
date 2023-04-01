import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";


const getattendance = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { name, email, avatar } = req.body;
      const startDate = new Date('2001-01-01');
      const endDate = new Date('2022-12-31');
      const allStudents = await prisma.user.count({
        where: {
            role: 'user',
        },
        });

    const allAttendance = await prisma.attendance.count({
        where: {
            AND: [
                { date: { gte: startDate } },
                { date: { lte: endDate } },
              ]
        },
    });

    const allsub = await prisma.attendance.groupBy({
        by: ['subject'],
        
    });
    const countAllsub = allsub.length;
    




        res.status(200).json({allStudents, allAttendance, countAllsub});
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
        getattendance(req, res);
      break;
    case "POST":
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
