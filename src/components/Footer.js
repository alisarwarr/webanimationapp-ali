import React from 'react';
import Typed from 'react-typed';
import { animateScroll } from 'react-scroll'; 
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useWebAnimations, { fadeOut } from '@wellyshen/use-web-animations';
import classnames from 'classnames';

function Footer() {
    const logoAnimation = useWebAnimations({ 
        keyframes: [
            { transform: 'rotate(90deg)' },
            { transform: 'rotate(180deg)' },
        ],
        timing: {
            duration: 1000,
            iterations: Infinity,
            direction: 'alternate'
        }
    });
    const backtotopAnimation = useWebAnimations({ ...fadeOut, timing: { duration: 1000, iterations: Infinity } });

    const theme = useTheme();

    return (
        <>
            <footer id="footer" className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <svg ref={logoAnimation.ref} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                        <small className="d-block mb-3 text-muted" href="#">
                            <Typed loop typeSpeed={40} backSpeed={50} strings={['<b>© 2020 - 2021</b>']}/>
                        </small>
                    </div>
    
                    <div className={classnames("col-6 col-md", "hideon215")}>
                        <ScrollAnimation animateIn="bounce" animateOut="bounce">
                           <h5> <b> Features </b> </h5>
                        </ScrollAnimation>
                        <ul className="list-unstyled text-small">
                           <li><a className="text-muted"> Cool stuff    </a></li>
                           <li><a className="text-muted"> Random feature</a></li>
                           <li><a className="text-muted"> Team feature  </a></li>
                           <li><a className="text-muted"> Developers    </a></li>
                        </ul>
                    </div>
    
                    <div className={classnames("col-6 col-md", "hideon215")}>
                        <ScrollAnimation animateIn="bounce" animateOut="bounce">
                           <h5> <b> Resources </b> </h5>
                        </ScrollAnimation>
                        <ul className="list-unstyled text-small">
                           <li><a className="text-muted"> Resource        </a></li>
                           <li><a className="text-muted"> Resource name   </a></li>
                           <li><a className="text-muted"> Another resource</a></li>
                           <li><a className="text-muted"> Final resource  </a></li>
                        </ul>
                    </div>
    
                    <div className="col-6 col-md">
                        <ScrollAnimation animateIn="bounce" animateOut="bounce">
                           <h5> <b> Business </b> </h5>
                        </ScrollAnimation>
                        <ul className="list-unstyled text-small">
                           <li><a className="text-muted"> Business  </a></li>
                           <li><a className="text-muted"> Education </a></li>
                           <li><a className="text-muted"> Government</a></li>
                           <li><a className="text-muted"> Gaming    </a></li>
                        </ul>
                    </div>
    
                    <div className="col-6 col-md">
                        <ScrollAnimation animateIn="bounce" animateOut="bounce">
                            <h5> <b> About </b> </h5>
                        </ScrollAnimation>
                        <ul className="list-unstyled text-small">
                           <li><a className="text-muted"> Team     </a></li>
                           <li><a className="text-muted"> Locations</a></li>
                           <li><a className="text-muted"> Privacy  </a></li>
                           <li><a className="text-muted"> Terms    </a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            
            <nav
                id="navbar"
                className="navbar navbar-expand-sm"
                style={theme.palette.type === "dark" ? { backgroundColor: "#C8C8C8" } : { backgroundColor: "#000" }}
            >
                <span
                    className="navbar-brand"
                    ref={backtotopAnimation.ref}
                >
                    <Link
                        onClick={() => { animateScroll.scrollToTop() }}
                        style={theme.palette.type === "dark" ? { color: "#000" } : { color: "#fff" }}
                    > back to top
                    </Link>
                </span>
            </nav>
        </>
    )
}

export default Footer;