import Link from "next/link";
import BtnDelete from "./BtnDelete";

import { connectDB } from "@/app/lib/dbConnect";
import { StudentModel } from "@/app/models/Student";


const getData = async () => {
    try {
        const response = await fetch(process.env.URI, { cache: "no-store" });
        return response.json();
    } catch (error) {
        console.log("Error:", error)
    }
};

// const {data} = await getData()
// console.log(data)

const Show = async () => {
    const { data } = await getData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((element) => (
                <div key={element._id} className="p-3 bg-indigo-300 rounded-2xl shadow-lg  shadow-indigo-500/50 my-4 flex justify-between">
                    <div>
                        <p>ID: {element._id}</p>
                        <h2 className="font-bold text-2xl text-slate-700 mr-15">Name: {element.name}</h2>
                        <p className="font-bold text-xl text-slate-700">Age: {element.age}</p>
                    </div>

                    {/* BOTONES DE ACCIONES*/}
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Link href={`/edit/${element._id}`} className="inline-flex items-center px-4 py-2 font-medium text-center rounded-2xl bg-violet-400 hover:bg-violet-500">Update</Link>
                       
                        <BtnDelete id={element._id} />

                    </div>

                </div>
            ))}
        </div>
    );
};

export default Show;