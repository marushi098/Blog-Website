import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from'../../data/blog.json';
import {NavLink} from'react-router-dom';

const Sidebar = (props) =>{

    const[posts,setPosts]= useState([]);

    useEffect(()=>{
     const posts= blogPost.data;
     setPosts(posts);
 },[posts]);

    return(
        <div className="sidebarContainer" style={{width:props.width}} >
        <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
        <div className="cardHeader">
            <span>About Us</span>
            </div>
         <div className="profileimageContainer">
             <img src={"https://ak.picdn.net/shutterstock/videos/20604319/thumb/1.jpg"} alt="" />
             </div>  
         <div className="cardBody">
             <p>My name is emily. I am a blogger by passion.</p>
         </div>
        </Card>

        <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
        <div className="cardHeader">
            <span>Social Network</span>

        </div>
        </Card>
        <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
            <div className="cardHeader">
                <span>Recent posts</span>
            </div>
            <div className="recentPosts">

              {
                  posts.map(post =>{
                      return(
                          <NavLink key={post.id} to={`/post/${post.id}`}>
                           <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                </div>
                          </NavLink>
                       
                      )
                  })
                }
            </div>
        </Card>
        </div>
    )
}

export default Sidebar;