import React, { useState } from "react";

function Projectlist() {
    let [projectlist, setProject] = useState([]); // Store selected projects
    let [category, setCategory] = useState(""); // Store selected category
    let [classtype, setClassType] = useState(""); // Store selected class

    const categoryChange = (a) => setCategory(a.target.value);
    const classChange = (a) => setClassType(a.target.value);

    const formSubmit = (a) => {
        a.preventDefault();
        if (category && classtype) {
            const newProject = {
                id: projectlist.length + 1, // Assign an ID
                title: category,
                author: "John Doe", // Static author for now
                classType: classtype,
            };
            setProject([...projectlist, newProject]); // Append new project to the list
        }
    };

    return (
        <div className="container pb">
            <h3 className="fw-bold">Project Report List</h3>

            {/* Dropdowns for selecting category and class */}
            <div className="dropdown-section m-3">
                <select className="dropdown btn btn-secondary" onChange={categoryChange}>
                    <option value="">Category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Cyber Security">Cyber Security</option>
                </select>

                <select className="dropdown btn btn-secondary" onChange={classChange}>
                    <option value="">Class</option>
                    <option value="BSc IT">BSc IT</option>
                    <option value="BCA">BCA</option>
                    <option value="MSc IT">MSc IT</option>
                </select>
            </div>

            {/* Table to display selected values */}
            <table className="table border">
                <thead>
                    <tr>
                        <th style={{ width: "50px" }} className="border">ID</th>
                        <th style={{ width: "500px" }} className="border">Title</th>
                        <th style={{ width: "150px" }} className="border">Author</th>
                        <th style={{ width: "120px" }} className="border">Class</th>
                        <th style={{ width: "100px" }} className="border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projectlist.length > 0 ? (
                        projectlist.map((project) => (
                            <tr key={project.id}>
                                <td className="text-center border">{project.id}</td>
                                <td className="text-center border">{project.title}</td>
                                <td className="text-center border">{project.author}</td>
                                <td className="text-center border">{project.classType}</td>
                                <td className="text-center border">
                                    <a href="#" className="text-decoration-none">View</a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center border">No Projects Added</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Submit Button */}
            <button className="btn btn-primary" onClick={formSubmit}>Submit</button>
        </div>
    );
}

export default Projectlist;
