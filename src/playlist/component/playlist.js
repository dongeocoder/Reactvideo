import React from 'react'
import Media from './media'
import './playlist.css'


function Playlist(props){
    return(
      <div className='Playlist'>
           
      {
        props.playlist.map((item)=>{
         return <Media handleOpenModal={props.handleOpenModal} {...item} key={item.id}/>
        })
      }
      </div>
    )
  }


export default Playlist