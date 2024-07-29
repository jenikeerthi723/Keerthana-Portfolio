import AboutImg from '../assets/about.png';
// import AboutImg from "../assets/Aboutimg.avif";

export default function About() {
    const config = {
        line1: 'Hi, my name is Gopi Keerthana. I am a Front-End web developer with 2.7 years of experience in building beautiful and responsive websites using React.js, Tailwind CSS, and Bootstrap.',
        line2: 'I am proficient in frontend skills like React.js,React Native,Redux, Redux Toolkit, Axios, Tailwind CSS, SaSS, CSS3, and many more.',
        line3: 'In backend, I have knowledge of Node.js.',
        line4: 'I have worked on several banking projects, developing secure and efficient web interfaces, ensuring high standards of data protection and performance.'
    };

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt='Gopi Keerthana'/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                    <p className='pb-5'>{config.line4}</p>
                </div>
            </div>
        </section>
    );
}
