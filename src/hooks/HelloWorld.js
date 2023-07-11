import { guangliang } from "@/utils";
export default function(mycanvas,){
  let canvas=mycanvas.value
  canvas.width=innerWidth;
  canvas.height=innerHeight;
  let w= canvas.width;
  let h = canvas.height;
  let ctx = canvas.getContext("2d");
  let img = new Image()
  img.src='beijin.jpg'
  img.width=w;
  img.height=h;
  let qishidianw=w+100
  let qishidianh=h/3
  let zongdianw=0
  let zongdianh=h*7
  let g = 50
  let xue = 0.03
  let xszu=[]
  class xs{
    constructor(x,y,zhizheng,r,g,b){
      this.x=x;
      this.y=y;
      this.zhizheng=zhizheng
      this.r=r;
      this.g=g;
      this.b=b;
      this.guang=0
    }
    gai(){
      this.guang= guangliang(this.x,this.y,qishidianw,qishidianh,zongdianw,zongdianh,g,xue)
    }
    gx(data){
      data[this.zhizheng]=this.r+this.guang
      data[this.zhizheng+1]=this.g+this.guang
      data[this.zhizheng+2]=this.b+this.guang
    }
  }
  img.onload=()=>{
  ctx.drawImage(img,0,0,img.width,img.height);
  let imgData=ctx.getImageData(0,0,w,h); 

  let data=imgData.data
  for(let i = 0 ;i<h;i++){
    for(let j=0 ; j<w;j++){
        let zhizheng= (i*w+j)*4
        let guang=guangliang(j,i,w+100,h/3,0,h*7,50,0.03)
        if(guang!=0){
          xszu.push(new xs(j,i,zhizheng,data[zhizheng],data[zhizheng+1],data[zhizheng+2]))
        }
        data[zhizheng]+=guang
        data[zhizheng+1]+=guang
        data[zhizheng+2]+=guang
        data[zhizheng+3]+=255
    }
  }
let a=0
  function gx() {
if(a==2){
    ctx.clearRect(0, 0, w, h);
    for(let a of  xszu){
      a.gai()
      a.gx(data)
    }
    ctx.putImageData(imgData, 0, 0);
    a=0
  }else{
    a++
  }
    requestAnimationFrame(gx);
  }
  requestAnimationFrame(gx);
  


  }
  
  // console.log(imgData,a,data[a],data[a+1],data[a+2],data[a+3])
  // csl(100,20,w,h/2,-1,Math.abs((w*-1))+h/3)
 
}