import React, { useState } from 'react';
import { Tab, Tabs, AppBar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BookIcon from '@material-ui/icons/Book';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { useTheme } from '@material-ui/core/styles';
import useWebAnimations, { heartBeat } from '@wellyshen/use-web-animations';

function Header() {
    const [ selectedTab, setSelectedTab ] = useState(0);

    const animation1 = useWebAnimations({ ...heartBeat });
    const animation2 = useWebAnimations({ ...heartBeat });
    const animation3 = useWebAnimations({ ...heartBeat });
    const animation4 = useWebAnimations({ ...heartBeat });
   
    const theme = useTheme();

    return (
        <AppBar
            position="fixed"
            id="header"
            style={theme.palette.type === "dark" ? { backgroundColor: "#fff", color: "#000" } : { backgroundColor: "#000", color: "#fff" }}
            elevation={0}
            className={theme.palette.type === "dark" ? "shade1" : "shade2"}
        >
            <div
                style={{
                   display: "flex",
                   alignItems: "center"
                }}
            >
                <span
                    className="logobox"
                    style={{
                       flex: 1,
                       display: "flex",
                       alignItems: "center",
                       paddingLeft: "1.8rem"
                    }}
                >
                    <span className="name"> WEBSITE </span>
                </span>

                <Tabs
                    className="tabs"
                    value={selectedTab} 
                    onChange={(e, newValue) => { setSelectedTab(newValue) }}
                >
                    <Tab
                        className="tab"
                        label={<Typography className="label"> Home </Typography>}
                        icon={<HomeIcon/>}
                        ref={animation1.ref}
                        onMouseOver={ () => animation1.getAnimation().play() }
                    />
                    <Tab
                        className="tab"
                        label={<Typography className="label"> About </Typography>}
                        icon={<ImportContactsIcon/>}
                        ref={animation2.ref}
                        onMouseOver={ () => animation2.getAnimation().play() }
                    />
                    <Tab
                        className="tab"
                        label={<Typography className="label"> Blog </Typography>}
                        icon={<BookIcon/>}
                        ref={animation3.ref}
                        onMouseOver={ () => animation3.getAnimation().play() }
                    />
                    <Tab
                        className="tab"
                        label={<Typography className="label"> Contact </Typography>}
                        icon={<PermContactCalendarIcon/>}
                        ref={animation4.ref}
                        onMouseOver={ () => animation4.getAnimation().play() }
                    />
                </Tabs>
            </div>
        </AppBar>
    )
}

export default Header;