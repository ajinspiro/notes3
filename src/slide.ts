import { gsap } from "gsap"

export default function slide(isDebug: boolean) {
    let reject: (reason?: any) => void;
    let resolve: (value: void | PromiseLike<void>) => void;
    let promise = new Promise<void>((r, rr) => {
        reject = rr; resolve = r;
    });
    let tl = gsap.timeline();

    tl
        .from('h1', { duration: 1, x: 20, opacity: 0 })
        .eventCallback('onComplete', () => {
            setTimeout(() => { tl.reverse() }, 200)
        })
        .eventCallback('onReverseComplete', () => resolve())
    return promise;
}