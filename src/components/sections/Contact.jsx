import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ setTitle }) => {
    const contactRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-element", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 85%",
                },
            });

            ScrollTrigger.create({
                trigger: contactRef.current,
                start: "top center",
                onEnter: () => setTitle("Contact"),
                onLeaveBack: () => setTitle(""),
            });
        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={contactRef} id="contact" className="contact py-24 text-white">
            <div className="px-6">
                <div className="contact-element rounded-2xl p-8 ">
                    <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
                    <p className="text-white mb-6 leading-relaxed">
                        Feel free to reach out for collaborations or just a friendly hello.
                        I'll get back to you as soon as possible.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <p className="text-sm text-white mb-1">Email</p>
                            <a
                                href="mailto:xxxxx@gmail.com"
                                className="text-white hover:text-blue-600 transition-colors text-lg font-medium"
                            >
                                xxxxx@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-sm text-white mb-1">Phone</p>
                            <a
                                href="tel:+919876543210"
                                className="text-gray-800 hover:text-green-600 transition-colors text-lg font-medium"
                            >
                                +91 98765 43210
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-white hover:text-blue-600 transition-colors">
                            <Icon icon="mdi:clock-outline" className="text-lg" />
                            <span className="text-sm">Response time: Within 24 hours</span>
                        </div>
                        <div className="flex items-center space-x-3 text-white hover:text-green-600 transition-colors">
                            <Icon icon="mdi:calendar-check" className="text-lg" />
                            <span className="text-sm">Available for freelance projects</span>
                        </div>
                    </div>
                </div>

                <section className="contact-element mt-12">

                </section>

                <div className="flex justify-center space-x-8">
                    {[
                        { icon: "mdi:linkedin", href: "https://linkedin.com/in/yourusername", color: "hover:text-blue-700" },
                        { icon: "mdi:github", href: "https://github.com/yourusername", color: "hover:text-gray-800" },
                        { icon: "mdi:twitter", href: "https://twitter.com/yourusername", color: "hover:text-sky-500" },
                        { icon: "mdi:instagram", href: "https://instagram.com/yourusername", color: "hover:text-pink-600" },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                        >
                            <Icon icon={social.icon} className="text-2xl" />
                        </a>
                    ))}
                </div>

                <div className="contact-element text-center mt-12">
                    <p className="text-white text-sm">
                        © {new Date().getFullYear()} All rights reserved. Crafted with passion.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;