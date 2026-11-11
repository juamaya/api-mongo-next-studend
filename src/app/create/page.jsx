
"use client";

import Form from "@/components/Form";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const uri = "/api/student";

const Create = () => {
  const router = useRouter();

  const onSubmitCreate = async (formData) => {
    try {
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al crear estudiante");
      }

      await Swal.fire({
        title: "¡Estudiante creado!",
        text: "El estudiante se ha guardado correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#4F46E5",
      });

      router.push("/");

    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#DC2626",
      });
    }
  };

  return (
   
      <div className="mt-24 px-4">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-6 mt-24 ">
          Create Student
        </h1>

      <Form onSubmitForm={onSubmitCreate} />
    </div>
  );
};

export default Create;
