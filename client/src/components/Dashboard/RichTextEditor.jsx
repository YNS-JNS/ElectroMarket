import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS

const RichTextEditor = () => {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    return (
        <div className="container mx-auto">
            <div>
                <label className="block text-sm text-gray-700 font-bold">Product Description</label>
                <ReactQuill
                    value={description}
                    onChange={handleDescriptionChange}
                    modules={modules}
                    formats={formats}
                    placeholder="Enter product description..."
                    className="mt-2 bg-white rounded border border-gray-300 shadow-sm"
                />
            </div>
            {/* <div className="mt-4">
                <button
                    onClick={() => console.log(description)}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Submit
                </button>
            </div> */}
        </div>
    );
};

// Configuration options for React Quill
const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ['link', 'image'],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ['clean'], // Remove formatting
    ],
};

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image',
    'color', 'background',
    'align',
];

export default RichTextEditor;
