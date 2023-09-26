import React from 'react'

function newClientAdmin() {
  return (
    <div className="switch">
                        <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                            <div className="panel space-y-5">
                                <h5 className="mb-4 text-lg font-semibold">Choose Theme</h5>
                                <div className="flex justify-around">
                                    <div className="flex">
                                        <label className="inline-flex cursor-pointer">
                                            <input
                                                className="form-radio cursor-pointer ltr:mr-4 rtl:ml-4"
                                                type="radio"
                                                name="flexRadioDefault"
                                                defaultChecked
                                            />
                                            <span>
                                                <img
                                                    className="ms-3"
                                                    width="100"
                                                    height="68"
                                                    alt="settings-dark"
                                                    src="/assets/images/settings-light.svg"
                                                />
                                            </span>
                                        </label>
                                    </div>

                                    <label className="inline-flex cursor-pointer">
                                        <input
                                            className="form-radio cursor-pointer ltr:mr-4 rtl:ml-4"
                                            type="radio"
                                            name="flexRadioDefault"
                                        />
                                        <span>
                                            <img
                                                className="ms-3"
                                                width="100"
                                                height="68"
                                                alt="settings-light"
                                                src="/assets/images/settings-dark.svg"
                                            />
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="mb-4 text-lg font-semibold">Activity data</h5>
                                <p>Download your Summary, Task and Payment History Data</p>
                                <button type="button" className="btn btn-primary">
                                    Download Data
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            <div className="panel space-y-5">
                                <h5 className="mb-4 text-lg font-semibold">Public Profile</h5>
                                <p>
                                    Your <span className="text-primary">Profile</span> will be visible to anyone on the
                                    network.
                                </p>
                                <label className="relative h-6 w-12">
                                    <input
                                        type="checkbox"
                                        className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                                        id="custom_switch_checkbox1"
                                    />
                                    <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="mb-4 text-lg font-semibold">Show my email</h5>
                                <p>
                                    Your <span className="text-primary">Email</span> will be visible to anyone on the
                                    network.
                                </p>
                                <label className="relative h-6 w-12">
                                    <input
                                        type="checkbox"
                                        className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                                        id="custom_switch_checkbox2"
                                    />
                                    <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="mb-4 text-lg font-semibold">Enable keyboard shortcuts</h5>
                                <p>
                                    When enabled, press <span className="text-primary">ctrl</span> for help
                                </p>
                                <label className="relative h-6 w-12">
                                    <input
                                        type="checkbox"
                                        className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                                        id="custom_switch_checkbox3"
                                    />
                                    <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="mb-4 text-lg font-semibold">Hide left navigation</h5>
                                <p>
                                    Sidebar will be <span className="text-primary">hidden</span> by default
                                </p>
                                <label className="relative h-6 w-12">
                                    <input
                                        type="checkbox"
                                        className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                                        id="custom_switch_checkbox4"
                                    />
                                    <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="mb-4 text-lg font-semibold">Advertisements</h5>
                                <p>
                                    Display <span className="text-primary">Ads</span> on your dashboard
                                </p>
                                <label className="relative h-6 w-12">
                                    <input
                                        type="checkbox"
                                        className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                                        id="custom_switch_checkbox5"
                                    />
                                    <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="mb-4 text-lg font-semibold">Social Profile</h5>
                                <p>
                                    Enable your <span className="text-primary">social</span> profiles on this network
                                </p>
                                <label className="relative h-6 w-12">
                                    <input
                                        type="checkbox"
                                        className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                                        id="custom_switch_checkbox6"
                                    />
                                    <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                                </label>
                            </div>
                        </div>
                    </div>
  )
}

export default newClientAdmin