import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getNextHour = (date: Date) => {
  const nextHour = new Date(date);
  nextHour.setHours(nextHour.getHours() + 1);
  return nextHour;
};


const getattendance = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { sdate, edate , name, email, avatar } = req.body;
      const startDate = new Date('2000-01-01');
      const endDate = new Date();
      const siddefault = '6425de68fd38788230c30f6b';
    
    //subject wise attendance
    const allStudents = await prisma.attendance.count({
        where: {
            AND: [
                { date: { gte: startDate } },
                { date: { lte: endDate } },
                {subject:'AIDS'}
            ],
            studentId :siddefault
        },
    });

    const countsidattendace = await prisma.attendance.count({
        where: {
            AND: [  
                { date: { gte: startDate } },
                { date: { lte: endDate } },
               
            ], studentId: '6425852ba9e5259a2ed5089a'
          }
        } 
        );
        



        const ans = (countsidattendace / allStudents) * 100;
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
