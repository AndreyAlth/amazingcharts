import React from 'react'
import IconPlus from '@/components/Icon/IconPlus'

function NewClient({ setStartClient }) {

    const createClient = async () => {
        setStartClient(true)
    }


    return (
        <div className={`h-full gap-5 sm:h-[calc(100vh_-_150px)] sm:min-h-0 min-h-[999px]`}>
            <div className="panel flex-1 p-0">
                <div className="flex flex-col items-center justify-center py-8">
                    <img src="/assets/images/create-company.svg" alt="create company logo" />

                    <p className="mx-auto flex max-w-[190px] justify-center rounded-md">
                        <button className="btn btn-primary w-full" onClick={createClient}>
                            <IconPlus className="ltr:mr-2 rtl:ml-2 shrink-0" />
                            Create company
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewClient
