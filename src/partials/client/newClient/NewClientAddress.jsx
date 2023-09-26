import React from 'react'

function NewClientAddress() {
    return (
        <div>
            <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="panel">
                    <div className="mb-5">
                        <h5 className="mb-4 text-lg font-semibold">Billing Address</h5>
                        <p>
                            Changes to your <span className="text-primary">Billing</span> information will take effect
                            starting with scheduled payment and will be refelected on your next invoice.
                        </p>
                    </div>
                    <div className="mb-5">
                        <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div className="flex items-start justify-between py-3">
                                <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                    Address #1
                                    <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">
                                        2249 Caynor Circle, New Brunswick, New Jersey
                                    </span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div className="flex items-start justify-between py-3">
                                <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                    Address #2
                                    <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">
                                        4262 Leverton Cove Road, Springfield, Massachusetts
                                    </span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start justify-between py-3">
                                <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                    Address #3
                                    <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">
                                        2692 Berkshire Circle, Knoxville, Tennessee
                                    </span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary">Add Address</button>
                </div>
                <div className="panel">
                    <div className="mb-5">
                        <h5 className="mb-4 text-lg font-semibold">Payment History</h5>
                        <p>
                            Changes to your <span className="text-primary">Payment Method</span> information will take
                            effect starting with scheduled payment and will be refelected on your next invoice.
                        </p>
                    </div>
                    <div className="mb-5">
                        <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div className="flex items-start justify-between py-3">
                                <div className="flex-none ltr:mr-4 rtl:ml-4">
                                    <img src="/assets/images/card-americanexpress.svg" alt="img" />
                                </div>
                                <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                    Mastercard
                                    <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">
                                        XXXX XXXX XXXX 9704
                                    </span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div className="flex items-start justify-between py-3">
                                <div className="flex-none ltr:mr-4 rtl:ml-4">
                                    <img src="/assets/images/card-mastercard.svg" alt="img" />
                                </div>
                                <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                    American Express
                                    <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">
                                        XXXX XXXX XXXX 310
                                    </span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start justify-between py-3">
                                <div className="flex-none ltr:mr-4 rtl:ml-4">
                                    <img src="/assets/images/card-visa.svg" alt="img" />
                                </div>
                                <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                    Visa
                                    <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">
                                        XXXX XXXX XXXX 5264
                                    </span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary">Add Payment Method</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="panel">
                    <div className="mb-5">
                        <h5 className="mb-4 text-lg font-semibold">Add Billing Address</h5>
                        <p>
                            Changes your New <span className="text-primary">Billing</span> Information.
                        </p>
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
                            <button type="button" className="btn btn-primary">
                                Add
                            </button>
                        </form>
                    </div>
                </div>
                <div className="panel">
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
                </div>
            </div>
        </div>
    )
}

export default NewClientAddress
