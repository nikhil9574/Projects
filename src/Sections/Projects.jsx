import React, {useState} from 'react'

const  images =[
    'src/assets/contact.png',
    'src/assets/img1.jpeg'

]

export const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };


    return (
        <div>
            <div className={'shareTech text-center text-black italic text-5xl pt-7'}>
                Projects
            </div>

            <div className={'p-8'}>
                <div className={'flex flex-col justify-evenly'}>
                    <div className={'flex flex-row justify-evenly p-2'}>
                        <div className={'text-center'}>
                            <h3>Project 1</h3>
                            <p>description of project...</p>
                        </div>
                        <div className={'text-center'}>
                            <img src="src/assets/img1.jpeg" alt="project1" className={'w-[580px] h-[499px] rounded-2xl'}/>
                        </div>
                    </div>

                    <div className={'flex flex-row justify-evenly p-2'}>
                        <div className={'text-center'}>
                            <h3>Project 2</h3>
                            <p>description of project...</p>
                        </div>
                        <div className={'text-center'}>
                            <img src="src/assets/img1.jpeg" alt="project1" className={'w-[580px] h-[499px] rounded-2xl'}/>
                        </div>
                    </div>

                    <div className={'flex flex-row justify-evenly p-2'}>
                        <div className={'text-center'}>
                            <h3>Project 3</h3>
                            <p>description of project...</p>
                        </div>
                        <div className={'text-center'}>
                            <img src="src/assets/img1.jpeg" alt="project1" className={'w-[580px] h-[499px] rounded-2xl'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
