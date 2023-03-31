import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";
import { m } from "framer-motion";

const getStudents = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const siddefault = '6425de68fd38788230c30f6b';
    const totalLectures = await prisma.attendance.count({
      where: {
        studentId: siddefault,
      }});



    const allStudents = await prisma.user.findMany({
      select: {
        id: true,
        avatar: true,
        name: true,
        rollno: true,
        email: true,
        

      },
      where: {
        role: "user",
      },
    });

    const allStudentsWithAttendance = await Promise.all(
      allStudents.map(async (student) => {  
        const totalPresent = await prisma.attendance.count({
          where: {
            studentId: student.id,
          },
        });
        const percentage = (totalPresent / totalLectures) * 100;
        return {
          ...student,
          totalPresent,
          percentage,
        };
      })
    );
        


    res.status(200).json(allStudentsWithAttendance);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getStudentsByDate = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { startDate, endDate } = req.body;
    console.log(startDate, endDate);
    const students = getStudents(req, res);

    const allStudents = await prisma.attendance.findMany({
      select: {
        id: true,
        subject: true,
        date: true,
        status: true,
        student:{
          select:{
            id:true,
            name:true,
            rollno:true,
            avatar:true,
            email:true
          }
        }
       

      },
      where: {
        date:{
          gte:startDate,
          lte:endDate
        }
      },
      distinct : ['studentId']
      
    });
    
    console.log(allStudents);
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
      getStudents(req, res);
      break;
    case "POST":
      getStudentsByDate(req, res);

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
