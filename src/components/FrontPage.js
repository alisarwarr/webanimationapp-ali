import React from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';   //animated cursor
import { Card, CardContent, Typography, Paper } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useWebAnimations, { fadeInDown, fadeInUp, backInLeft, pulse, backInDown } from '@wellyshen/use-web-animations';
import { facebook, instagram, whatsapp, twitter, viber, skype } from '../images';
import classnames from 'classnames';

function FrontPage({ darkMode, setDarkMode }) {
   const animation1 = useWebAnimations({ ...fadeInDown, timing: { duration: 2400, iterations: Infinity } });
   const animation2 = useWebAnimations({ ...fadeInUp,   timing: { duration: 2400, iterations: Infinity } });
   const animation3 = useWebAnimations({ ...fadeInDown, timing: { duration: 2400, iterations: Infinity } });
   const animation4 = useWebAnimations({ ...fadeInUp,   timing: { duration: 2400, iterations: Infinity } });
   const animation5 = useWebAnimations({ ...fadeInDown, timing: { duration: 2400, iterations: Infinity } });
   const animation6 = useWebAnimations({ ...fadeInUp,   timing: { duration: 2400, iterations: Infinity } });

   const cardAnimation = useWebAnimations({ ...backInLeft });
   const textAnimation = useWebAnimations({ ...pulse,   timing: { duration: 6000, iterations: Infinity }});
   const imgsAnimation = useWebAnimations({ ...backInDown });

   return (
      <Paper className="frontpage" square>
         <Card className="card" ref={cardAnimation.ref}>
            <CardContent className="text" ref={textAnimation.ref}>
               <Typed
                  strings={[
                     `We're here to help you <br/> <strong>outrank the competition.</strong>`,
                     `We're here to help you <br/> <strong>create badass content.</strong>`,
                     `We're here to help you <br/> <strong>close more deals.</strong>`,
                     `We're here to help you <br/> <strong>grow your bussiness.</strong>`,
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
               />
            </CardContent>
         </Card>      

         <div ref={imgsAnimation.ref} className="apps">
            <figure>
               <img
                  src={facebook}
                  alt=""
                  className="appPic"
                  ref={animation1.ref}
               />
            </figure>

            <figure>
               <img
                  src={instagram}
                  alt=""
                  className="appPic"
                  ref={animation2.ref}
               />
            </figure>

            <figure>
               <img
                  src={whatsapp}
                  alt=""
                  className="appPic"
                  ref={animation3.ref}
               />
            </figure>
            
            <figure>
               <img
                  src={twitter}
                  alt=""
                  className="appPic"
                  ref={animation4.ref}
               />
            </figure>

            <figure>
               <img
                  src={viber}
                  alt=""
                  className={classnames("appPic", "hide960")}
                  ref={animation5.ref}
               />
            </figure>
   
            <figure>
               <img
                  src={skype}
                  alt=""
                  className={classnames("appPic", "hide960")}
                  ref={animation6.ref}
               />
            </figure>
         </div>


         <FormControlLabel
            control={darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
            onClick={() => setDarkMode(x => !x)}
            label={<Typography className="theme"> Theme </Typography>}
            labelPlacement="end"
            className="darkkey"
            fontSize="small"
         />
      </Paper>
   )
}

export default FrontPage;