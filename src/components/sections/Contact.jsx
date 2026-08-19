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
            Feel free to reach out for collaborations or just a friendly hello. I'll get back to you
            as soon as possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-sm text-white mb-1">Email</p>
              <a
                href="mailto:manodeepan2001@gmail.com"
                className="text-white hover:text-blue-600 transition-colors text-lg"
              >
                manodeepan2001@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-white mb-1">Phone</p>
              <span className="text-white hover:text-green-600 transition-colors text-md">
                +91 6383059012
              </span>
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

        <section className="contact-element mt-12"></section>

        <div className="flex justify-center space-x-8">
          {[
            {
              icon: "mdi:linkedin",
              href: "https://www.linkedin.com/in/mano-deepan-b-392361208",
              color: "hover:text-blue-700",
            },
            {
              icon: "mdi:github",
              href: "https://github.com/manoje8",
              color: "hover:text-gray-800",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
            >
              <Icon icon={social.icon} height={40} width={40} />
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
