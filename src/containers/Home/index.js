import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';

const Home = props =>{

const galleryHeight= 450;
const galleryStyle = {
    height:galleryHeight+'px',
    overflow:'hidden'
}
const sideImageHeight = galleryHeight/3;
    return (
        <div>
         <Card style={{margin:'20px 0'}} > 
             <div className="galleryPost" style={galleryStyle}>
             <section style={{width:'70%'}}>
              <div>
                  <img src={"https://2.bp.blogspot.com/-PQFXxz6Updc/UrnvvATEaNI/AAAAAAAAJ3k/BI7iKsnMaCE/s1600/Sad-alone-girl-sea-side-on-stones-sunset.jpg"} alt="" />
              </div>
               </section>  
               <section className="sideImageWrapper" style={{width:'30%'}}>
               <div style={{height:`${sideImageHeight}px`}}>
                  <img src={"https://img3.goodfon.com/wallpaper/nbig/8/4e/meditation-contemplation-sunny-summer-seaside-beach-bay-sand.jpg"} alt="" />
              </div>
              <div style={{height:`${sideImageHeight}px`}}>
                  <img src={"https://data.whicdn.com/images/29677761/original.jpg"} alt="" />
              </div>
              <div style={{height:`${sideImageHeight}px`}}>
                  <img src={"https://ae01.alicdn.com/kf/HTB1qKmrLpXXXXajXFXXq6xXFXXXC/Women-sunglasses-fashion-sunglasses-Cool-Female-Brand-designer-sun-glasses-Eyewear-woman-shades.jpg"} alt="" />
              </div>
              

                   </section>  
             </div>
                   
         </Card>
         <section className="HomeContainer">
             <div style={{width:'70%'}}>
         <Card style={{marginBottom:'20px 0'}}>
             <div className="postImageWrapper">
                 <img src={"https://www.incimages.com/uploaded_files/image/1920x1080/getty_510950552_200013332000928085_350842.jpg"} alt="" />

             </div>
             <div style={{textAlign:'center'}}>
                 <span>Featured</span>
                 <h2>fitness-mantra-to-live-fit-life</h2>
                 <span>July 21, 2016</span>
                 <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.</p>

                 <button>Read More</button>
             </div>
         </Card>
         <Card style= {{marginBottom:'20px 0'}}>
             Post 2
         </Card>
         </div>
         <Sidebar />
         </section>
        </div>
    );
}
export default Home;