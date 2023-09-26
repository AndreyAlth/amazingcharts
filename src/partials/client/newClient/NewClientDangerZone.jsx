import React from 'react'

function NewClientDangerZone() {
    return (
        <div className="switch">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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
