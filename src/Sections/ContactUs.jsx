import React, {Suspense, useState} from 'react'
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Robot} from "../Componenets/Robot.jsx";
import {Canvas} from "@react-three/fiber";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all fields.');
            return;
        }

        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');

        // Clear the form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }} >

            <div className={'p-2'}>
                <label>Name:</label>
                <input
                    className={'bg-[#D9D9D9] rounded '}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                />
            </div>

            <div className={'p-2'}>
                <label>Email:</label>
                <input
                    className={'bg-[#D9D9D9] rounded '}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                />
            </div>

            <div className={'p-2'}>
                <label>Message:</label>
                <textarea
                    className={'bg-[#D9D9D9] rounded '}
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                />
            </div>

            <button type="submit" style={{ padding: '10px 20px' }} className={'text-white bg-[#FF4D4D] rounded-3xl p-2 hover:bg-[#D9D9D9] hover:text-black'}>
                Submit
            </button>
        </form>
    );
}


export const ContactUs = () => {
    return (
        <div>

            <div className={'shareTech text-5xl text-black text-center italic mt-5 mb-8'}>Contact Us</div>

            <div className={'flex flex-row justify-center'}>
                <div className={'bg-[#898989] p-8 mr-2 rounded-2xl '}>
                    <ContactForm />
                </div>


                <div>
                    <img src="src/assets/contact.png" alt="robot" className={'w-[500px] h-[500px] rounded-2xl'}/>
                </div>

            </div>
        </div>
    )
}
