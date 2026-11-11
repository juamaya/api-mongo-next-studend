
"use client";

import React, { useState, useEffect } from "react";
import Form from "@/components/Form";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const uri = "/api/student";

const Edit = () => {
    const { id } = useParams();
    const router = useRouter();

    const [formValues, setFormValues] = useState(null);
    const [loading, setLoading] = useState(true);

    // OBTENER ESTUDIANTE
    useEffect(() => {
        const getStudent = async () => {
            try {
                const response = await fetch(`${uri}/${id}`);

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "No se encontró el estudiante");
                }

                setFormValues(data.data);

            } catch (error) {
                Swal.fire({
                    title: "¡Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonColor: "#DC2626",
                }).then(() => {
                    router.push("/");
                });

            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getStudent();
        }
    }, [id, router]);

    // ACTUALIZAR ESTUDIANTE
    const onSubmitEdit = async (formData) => {
        try {
            const response = await fetch(`${uri}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error al actualizar estudiante");
            }

            await Swal.fire({
                title: "¡Estudiante actualizado!",
                text: "Los datos se han actualizado correctamente.",
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

    // LOADING
    if (loading) {
        return (
            <div className="mt-32 text-center text-slate-600">
                Cargando estudiante...
            </div>
        );
    }

    return (
        <div className="mt-24 px-4">
            <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
                Edit Student
            </h1>

            {formValues && (
                <Form
                    formValues={formValues}
                    onSubmitForm={onSubmitEdit}
                />
            )}
        </div>
    );
};

export default Edit;
