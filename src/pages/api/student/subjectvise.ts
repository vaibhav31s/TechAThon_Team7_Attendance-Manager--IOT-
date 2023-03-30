import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getNextHour = (date: Date) => {
  const nextHour = new Date(date);
  nextHour.setHours(nextHour.getHours() + 1);
  return nextHour;
};


const getattendance = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { sdate, edate , name, email, avatar,subject, rollno} = req.body;
      const startDate = new Date('2000-01-01');
      const endDate = new Date();
      var nextHour = getNextHour(endDate);
       
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
                {subject:'AIDS'}
            ],
            studentId : '6425852ba9e5259a2ed5089a'
        }
    }
        );

    console.log(countsidattendace/allStudents * 100);

      console.log(countsidattendace);



    //   const allStudents = await prisma.attendance.findMany({
    //     where: {
    //       AND: [
    //         { date: { gte: startDate } },
    //         { date: { lte: endDate } },
            
    //       ],
    //       studentId :'64255f0f96a0213abffae9e0'
         
    //     },
    //     orderBy: {
    //       date: 'asc',
    //     },
    //   });

    //   let countDays = 0;
    //     let countPresent = 0;
    //     let aa = new Set<string>();
    //     allStudents.forEach((student) => {
    //         const date = student.date.toString();
    //         const date1 = date.slice(4, 15).split(' ').join('-');
    //         aa.add(date1);
    //     });
    //     console.log(new Date());
    //     console.log(aa);
        
    //     console.log(aa.size);
    //     const totalDays = aa.size * 4;
    //     allStudents.forEach((student) => {
    //         if (student.status) {
    //             countPresent++;
    //         }
    //     });
    //     const ans = (countPresent / totalDays) * 100;
    //     console.log(ans);
        



    //     res.status(200).json(allStudents);

    res.status(200).json({message:"hello"});
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
