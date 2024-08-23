import './polyfills.server.mjs';
import{A as P,D as T,J as M,a as c,b,c as f,d as s,e as g,f as l,g as r,h as n,i as a,j as p,k as w,l as m,q as x,t as v,v as S,w as C,x as _,y as d,z as k}from"./chunk-G3PFTMHY.mjs";var i=[{id:1,name:"Understanding Binary: Why It Matters",description:`
        <h2>What is Binary?</h2>
        <p>Binary is a number system that uses only two digits: 0 and 1. Unlike the decimal system, which uses digits from 0 to 9, binary is simpler and better suited for computers.</p>
  
        <h2>Why Binary for Computers?</h2>
        <p>Computers work with electrical signals that are either on or off. In binary, "on" is represented by 1 and "off" by 0. This on-off pattern makes it easy for computers to process and store information using binary code.</p>
  
        <h2>Decimal vs. Binary</h2>
        <p>In the decimal system, each digit's position represents a power of 10. For example, in the number 345:</p>
        <ul>
          <li>5 is in the 10<sup>0</sup> (units) place,</li>
          <li>4 is in the 10<sup>1</sup> (tens) place,</li>
          <li>3 is in the 10<sup>2</sup> (hundreds) place.</li>
        </ul>
        <p>In binary, each digit's position represents a power of 2. For example, in the binary number 1011:</p>
        <ul>
          <li>The rightmost digit (1) is in the 2<sup>0</sup> place,</li>
          <li>The next digit (1) is in the 2<sup>1</sup> place,</li>
          <li>The next digit (0) is in the 2<sup>2</sup> place,</li>
          <li>The leftmost digit (1) is in the 2<sup>3</sup> place.</li>
        </ul>
  
        <h2>How to Read Binary</h2>
        <p>To convert binary numbers to decimal, you add up the values of the positions where there's a 1. Using the binary number 1011:</p>
        <ul>
          <li>1 x 2<sup>3</sup> = 8,</li>
          <li>0 x 2<sup>2</sup> = 0,</li>
          <li>1 x 2<sup>1</sup> = 2,</li>
          <li>1 x 2<sup>0</sup> = 1.</li>
        </ul>
        <p>So, 1011 in binary is equal to 8 + 0 + 2 + 1 = 11 in decimal.</p>
  
        <h2>Why We Don't Program in Binary</h2>
        <p>Programming directly in binary (called machine code) would be very complex and error-prone. Instead, we use higher-level programming languages like Python or Java. These languages are easier to use and are converted into binary by compilers or interpreters, allowing us to write code in a more understandable way.</p>
      `},{id:2,name:"Introduction to Logic Gates",description:`
          <h2>What are Logic Gates?</h2>
          <p>Logic gates are the fundamental building blocks of computers and electronic components. They are the switches that control how information flows in a circuit. There are three main types of logic gates:</p>
          <ul>
            <li>AND gate: Outputs 1 only if both inputs are 1,</li>
            <li>OR gate: Outputs 1 if any input is 1,</li>
            <li>NOT gate: Inverts the input signal.</li>
          </ul>
          <p>Every other gate and device in a computer can be made from these three basic gates.</p>
        `},{id:3,name:"Logic Gates Demo",description:`
          <h2>Explore the Interactive Demo</h2>
          <p>Use the interactive demo below to learn how AND, OR, and NOT gates work. Click on the inputs to see how the gates respond and produce the output.</p>
        `},{id:4,name:"SR Latches and Memory",description:`
          <h2>What are SR Latches?</h2>
          <p>SR latches, or Set-Reset latches, are simple memory units used to store values in circuits. They have two inputs:</p>
          <ul>
            <li>Set (S): Sets the output to 1,</li>
            <li>Reset (R): Resets the output to 0.</li>
          </ul>
          <p>SR latches are the building blocks of more complex memory units like flip-flops and registers.</p>
        `},{id:5,name:"SR Latch Demo",description:`
          <h2>Explore the Interactive Demo</h2>
          <p>Use the interactive demo below to learn how SR latches work. Set and reset the inputs to see how the latch stores values in memory.</p>
        `},{id:6,name:"Importance of Components in Machine Learning",description:`
          <h2>Key Components for Machine Learning</h2>
          <p>Machine learning models require powerful hardware components to run efficiently. Here are some key components:</p>
          <ul>
            <li>CPU (Central Processing Unit): The brain of the computer, responsible for general computing tasks.</li>
            <li>GPU (Graphics Processing Unit): Specialized for rendering graphics and performing complex mathematical computations.</li>
            <li>Memory (RAM): Stores data and instructions for the CPU and GPU to access quickly.</li>
          </ul>
          <h2>Why Components Matter</h2>
          <p>The CPU can run small-scale machine learning models, but GPUs are essential for training large models like neural networks. GPUs can perform parallel computations faster than CPUs, making them ideal for machine learning tasks.</p>
          <p>Memory is crucial for storing and accessing data during model training. More memory allows for faster processing and larger model sizes, leading to better performance.</p>
        `}];function E(t,e){t&1&&a(0,"iframe",10)}function G(t,e){t&1&&a(0,"iframe",11)}function I(t,e){if(t&1&&(r(0,"div",1)(1,"div",2)(2,"h2",3)(3,"button",4),p(4),n()(),r(5,"div",5),a(6,"div",6),r(7,"div",7),g(8,E,1,0,"iframe",8)(9,G,1,0,"iframe",9),n()()()()),t&2){let h=e.$implicit;s(4),w(" ",h.name," "),s(2),l("innerHTML",h.description,b),s(),l("ngSwitch",h.name),s(),l("ngSwitchCase","SR Latch Demo"),s(),l("ngSwitchCase","Logic Gates Demo")}}var R=(()=>{let e=class e{constructor(){this.processes=i}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["app-process-card"]],standalone:!0,features:[m],decls:1,vars:1,consts:[["class","accordion process-card accordion-flush container-xxl",4,"ngFor","ngForOf"],[1,"accordion","process-card","accordion-flush","container-xxl"],[1,"accordion-item"],[1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseThree","aria-expanded","false","aria-controls","collapseThree","id","name",1,"accordion-button","collapsed"],["id","collapseThree",1,"accordion-collapse","collapse"],[1,"accordion-body",3,"innerHTML"],[3,"ngSwitch"],["src","https://circuitverse.org/simulator/embed/sr-latch-demo?theme=night-sky&display_title=true&clock_time=false&fullscreen=false&zoom_in_out=false","style","border-width: 2px; border-style: solid; border-color: 0000","name","myiframe","id","sr-latch-demo","scrolling","no","frameborder","1","marginheight","0px","marginwidth","0px","height","500","width","500","allowFullScreen","",4,"ngSwitchCase"],["src","https://circuitverse.org/simulator/embed/logic-gates-demo-c8ea593c-7a74-4730-a932-e02e544ef58e?theme=night-sky&display_title=true&clock_time=false&fullscreen=false&zoom_in_out=false","style","border-width: 2px; border-style: solid; border-color: 0000","name","myiframe","id","projectPreview","scrolling","no","frameborder","1","marginheight","0px","marginwidth","0px","height","500","width","500","allowFullScreen","",4,"ngSwitchCase"],["src",f`https://circuitverse.org/simulator/embed/sr-latch-demo?theme=night-sky&display_title=true&clock_time=false&fullscreen=false&zoom_in_out=false`,"name","myiframe","id","sr-latch-demo","scrolling","no","frameborder","1","marginheight","0px","marginwidth","0px","height","500","width","500","allowFullScreen","",2,"border-width","2px","border-style","solid","border-color","0000"],["src",f`https://circuitverse.org/simulator/embed/logic-gates-demo-c8ea593c-7a74-4730-a932-e02e544ef58e?theme=night-sky&display_title=true&clock_time=false&fullscreen=false&zoom_in_out=false`,"name","myiframe","id","projectPreview","scrolling","no","frameborder","1","marginheight","0px","marginwidth","0px","height","500","width","500","allowFullScreen","",2,"border-width","2px","border-style","solid","border-color","0000"]],template:function(o,y){o&1&&g(0,I,10,5,"div",0),o&2&&l("ngForOf",y.processes)},dependencies:[d,S,C,_],styles:[".process-card[_ngcontent-%COMP%]{margin-bottom:40px;border-radius:10px;padding:20px 0;box-shadow:5px 5px 10px #ffc82e;max-width:750px;background-color:#005643;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif}.container-xxl[_ngcontent-%COMP%]{display:flex}#name[_ngcontent-%COMP%]{font-size:20px;font-weight:700;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif;color:#fff;text-align:center;background-color:#005643}.process-card[_ngcontent-%COMP%]:hover{transform:translate(-5px)}.accordion-item[_ngcontent-%COMP%]{border:0;width:100%}"]});let t=e;return t})();var U=(()=>{let e=class e{constructor(){this.title="ml-demo",this.process1=i[0],this.process2=i[1],this.process3=i[2],this.process4=i[3],this.process5=i[4],this.process6=i[5]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:9,vars:0,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"]],template:function(o,y){o&1&&(r(0,"html",0)(1,"head"),a(2,"meta",1)(3,"meta",2),n(),r(4,"body")(5,"p"),p(6," Click on any of the topics below to expand the accordion and learn more "),n(),r(7,"div"),a(8,"app-process-card"),n()()())},dependencies:[R,d]});let t=e;return t})();var L=[];var O={providers:[x({eventCoalescing:!0}),M(L),P()]};var z={providers:[T()]},D=v(O,z);var A=()=>k(U,D),le=A;export{le as a};
