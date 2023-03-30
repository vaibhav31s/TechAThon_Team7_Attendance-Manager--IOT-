import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";


const makeAttendance = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { date, status, rollno,  subject} = req.body;
        console.log(date, status, rollno,  subject);

        const datas = rollno.split(',');
        console.log(datas);

        while(datas.length > 0) {
        const sid = await prisma.user.findUnique({
            where: {
                rollno: datas.pop()
            },
            select: {
                id: true
            }
        });
        console.log(sid);
        // make attendance
        //string to date
        const date1 = new Date(date);
        // status to boolean
        const status1 = status === 'present' ? true : false;
         await prisma.attendance.create({
            data: {
                date: date1,
                status: status1,
                student: {
                    connect: {
                        id: sid.id
                    }
                },
                subject : subject
            }
        });
        // console.log(attendance);
    }


       

        res.status(200).json('done');
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
        makeAttendance(req, res);
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
