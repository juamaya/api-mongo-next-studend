"use client"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const BtnDelete = ({ id }) => {

    const router = useRouter()

    const MySwal = withReactContent(Swal)
    const uri = 'http://localhost:3000/api/student'

    const deleteDocument = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await fetch(`${uri}/${id}`, { method: 'DELETE' })
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                if (response.ok) {
                    router.refresh()
                }
            }
            else if (result.dismiss === Swal.DismissReason.cancel)
                /* Read more about handling dismissals below */
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
        });
    }

    return (
        <button
            onClick={deleteDocument}
            className='inline-flex items-center px-4 py-2 text-sm font-medium rounded-2xl cursor-pointer text-white bg-red-400   hover:bg-red-500 focus:ring-2 focus:outline-none'>
            Delete</button>
    )
}

export default BtnDelete