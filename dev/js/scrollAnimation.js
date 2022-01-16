import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// export function homeworkOne(){
//     console.log("this is working here too!");
// }

export function skillsTrigger(){
    const tl = new gsap.timeline();

    tl.from(".new-cars", {duration: 3, scaleY: 0, transformOrigin: "top center"});
}