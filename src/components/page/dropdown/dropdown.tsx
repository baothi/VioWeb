import React, { useState } from 'react'
import './dropdown.scss'
import homeIcon from '../../../assets/images/sp_homeIcon.png'
import {menuData} from '../../../assets/data/menuData'
import { MenuCardType } from '../../../assets/data/menuData'
import { SubMenuType } from '../../../assets/data/menuData'
import down from '../../../assets/images/faq_chevron-down.png'
import right from '../../../assets/images/faq_chevron-right.png'

const Dropdown = () => {
    
    //1st level menu
    const [menuLv1, setMenuLv1] = useState<boolean>(true)
    //2nd level menu
    const [menuLv2, setMenuLv2] = useState<boolean>(false)
    //3rd level menu
    const [menuLv3, setMenuLv3] = useState<boolean>(false)
    //menuKey to keep track of menu states
    const [menuKey1, setMenuKey1] = React.useState(0)
    const [menuKey2, setMenuKey2] = useState(0)

    
    console.log("menuKey1: " + menuKey1)
    console.log("menukey2: " + menuKey2)
    
    const handleSubMenu1Click = (menuCard: MenuCardType) => {
        console.log("menuKey1" ,menuKey1)
        console.log("menuKey2" ,menuKey2)
        console.log("menuLv2:", menuLv2)
        console.log("menuLv3:", menuLv3)
        setMenuLv1(false)
        setMenuLv2(true)
        setMenuLv3(false)
        setMenuKey1(menuCard.id)
        setMenuKey2(0)
       
    }
    const menuCards = menuData

    const handleSubMenu2Click = (key1: number, key2: number) => {
        console.log("key1 in menu2Click", key1)
        console.log("key2 in menu2Click", key2)
        setMenuLv1(false)
        setMenuLv2(false)
        setMenuLv3(true)
        setMenuKey1(key1)
        setMenuKey2(key2)
        
    }
   
    console.log("Inside breadcrumb mn2", menuLv2)
    console.log("Inside breadcrumb mn3", menuLv3)

    const BreadCrumb: React.FC<{ menuCard: MenuCardType }> = ({menuCard}) => {
     
        return (
            <>   
             {menuLv3 && (<div style={{display: "inline-flex", gap: "10px", alignItems: 'center'}}>
             <div style={{display: 'flex', alignItems: 'center'}}><img src={right}/></div>
               <div>{menuCard.title}</div> 
               <div style={{display: 'flex', alignItems: 'center'}}><img src={right}/></div>
               <div style={{fontWeight: "1000"}} className="active-breadcrumb">{menuCard.sub_menu[menuKey2-1].title}</div>
            </div>)   }
            { menuLv2 && (<div onClick={() => {
                setMenuLv1(false)
                setMenuLv2(true)
                setMenuLv3(false)}}
             className="active-breadcrumb" style={{display: "inline-flex",fontWeight: "1000" }}>
                <div  style={{display: 'flex', alignItems: 'center', }}><img src={right}/></div>
                {menuCard.title}
                </div>) }
            </>
        )
    }
    

    const MenuCard: React.FC<{ menuCard: MenuCardType }> = ({ menuCard }) => {
        return (
        <div className="menu-card" key={menuCard.id}>
            <div className="menu-card-title">
                <img src={menuCard.icon} alt={menuCard.title}></img>
                <p style={{cursor: 'pointer'}}
                    onClick={()=> {                    
                        handleSubMenu1Click(menuCard);
                    }}>
                   {menuCard.title}
                </p>              
            </div>
            <div>
                <ul>
                    {menuCard.sub_menu.map((sub_menu) => (
                        <li style={{cursor: 'pointer'}} key={sub_menu.id} onClick={()=>
                            handleSubMenu2Click(menuCard.id, sub_menu.id)
                            // setToggle(true)
                        }>{sub_menu.title}</li>
                        
                    ))}
                </ul>
            </div>
        </div>
    )}

    const SideMenu: React.FC<{ menuCard: MenuCardType}> = ({ menuCard }) => {
       const [toggle, setToggle] = useState<boolean>(false);
       console.log("toggle", toggle)
        return (
            <div className="menu-side" key={menuCard.id}>
            
                <div className={menuKey1 === menuCard.id ? "active-title menu-side-title" : "menu-side-title"}>
                
                    <img src={menuCard.icon} alt={menuCard.title}></img>
                    <p onClick={() => {
                        setToggle(!toggle)
                        
                        }} style={{cursor: 'pointer'}}>{menuCard.title}</p>
                </div>
                <div>
                    <ul>
                    {(toggle || (menuKey1 === menuCard.id)) && menuCard.sub_menu.map((sub_menu) => (
                        <li className={(menuKey2 === sub_menu.id && menuKey1 === menuCard.id)  ? "active-title" : ""} key={sub_menu.id}>
                            <span style={{cursor: "pointer"}} onClick={() => handleSubMenu2Click(menuCard.id, sub_menu.id)}>
                                {sub_menu.title}
                            </span>
                        </li>
                        
                    ))}
                    </ul>
                </div>
        </div>
        )
    }
   

    const MenuLv2: React.FC<{ subMenu: MenuCardType }> = ({ subMenu }) => {
        console.log("subMenu lv2", subMenu);
        // const [showSubMenu, setShowSubMenu] = useState<boolean>(false)
        return (
            <div>
                {subMenu.sub_menu.map((sub_menu) => (
                    <div style={{borderBottom: '1px solid #623275'}}>
                        <div onClick={() => handleSubMenu2Click(subMenu.id, sub_menu.id)} style={{padding: "0 10px",display: 'flex', justifyContent: 'space-between', alignItems:'center', }}>
                            
                            <p style={{fontSize: '24px', fontWeight: '600', borderBottom: '#623275', cursor: 'pointer'}}>{sub_menu.title}</p>
                        <img src={down}/>
                        
                        </div>
                    </div>
                    
                ))}             
            </div>
        )
    }

    const MenuLv3: React.FC<{ subMenu: SubMenuType }> = ({ subMenu }) => {
        console.log("subMenu: ",  subMenu)
        return (
            <div className="menu3-content">
                <p>{subMenu.title}</p>
                <div>
                    <ul>
                        {subMenu.content.map((item) => (
                            <div>
                                <div>
                            {item.subContent.map((subContent) => (                                
                                    <li>{subContent}</li>                                                                                                           
                            ))}
                            </div> 
                            <div className="img-content">
                            {item.img?.map((imgSrc)=> (                                
                                    <ul>
                                        <li><img src={imgSrc}/></li>
                                    </ul>                                
                            ))}
                            </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        )

    }

  return (
    <section className="support_sec">
        <div className='root-menu'>
        {/* set root menu (if true and menuLv2 is false, display menu cards). If clicked, set other menu levels to false */}
            <img src={homeIcon}></img>
            <div onClick={() => {
                // setBreadCrumb(initialBreadCrumb);
                setMenuLv1(true)
                setMenuLv2(false)
                setMenuLv3(false)}}>Vio Support </div>
                {(menuLv2 || menuLv3) && (
                    <BreadCrumb menuCard={menuCards[menuKey1-1]} />
                ) }
              
            {/* {breadcrumb && 
                                
                                    
                                
                            } */}
            
        </div>
        {/* root menu is true and menuLv2 is false, display menu cards with their associated index */}

        {(menuLv1 && !menuLv2) && (
        <div className="menu-card-wrapper">
            {menuCards.map((menuCard)=> (               
                <MenuCard key={menuCard.id} menuCard={menuCard}/>
            ))}
        </div> ) }

        {/* if root menu is true and menu lv2 is true, display:
        - a side menu with menu lv2 attached to a dropdown menu menuLv3
        - a content associated with the active menu */}

        { menuLv3  && (
        <div className='grid-100 sub-menu-wrapper'>
            <div className='grid-70 sub-menu'>
                <MenuLv3 subMenu={menuCards[menuKey1-1].sub_menu[menuKey2-1]}/>                
            </div>

            <div className='grid-25 side-menu' >
                {menuCards.map((menuCard)=> (
                    <SideMenu key={menuCard.id} menuCard={menuCard}/>
                    ))}
            </div>
        </div>
        
        )}

        {menuLv2 && (  
        //  second check to see if menu lv2 or menu lv3 is active. if menu lv2: 
        // display menu lv2 content by passing its id to the SubMenu component       
           
        <div className='grid-100 sub-menu-wrapper' >
            <div className='grid-70 sub-menu' >
                <MenuLv2 subMenu={menuCards[menuKey1-1]}/>
            </div>
            <div className='grid-25 side-menu' >
                
                {menuCards.map((menuCard)=> (
                    <SideMenu key={menuCard.id} menuCard={menuCard}/>
                    ))}                
            </div>
        </div>
        
        )}
    </section>
  )
}

export default Dropdown;
