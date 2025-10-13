import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

const Loader = ({setIsLoading}) => {
    useGSAP(() => {
        setIsLoading(true);
        const header = SplitText.create(".loader-header", {
            type:"words,chars",
            mask: "chars",
            charsClass: "text:2xl md:text-[120px] ",
        })

        const desc = SplitText.create(".loader-desc", {
            type:"words, chars, lines",
            mask: "words",
            wordsClass: "text:md md:text-[50px] text-center"
        })

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(".loader", {
                    autoAlpha: 0,
                    duration: 0.5,
                    onComplete: () => {
                        document.querySelector(".loader").style.display = "none";
                        setIsLoading(false);
                    },
                });
            },
        });


        tl.from(header.chars, {
            filter: "blur(10px)",
            scale: 0.95,
            ease: "power2.inOut",
            duration: 1.2,
            stagger: {
                each: 0.2,
                from: "random"
            },
            scrambleText: {
                text: "X",
                speed: 0.5
            },
            rotation: -15,
        })
        tl.from(desc.words, {
            filter: "blur(10px)",
            y: "-80",
            scale: 0.95,
            ease: "power2.inOut",
            duration: 0.5,
            stagger: {
                each: 0.125,
                from: "random"
            },
        })

    },[setIsLoading]);


    return (
        <section className="absolute top-0 left-0 w-full h-full min-h-screen loader bg-gray-800 z-10000 overflow-hidden overscroll-none">
            <div className="flex flex-col justify-center items-center h-full">
                <h2 className="sm:text-xl md:text-3xl loader-header">Mano Deepan</h2>
                <h2 className="text-sm md:text-md loader-desc">Passionate developer crafting efficient and scalable applications</h2>
            </div>
        </section>
    )
}

export default Loader;