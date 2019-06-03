MYREADME.md authored by Colleen Woolsey

MISC:   
    Also, in reviewing Mary Hope's email I was reminded of the four hour time limit which I definitely went over. I hope I haven't defeated the purpose of the exercise relative to your assessments, but as a new Junior Dev, it was exciting and engrossing to finally work on a project that was somewhat real-world. I worked on the challenge in fits in starts over the last four days when I could find time and this is how the hours tallyed up:
    Two hours reviewing the instructions, and creating a layout and issue tickets before I even started coding (which usually saves time in the end)
    The HTML and CSS were pretty straight forward - just lots of careful typing and cut and paste - maybe 3-4 hours and then another hour checking each element in dev tools against the model layout for stray margins and whatnot. I hadn't used outside web fonts before, so spent some time exploring the possibilities there.
    I spent over an hour wrestling with how to make the "highlight" on the nav item disappear when another item is clicked before settling for a far from DRY solution. My attempts at toggling classes quickly took on a life of its own until I finally killed all the toggles with a simple hide().
    I hadn't done an AJAX fetch call before so that took me awhile to figure out.
    Currently, the data shows in my localhost and in console.log, but there is still a disconect in accessing it with Javascript.
    The Javascript for the dynamic content seems promising, although obviously not working, and also not in the ballpark of DRY. (Started with Baby Step 5. The HTML starts on line 531 and the script on line 18.   
    
    Next I'm going to spend time checking out how to push a fork to someone else's master.
    I confess to 10 minutes of clicking all the nav tabs over and over again while grinning from ear to ear at the results.
    Overall there was also a fair bit of time spent exploring both possibilities and the unfamiliar ... lots of rabit trails and little ah-ha moments.
    But this was a great learning experience!
    Again, I hope I haven't taken away the exercise's value as an assessment tool for you relative to time spent, but taking the time to almost complete it was helpful to me. It highlighted both gaps in experience/knowledge and also what was comfortable/doable.

    Named the <li> elements and their child elements with a "_n" syntax with an eye to possibly refactoring the <script> code to eliminate redundancy with a "split" function.
    
LAYOUT: Nested divs for layout purposes and semantic markup where appropriate
    Inside the page there is <div> container_with_side_shadows, with three elements in a ROW - left shadow<div>,  main_container<main>,   and right shadow <div>
    Inside the main_container<main> there are 3 elements in a COLUMN - <header>, main_sub_container<div>, and shadow_bottom<div>
    Inside main_sub_container<div> there are 2 elements in a ROW - <nav> (COLUMN) and article_plus_dynamic<div> (COLUMN)
    Nested inside article_plus_dynamic there are 2 elements - <article> containing the detail info and the <section> with dynamic text

    <div classname="page">                                     <!-- Start of page div // add auto margin-->

        <div classname="container_with_side_shadows">          <!-- Start of container_with_side_shadows div - 3 sub divs - ROW layout -->

            <div classname="left_shadow">                           
                <img  shadow_left.jpg  />
            </div>                                              <!-- end of sub div 1 - div left_shadow -->

            <main classname="main_container">                   <!-- Start of sub div 2 main_container - COLUMN layout -->
                <header>                                        
                    <img  header_text.jpg  />                   <!-- header.jpg as background image -->
                </header>

                <div classname="main_sub_container">            <!-- 2 parts 1. <nav> 2. <article> + <dynamic-section> ROW layout -->

                    <nav classname="nav_container">             <!-- COLUMN layout for n=7 <li> -->
                        <ul>                        
                            <li classname="bs_n"">
                                <a><h3 (18px)></h3> + <img> -  icons_small_bsn.png  + edge</a>
                                <a><h3 (18px)></h3> + <img> -  icons_small_bsn_blue.png + edge </a>
                            </li>
                            |                       
                            |                                   <!-- hide and show <a> depending on active -->
                            V

                        </ul>
                    </nav>

                    <div classname="article_plus_dynamic">       <!-- COLUMN - Article with logo and paragraphs + <p> for dynamic friends on APP>

                        <article> class = detail_container - column layout
                            <header> classname = headings_bs
                                <img  selected heading_bs_n.png  />
                            </header>
                            <p> paragraph1 </p>
                            <p> paragraph2 </p>
                        </article>

                        <section> classname = friends_on_app - row layout
                            <p> friendsOnApp concat </p>
                        </section>

                    </div>                                      <!-- end of div article_plus_dynamic -->

                <div> classname = shadow_bottom
                    <img  shadow_bottom.jpg  />
                </div>                                          <!-- end of div shadow_bottom -->

            </main>                                             <!-- end of sub 2 - Main -->

            <div> classname = right_shadow
                    <img  shadow_right.jpg  />
            </div>                                              <!-- end of sub div 3 - div right_shadow -->            

        </div>                                                  <!-- end of div container_with_side_shadows -->

    </div>                                                      <!-- End of div page -->
                                                              