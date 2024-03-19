import Project_banner from "@/components/project-banner";
import Project_block from "@/components/projects/project-block";

export default function Projects() {

    const projects = [
        {
            category: "Web Dev",
            projectName: "Eduno - Empower Yourself with Eduno",
            projectDetails: "Eduno is a cutting-edge platform that offers a wide range of technical education courses, including Python programming, web development, Android app development, and more. The platform is designed to provide an engaging and interactive learning experience for students of all levels, from beginners to advanced learners.",
            projectOwner: "Balaji Rai",
            projectOwnerPost: "CEO of Eduno",
            projectView: "1.2k",
            projectComment: "6",
            projectLink: "https://www.eduno.in/"
        },
        {
            category: "Web Dev",
            projectName: "Campus Threads - Elegance in every Stich",
            projectDetails: "Express Yourself with Exclusive Designs - Elevate Your Wardrobe with Campus Threads' Extraordinary Collection of Unique and Stylish Apparel. Elevate Your Style, Unearth Unique Tees: Dive into Campus Threads' Exclusive Collection and Showcase Your Individuality with Every Wear.",
            projectOwner: "Pradhyuman Shegal",
            projectOwnerPost: "Founder of Campus Threads",
            projectView: "2.5k",
            projectComment: "123",
            projectLink:"https://www.campusthreads.in/"
        }
    ]

    return (
        <>
            <div className="pt-24 flex flex-col justify-center items-center">
                <h2 className="relative text-center text-3xl md:text-4xl font-bold mt-10 flex md:flex-row flex-col justify-center items-center underline">Our Registered Projects</h2>
                <div className="container md:px-24">
                    <section className="text-white body-font overflow-hidden">
                        <div className="container px-6 md:px-24 py-4 md:py-20 mx-auto">
                            <div className="flex flex-wrap -m-12">
                                {
                                    projects.map((project, index)=>(
                                        <Project_block projectData={project} key={index}/>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
                <Project_banner />
            </div>
        </>
    )
}