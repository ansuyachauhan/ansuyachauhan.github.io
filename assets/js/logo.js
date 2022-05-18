body{
    display:flex;
    align-items:center;
    justify-content:center;
    height: 100vh;
    width: 100vw;
    margin:0;
    background:#181D26;
  }
  
  .brand {
    
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 auto;
    
  }
  .brand:before {
    
    background-size: 100% 100%;
    content: "FZ";
    line-height: 205px;
    color: #ff004e;
    font-size: 20px;
    font-family: "HEAVITAS", "Helvetica Rounded", Arial, sans-serif;
    font-weight: bold;
    text-align: center;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: absolute;
    
    z-index: 99999 !important;
  }
  
  .logo{
    animation: 5s linear infinite;
    animation-name: rotate-0;
    animation-delay: 0s;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    
  }
  
  
  svg path{
    positon:absolute;
    fill:none;
    stroke-width:2;
    top:0;
    left:0;
    /*mix-blend-mode: multiply;*/
    transform-origin: 50% 50%;
    transform: rotate(0deg) ;
    animation: 4s linear infinite;
  }
  
  .logo svg path:nth-child(1) {
    opacity: 1;
    animation-name: rotate-1;
    animation-delay: .5s;
  }
  .logo svg path:nth-child(2) {
    opacity: .5;
    animation-name: rotate-2;
    animation-delay: .6s;
  }
  .logo svg path:nth-child(3) {
    opacity: .8;
    animation-name: rotate-3;
    animation-delay: .7s;
  }
  
  
  @keyframes scale-1 {
    0%{
      transform: scale(1);
    }50% {
      transform: scale(.9);
    }100% {
      transform: scale(1);
    } 
  }
  
  @keyframes rotate-0 {
    from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
  } 
  
  @keyframes rotate-1 {
    from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
  }
  
  @keyframes rotate-2 {
    from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
  }
  
  @keyframes rotate-3 {
    from { transform: rotate(0deg); }
      to { transform: rotate(0deg); }
  }