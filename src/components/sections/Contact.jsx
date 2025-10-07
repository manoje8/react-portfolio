import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useRef} from "react";

const Contact = ({setTitle}) => {
    const contactRef = useRef(null)


    useGSAP(() => {
        ScrollTrigger.create({
            trigger: contactRef.current,
            start: "top top",
            onToggle: (toggle) => setTitle(toggle ? "Contact" : ""),
        })
    },[])

    return (
        <div ref={contactRef} className="contact" id="contact">
            <div className="subtitle">
                <h1>Contact</h1>
            </div>
            <div>
                <p>Please feel free to contact me <mark>manodeepan2001@gmail.com</mark> for any questions or to simply say hi. </p>
            </div>
        </div>
    )
}

export default Contact