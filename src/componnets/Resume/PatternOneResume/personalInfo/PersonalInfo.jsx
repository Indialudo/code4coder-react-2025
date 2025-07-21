import React from 'react'

const PersonalInfo = ({ handleFormChange }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 all-form-heading">Let’s start with your header</h2>
            <p className=" mt-2 all-form-sub-title">
                Include your full name and multiple ways for employers to reach you.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
                <input
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleFormChange}
                    className="input border p-2 input-resume-border"
                />
                <input
                    name="jobTitle"
                    placeholder="Job Title input-resume-border"
                    onChange={handleFormChange}
                    className="input border p-2 input-resume-border"
                />
                <input
                    name="contact"
                    placeholder="Contact Number"
                    onChange={handleFormChange}
                    className="input border p-2 input-resume-border"
                />
                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleFormChange}
                    className="input border p-2 input-resume-border"
                />
                <input
                    name="linkedIn"
                    placeholder="LinkedIn URL (Optional)"
                    onChange={handleFormChange}
                    className="input border p-2 input-resume-border"
                />
            </div>
        </div>
    )
}

export default PersonalInfo