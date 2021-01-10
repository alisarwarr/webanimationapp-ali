import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTheme } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Hidden } from '@material-ui/core';
import useWebAnimations, { backInLeft, backInRight } from '@wellyshen/use-web-animations';
import { office, social, world, women } from '../images';
import ScrollPosition from '../ScrollPosition.js';

function MiddlePage() {
    const [ oneCardAnimate, setOneCardAnimate ] = useState({ fire: true, flag: false });
    const [ twoCardAnimate, setTwoCardAnimate ] = useState({ fire: true, flag: false });
    const [ threeCardAnimate, setThreeCardAnimate ] = useState({ fire: true, flag: false });
    const [ fourCardAnimate, setFourCardAnimate ] = useState({ fire: true, flag: false });

    const oneCardAnimation = useWebAnimations({ ...backInLeft });
    const twoCardAnimation = useWebAnimations({ ...backInRight });
    const threeCardAnimation = useWebAnimations({ ...backInLeft });
    const fourCardAnimation = useWebAnimations({ ...backInRight });

/* use for error free*/ console.log(ScrollPosition());
//  one Card
    if(ScrollPosition() > 215 && oneCardAnimate.fire) {
        (() => { setOneCardAnimate({ fire: false, flag: true }); oneCardAnimation.getAnimation().play(); })()
    }
    else if(ScrollPosition() < 215 && oneCardAnimate.flag) {
        (() => { setOneCardAnimate({ fire: true, flag: false }); oneCardAnimation.getAnimation().pause(); })()
    }
//  two card
    if(ScrollPosition() > 570 && twoCardAnimate.fire) {
        (() => { setTwoCardAnimate({ fire: false, flag: true }); twoCardAnimation.getAnimation().play(); })()
    }
    else if(ScrollPosition() < 570 && twoCardAnimate.flag) {
        (() => { setTwoCardAnimate({ fire: true, flag: false }); twoCardAnimation.getAnimation().pause(); })()
    }
//  three card
    if(ScrollPosition() > 930 && threeCardAnimate.fire) {
        (() => { setThreeCardAnimate({ fire: false, flag: true }); threeCardAnimation.getAnimation().play(); })()
    }
    else if(ScrollPosition() < 930 && threeCardAnimate.flag) {
        (() => { setThreeCardAnimate({ fire: true, flag: false }); threeCardAnimation.getAnimation().pause(); })()
    }
//  four card
    if(ScrollPosition() > 1335 && fourCardAnimate.fire) {
        (() => { setFourCardAnimate({ fire: false, flag: true }); fourCardAnimation.getAnimation().play(); })()
    }
    else if(ScrollPosition() < 1335 && fourCardAnimate.flag) {
        (() => { setFourCardAnimate({ fire: true, flag: false }); fourCardAnimation.getAnimation().pause(); })()
    }

    const theme = useTheme();

    return (
        <div
            className="middlepage"
            style={theme.palette.type === "dark" ? { backgroundColor: "#fff" } : { backgroundColor: "#000" }}
        >
            <ScrollAnimation animateIn="flipInX" animateOut="flipInX">
                <p 
                   className="middlepage_uppertext"
                   style={theme.palette.type === "dark" ? { color: "#000" } : { color: "#fff" }}
                > our cleint's goals  are our goals </p>

                <p
                   className="middlepage_heading"
                   style={theme.palette.type === "dark" ? { color: 'rgb(19, 19, 155)' } : { color: 'rgb(207, 77, 77)' } }
                > Here's what they have to say! </p>
            </ScrollAnimation>



            <>
                <Card className="card" ref={oneCardAnimation.ref}>
                    <CardContent className="content">
                        <Hidden smUp>   {/* 600 - se upar show nahi hoga */}  {/* qk 600px k baad flex-direction coloum kardia tw pic pehle chahiye */}
                            <CardMedia
                                image={office}
                                className="media"
                            />
                        </Hidden>
                        <Typography
                            className="text"
                            style={theme.palette.type === "dark" ? { color: "#000" } : { color: "#fff" }}
                        >
                            <span> about us </span> <br/>
                            A highly specialized Management team with over 20 combined years
                            of experience in the Healthcare industry with proven ability to
                            optimally combine digital technology, skilled resources and efficient
                            business processes to implement creative as well as proven market
                            solutions to suit an ever-evolving market. Our forte has been to
                            successfully tailor our solutions to support your needs whether it
                            is in space of Consulting, Product.
                        </Typography>
                        <Hidden only="xs">   {/* 0 - 600 se show nahi hoga */}
                            <CardMedia
                                image={office}
                                className="media"
                            />
                        </Hidden>
                    </CardContent>
                </Card>
    
                <Card className="card" ref={twoCardAnimation.ref}>   
                    <CardContent className="content">
                        <CardMedia
                            image={social}
                            className="media"
                        />
                        <Typography
                            className="text"
                            style={theme.palette.type === "dark" ? { color: "#000" } : { color: "#fff" }}
                        >
                            <span> social access </span> <br/>
                            Social media is computer-based technology that facilitates the sharing
                            of ideas, thoughts, and information through the building of virtual
                            networks and communities. Users engage with social media via computer,
                            tablet or smartphone via web-based software or web application, often
                            utilizing it for messaging. The creation or sharing of information,
                            ideas, career interests and other forms of expression.
                        </Typography>
                    </CardContent>
                </Card>
    
                <Card className="card" ref={threeCardAnimation.ref}>   
                    <CardContent className="content">
                        <Hidden smUp>   {/* 600 - se upar show nahi hoga */}  {/* qk 600px k baad flex-direction coloum kardia tw pic pehle chahiye */}
                            <CardMedia
                                image={world}
                                className="media"
                            />
                        </Hidden>
                        <Typography
                            className="text"
                            style={theme.palette.type === "dark" ? { color: "#000" } : { color: "#fff" }}
                        >
                            <span> our services </span> <br/>
                            Once your website has been designed and launched, we will stick by you
                            with cost-effective maintenance and support programs to keep you always
                            online. We have a range of options to help you deliver support to meet
                            your objectives. Our programmers and engineers are adept at all aspects
                            of Android technology and can develop mobile applications that engage
                            your customers.
                        </Typography>
                        <Hidden only="xs">   {/* 0 - 600 se show nahi hoga */}
                            <CardMedia
                                image={world}
                                className="media"
                            />
                        </Hidden>
                    </CardContent>
                </Card>
    
                <Card className="card" ref={fourCardAnimation.ref}>   
                    <CardContent className="content">
                        <CardMedia
                            image={women}
                            className="media"
                        />
                        <Typography
                            className="text"
                            style={theme.palette.type === "dark" ? { color: "#000" } : { color: "#fff" }}
                        >
                            <span> join us </span> <br/>
                            Work flexibility is important to all of us because it improves
                            our productivity, health, and happiness—and benefits our families,
                            communities, and economy. Embark on an exciting career with us to
                            learn and grow alongside the best in the industry. Contact us and
                            know more about how our experts can help your business grow.
                        </Typography>
                    </CardContent>
                </Card>
            </>


            
            <p
                className="middlepage_innertext"
                style={theme.palette.type === "dark" ? { color: "#000" } : { color: "#fff" }}
            >
                <ScrollAnimation animateIn="flipInY" animateOut="flipInY">
                    are you ready?
                </ScrollAnimation>

                <Hidden only="xs">
                    <ScrollAnimation animateIn="jello" animateOut="jello">
                        <span style={theme.palette.type === "dark" ? { color: 'rgb(19, 19, 155)' } : { color: 'rgb(207, 77, 77)' } }>
                            for successful career join us now and grow alongside the best in the industry!
                        </span>
                    </ScrollAnimation>
                </Hidden>
            </p>            
        </div>
    )
}

export default MiddlePage;