import React from 'react'

function NewClientDangerZone() {
    return (
        <div className="switch">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="panel space-y-5">
                    <h5 className="mb-4 text-lg font-semibold">Purge Cache</h5>
                    <p>
                        Remove the active resource from the cache without waiting for the predetermined cache expiry
                        time.
                    </p>
                    <button className="btn btn-secondary">Clear</button>
                </div>
                <div className="panel space-y-5">
                    <h5 className="mb-4 text-lg font-semibold">Deactivate Account</h5>
                    <p>You will not be able to receive messages, notifications for up to 24 hours.</p>
                    <label className="relative h-6 w-12">
                        <input
                            type="checkbox"
                            className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                            id="custom_switch_checkbox7"
                        />
                        <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                    </label>
                </div>
                <div className="panel space-y-5">
                    <h5 className="mb-4 text-lg font-semibold">Delete Account</h5>
                    <p>Once you delete the account, there is no going back. Please be certain.</p>
                    <button className="btn btn-danger btn-delete-account">Delete my account</button>
                </div>
            </div>
        </div>
    )
}

export default NewClientDangerZone
