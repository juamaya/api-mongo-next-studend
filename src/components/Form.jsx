
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Form = ({ formValues, onSubmitForm }) => {

    const router = useRouter();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        if (formValues) {
            setName(formValues.name || "");
            setAge(formValues.age || "");
        }
    }, [formValues]);

    const btnBack = async () => {
        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "¿Quieres cancelar y salir del formulario?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4F46E5",
            cancelButtonColor: "#64748B",
            confirmButtonText: "Sí, salir",
            cancelButtonText: "Continuar editando",
        });

        if (result.isConfirmed) {
            router.back();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { name, age };

        onSubmitForm(formData);
    };

    return (
        <>
             

            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-10 bg-blue-300 p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-6"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800">
                        Student Form
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">
                        Complete the student information
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">
                        Student name
                    </label>
                    <input
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        type="text"
                        placeholder="Enter student name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">
                        Age
                    </label>
                    <input
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        type="number"
                        placeholder="Enter student age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>

                <div className="flex gap-3 pt-2">
                    <button
                        type="submit"
                        className="flex-1 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                    >
                        {formValues ? "Update" : "Save"}
                    </button>

                    <button
                        onClick={btnBack}
                        type="button"
                        className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 rounded-xl transition duration-300 cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </form>

        </>
    );
};

export default Form;
