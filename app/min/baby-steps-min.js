function Person(e,s,a){this.firstName=e,this.lastName=s,this.babyStep=a}function getNames(){for(var e=[],s=0,a=0;arrayLength>a;a++)personArray[a].babyStep===myStep&&(e[s]=personArray[a],s+=1);var o="",t="",_=0;_=e.length-2,1===_?(o=o.concat(e[0].firstName+" "+e[0].lastName+", "+e[1].firstName+" "+e[1].lastName),t=t.concat(", and "+_+" other friend are also in Baby Step "+myStep)):0===_?(o=o.concat(e[0].firstName+" "+e[0].lastName+" and "+e[1].firstName+" "+e[1].lastName),t=t.concat(" are also in Baby Step "+myStep)):-1===_?(o=o.concat(e[0].firstName+" "+e[0].lastName),t=t.concat(" is also in Baby Step "+myStep)):-2===_?o="":_>1&&(o=o.concat(e[0].firstName+" "+e[0].lastName+", "+e[1].firstName+" "+e[1].lastName),t=t.concat(", and "+_+" other friends are also in Baby Step "+myStep)),document.getElementById(myDemoA).innerHTML=o,document.getElementById(myDemoB).innerHTML=t}var myStep=0,myDemoA="",myDemoB="",personArray=[],paul=new Person("Paul","Taylor",2),sharon=new Person("Sharon","Thomas",3),thomas=new Person("Thomas","Harris",3),deborah=new Person("Deborah","Lee",4),mark=new Person("Mark","Young",4),shirley=new Person("Shirley","Perez",4),joseph=new Person("Joseph","Lee",5),mary=new Person("Mary","White",5),matthew=new Person("Matthew","Garcia",5),patricia=new Person("Patricia","Allen",5),larry=new Person("Larry","Robinson",6),kimberly=new Person("Kimberly","Lopez",6),jose=new Person("Jose","Martinez",6),deborahLee=new Person("Deborah","Walker",6),josephLopez=new Person("Joseph","Lopez",6),dorothy=new Person("Dorothy","Moore",7),joseJackson=new Person("Jose","Jackson",7),karen=new Person("Karen","Lee",7),paulTaylor=new Person("Paul","Taylor",7),amy=new Person("Amy","Gonzalez",7),richard=new Person("Richard","Martinez",7),personArray=[paul,sharon,thomas,deborah,mark,shirley,joseph,mary,matthew,patricia,larry,kimberly,jose,deborahLee,josephLopez,dorothy,joseJackson,karen,paulTaylor,amy,richard],arrayLength=personArray.length;$(document).ready(function(){$(this).addClass("active-1"),$(".step_2").removeClass("active-2"),$(".step_3").removeClass("active-3"),$(".step_4").removeClass("active-4"),$(".step_5").removeClass("active-5"),$(".step_6").removeClass("active-6"),$(".step_7").removeClass("active-7"),$(".baby_step_1").addClass("open_box"),$(".baby_step_2").removeClass("open_box"),$(".baby_step_3").removeClass("open_box"),$(".baby_step_4").removeClass("open_box"),$(".baby_step_5").removeClass("open_box"),$(".baby_step_6").removeClass("open_box"),$(".baby_step_7").removeClass("open_box"),myStep=1,myDemoA="demo_1a",myDemoB="demo_1b",getNames()}),$(".step_1").click(function(){$(this).addClass("active-1"),$(".step_2").removeClass("active-2"),$(".step_3").removeClass("active-3"),$(".step_4").removeClass("active-4"),$(".step_5").removeClass("active-5"),$(".step_6").removeClass("active-6"),$(".step_7").removeClass("active-7"),$(".baby_step_1").addClass("open_box"),$(".baby_step_2").removeClass("open_box"),$(".baby_step_3").removeClass("open_box"),$(".baby_step_4").removeClass("open_box"),$(".baby_step_5").removeClass("open_box"),$(".baby_step_6").removeClass("open_box"),$(".baby_step_7").removeClass("open_box"),myStep=1,myDemoA="demo_1a",myDemoB="demo_1b",getNames()}),$(".step_2").click(function(){$(this).toggleClass("active-2"),$(".step_1").removeClass("active-1"),$(".step_3").removeClass("active-3"),$(".step_4").removeClass("active-4"),$(".step_5").removeClass("active-5"),$(".step_6").removeClass("active-6"),$(".step_7").removeClass("active-7"),$(".baby_step_2").addClass("open_box"),$(".baby_step_1").removeClass("open_box"),$(".baby_step_3").removeClass("open_box"),$(".baby_step_4").removeClass("open_box"),$(".baby_step_5").removeClass("open_box"),$(".baby_step_6").removeClass("open_box"),$(".baby_step_7").removeClass("open_box"),myStep=2,myDemoA="demo_2a",myDemoB="demo_2b",getNames()}),$(".step_3").click(function(){$(this).toggleClass("active-3"),$(".step_1").removeClass("active-1"),$(".step_2").removeClass("active-2"),$(".step_4").removeClass("active-4"),$(".step_5").removeClass("active-5"),$(".step_6").removeClass("active-6"),$(".step_7").removeClass("active-7"),$(".baby_step_3").addClass("open_box"),$(".baby_step_1").removeClass("open_box"),$(".baby_step_2").removeClass("open_box"),$(".baby_step_4").removeClass("open_box"),$(".baby_step_5").removeClass("open_box"),$(".baby_step_6").removeClass("open_box"),$(".baby_step_7").removeClass("open_box"),myStep=3,myDemoA="demo_3a",myDemoB="demo_3b",getNames()}),$(".step_4").click(function(){$(this).toggleClass("active-4"),$(".step_1").removeClass("active-1"),$(".step_2").removeClass("active-2"),$(".step_3").removeClass("active-3"),$(".step_5").removeClass("active-5"),$(".step_6").removeClass("active-6"),$(".step_7").removeClass("active-7"),$(".baby_step_4").addClass("open_box"),$(".baby_step_1").removeClass("open_box"),$(".baby_step_2").removeClass("open_box"),$(".baby_step_3").removeClass("open_box"),$(".baby_step_5").removeClass("open_box"),$(".baby_step_6").removeClass("open_box"),$(".baby_step_7").removeClass("open_box"),myStep=4,myDemoA="demo_4a",myDemoB="demo_4b",getNames()}),$(".step_5").click(function(){$(this).toggleClass("active-5"),$(".step_1").removeClass("active-1"),$(".step_2").removeClass("active-2"),$(".step_3").removeClass("active-3"),$(".step_4").removeClass("active-4"),$(".step_6").removeClass("active-6"),$(".step_7").removeClass("active-7"),$(".baby_step_5").addClass("open_box"),$(".baby_step_1").removeClass("open_box"),$(".baby_step_2").removeClass("open_box"),$(".baby_step_3").removeClass("open_box"),$(".baby_step_4").removeClass("open_box"),$(".baby_step_6").removeClass("open_box"),$(".baby_step_7").removeClass("open_box"),myStep=5,myDemoA="demo_5a",myDemoB="demo_5b",getNames()}),$(".step_6").click(function(){$(this).toggleClass("active-6"),$(".step_1").removeClass("active-1"),$(".step_2").removeClass("active-2"),$(".step_3").removeClass("active-3"),$(".step_4").removeClass("active-4"),$(".step_5").removeClass("active-5"),$(".step_7").removeClass("active-7"),$(".baby_step_6").addClass("open_box"),$(".baby_step_1").removeClass("open_box"),$(".baby_step_2").removeClass("open_box"),$(".baby_step_3").removeClass("open_box"),$(".baby_step_4").removeClass("open_box"),$(".baby_step_5").removeClass("open_box"),$(".baby_step_7").removeClass("open_box"),myStep=6,myDemoA="demo_6a",myDemoB="demo_6b",getNames()}),$(".step_7").click(function(){$(this).toggleClass("active-7"),$(".step_1").removeClass("active-1"),$(".step_2").removeClass("active-2"),$(".step_3").removeClass("active-3"),$(".step_4").removeClass("active-4"),$(".step_5").removeClass("active-5"),$(".step_6").removeClass("active-6"),$(".baby_step_7").addClass("open_box"),$(".baby_step_1").removeClass("open_box"),$(".baby_step_2").removeClass("open_box"),$(".baby_step_3").removeClass("open_box"),$(".baby_step_4").removeClass("open_box"),$(".baby_step_5").removeClass("open_box"),$(".baby_step_6").removeClass("open_box"),myStep=7,myDemoA="demo_7a",myDemoB="demo_7b",getNames()});