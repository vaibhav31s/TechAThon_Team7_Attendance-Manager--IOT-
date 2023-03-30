import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";


const getattendance = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { name, email, avatar } = req.body;
      const startDate = new Date('2000-01-01');
      const endDate = new Date('2023-03-31');
      const allStudents = await prisma.attendance.findMany({
        where: {
          AND: [
            { date: { gte: startDate } },
            { date: { lte: endDate } },
            
          ],
          studentId :'6419a239df6b1521c178ff25'
         
        },
        orderBy: {
          date: 'asc',
        },
      });

      let countDays = 0;
        let countPresent = 0;
        let aa = new Set<string>();
        allStudents.forEach((student) => {
            const date = student.date.toString();
            const date1 = date.slice(4, 15).split(' ').join('-');
            aa.add(date1);
        });
        const totalDays = aa.size * 3;
        allStudents.forEach((student) => {
            if (student.status) {
                countPresent += 1;
            }
        });
        const ans = (countPresent / totalDays) * 100;
        console.log(ans);
        



        res.status(200).json(allStudents);
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
