import React from 'react'

function NewClientAddress({setTap}) {
    return (
        <div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="panel col-span-2">
                    <div className="mb-5">
                        <h5 className="mb-4 text-lg font-semibold">Add Your Address</h5>
                    </div>
                    <div className="mb-5">
                        <form>
                            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="billingName">Name</label>
                                    <input
                                        id="billingName"
                                        type="text"
                                        placeholder="Enter Name"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="billingEmail">Email</label>
                                    <input
                                        id="billingEmail"
                                        type="email"
                                        placeholder="Enter Email"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="billingAddress">Address</label>
                                <input
                                    id="billingAddress"
                                    type="text"
                                    placeholder="Enter Address"
                                    className="form-input"
                                />
                            </div>
                            <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                <div className="md:col-span-2">
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
                            <button className="btn btn-primary" onClick={() => setTap('admins')}>
                                Next
                            </button>
                        </form>
                    </div>
                </div>
                {/* <div className="panel">
                    <div className="mb-5">
                        <h5 className="mb-4 text-lg font-semibold">Add Payment Method</h5>
                        <p>
                            Changes your New <span className="text-primary">Payment Method </span>
                            Information.
                        </p>
                    </div>
                    <div className="mb-5">
                        <form>
                            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="payBrand">Card Brand</label>
                                    <select id="payBrand" className="form-select text-white-dark">
                                        <option value="Mastercard">Mastercard</option>
                                        <option value="American Express">American Express</option>
                                        <option value="Visa">Visa</option>
                                        <option value="Discover">Discover</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="payNumber">Card Number</label>
                                    <input
                                        id="payNumber"
                                        type="text"
                                        placeholder="Card Number"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="payHolder">Holder Name</label>
                                    <input
                                        id="payHolder"
                                        type="text"
                                        placeholder="Holder Name"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="payCvv">CVV/CVV2</label>
                                    <input id="payCvv" type="text" placeholder="CVV" className="form-input" />
                                </div>
                            </div>
                            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="payExp">Card Expiry</label>
                                    <input id="payExp" type="text" placeholder="Card Expiry" className="form-input" />
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary">
                                Add
                            </button>
                        </form>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default NewClientAddress
