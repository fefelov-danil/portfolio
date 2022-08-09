export const blockAnimation = {
    hidden: {
        y: 40,
        opacity: 0,
    },
    visible: (custom: number = 0) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: custom * 0.2
        }
    })
}
export const blockAnimationRotate = {
    hidden: {
        opacity: 0.3,
        transform: 'skew(-6deg, 0deg)',
    },
    visible: {
        opacity: 1,
        transform: 'skew(-18deg, 0deg)',
        transition: {
            duration: 0.6,
            ease: "easeOut",
        }
    }
}
export const textAnimation = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: (custom: number = 0) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: custom * 0.2
        }
    })
}