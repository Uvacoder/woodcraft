import { useLocomotiveScroll } from "react-locomotive-scroll";


export const UseLocoScroll = () => {

    const { scroll } = useLocomotiveScroll();

    const scrollToLocation = (location) => {
        scroll.scrollTo(location)
    }

    return {
        scrollToLocation,
    }
}