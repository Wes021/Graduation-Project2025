<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strike a Pose</title>
    <link rel="stylesheet" href="{{asset('frontend/styles/navbar-footer.css') }}">
    <link rel="stylesheet" href="{{asset('frontend/styles/index.css')}}">
    

</head>
<body>
<!------------------- navigation bar start ------------>
<div class="nav">
    <div class="part1">
             <img width="100%" src="https://i.postimg.cc/KvWzQQz2/Whats-App-Image-2023-03-28-at-2-23-14-PM.jpg" alt="logo">
        <img width="100%" src="https://i.postimg.cc/cHrqvmyc/Stike.png" alt="">
        <div>
             <a id="nbtn" href="./index.html">Home</a>
          
        </div>
       
    </div>
    
   <div class="part2">
        <a id="nbtn" href="{{ route('usersignin') }}">Login</a>
        <a id="nbtn" href="{{ route('usersignup') }}">Signup</a>
        <a id="nbtn" href="{{ route('UserProfile') }}">Profile</a>
    </div>
</div></header>

     <!------------------- page contain  ------------>

        <div class="top">
            <div>
              <p id="mtext">Strike a Pose</p> 
            <span id="btext">Book </span><span> a Photoshoot Today</span>
            <br>
            <button onclick="window.location='{{ route('appointmentpage') }}'" class="top-button">Book A Session</button>  
            </div>
            
        </div>

        <div class="main">
            <div class="HowItWorks">
                <p id="htext">How It Works</p>
    
                <div>
                    <div>
                        <img width="15%" src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/245532/14-512.png" alt="">
                        <h3>Search</h3>
                        <p >Search for your perfect 
                            Photographer based on your location, 
                            category and price range.</p>
                    </div>
    
                    <div>
                        <img width="15%"  src="https://mixpanel.com/wp-content/uploads/2020/07/icon-09.svg" alt="">
                        <h3>Shortlist</h3>
                        <p>Shortlist Photographers you like based on their albums, packages and reviews to keep track.</p>
                    </div>
    
                    <div>
                        <img width="15%"  src="https://d1hcxvwj40zhpj.cloudfront.net/images/icons/blue-circle-creditcard.png" alt="">
                        <h3>Book</h3>
                        <p>Book your finalized Photographer by selecting a package or directly contacting them on Whatsapp.</p>
                    </div>
      
                </div>
                
                <p>We have listings of Phone Number, Albums, Packages and Reviews of Best Photographers from all over India for Wedding, Babies, Kids, Pre Wedding, Maternity, Anniversary, Commercial, Food, Restaurant, Corporate Events, Fashion, Portfolio, Nature and Travel Photography.</p>
            
            </div>

        </div> 
   

    <div class="container">  
       
        
        <p id="htext">Photography for Every moment of your life </p>
        <p id="stext">Get inspired to create your own beautiful moments!</p>


        <div onclick="openGalleryPage()" class="cate">
            <div>
                <div>
                <p id="btext">Holiday</p>
                <p id="stext">Capture precious moments at your favourite destinations</p>
               
                </div>
                <div>
               <img src="https://media.istockphoto.com/id/527664616/photo/eurotrip-memories-shown-on-polaroid-photos-summer-vacations.jpg?s=612x612&w=0&k=20&c=XKb22tEr_1qKI3CaFYQSBkOqTCB_qXjIcHqEVeje-6A=" alt="">
                </div>
              
            </div>
            
            <div>
                <div>
                    <p id="btext">Family</p>
                <p id="stext">From intimate family shoots to special gatherings
            </p>
               
                </div>
                <div>
               <img src="https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg" alt="">
                </div>
              
            </div>

            <div>
                <div>
                    <p id="btext">Marriage</p>
                <p id="stext">Proposal</p>
                <p id="stext">Pre-wedding</p>
               
                </div>
               
               <img  src="https://t4.ftcdn.net/jpg/05/75/09/11/360_F_575091137_eZdRXtOcONA2eKP242DxoqTi2DGqAysv.jpg" alt="wed">
                
              
            </div>

            <div>
                <div>
                    <p id="btext">Birthday</p>
                <p id="stext">
                    Every birthday is worthy to be celebrated</p>
                </div>
                <div>
               <img  src="https://img.freepik.com/premium-vector/cartoon-happy-family-friends-greeting-cheerful-characters-giving-gift-present-celebrate-anniversary-day-with-cake-flags-balloon-background-birthday-party-celebration_212168-1306.jpg?w=2000" alt="">
                </div>
              
            </div>
           
            

            <div>
                <div>
                <p id="btext"> Graduation</p>
                <p id="stext">Celebrate your achievements</p>
               
                </div>
                <div>
               <img  src="https://i1.wp.com/www.learnesl.net/wp-content/uploads/2020/09/Graduation.jpg?fit=1200%2C800&ssl=1" alt="">
                </div>
              
            </div>

            <div>
                <div>
                    <p id="btext">Baby</p>
                <p id="stext">Maternity</p>
               
                <p id="stext">Newborn</p>
               
                </div>
                <div>
               <img  src="https://wallpaperaccess.com/full/806131.jpg"alt="">
                </div>
              
            </div>
            

            <div>
                <div>
                    <p id="btext">Others</p>
                <p id="stext">For every moment, anywhere, any time</p>
               
                </div>
               
               <img  src="https://cdn.britannica.com/37/91837-050-2CC301F9/Children-pet-dog.jpg" alt="">
                
              
            </div>

            <div>
                <div>
                    <p id="btext">

                        Browse  All Categories
                       </p>
                
               
                </div>
                <div>
               <img  src="https://www.mbot.com/wp-content/uploads/2022/03/66-663418_right-clipart-black-arrow-right-arrow-png-download.png" alt="">
                </div>
              
            </div>


        </div>

       

    </div> 

    <div class="main">
        <div class="why">
            <p>Why book a photo shoot with us</p>
            <div>


                <div>
                    <div>
                        <img src="https://cdn.sweetescape.com/images/section_assets/11/icon/big_4acaeac6-d909-423a-bf1e-85fdaed40f95.png" alt="">
                    </div>

                    <div>
                        <h3>Hassle-Free Booking</h3>
                        <p>Simply select your photo shoot package in almost any city and a photographer will be assigned to you shortly.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="https://cdn.sweetescape.com/images/section_assets/12/icon/big_e92162bd-8ced-48c8-9f8f-a30ec7da133c.png" alt="">
                    </div>
                    <div>
                        <h3>The Best Photographers</h3>
                        <p>Our photographers are professionally selected to provide the best photo experience and results.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="https://cdn.sweetescape.com/images/section_assets/13/icon/big_4e69a3e2-7b88-4a50-b371-384ea41e405c.png" alt="">
                    </div>
                    <div>
                        <h3>Great Photos</h3>
                        <p>Our experienced editor team ensures that your photos are edited to the highest quality.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="https://cdn.sweetescape.com/images/section_assets/14/icon/big_4edb2d57-e0e4-4f6a-bc3d-bbc201e4196a.png" alt="">
                    </div>
                    <div>
                        <h3>Fast Delivery</h3>
                        <p>Delivering top quality photos in just 48 hours after your session.</p>
                    </div>
                </div>

                
                <div>
                    <div>
                        <img src="https://cdn.sweetescape.com/images/section_assets/29/icon/big_60a8127e-8efb-475e-ade4-f7f84c5d5543.png" alt="">
                    </div>
                    <div>
                        <h3>Peace-of-mind</h3>
                        <p>We understand that plans can change due to unforseen circumstances especially during this pandemic, we provide easy reschedule up-to 48 hours before your photoshoot</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <p  id="htext">What people are saying…</p>
  <div class="reviews">
        <div>
            <div>
                <img src="https://michaelwillphotography.com/wp-content/uploads/2016/01/best-wedding-photos-pittsburgh-172-1.jpg" alt="">
                <h3>Ramez</h3>
                <p>WEDDING</p>
                <h3>⭐5</h3>
            </div>
            <p>Very professional team of photographers. Passionate about their work and very accommodating. Made our wedding memorable. Good with the parents and relatives as well.

            </p>
        </div>
        <div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.LExQmguQL3E4_bLvzyWGpgHaHa?rs=1&pid=ImgDetMain" alt="">
                
                <h3>Samer</h3>
                <p>WEDDING</p>
                <h3>⭐4.6</h3>
            </div>
            <p>Photomatic is a complete solution for wedding photography. This team has got excellent members with huge knowledge. The best part is all the members are calm,decent and very friendly and highly professional too. All the very best to this lovely team.
            </p>
        </div>
        <div>
            <div>
                <img src="https://th.bing.com/th/id/R.32eba2621a8450ef9bc716aa1eeb2b08?rik=tU4Jg1wfM%2bbchA&riu=http%3a%2f%2fwww.pastor-dave.com%2fwp-content%2fuploads%2f2014%2f08%2fWedding.jpg&ehk=2FOW1VOWcD9aTa2WMxB%2bI812SrfOZmZJi%2bb82KnPU5g%3d&risl=&pid=ImgRaw&r=0" alt="profile picture">
                
                <h3>mohammad</h3>
                <p>SPECIAL OCCASION</p>
                <h3>⭐4.5</h3>
            </div>
            <p>Best photography best service with lots of creativity made my wedding memorable . These guys did a great job thanku vijay studio you guys are really awesome
            </p>
        </div>


    </div>

    </div>
  

   

    <!------------------- footer part  ------------>
    <div class="footer">
        <p id="ftext">Strike a Pose </p>
        <div>
            <div>
                <p>Company</p>
                <li>Blog
                </li>
                <li>About Us
                </li>
                <li>Contact Us</li>
                <li>Cities</li>
                
            </div>
            
        </div>
        <hr>
            
    </div>


</body>
</html>



