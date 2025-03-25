import React, { useState } from 'react';

function ProjectForm() {
    const [formData, setFormData] = useState({
        category: '',
        class: '',
        inputdata: '',
        medium: '',
        author: '',
        file: null, // File should be null initially
        supervisor: '',
        title: '',
        subtitle: '',
        des: '',
        abstract: '',
        keyword: ''
    });

    // Handle text input and select changes
    let handleData = (a) => {
        const { name, value } = a.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle file input change
    let fileUpload = (a) => {
        let selectedFile = a.target.files[0]; // Fix the typo (files instead of file)
        if (selectedFile) {
            setFormData((prev) => ({
                ...prev,
                file: selectedFile
            }));
            console.log("File selected:", selectedFile.name);
        }
    };

    // Handle form submission
    let submitHandle = (a) => {
        a.preventDefault();

        // Display formData in console (For debugging)
        console.log("Form Data Submitted:", formData);

        // We can now process the file or send it to the backend
        if (!formData.file) {
            alert("Please upload a file before submitting.");
            return;
        }
    };

    return (
        <div className='container-lg pb'>
            <h3 className='text-center'>Project Report Form</h3>
            <fieldset>
                <form onSubmit={submitHandle} encType="multipart/form-data">
                    <div className='d-flex gap-5 py-3'>
                        {/* Category Dropdown */}
                        <select className='btn btn-secondary w' name="category" onChange={handleData}>
                            <option value="">Category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Cyber Security">Cyber Security</option>
                        </select>

                        {/* Class Dropdown */}
                        <select className='btn btn-secondary w' name="class" onChange={handleData}>
                            <option value="">Class</option>
                            <option value="BSc IT">BSc IT</option>
                            <option value="BCA">BCA</option>
                            <option value="MSc IT">MSc IT</option>
                        </select>
                    </div>

                    {/* Input Date */}
                    <input type="text" placeholder='Input Date' className='w1' name='inputdata' onChange={handleData} />
                    <br /><br />

                    {/* Medium Dropdown */}
                    <select name="medium" className='btn btn-secondary w' onChange={handleData}>
                        <option value="">Medium</option>
                        <option value="English">English</option>
                        <option value="Nepali">Nepali</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                    <br /><br />

                    {/* Author & File Upload */}
                    <div className='d-flex gap-3'>
                        <input type="text" name="author" placeholder='Author' className='w1 text-center' onChange={handleData} />
                        <input type="file" name="file" className="form-control" onChange={fileUpload} />
                    </div>
                    <br />

                    {/* Supervisor */}
                    <input type="text" placeholder='Supervisor' className='w1 text-center' name='supervisor' onChange={handleData} />
                    <br /><br />

                    {/* Title, Subtitle, Description */}
                    <input type="text" name="title" placeholder='Title' className='title text-start m-2' onChange={handleData} />
                    <br />
                    <input type="text" name="subtitle" placeholder='Subtitle' className='title text-start m-2' onChange={handleData} />
                    <input type="text" name="des" placeholder='Short Description' className='title text-start m-2' onChange={handleData} />
                    <br />

                    {/* Abstract */}
                    <label htmlFor="abstract" className='fw-bold'>Abstract</label>
                    <br />
                    <input type="text" name="abstract" className='title' onChange={handleData} />
                    <br /><br />

                    {/* Keyword */}
                    <input type="text" className='key' placeholder='Keyword' name='keyword' onChange={handleData} />
                    <br /><br />

                    {/* Submit Button */}
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>

                {/* Display Selected File */}
                {formData.file && (
                    <div>
                        <p>Selected File: {formData.file.name}</p>
                    </div>
                )}
            </fieldset>
        </div>
    );
}

export default ProjectForm;
