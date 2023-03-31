import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getNextHour = (date: Date) => {
  const nextHour = new Date(date);
  nextHour.setHours(nextHour.getHours() + 1);
  return nextHour;
};

const getNextDay = (date: Date) => {
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay;
};

const getattendance = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { rollno, email, avatar } = req.body;


      const startDate = new Date('2000-01-01');
      const endDate = getNextDay(new Date());
      console.log("Start Date ", endDate);
      const siddefault = '6425de68fd38788230c30f6b';
      
      // console.log("Roll " , rollno);

    //subject wise attendance
    const allLecures = await prisma.attendance.count({
        where: {
            AND: [
                { date: { gte: startDate } },
                { date: { lte: endDate } },
                
            ],
            studentId :siddefault
        },
    });

    const firstLecuresAll = await prisma.attendance.count({
      where: {
        AND: [
            { date: { gte: startDate } },
            { date: { lte: endDate } },
            
        ],
        studentId :siddefault,
        subject: "AIDS",
    },
    });

    const secondTotalLecture = await prisma.attendance.count({
      where: {
        AND: [
            { date: { gte: startDate } },
            { date: { lte: endDate } },
            
        ],
        studentId :siddefault,
        subject: "WT",
    },
    });

    const thirdTotalLecture = await prisma.attendance.count({ 
      where: {
        AND: [
            { date: { gte: startDate } },
            { date: { lte: endDate } },
            
        ],
        studentId :siddefault,
        subject: "DMBI",
    },
    });
    const forthTotalLecture = await prisma.attendance.count({
      where: {
        AND: [
            { date: { gte: startDate } },
            { date: { lte: endDate } },
            
        ],
        studentId :siddefault,
        subject: "WEBX",
    },
    });

    //student wise attendance
    const sid = await prisma.user.findMany({
        select: {
            id: true,
        },
        where: {
            rollno : rollno,
        }
    });

    if(sid.length == 0){
        res.status(200).json({ message: "No student found" });
        return;
      }


      // console.log("Hello ",sid[0].id);
    
    const mytotalLecture = await prisma.attendance.count({
        where: {
          
            AND: [  
                { date: { gte: startDate } },
                { date: { lte: endDate } },
            ], 
            studentId : sid[0].id,

          },
        });


        // console.log("Hello ",mytotalLecture, allLecures);

         const firstTotalPresent = await prisma.attendance.count({
            where: {
              AND: [
                { date: { gte: startDate } },
                { date: { lte: endDate } },
              ],
              studentId: sid[0].id,
              subject: "AIDS",
            },
          });

          
         const secondTotalPresent = await prisma.attendance.count({
          where: {
            AND: [
              { date: { gte: startDate } },
              { date: { lte: endDate } },
            ],
            studentId: sid[0].id,
            subject: "WT",
          },
        });

        const thirdTotalPresent= await prisma.attendance.count({
          where: {
            AND: [
              { date: { gte: startDate } },
              { date: { lte: endDate } },
            ],
            studentId: sid[0].id,
            subject: "DMBI",
          },
        });
        const forthTotalPresent = await prisma.attendance.count({
          where: {
            AND: [
              { date: { gte: startDate } },
              { date: { lte: endDate } },
            ],
            studentId: sid[0].id,
            subject: "WEBX",
          },
        });
          // console.log("Hello ",allLecures, firstLecuresAll, secondTotalLecture, thirdTotalLecture, forthTotalLecture, mytotalLecture, firstTotalPresent, secondTotalPresent, thirdTotalPresent, forthTotalPresent);

          let allpercent = (mytotalLecture/allLecures)*100;
          const firstpercent = (firstTotalPresent/firstLecuresAll)*100;
          const secondpercent = (secondTotalPresent/secondTotalLecture)*100;
          const thirdpercent = (thirdTotalPresent/thirdTotalLecture)*100;
          const forthpercent = (forthTotalPresent/forthTotalLecture)*100;

          allpercent=    allpercent.toFixed(2);
        
            res.status(200).json({ message: "Attendance fetched", allpercent, firstpercent, secondpercent, thirdpercent, forthpercent ,allLecures, firstLecuresAll, secondTotalLecture, thirdTotalLecture, forthTotalLecture, mytotalLecture, firstTotalPresent, secondTotalPresent, thirdTotalPresent, forthTotalPresent});
        
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
        // getattendance(req, res);
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
