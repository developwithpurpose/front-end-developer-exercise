MYREADME.md authored by Colleen Woolsey

LAYOUT - Nested divs for layout purposes
    Inside the page there is <div> container_with_side_shadows, with three elements in a ROW - left shadow<div>,  main_container<main>,     and right shadow <div>
    Inside the main_container<main> there are 3 elements in a COLUMN - <header>, main_sub_container<div>, and shadow_bottom<div>
    Inside main_sub_container<div> there are 2 elements in a ROW - <nav> (COLUMN) and article_plus_dynamic<div> (COLUMN)
    Nested inside article_plus_dynamic there are 2 elements - <article> containing the detail info and the <section> with dynamic text
    
<body>

    <div classname="page">                                     <!-- Start of page div // add auto margin-->

        <div classname="container_with_side_shadows">          <!-- Start of container_with_side_shadows div - 3 sub divs - ROW layout -->

            <div classname="left_shadow">                           
                <img  shadow_left.jpg  />
            </div>                                              <!-- end of sub div 1 - div left_shadow -->

            <main classname="main_container">                   <!-- Start of sub div 2 main_container - COLUMN layout -->
                <header>                                        
                    <img  header_text.jpg  />                <!-- header.jpg as background image -->
                </header>

                <div classname="main_sub_container">            <!-- 2 parts 1. <nav> 2. <article> + <dynamic-section> ROW layout -->

                    <nav classname="nav_container">             <!-- COLUMN layout for n=7 <li> -->
                        <ul>                        
                            <li classname="bs_n"">
                                <a>
                                    <h3 (18px)></h3> + <img> - toggle between icons_small_bsn.png and icons_small_bsn_blue.png  />
                                </a>
                            </li>
                            |
                            V                                   <!-- NOTE: Find a place for shadow_left_nav.jpg??? -->                          
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

</body>



                                        // $(".item_1").toggleClass("nav_item");
                                        // $(".item_1").toggleClass("nav_item_on");
                                        
                                        // $(".link_1").toggleClass("nav_link");
                                        // $(".link_1").toggleClass("nav_link_on");

                                        // $(".h3_1").toggleClass("bs_n_header");
                                        // $(".h3_1").toggleClass("bs_n_header_on");

                                        // $(".img_1").toggle()
                                        // $("img_blue_ 1").toggle()

                                        // $(".span_1").toggleClass("gradient_edge");
                                        // $(".span_1").toggleClass("gradient_edge_on");
                                                               