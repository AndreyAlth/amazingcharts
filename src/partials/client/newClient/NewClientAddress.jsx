import React from 'react'

function NewClientAddress({}) {
    return (
        <div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="panel col-span-2">
                    <div className="mb-5">
                        <h5 className="mb-4 text-lg font-semibold">Add Your Address</h5>
                    </div>
                    <div className="mb-5">
                        <form>
                            <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                <div className="md:col-span-2">
                                <label htmlFor="billingAddress">Address</label>
                                <input
                                    id="billingAddress"
                                    type="text"
                                    placeholder="Enter Address"
                                    className="form-input"
                                />
                                </div><div className="md:col-span-2">
                                    <label htmlFor="billingCity">City</label>
                                    <input
                                        id="billingCity"
                                        type="text"
                                        placeholder="Enter City"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="billingState">State</label>
                                    <select id="billingState" className="form-select text-white-dark">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="billingZip">Zip</label>
                                    <input id="billingZip" type="text" placeholder="Enter Zip" className="form-input" />
                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={() => console.log('saved')}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewClientAddress
