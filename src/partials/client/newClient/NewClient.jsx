import React, { useState } from 'react'
import IconPlus from '@/components/Icon/IconPlus'
import IconLoading from '@/components/Icon/IconLoading'
import { create_empty_client } from '@/requests/client'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'

function NewClient({ setStartClient }) {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(false)
    const createClient = async () => {
        setLoading(true)
        const resp = await create_empty_client({ user_id: session?.user?.user_id })
        if (resp?.status === 200) {
            toast.success('Correo enviado', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            setStartClient(true)
            setLoading(false)
        }

        if (resp?.response?.status === 404) {
            toast.error('No se pudo crear el cliente', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            setLoading(false)
        }
    }

    return (
        <div className={`h-full gap-5 sm:h-[calc(100vh_-_150px)] sm:min-h-0 min-h-[999px]`}>
            <div className="panel flex-1 p-0">
                <div className="flex flex-col items-center justify-center py-8">
                    <img src="/assets/images/create-company.svg" alt="create company logo" />

                    <p className="mx-auto flex max-w-[190px] justify-center rounded-md">
                        <button className="btn btn-primary w-full gap-2" onClick={createClient}>
                            {loading ? (
                                <>
                                    <IconLoading />
                                    Cargando...
                                </>
                            ) : (
                                <>
                                    <IconPlus />
                                    Create company
                                </>
                            )}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewClient
