import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer'

export default class Header extends Component {

    state={
        drawerOpen:false,
        headerShow:false
    }

    toggleDrawer=(value)=>
    {
        this.setState({
            drawerOpen:value
        });

    }

componentDidMount()
{
    window.addEventListener('scroll',this.handleScroll);
}

handleScroll=()=>
{
    if(window.scrollY>0)
    {
        this.setState({
            headerShow:true
        });
    }
    else
    {
        this.setState({
            headerShow:false
        });
    }
}



    render() {
        return (
           <AppBar
           position="fixed"
           style={{
               backgroundColor:this.state.headerShow ? '#1c4b82': 'transparent',
               padding:'10px 0px',
               boxShadow:'none'
           }}
           >

           <Toolbar>
            <div className="header_logo">
            <div className="font_pt header_logo_venue">The Natural Life</div>
            <div className="header_logo_title">Natural and Beauty</div>
            </div>
            <IconButton color="inherit" aria-label="Menu"
            onClick={()=>this.toggleDrawer(true)}
            >
            <MenuIcon />
          </IconButton>
          <SideDrawer
              open={this.state.drawerOpen}
              onClose={(value)=>this.toggleDrawer(value)}
          />
           </Toolbar>
           </AppBar>
    )
}
}

