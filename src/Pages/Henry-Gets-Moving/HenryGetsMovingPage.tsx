import {motion} from "framer-motion";
import {Helmet, HelmetProvider} from "react-helmet-async";

function HenryGetsMovingPage() {
    return (
        <motion.div className='contact-me' initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0, x: -100}} transition={{duration: 0.5}} >
            <HelmetProvider>
                <Helmet>
                    <title>Henry Gets Moving</title>
                </Helmet>
            </HelmetProvider>
        </motion.div>
    )
}

export default HenryGetsMovingPage;